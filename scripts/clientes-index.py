#!/usr/bin/env python3
"""
clientes-index — Regenera clientes-index.md na raiz do container: a visão de
portfólio de todos os repos de cliente VetoraOS.

Fonte dos dados:  CLAUDE.md / _memoria/ de cada cliente + git log de cada repo.
Alvo:             clientes-index.md (raiz do container, rastreado pelo git do container).

Uso:
  python3 scripts/clientes-index.py            # regenera o índice
  python3 scripts/clientes-index.py --check     # só valida, não escreve (exit!=0 se houver inconsistência)
  python3 scripts/clientes-index.py --stdout     # imprime o índice em vez de escrever o arquivo

O que coleta por cliente:
  - nome      ← **Nome:** do _memoria/empresa.md (fallback: pasta visível)
  - negócio   ← **Negócio:** do _memoria/empresa.md
  - serviços  ← **Principais entregas:** / seção "## Serviços" do empresa.md
  - status    ← heurística sobre a "## Fase" do _memoria/estrategia.md (ativo/pausado/concluído)
  - fase      ← primeira linha de conteúdo sob "## Fase" (detalhe legível)
  - atividade ← git log -1 do repo do cliente (data do último commit)

Inconsistências sinalizadas:
  - sem CLAUDE.md
  - sem identidade (identidade/ sem design-guide.md)
  - skills desatualizadas vs biblioteca canônica (reusa o diff do sync-skills)
  - sem skills-lock.json (nunca sincronizado)
  - repo sem .git próprio
"""

import argparse
import importlib.util
import os
import re
import subprocess
import sys
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, "clientes-index.md")


def _load_sync():
    """Carrega scripts/sync-skills.py como módulo (nome com hífen)."""
    path = os.path.join(ROOT, "scripts", "sync-skills.py")
    spec = importlib.util.spec_from_file_location("sync_skills", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


SYNC = _load_sync()


def kebab(s):
    """Mesma regra do novo-cliente.py: ascii minúsculo, sem acento, hífens."""
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode("ascii").lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


# ---------- parsing de _memoria ----------

def read(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except OSError:
        return ""


def field(text, label):
    """Extrai o valor de uma linha '**Label:** valor'."""
    m = re.search(r"^\*\*" + re.escape(label) + r":\*\*\s*(.+)$", text, re.MULTILINE)
    return m.group(1).strip() if m else ""


def section_first_line(text, header):
    """Primeira linha de conteúdo sob '## header' (pula citações e vazias)."""
    m = re.search(r"^##\s+" + re.escape(header) + r"\s*$", text, re.MULTILINE)
    if not m:
        return ""
    rest = text[m.end():]
    for line in rest.splitlines():
        s = line.strip()
        if not s or s.startswith(">") or s.startswith("#"):
            if s.startswith("#"):
                break
            continue
        return re.sub(r"\*\*|`", "", s).strip()
    return ""


def services(text):
    """Melhor esforço: '**Principais entregas:**' ou seção '## Serviços'."""
    val = field(text, "Principais entregas")
    if val:
        return val
    m = re.search(r"^##\s+Serviços.*$", text, re.MULTILINE)
    if m:
        body = text[m.end():]
        out = []
        for line in body.splitlines():
            s = line.strip()
            if s.startswith("#"):
                break
            if s and not s.startswith(">"):
                out.append(re.sub(r"^[-*]\s*", "", s))
        if out:
            return "; ".join(out[:4])
    return "—"


def status_from_fase(fase):
    """Categoria grosseira a partir do texto da fase."""
    f = fase.lower()
    if any(k in f for k in ["concluíd", "concluid", "entregue", "encerrad", "finalizad"]):
        return "concluído"
    if any(k in f for k in ["pausad", "stand-by", "standby", "aguardando retorno", "parado"]):
        return "pausado"
    return "ativo"


def git_last_activity(repo):
    try:
        r = subprocess.run(
            ["git", "-C", repo, "log", "-1", "--format=%cd", "--date=short"],
            capture_output=True, text=True)
        if r.returncode == 0 and r.stdout.strip():
            return r.stdout.strip()
        return "sem commits"
    except OSError:
        return "—"


def has_own_git(repo):
    git = os.path.join(repo, ".git")
    return os.path.isdir(git) or os.path.isfile(git)


def has_identidade(repo):
    return os.path.isfile(os.path.join(repo, "identidade", "design-guide.md"))


# ---------- coleta ----------

def collect():
    canon = SYNC.canonical_skills()
    rows = []
    for slug, repo in SYNC.discover_clients():
        nome_visivel = os.path.basename(os.path.dirname(repo))
        empresa = read(os.path.join(repo, "_memoria", "empresa.md"))
        estrategia = read(os.path.join(repo, "_memoria", "estrategia.md"))

        nome = field(empresa, "Nome") or nome_visivel
        negocio = field(empresa, "Negócio") or "—"
        servs = services(empresa)
        fase = section_first_line(estrategia, "Fase")
        # Status: override explícito **Status:** (estrategia tem prioridade) vence a heurística.
        status = (field(estrategia, "Status") or field(empresa, "Status")
                  or status_from_fase(fase)).lower()
        atividade = git_last_activity(repo)

        issues = []
        if slug != kebab(slug):
            issues.append(f"slug fora do padrão kebab-case ('{slug}') — convenção da Sprint 04")
        if not os.path.isfile(os.path.join(repo, "CLAUDE.md")):
            issues.append("sem CLAUDE.md")
        if not has_own_git(repo):
            issues.append("sem .git próprio")
        if not has_identidade(repo):
            issues.append("sem identidade (design-guide.md)")
        if not os.path.isfile(os.path.join(repo, "skills-lock.json")):
            issues.append("nunca sincronizado (/sync-skills)")
        d = SYNC.diff_client(repo, canon)
        pend = len(d["new"]) + len(d["changed"])
        if pend:
            issues.append(f"{pend} skill(s) desatualizada(s) — rode /sync-skills {slug}")

        rows.append({
            "nome": nome, "nome_visivel": nome_visivel, "slug": slug,
            "negocio": negocio, "servicos": servs, "status": status,
            "fase": fase or "—", "atividade": atividade, "issues": issues,
        })
    return rows


# ---------- render ----------

STATUS_ICON = {"ativo": "🟢 ativo", "pausado": "🟡 pausado", "concluído": "✅ concluído"}


def truncate(s, n=70):
    s = s.replace("|", "\\|").strip()
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


def render(rows):
    from datetime import date
    out = []
    out.append("# Índice de Clientes — VETORA\n")
    out.append("> Visão de portfólio gerada por `/clientes` (`scripts/clientes-index.py`).")
    out.append("> Não editar à mão — regenerado a partir do `_memoria/` e do git de cada repo.")
    out.append(f"> Atualizado em: {date.today().isoformat()} · {len(rows)} cliente(s)\n")

    out.append("| Cliente | Slug | Status | Negócio | Serviços | Última atividade |")
    out.append("|---|---|---|---|---|---|")
    for r in sorted(rows, key=lambda x: x["nome"].lower()):
        out.append("| {nome} | `{slug}` | {status} | {negocio} | {serv} | {ativ} |".format(
            nome=truncate(r["nome"], 40),
            slug=r["slug"],
            status=STATUS_ICON.get(r["status"], r["status"]),
            negocio=truncate(r["negocio"], 45),
            serv=truncate(r["servicos"], 70),
            ativ=r["atividade"],
        ))

    out.append("\n## Fase atual de cada conta\n")
    for r in sorted(rows, key=lambda x: x["nome"].lower()):
        out.append(f"- **{r['nome']}** (`{r['slug']}`): {truncate(r['fase'], 160)}")

    flagged = [r for r in rows if r["issues"]]
    out.append("\n## Inconsistências\n")
    if not flagged:
        out.append("Nenhuma. Todos os clientes com CLAUDE.md, identidade, git e skills em dia. ✅")
    else:
        for r in sorted(flagged, key=lambda x: x["nome"].lower()):
            out.append(f"- **{r['nome']}** (`{r['slug']}`):")
            for i in r["issues"]:
                out.append(f"  - ⚠️ {i}")

    return "\n".join(out) + "\n"


def main():
    ap = argparse.ArgumentParser(description="Regenera o índice de clientes do container.")
    ap.add_argument("--check", action="store_true",
                    help="só valida; exit!=0 se houver inconsistência. Não escreve.")
    ap.add_argument("--stdout", action="store_true", help="imprime o índice em vez de gravar")
    args = ap.parse_args()

    rows = collect()
    content = render(rows)

    if args.stdout:
        print(content)
    elif not args.check:
        with open(INDEX, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"clientes-index.md regenerado — {len(rows)} cliente(s).")

    flagged = [r for r in rows if r["issues"]]
    if flagged:
        print(f"\n⚠️  {len(flagged)} cliente(s) com inconsistências:", file=sys.stderr)
        for r in flagged:
            print(f"  - {r['nome']} ({r['slug']}): {'; '.join(r['issues'])}", file=sys.stderr)
        if args.check:
            sys.exit(1)
    elif args.check:
        print("OK — nenhuma inconsistência.")


if __name__ == "__main__":
    main()
