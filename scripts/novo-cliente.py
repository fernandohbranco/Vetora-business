#!/usr/bin/env python3
"""
novo-cliente — Instancia um repo de cliente VetoraOS padronizado a partir do
esqueleto canônico (templates/cliente-base/), sem o drift de clones ad hoc.

Convenção de caminho:  clientes/<Nome Visível>/<slug>/
Esqueleto canônico:    templates/cliente-base/
Skills canônicas:      via scripts/sync-skills.py <slug> (rodado ao final)

Uso:
  python3 scripts/novo-cliente.py --nome "Padaria do Zé"
  python3 scripts/novo-cliente.py --nome "Padaria do Zé" --slug padaria-do-ze \\
      --servicos "Gestão de redes, SEO local, identidade visual"
  python3 scripts/novo-cliente.py --nome "Teste" --dry-run   # mostra o que faria
  python3 scripts/novo-cliente.py --nome "Teste" --no-sync   # não roda sync-skills
  python3 scripts/novo-cliente.py --nome "Teste" --no-git    # não roda git init

O que faz:
  1. Deriva o slug (kebab-case) do nome, se não vier explícito.
  2. Cria clientes/<Nome>/<slug>/ com a estrutura canônica (substitui placeholders).
  3. git init no repo do cliente (a não ser --no-git).
  4. Roda sync-skills.py <slug> para instalar as skills canônicas (a não ser --no-sync).
  5. Confirma o marcador .vetora-container (branding) na árvore acima.
"""

import argparse
import os
import re
import subprocess
import sys
import unicodedata
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = os.path.join(ROOT, "templates", "cliente-base")
CLIENTS_DIR = os.path.join(ROOT, "clientes")
MARKER = os.path.join(ROOT, ".vetora-container")

# Arquivos do template que documentam o template, não vão pro cliente.
SKIP_NAMES = {"ESTRUTURA.md"}


def slugify(nome):
    """Nome Visível -> kebab-case ascii (minúsculas, sem acento, hífens)."""
    s = unicodedata.normalize("NFKD", nome).encode("ascii", "ignore").decode("ascii")
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def render(text, ctx):
    for key, val in ctx.items():
        text = text.replace("{{" + key + "}}", val)
    return text


def scaffold(dst_repo, ctx, dry):
    """Copia templates/cliente-base/ para dst_repo, renderizando placeholders."""
    created = []
    for root, dirs, files in os.walk(BASE):
        rel_dir = os.path.relpath(root, BASE)
        for f in files:
            if f in SKIP_NAMES or f == ".DS_Store":
                continue
            rel = os.path.normpath(os.path.join(rel_dir, f)) if rel_dir != "." else f
            dst = os.path.join(dst_repo, rel)
            created.append(rel)
            if dry:
                continue
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            if f == ".gitkeep":
                open(dst, "w").close()
                continue
            with open(os.path.join(root, f), "r", encoding="utf-8") as src:
                content = src.read()
            with open(dst, "w", encoding="utf-8") as out:
                out.write(render(content, ctx))
    return sorted(created)


def main():
    ap = argparse.ArgumentParser(description="Cria um repo de cliente VetoraOS padronizado.")
    ap.add_argument("--nome", required=True, help='Nome visível do cliente (ex: "Padaria do Zé")')
    ap.add_argument("--slug", help="Slug kebab-case (derivado do nome se ausente)")
    ap.add_argument("--servicos", default="[A definir no /instalar]",
                    help="Serviços contratados (texto livre, vai pro _memoria/empresa.md)")
    ap.add_argument("--dry-run", action="store_true", help="Mostra o que faria, sem escrever")
    ap.add_argument("--no-git", action="store_true", help="Não roda git init")
    ap.add_argument("--no-sync", action="store_true", help="Não roda sync-skills")
    ap.add_argument("--no-index", action="store_true", help="Não regenera o clientes-index.md")
    args = ap.parse_args()

    if not os.path.isdir(BASE):
        print(f"ERRO: esqueleto canônico não encontrado em {BASE}", file=sys.stderr)
        sys.exit(1)

    nome = args.nome.strip()
    slug = args.slug.strip() if args.slug else slugify(nome)
    if not slug:
        print(f"ERRO: não consegui derivar um slug de '{nome}'. Passe --slug.", file=sys.stderr)
        sys.exit(1)
    if slug != slugify(slug):
        print(f"ERRO: slug '{slug}' não é kebab-case. Use minúsculas, sem acento, hífens.",
              file=sys.stderr)
        sys.exit(1)

    dst_repo = os.path.join(CLIENTS_DIR, nome, slug)
    if os.path.exists(dst_repo):
        print(f"ERRO: já existe {os.path.relpath(dst_repo, ROOT)}", file=sys.stderr)
        sys.exit(1)

    ctx = {"NOME": nome, "SLUG": slug, "DATA": date.today().isoformat(), "SERVICOS": args.servicos}

    print(f"novo-cliente — {'DRY-RUN (nada será escrito)' if args.dry_run else 'CRIANDO'}")
    print(f"  nome: {nome}")
    print(f"  slug: {slug}")
    print(f"  destino: clientes/{nome}/{slug}/\n")

    created = scaffold(dst_repo, ctx, args.dry_run)
    print(f"  estrutura ({len(created)} arquivos):")
    for rel in created:
        print(f"    {'[seria criado]' if args.dry_run else '+'} {rel}")
    print()

    # branding: confirma o marcador de container na árvore
    if os.path.isfile(MARKER):
        print("  branding: marcador .vetora-container OK (marca VETORA ligada por construção)")
    else:
        print("  branding: AVISO — .vetora-container não encontrado na raiz do container.")
    print()

    if args.dry_run:
        print("Dry-run. Rode sem --dry-run para criar.")
        if not args.no_sync:
            print(f"Em seguida rodaria: python3 scripts/sync-skills.py {slug}")
        return

    # git init
    if not args.no_git:
        subprocess.run(["git", "init", "-q"], cwd=dst_repo, check=True)
        print("  git: repositório inicializado (.git próprio)")
    else:
        print("  git: pulado (--no-git)")
    print()

    # skills canônicas
    if not args.no_sync:
        print("  sync-skills:")
        r = subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "sync-skills.py"), slug],
                           cwd=ROOT)
        if r.returncode != 0:
            print("  AVISO: sync-skills falhou. Rode manualmente: "
                  f"python3 scripts/sync-skills.py {slug}", file=sys.stderr)
    else:
        print(f"  sync-skills: pulado (--no-sync). Rode: python3 scripts/sync-skills.py {slug}")
    print()

    # índice de portfólio (Sprint 05) — mantém clientes-index.md vivo
    if not args.no_index:
        print("  clientes-index:")
        subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "clientes-index.py")],
                       cwd=ROOT)
    else:
        print("  clientes-index: pulado (--no-index). Rode: python3 scripts/clientes-index.py")

    print(f"\nPronto. Cliente em clientes/{nome}/{slug}/")
    print("Próximo passo sugerido: abrir o repo e rodar /instalar para preencher _memoria/ e identidade/.")


if __name__ == "__main__":
    main()
