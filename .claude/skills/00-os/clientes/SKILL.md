---
name: clientes
description: >
  Regenera o clientes-index.md na raiz do container — a visão de portfólio de todos os
  repos de cliente VetoraOS: status, negócio, serviços, última atividade e inconsistências
  (skills desatualizadas, sem identidade, slug fora do padrão). Use quando o usuário disser
  "/clientes", "dashboard de clientes", "índice de clientes", "visão de portfólio", "como
  estão os clientes", "status dos clientes" ou após criar/atualizar um cliente.
---

# /clientes — Dashboard de portfólio

Skill interna da VETORA (não vai pros clientes). Mantém um índice único e rastreável de
todas as contas, regenerado sob demanda a partir da fonte de verdade de cada repo —
nunca editado à mão.

> Índice: `clientes-index.md` (raiz do container, rastreado pelo git do container)
> Fonte: `_memoria/` + git log de cada `clientes/<Nome>/<slug>/`
> Engine: `scripts/clientes-index.py`

## O que o índice mostra

Uma tabela com **cliente, slug, status, negócio, serviços e última atividade**, seguida de:

- **Fase atual de cada conta** — a fase corrente lida do `_memoria/estrategia.md`.
- **Inconsistências** — o que precisa de atenção por cliente.

De onde vem cada campo:

| Campo | Fonte |
|---|---|
| Nome | `**Nome:**` do `_memoria/empresa.md` (fallback: pasta visível) |
| Negócio | `**Negócio:**` do `_memoria/empresa.md` |
| Serviços | `**Principais entregas:**` ou seção `## Serviços` do `empresa.md` |
| Status | `**Status:**` explícito (em `estrategia.md` ou `empresa.md`); senão heurística sobre a `## Fase` |
| Fase | primeira linha sob `## Fase` do `_memoria/estrategia.md` |
| Última atividade | `git log -1` do repo do cliente |

> **Controlar o status manualmente:** o status é uma heurística (ativo/pausado/concluído)
> sobre o texto da fase, então pode errar. Para fixá-lo, adicione uma linha
> `**Status:** ativo` (ou `pausado`/`concluído`) no `_memoria/estrategia.md` do cliente —
> esse valor explícito vence a heurística.

## Inconsistências detectadas

- Slug fora do padrão kebab-case (convenção da Sprint 04)
- Sem `CLAUDE.md`
- Sem `.git` próprio
- Sem identidade (`identidade/design-guide.md` ausente)
- Nunca sincronizado (`skills-lock.json` ausente)
- Skills desatualizadas vs biblioteca canônica (reusa o diff do `/sync-skills`)

## Workflow

### Regenerar o índice

```bash
python3 scripts/clientes-index.py
```

Reescreve `clientes-index.md` e imprime no terminal um resumo das inconsistências
encontradas. Depois, ler o `clientes-index.md` e apresentar ao usuário um resumo:
quantos clientes, distribuição de status e o que precisa de ação.

### Só validar (sem reescrever)

```bash
python3 scripts/clientes-index.py --check
```

Sai com código ≠ 0 se houver qualquer inconsistência — útil para checagem rápida de saúde
do portfólio sem mexer no arquivo.

### Ver sem gravar

```bash
python3 scripts/clientes-index.py --stdout
```

## Quando rodar

- Sempre que abrir, pausar ou concluir um cliente.
- Depois de `/sync-skills` (para refletir skills agora em dia).
- Quando o usuário pedir uma visão geral do portfólio.
- Automaticamente ao final do `/novo-cliente` (já integrado).

## Ações de follow-up

Ao apresentar o índice, se houver inconsistências, oferecer a correção certa:

- Skills desatualizadas → rodar `/sync-skills <slug>`.
- Slug fora do padrão → registrar como dívida de migração (decisão atual: não migrar os
  clientes antigos automaticamente; ver Sprint 04).
- Sem identidade → sugerir rodar `/instalar` no repo do cliente.
