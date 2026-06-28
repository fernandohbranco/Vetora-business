# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Arquitetura do sistema

O VetoraOS é um sistema operacional de negócio baseado em arquivos. Não tem código de aplicação — é composto por memória, identidade, skills e outputs.

```
_memoria/       cérebro do negócio (empresa, preferências, estratégia — apenas os 3 arquivos core)
identidade/     identidade visual (design-guide.md, logo, fontes)
produtos/       produtos digitais em construção (kit-vetora/, saas/)
site/           landing pages e páginas web publicáveis (ex: site/vetora-site/)
marketing/      saídas persistentes de marketing (módulos, conteúdo, SEO, campanhas, anúncios)
dados/          drop zone de entrada (CSVs, PDFs, planilhas — input temporário)
saidas/         saídas pontuais (análises, emails, relatórios avulsos)
scripts/        utilitários Node.js/Python que skills chamam (render, publicação social)
sprints/        documentos de planejamento de sprints ativos, organizados por tema (ex: sprints/produto/, sprints/site/)
templates/      templates de skills e catálogo de skills externas disponíveis
                templates/skills-cliente/ = fonte única canônica das skills de cliente (propagada via /sync-skills)
                templates/cliente-base/   = esqueleto canônico de cliente (instanciado via /novo-cliente)
clientes/       projetos de clientes ativos — cada cliente é um VetoraOS completo com repo git próprio
                convenção: clientes/<Nome Visível>/<slug>/ (ex: clientes/Prezaro Barbearia/prezaro-barbearia/)
                <slug> sempre em kebab-case (minúsculas, sem acento, hífens). Vale para clientes novos
```

Skills locais ficam em `.claude/skills/` (específicas do projeto). Skills globais ficam em `~/.claude/skills/` (disponíveis em qualquer projeto).

**Git dos clientes:** `clientes/` está no `.gitignore` do container e **não é versionado por ele**. Cada cliente é um repo VetoraOS independente, com `.git` próprio e remote próprio, que versiona a si mesmo. Nunca commitar trabalho de cliente no repo do container.

---

## Catálogo de Skills

O VetoraOS opera sob o Método VETORA: Diagnóstico → Direção → Construção → Entrega → Evolução.

**Distinção importante:** `produtos/` e `marketing/` são **outputs/produtos**. `.claude/skills/` são **procedimentos internos** que produzem ou apoiam esses outputs. Não misturar os dois conceitos.

### 00-NUCLEO — Identidade e Método

Consultadas por todas as skills de criação antes de produzir qualquer output.

| Skill | Input | Output |
|---|---|---|
| `vetora-brand-os` | `_memoria/preferencias.md` | Contexto de identidade verbal (tom, arquétipos, restrições) |
| `vetora-method` | — | Mapa de fases + skill por fase |
| `vetora-design-system` | `identidade/design-guide.md` | Contexto de design visual |

### 00-OS — Infraestrutura do Sistema

| Skill | Input | Output |
|---|---|---|
| `abrir` | `_memoria/*` + `identidade/design-guide.md` | Contexto de sessão carregado |
| `atualizar` | Workspace inteiro + `_memoria/*` | `_memoria/*` reconciliados |
| `instalar` | Entrevista com usuário | `_memoria/*` + `identidade/design-guide.md` preenchidos |
| `salvar` | git status | Commit + push no GitHub |
| `ops` | Pedido em linguagem natural + `estrategia.md` | Roteamento para skill(s) certa(s) |
| `aprovar-post` | Slug do post + Meta API config | Post publicado no site + Instagram + Facebook |
| `sync-skills` | `templates/skills-cliente/` (biblioteca canônica) | Skills sincronizadas + `skills-lock.json` em cada `clientes/*/*/` |
| `novo-cliente` | Entrevista curta + `templates/cliente-base/` | Repo de cliente padronizado em `clientes/<Nome>/<slug>/` (estrutura + CLAUDE.md + skills via /sync-skills + git) |
| `clientes` | `_memoria/` + git log de cada `clientes/*/*/` | `clientes-index.md` (portfólio: status, serviços, última atividade, inconsistências) |

### 01-DIAGNOSTICO

| Skill | Input | Output |
|---|---|---|
| `client-diagnosis` | Entrevista estruturada com usuário | `clientes/<Nome>/<slug>/_memoria/diagnostico.md` |
| `digital-presence-audit` | URL do site + redes + GMB | Relatório de auditoria com gaps priorizados |

### 02-DIRECAO

| Skill | Input | Output |
|---|---|---|
| `brand-positioning-architect` | `diagnostico.md` + entrevista | `clientes/<Nome>/<slug>/_memoria/posicionamento.md` |
| `site-architecture-vetora` | `posicionamento.md` + briefing | `clientes/<Nome>/<slug>/_memoria/arquitetura-site.md` |
| `landing-page-cro-vetora` | Brief + `posicionamento.md` | `marketing/landingpages/<nome>/index.html` |

### 03-CONSTRUCAO

| Skill | Input | Output |
|---|---|---|
| `vetora-copywriter` | Brief + `posicionamento.md` + `preferencias.md` | Copy (inline ou arquivo) |
| `social-carousel-builder` | Tema + `design-guide.md` | `marketing/conteudo/<tema>/` (HTML + PNG + legenda.md) |
| `ui-ux-pro-max` | Briefing de identidade | `identidade/design-system/MASTER.md` |
| `claude-code-handoff` | `arquitetura-site.md` + design aprovado | `CLAUDE.md` do projeto + tokens + `.env.example` + checklist |
| `gerar-doc` | Conteúdo do documento + metadados (tipo, cliente, data, campos de capa) | PDF premium em `saidas/documentos/<cliente>-<tipo>-<data>.pdf` via `scripts/doc-template.html` |

### 04-ENTREGA-QA

| Skill | Input | Output |
|---|---|---|
| `vetora-qa-checklist` | Material a revisar (site, LP, carrossel, proposta) | Relatório de aprovação por criticidade |
| `web-qa-technical-vetora` | URL ou código do site | Relatório técnico (performance, SEO, acessibilidade) |
| `ux-review-vetora` | HTML/URL/PNG a revisar | Relatório UX (9 dimensões, pontuação) |
| `qa-expert` | Código do projeto + CI config | Relatório técnico completo (testes, segurança, CI/CD) |

### 05-COMERCIAL

| Skill | Input | Output |
|---|---|---|
| `proposal-builder-vetora` | `diagnostico.md` + briefing de escopo | `saidas/propostas/<nome>-<data>.md` |
| `linkedin-fhb-authority` | Tema ou insight do Fernando | Post LinkedIn pronto para publicar |

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar `identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar no catálogo de skills neste arquivo se existe skill relevante. Se encontrar, seguir as instruções da skill. Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se chama X"). Só perguntar quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill nova, mudança de foco, processo novo, ferramenta instalada, estrutura alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/<fase>/<nome>/SKILL.md` (local)
   - Universal → `~/.claude/skills/<nome>/SKILL.md` (global)
   - Skills visuais (UX, design, carrossel, landing page) ficam **sempre locais** — dependem do `identidade/design-guide.md` de cada projeto
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Adicionar a skill na tabela do catálogo neste CLAUDE.md (fase correta)
5. Se a skill precisar de arquivos de apoio (templates, exemplos), criar dentro da pasta da skill

O catálogo de skills externas prontas pra instalar está em `templates/skills/catalogo.md`.

---

## Scripts e integrações

Scripts externos ficam em `scripts/`. A pasta começa vazia — cada skill que precisa de script guia o setup.

**Repositório GitHub:** `https://github.com/fernandohbranco/Vetora-business.git` (branch `main`)

Pré-requisitos para as skills que geram imagem ou publicam em redes sociais:
- **Node.js 20+**
- **Playwright** (`npm install playwright && npx playwright install chromium`) — para renderizar carrosséis em PNG
- **`.env` na raiz** com as chaves:
  - `OPENAI_API_KEY` — geração de imagem via DALL-E 3
  - `META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID` — publicação no Instagram/Facebook
  - `SITE_URL` — URL do site para o `/aprovar-post`

Quando uma skill precisar de script ausente, detectar a falta, perguntar se quer configurar agora, guiar o setup e criar o script.
