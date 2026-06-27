# {{NOME}} — VetoraOS

> O sistema operacional deste negócio dentro do Claude Code.

Repo VetoraOS do cliente **{{NOME}}**. Gerado pelo `/novo-cliente` do container
VETORA em {{DATA}}. Cada cliente é um VetoraOS completo e independente, com
`.git` próprio e skills canônicas sincronizadas a partir do container.

---

## Quickstart

```bash
# 1. Abrir no VS Code
code .

# 2. Abrir o Claude Code no terminal integrado
claude

# 3. Rodar o setup (uma única vez) — preenche _memoria/ e identidade/
/instalar
```

---

## Estrutura

- `_memoria/` — quem é o cliente, como fala, foco atual (lido por toda skill)
- `identidade/` — marca do cliente, aplicada no que o cliente publica
- `marketing/` — campanhas, conteúdo, SEO, mídia paga
- `saidas/` — entregáveis pontuais (relatórios, propostas, análises)
- `dados/` — drop zone de entrada (CSVs, PDFs, planilhas)
- `scripts/` — utilitários que as skills chamam
- `.claude/skills/` — skills canônicas (sincronizadas via `/sync-skills`)

Pastas opcionais, criadas sob demanda: `site/`, `produtos/`, `sprints/`,
`_estado/` (criada pelo `/ops` ao rodar workflows).

> Para a lista de skills disponíveis e como se relacionam, ver
> `.claude/skills/AGENTS.md`.
