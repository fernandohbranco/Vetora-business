# Sprint 05 — Dashboard de Clientes

> Saída: um índice único, sempre atualizável por comando, com o estado de cada conta — a visão de portfólio que hoje não existe.

---

## Objetivo

Com 8 clientes (e crescendo), falta uma visão de portfólio: quem é cliente ativo, que serviços tem, qual o status, última atividade. Esta sprint cria um índice rastreável no container e uma skill que o regenera.

---

## Passo 1 — Definir o índice

- [x] Criar `clientes-index.md` na raiz do container (rastreado pelo git do container, já que `clientes/` em si é ignorado)
- [x] Colunas: cliente, slug, status (ativo/pausado/concluído), serviços contratados, última atividade
- [x] Fonte dos dados: `CLAUDE.md` / `_memoria/` de cada repo de cliente

## Passo 2 — Skill `/clientes`

- [x] Criar `.claude/skills/00-os/clientes/SKILL.md` no container
- [x] Varre `clientes/*/*/`, lê metadados de cada um e regenera `clientes-index.md`
- [x] Detecta última atividade via git log de cada repo de cliente
- [x] Sinaliza inconsistências (cliente sem CLAUDE.md, sem identidade, com skills desatualizadas)

## Passo 3 — Integração

- [x] `/novo-cliente` (Sprint 04) passa a chamar `/clientes` ao final, mantendo o índice vivo
- [x] Registrar `/clientes` no catálogo do `CLAUDE.md`

---

## Critérios de "pronto"

- [x] `clientes-index.md` lista os 8 clientes com status e serviços
- [x] `/clientes` regenera o índice sob demanda
- [x] Índice aponta inconsistências (skills desatualizadas, faltando branding etc.)
- [x] `/clientes` no catálogo do `CLAUDE.md`

---

## Fim da sequência

Com as 5 sprints concluídas: skills com fonte única, branding VETORA em todo entregável, git limpo, scaffold padronizado e portfólio visível. A bagunça de drift e duplicação deixa de existir e abrir cliente novo vira rotina de um comando.
