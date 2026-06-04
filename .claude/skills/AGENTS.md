# VetoraOS — Rede de Agentes

Mapa de todos os agentes (skills) ativos, suas responsabilidades, o que consomem, o que produzem e como se relacionam entre si.

---

## Arquitetura em 3 Camadas

```
CAMADA 1 — Contexto (state agents)
  Leem e escrevem o estado do negócio (_memoria/ + identidade/).
  Nunca criam conteúdo final.

CAMADA 2 — Especialistas (domain agents)
  Cada um domina uma única área.
  Operam de forma independente ou são chamados por Camada 3.

CAMADA 3 — Orquestradores (workflow agents)
  Coordenam múltiplos especialistas para entregar workflows compostos.
  Nunca replicam a lógica de um especialista — apenas o chamam.
```

---

## Camada 1 — Contexto

| Skill | Input | Output | Chama |
|-------|-------|--------|-------|
| `/abrir` | `_memoria/*` + `identidade/design-guide.md` | Relatório de sessão (inline) | — |
| `/atualizar` | Workspace inteiro + `_memoria/*` | `_memoria/*` reconciliados | — |
| `/instalar` | Entrevista com usuário | `_memoria/*` + `identidade/design-guide.md` + complemento em `CLAUDE.md` | — |
| `/salvar` | git status | Commit + push no GitHub | — |

---

## Camada 2 — Especialistas

| Skill | Input | Output | Chama |
|-------|-------|--------|-------|
| `/ux` | Arquivo visual (HTML/PNG) + `design-guide.md` | Relatório de auditoria UX (inline, 9 dimensões) | — |
| `/ui-ux-pro-max` | `empresa.md` + `preferencias.md` + `design-guide.md` | `identidade/design-system/MASTER.md` | — |
| `/carrossel` | Tema + `design-guide.md` + `design-system` (opcional) | `marketing/conteudo/<tema>/` (HTML + PNG + legenda.md) | `/ux` |
| `/seo` | `empresa.md` + WebSearch | `marketing/seo/` (8 arquivos) | — |
| `/anuncio-google` | `empresa.md` + `marketing/seo/01-pesquisa-demanda.md` | `marketing/campanhas/google-ads-<data>/campaign.csv` | — |
| `/relatorio-ads` | CSVs exportados das plataformas + `empresa.md` | `marketing/campanhas/relatorios/<data>-relatorio.md` | — |
| `/copywriting` | Brief do usuário + `empresa.md` + `preferencias.md` | Copy (inline ou arquivo) | — |
| `/analytics` | `empresa.md` + stack do site | Plano de tracking + snippets (inline) | — |
| `/ab-teste` | Hipótese + `empresa.md` | Documento do teste (inline) | — |
| `/email-profissional` | Contexto do email + `preferencias.md` | Rascunho do email (inline) | — |
| `/responder-avaliacoes` | Texto da avaliação + `preferencias.md` | Resposta pronta (inline) | — |
| `/analisar-dados` | Arquivo CSV/XLSX/JSON/TXT | Resumo executivo (inline) | — |
| `/qa-expert` | Projeto no workspace | `QA_AUDIT_REPORT.md` na raiz do projeto | — |

---

## Camada 3 — Orquestradores

| Skill | Input | Output | Chama |
|-------|-------|--------|-------|
| `/pagina-de-vendas` | Brief + `empresa.md` + `design-system` (opcional) | `marketing/landingpages/<nome>/index.html` + `preview.png` | `/ui-ux-pro-max` (se não houver MASTER.md) + `/ux` |
| `/publicar-tema` | Tema + `estrategia.md` + `marketing/seo/*` | `site/.../blog/<slug>.md` (draft) + `marketing/conteudo/<tema>/` | `/carrossel` |
| `/aprovar-post` | Slug do post | Post publicado + PNGs em `public/` + post no Instagram/Facebook | git push + Meta Graph API |
| `/mapear-rotinas` | Entrevista + `templates/skills/catalogo.md` | `.claude/skills/<nova>/SKILL.md` + `outputs.md` | Cria novas skills |
| `/novo-projeto` | Nome do projeto + `empresa.md` | `<projeto>/CLAUDE.md` | — |
| `/ops` | Pedido em linguagem natural + `estrategia.md` | Roteamento para skill(s) certa(s) + execução | Qualquer skill |

---

## Grafo de dependências

```
_memoria/ + identidade/
  └─ lido por: TODAS as skills antes de agir

/abrir ──────────────────────────────── [C1]
/atualizar ──────────────────────────── [C1]
/instalar ───────────────────────────── [C1]
/salvar ─────────────────────────────── [C1]

/seo ────────────────────────────────── [C2]
  └→ outputs: marketing/seo/
       ├─ lido por: /anuncio-google
       └─ lido por: /publicar-tema

/ui-ux-pro-max ──────────────────────── [C2]
  └→ output: identidade/design-system/MASTER.md
       ├─ lido por: /carrossel
       ├─ lido por: /pagina-de-vendas
       └─ lido por: /ux

/carrossel ──────────────────────────── [C2]
  ├─ chama: /ux (revisão inline)
  └→ output: marketing/conteudo/<tema>/
       └─ lido por: /aprovar-post

/ux ─────────────────────────────────── [C2]
/copywriting ────────────────────────── [C2]
/analytics ──────────────────────────── [C2]
/ab-teste ───────────────────────────── [C2]
/anuncio-google ─────────────────────── [C2]
/relatorio-ads ──────────────────────── [C2]
/email-profissional ─────────────────── [C2]
/responder-avaliacoes ───────────────── [C2]
/analisar-dados ─────────────────────── [C2]
/qa-expert ──────────────────────────── [C2]
  └→ output: QA_AUDIT_REPORT.md (raiz do projeto)

/pagina-de-vendas ───────────────────── [C3]
  ├─ chama (se necessário): /ui-ux-pro-max
  └─ chama: /ux

/publicar-tema ──────────────────────── [C3]
  └─ chama: /carrossel

/aprovar-post ───────────────────────── [C3]
  └─ usa output de: /carrossel + git push + Meta API

/ops ────────────────────────────────── [C3]
  └─ roteia para: qualquer skill

/mapear-rotinas ─────────────────────── [C3]
  └─ cria: novas skills → atualiza este arquivo
```

---

## Biblioteca de extensão (clones/)

Skills disponíveis para incorporação futura. Para adotar: copiar SKILL.md para `.claude/skills/<nome>/`, adaptar para ler `_memoria/` em vez de `.agents/product-marketing.md`, criar `outputs.md` e registrar neste arquivo.

| Pasta | Skills disponíveis | Prioridade |
|-------|-------------------|------------|
| `clones/marketing-skills/` | marketing-plan, customer-research, pricing, competitor-profiling, launch, cro, cold-email, emails, social, video, ads, revops, sales-enablement, referrals | Média |
| `clones/design-ui-skills/` | mcp-builder, frontend-design, canvas-design, theme-factory, brand-guidelines, webapp-testing | Média |

---

## Como adicionar uma skill nova

1. Criar pasta `.claude/skills/<nome>/`
2. Criar `SKILL.md` com frontmatter YAML (`name`, `description`) e workflow estruturado
3. Criar `outputs.md` documentando o que a skill produz (mesmo que só inline)
4. Adicionar linha neste arquivo na tabela da camada correta
5. Adicionar no grafo de dependências se a skill chamar ou for chamada por outra
6. Atualizar seção "Grafo de dependências simplificado" em `CLAUDE.md` se for Camada 3
