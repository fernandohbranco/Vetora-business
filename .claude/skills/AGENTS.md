# VetoraOS — Mapa de Skills v2

Documentação da arquitetura de skills do VetoraOS. Organizado pelo Método VETORA: Diagnóstico → Direção → Construção → Entrega → Evolução.

---

## Arquitetura em 7 Camadas

```
┌─────────────────────────────────────────────────────────┐
│                    00-NUCLEO                            │
│   vetora-brand-os · vetora-method · vetora-design-system│
│   (consultadas por TODAS as skills antes de criar)      │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                     00-OS                               │
│   abrir · atualizar · instalar · salvar                 │
│   ops · aprovar-post                                    │
│   (infraestrutura do sistema operacional)               │
└──┬──────────┬──────────┬──────────┬───────────┬─────────┘
   │          │          │          │           │
   ▼          ▼          ▼          ▼           ▼
01-DIAG   02-DIRECAO  03-CONSTR  04-QA     05-COMERCIAL
```

---

## 00-NUCLEO — Identidade e Método

Consultadas por TODAS as skills antes de produzir qualquer output.

| Skill | Input | Output | Consultada por |
|---|---|---|---|
| `vetora-brand-os` | `_memoria/preferencias.md` | Contexto de identidade verbal | Todas as skills de criação |
| `vetora-method` | — | Mapa de fases + skill por fase | Todas as skills de projeto |
| `vetora-design-system` | `identidade/design-guide.md` | Contexto de design visual | Todas as skills visuais |

---

## 00-OS — Infraestrutura do Sistema

| Skill | Input | Output | Chama |
|---|---|---|---|
| `abrir` | `_memoria/*` + `identidade/design-guide.md` | Contexto de sessão carregado | — |
| `atualizar` | Workspace inteiro + `_memoria/*` | `_memoria/*` reconciliados | — |
| `instalar` | Entrevista com usuário | `_memoria/*` + `identidade/design-guide.md` preenchidos | — |
| `salvar` | git status | Commit + push no GitHub | — |
| `ops` | Pedido em linguagem natural + `estrategia.md` | Roteamento para skill(s) certa(s) | Qualquer skill |
| `aprovar-post` | Slug do post + Meta API config | Post publicado no site + Instagram + Facebook | — |

---

## 01-DIAGNOSTICO — Fase 1 do Método VETORA

| Skill | Input | Output | Chama |
|---|---|---|---|
| `client-diagnosis` | Entrevista estruturada com usuário | `_memoria/clientes/<nome>/diagnostico.md` | — |
| `digital-presence-audit` | URL do site + redes + GMB | Relatório de auditoria com gaps priorizados | `vetora-brand-os`, `vetora-design-system` |

---

## 02-DIRECAO — Fase 2 do Método VETORA

| Skill | Input | Output | Chama |
|---|---|---|---|
| `brand-positioning-architect` | `diagnostico.md` + entrevista | `_memoria/clientes/<nome>/posicionamento.md` | `vetora-brand-os`, `vetora-method` |
| `site-architecture-vetora` | `posicionamento.md` + briefing | `_memoria/clientes/<nome>/arquitetura-site.md` | `vetora-brand-os` |
| `landing-page-cro-vetora` | Brief + `posicionamento.md` | `marketing/landingpages/<nome>/index.html` | `vetora-brand-os`, `vetora-design-system`, `ui-ux-pro-max` |

---

## 03-CONSTRUCAO — Fase 3 do Método VETORA

| Skill | Input | Output | Chama |
|---|---|---|---|
| `vetora-copywriter` | Brief + `posicionamento.md` + `preferencias.md` | Copy (inline ou arquivo) | `vetora-brand-os` |
| `social-carousel-builder` | Tema + `design-guide.md` | `marketing/conteudo/<tema>/` (HTML + PNG + legenda.md) | `vetora-brand-os`, `vetora-design-system` |
| `ui-ux-pro-max` | Briefing de identidade | `identidade/design-system/MASTER.md` | — |
| `claude-code-handoff` | `arquitetura-site.md` + design aprovado | `CLAUDE.md` do projeto + tokens + `.env.example` + checklist | `vetora-brand-os`, `vetora-design-system` |

---

## 04-ENTREGA-QA — Fase 4 do Método VETORA

| Skill | Input | Output | Chama |
|---|---|---|---|
| `vetora-qa-checklist` | Material a revisar (site, LP, carrossel, proposta) | Relatório de aprovação por criticidade | `vetora-brand-os`, `vetora-design-system` |
| `web-qa-technical-vetora` | URL ou código do site | Relatório técnico (performance, SEO, acessibilidade) | `qa-expert` |
| `ux-review-vetora` | HTML/URL/PNG a revisar | Relatório UX (9 dimensões, pontuação) | `vetora-design-system` |
| `qa-expert` | Código do projeto + CI config | Relatório técnico completo (testes, segurança, CI/CD) | — |

---

## 05-COMERCIAL — Fase 5 do Método VETORA

| Skill | Input | Output | Chama |
|---|---|---|---|
| `proposal-builder-vetora` | `diagnostico.md` + briefing de escopo | `saidas/propostas/<nome>-<data>.md` | `vetora-brand-os`, `vetora-method` |
| `linkedin-fhb-authority` | Tema ou insight do Fernando | Post LinkedIn pronto para publicar | `vetora-brand-os` |

---

## Grafo de Dependências

```
vetora-brand-os ◄──────────────────── (todas as skills de criação)
vetora-method ◄──────────────────────  brand-positioning-architect
                                        proposal-builder-vetora
vetora-design-system ◄───────────────  social-carousel-builder
                                        landing-page-cro-vetora
                                        ux-review-vetora
                                        digital-presence-audit

FLUXO PRINCIPAL — Projeto de cliente:
client-diagnosis
  └→ brand-positioning-architect
       └→ site-architecture-vetora
            └→ vetora-copywriter
            └→ landing-page-cro-vetora
                 └→ vetora-qa-checklist
                 └→ web-qa-technical-vetora
                 └→ ux-review-vetora

FLUXO — Conteúdo social:
social-carousel-builder
  └→ aprovar-post (publicação no Instagram + Facebook)

FLUXO — Comercial:
client-diagnosis
  └→ proposal-builder-vetora
linkedin-fhb-authority (independente, alimenta autoridade contínua)
```

---

## Mapa por Fase do Método

| Fase | Skills | Entregável principal |
|---|---|---|
| 1 — Diagnóstico | `client-diagnosis`, `digital-presence-audit` | `diagnostico.md` aprovado |
| 2 — Direção | `brand-positioning-architect`, `site-architecture-vetora`, `landing-page-cro-vetora` | `posicionamento.md` + `arquitetura-site.md` aprovados |
| 3 — Construção | `vetora-copywriter`, `social-carousel-builder`, `ui-ux-pro-max`, `claude-code-handoff` | Assets finais (HTML, PNGs, copy) |
| 4 — Entrega/QA | `vetora-qa-checklist`, `web-qa-technical-vetora`, `ux-review-vetora` | Checklist de aprovação 100% |
| 5 — Evolução | `proposal-builder-vetora`, `linkedin-fhb-authority` | Proposta + conteúdo de autoridade |

---

## Como adicionar uma skill nova

1. Identificar a fase do método onde a skill se encaixa
2. Criar a pasta em `.claude/skills/<fase>/<nome-da-skill>/`
3. Criar `SKILL.md` seguindo o template padrão (ver Seção 5 do `VetoraOS_Plano_de_Migracao.md`)
4. Atualizar este `AGENTS.md` com a nova skill na tabela e no grafo de dependências
5. Se a skill consultar outras, adicionar referências no campo `Chama`
6. Testar em uma sessão real antes de marcar como ativa

---

## Skills arquivadas (_archived/)

Quarentena de 60 dias. Podem voltar se houver demanda real.

**`_archived/`:** ab-teste · analisar-dados · anuncio-google · mapear-rotinas · relatorio-ads · responder-avaliacoes

**`_archived/_fundidas/`:** analytics · email-profissional · novo-projeto · publicar-tema · seo · ux

---

*Atualizado em: 2026-06-03 — VetoraOS v2*
