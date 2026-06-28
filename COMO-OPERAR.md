# Como operar a VETORA

Guia rápido de operação do VetoraOS. Dois mundos que nunca se misturam:
o **container** (a própria VETORA + a fábrica que abastece os clientes) e os
**clientes** (cada um um repo independente).

---

## 1. Os dois mundos

### Container VETORA (este repo)

Cérebro do negócio **e** fonte de verdade dos clientes.

- Negócio da VETORA: `_memoria/`, `identidade/`, `produtos/` (Kit VETORA), `site/`, `marketing/`, `saidas/`
- Fontes que abastecem os clientes:
  - `templates/skills-cliente/` — skills canônicas (fonte única)
  - `templates/cliente-base/` — esqueleto de cliente novo
  - `identidade/` + `.vetora-container` — marca VETORA dos entregáveis
- Painel de portfólio: `clientes-index.md`

Trabalho da VETORA = trabalhar neste repo e `/salvar` (commit + push em `Vetora-business`).

### Clientes (`clientes/<Nome Visível>/<slug>/`)

Cada cliente é um VetoraOS completo e independente, com `.git` e remote próprios.
O container **não versiona** o trabalho deles — `/clientes/` está no `.gitignore`.

> **Para trabalhar num cliente, abra o Claude Code dentro da pasta dele.**
> Contexto, skills e `/salvar` são do cliente. O commit vai para o GitHub **do cliente**.

Convenção: `clientes/<Nome Visível>/<slug>/`, com `<slug>` em **kebab-case**
(minúsculas, sem acento, hífens). Vale para clientes novos.

---

## 2. A regra de ouro: marca

| O que você produz | Marca | Onde a skill busca |
|---|---|---|
| Algo que a **VETORA entrega** ao cliente (relatório, proposta, análise) | **VETORA** | `.vetora-container` na raiz do container |
| Algo que o **cliente publica** (post, site, carrossel, página) | **do cliente** | `identidade/` do repo do cliente |

Automático: as skills sobem a árvore de pastas até achar o `.vetora-container`.
Você só precisa estar na pasta certa.

---

## 3. Os fluxos do dia a dia

### Abrir cliente novo → `/novo-cliente` (no container)

Um comando: cria `clientes/<Nome>/<slug>/`, gera o CLAUDE.md base, instala as skills
canônicas (`/sync-skills`), inicia o `.git` e atualiza o `clientes-index.md`.
Depois, entre na pasta do cliente e rode `/instalar` para preencher `_memoria/` e
`identidade/`. (Opcional: criar o remote no GitHub e dar o primeiro push de dentro do
repo do cliente.)

### Corrigir/melhorar uma skill → SEMPRE na fonte (no container)

Edite em `templates/skills-cliente/` e rode `/sync-skills --all`.
**Nunca edite uma skill dentro de um cliente** — o próximo sync sobrescreve.
Esta é a regra que mata o drift.

### Ver o portfólio → `/clientes` (no container)

Regenera o `clientes-index.md`: status, serviços, última atividade e inconsistências
(skill desatualizada, sem identidade, slug fora do padrão).

---

## 4. O que nunca fazer

- ❌ Commitar trabalho de cliente no repo da VETORA.
- ❌ Editar skill dentro de um cliente (edite na fonte + `/sync-skills`).

Os dois quebram o isolamento e a fonte única construídos nas 5 sprints de infraestrutura.
Seguindo "cada coisa no seu repo, skill só na fonte", o sistema se mantém limpo sozinho.

---

## 5. Mapa rápido de comandos

| Quero… | Onde | Comando |
|---|---|---|
| Abrir cliente novo | container | `/novo-cliente` |
| Preencher memória/identidade do cliente | repo do cliente | `/instalar` |
| Corrigir uma skill para todos | container | editar `templates/skills-cliente/` + `/sync-skills --all` |
| Sincronizar skills de um cliente só | container | `/sync-skills <slug>` |
| Ver o portfólio | container | `/clientes` |
| Salvar o trabalho da VETORA | container | `/salvar` |
| Salvar o trabalho de um cliente | repo do cliente | `/salvar` |
