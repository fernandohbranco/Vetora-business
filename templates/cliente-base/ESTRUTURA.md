# Esqueleto canônico de cliente VetoraOS

Define o que todo repo de cliente tem ao nascer. É a base que o `/novo-cliente`
do container instancia. Mudou aqui → muda o que clientes novos recebem.

> Convenção de caminho: `clientes/<Nome Visível>/<slug>/`
> O `<slug>` é sempre **kebab-case** (minúsculas, sem acento, hífens).
> Ex: `clientes/Prezaro Barbearia/prezaro-barbearia/`

---

## Obrigatórias (todo cliente nasce com elas)

| Item | Papel |
|---|---|
| `CLAUDE.md` | Regras de operação do VetoraOS do cliente (base genérica; `/instalar` complementa) |
| `README.md` | Quickstart e mapa de pastas |
| `.gitignore` | Ignora ruído de SO, editor e sessões locais do Claude |
| `_memoria/empresa.md` | Quem é o cliente, o que faz |
| `_memoria/preferencias.md` | Tom de voz, estilo, o que evitar |
| `_memoria/estrategia.md` | Foco atual, prioridades, prazos |
| `identidade/` | Marca do cliente (preenchida pelo `/instalar`) |
| `marketing/` | Campanhas, conteúdo, SEO, ads |
| `saidas/` | Entregáveis pontuais |
| `dados/` | Drop zone de entrada |
| `scripts/` | Utilitários chamados por skills |
| `.claude/skills/` | Skills canônicas (preenchida via `/sync-skills`, não versionada como template) |
| `skills-lock.json` | Hash das skills sincronizadas (gerado pelo `/sync-skills`) |

## Sob demanda (criadas quando houver necessidade, não vêm no esqueleto)

| Item | Quando |
|---|---|
| `site/` | Quando o cliente tem site/landing em construção |
| `produtos/` | Quando há produto digital próprio do cliente |
| `sprints/` | Quando há planejamento de sprints do cliente |
| `_estado/` | Criada automaticamente pelo `/ops` ao rodar workflows |

---

## Branding (como liga)

Não há config por cliente. As skills sobem a árvore de pastas até achar o
marcador `.vetora-container` na raiz do container — esse é o ponto único da
marca VETORA dos entregáveis. Como o cliente vive em `clientes/<Nome>/<slug>/`
dentro do container, o branding já está ligado por construção. O `/novo-cliente`
apenas confirma que o marcador existe.
