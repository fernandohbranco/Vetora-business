#!/usr/bin/env python3
"""
sync-skills — Propaga a biblioteca canônica de skills do container VETORA
para os repos de cliente em clientes/<Nome>/<slug>/.

Fonte da verdade:  templates/skills-cliente/
Alvo:              clientes/*/*/.claude/skills/
Lock por cliente:  clientes/*/*/skills-lock.json  (hash sha256 de cada skill)

Uso:
  python3 scripts/sync-skills.py --dry-run --all     # mostra diff de todos, não escreve
  python3 scripts/sync-skills.py --all               # aplica em todos
  python3 scripts/sync-skills.py rancho517           # aplica só no repo cujo slug bate
  python3 scripts/sync-skills.py --dry-run rancho517 # diff de um só

Convenções:
- "skill" = uma subpasta de templates/skills-cliente/ contendo SKILL.md (+ arquivos de apoio).
- AGENTS.md (arquivo solto na raiz da biblioteca) também é sincronizado.
- O hash de uma skill cobre TODOS os arquivos dela (sorteados), não só o SKILL.md.
- Skills presentes no cliente mas ausentes na biblioteca são reportadas como "extra"
  e NÃO são apagadas (sync é aditivo/atualizador, nunca destrutivo).
"""

import argparse
import hashlib
import json
import os
import re
import shutil
import sys
from datetime import datetime, timezone

# Cópias-conflito do iCloud/Finder ("SKILL 2.md", "outputs 3.md") e ruído do macOS.
# Ignoradas no hash e não copiadas — senão poluem o diff e quebram a comparação.
_CONFLICT_RE = re.compile(r" \d+\.[^.]+$")


def is_noise(rel):
    base = os.path.basename(rel)
    return base == ".DS_Store" or bool(_CONFLICT_RE.search(base))

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LIB = os.path.join(ROOT, "templates", "skills-cliente")
CLIENTS_DIR = os.path.join(ROOT, "clientes")
LOOSE_FILES = ["AGENTS.md"]  # arquivos soltos na raiz da biblioteca que vão junto


# ---------- helpers ----------

def file_sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def list_files(folder):
    """Caminhos relativos de todos os arquivos sob folder, ordenados."""
    out = []
    for root, _, files in os.walk(folder):
        for f in files:
            rel = os.path.relpath(os.path.join(root, f), folder)
            if is_noise(rel):
                continue
            out.append(rel)
    return sorted(out)


def skill_hash(folder):
    """Hash combinado de todos os arquivos de uma skill (path + conteúdo)."""
    h = hashlib.sha256()
    for rel in list_files(folder):
        h.update(rel.encode("utf-8"))
        h.update(file_sha256(os.path.join(folder, rel)).encode("utf-8"))
    return h.hexdigest()


def canonical_skills():
    """{nome: caminho_da_pasta} das skills canônicas."""
    skills = {}
    for name in sorted(os.listdir(LIB)):
        p = os.path.join(LIB, name)
        if os.path.isdir(p) and os.path.isfile(os.path.join(p, "SKILL.md")):
            skills[name] = p
    return skills


def is_client_repo(path):
    """Um repo de cliente válido tem .claude/ ou CLAUDE.md na raiz."""
    return os.path.isdir(os.path.join(path, ".claude")) or \
        os.path.isfile(os.path.join(path, "CLAUDE.md"))


def discover_clients():
    """Lista (slug, caminho_do_repo) de cada repo de cliente clientes/<Nome>/<slug>/."""
    clients = []
    if not os.path.isdir(CLIENTS_DIR):
        return clients
    for nome in sorted(os.listdir(CLIENTS_DIR)):
        if nome.startswith("."):
            continue
        nome_path = os.path.join(CLIENTS_DIR, nome)
        if not os.path.isdir(nome_path):
            continue
        for slug in sorted(os.listdir(nome_path)):
            if slug.startswith("."):  # ignora .claude/.DS_Store soltos no nível <Nome>
                continue
            repo = os.path.join(nome_path, slug)
            if os.path.isdir(repo) and is_client_repo(repo):
                clients.append((slug, repo))
    return clients


# ---------- diff por cliente ----------

def diff_client(repo, canon):
    """
    Compara biblioteca canônica com o estado atual do cliente.
    Retorna dict: name -> status ('new' | 'changed' | 'unchanged'), além de 'extra'.
    """
    skills_dir = os.path.join(repo, ".claude", "skills")
    result = {"new": [], "changed": [], "unchanged": [], "extra": []}
    for name, src in canon.items():
        dst = os.path.join(skills_dir, name)
        if not os.path.isdir(dst):
            result["new"].append(name)
        elif skill_hash(src) != skill_hash(dst):
            result["changed"].append(name)
        else:
            result["unchanged"].append(name)
    # skills que o cliente tem e a biblioteca não
    if os.path.isdir(skills_dir):
        for name in sorted(os.listdir(skills_dir)):
            p = os.path.join(skills_dir, name)
            if os.path.isdir(p) and name not in canon:
                result["extra"].append(name)
    return result


def apply_client(repo, canon):
    """Copia cada skill canônica para o cliente. Retorna lock dict."""
    skills_dir = os.path.join(repo, ".claude", "skills")
    os.makedirs(skills_dir, exist_ok=True)
    lock_skills = {}
    for name, src in canon.items():
        dst = os.path.join(skills_dir, name)
        if os.path.islink(dst):
            os.unlink(dst)
        elif os.path.isdir(dst):
            shutil.rmtree(dst)
        elif os.path.exists(dst):
            os.remove(dst)
        shutil.copytree(src, dst)
        lock_skills[name] = {
            "source": "templates/skills-cliente",
            "sourceType": "container",
            "files": list_files(src),
            "computedHash": skill_hash(src),
        }
    # arquivos soltos (AGENTS.md)
    for fn in LOOSE_FILES:
        s = os.path.join(LIB, fn)
        if os.path.isfile(s):
            shutil.copy2(s, os.path.join(skills_dir, fn))
    lock = {
        "version": 1,
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "source": "templates/skills-cliente",
        "skills": dict(sorted(lock_skills.items())),
    }
    with open(os.path.join(repo, "skills-lock.json"), "w", encoding="utf-8") as f:
        json.dump(lock, f, ensure_ascii=False, indent=2)
        f.write("\n")
    return lock


# ---------- relatório ----------

def print_report(slug, d, dry):
    total = len(d["new"]) + len(d["changed"])
    head = f"  {slug}"
    if total == 0 and not d["extra"]:
        print(f"{head}: em dia (0 diffs)")
        return total
    print(head + ":")
    if d["new"]:
        print(f"    + novas     ({len(d['new'])}): {', '.join(d['new'])}")
    if d["changed"]:
        print(f"    ~ alteradas ({len(d['changed'])}): {', '.join(d['changed'])}")
    if d["unchanged"]:
        print(f"    = em dia    ({len(d['unchanged'])})")
    if d["extra"]:
        print(f"    ! extra no cliente, não na biblioteca ({len(d['extra'])}): {', '.join(d['extra'])}")
    return total


def main():
    ap = argparse.ArgumentParser(description="Sincroniza skills canônicas para os clientes.")
    ap.add_argument("target", nargs="?", help="slug do cliente (ex: rancho517)")
    ap.add_argument("--all", action="store_true", help="aplica em todos os clientes")
    ap.add_argument("--dry-run", action="store_true", help="mostra diff sem escrever")
    args = ap.parse_args()

    if not os.path.isdir(LIB):
        print(f"ERRO: biblioteca canônica não encontrada em {LIB}", file=sys.stderr)
        sys.exit(1)

    canon = canonical_skills()
    if not canon:
        print(f"ERRO: nenhuma skill em {LIB}", file=sys.stderr)
        sys.exit(1)

    clients = discover_clients()
    if args.all:
        targets = clients
    elif args.target:
        targets = [(s, p) for (s, p) in clients if s == args.target]
        if not targets:
            print(f"ERRO: cliente '{args.target}' não encontrado. Disponíveis: "
                  f"{', '.join(s for s, _ in clients)}", file=sys.stderr)
            sys.exit(1)
    else:
        ap.error("informe um slug ou use --all")

    mode = "DRY-RUN (nada será escrito)" if args.dry_run else "APLICANDO"
    print(f"sync-skills — {mode}")
    print(f"biblioteca: {len(canon)} skills canônicas + {', '.join(LOOSE_FILES)}\n")

    pending = 0
    for slug, repo in targets:
        d = diff_client(repo, canon)
        pending += print_report(slug, d, args.dry_run)
        if not args.dry_run:
            apply_client(repo, canon)

    print()
    if args.dry_run:
        print(f"Total a sincronizar: {pending} skill(s) em {len(targets)} cliente(s).")
        print("Rode sem --dry-run para aplicar.")
    else:
        print(f"Sincronizados {len(targets)} cliente(s). skills-lock.json atualizado em cada um.")


if __name__ == "__main__":
    main()
