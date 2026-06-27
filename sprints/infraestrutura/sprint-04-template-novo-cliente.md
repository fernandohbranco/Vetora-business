# Sprint 04 — Template-Mestre + Skill `/novo-cliente`

> Saída: abrir um cliente novo vira um comando que produz um repo padronizado, com skills canônicas e branding já ligados — sem o drift que criou a bagunça atual.

---

## Objetivo

O drift atual nasceu de repos clonados ad hoc de templates antigos (daí o "MazyOS"). `templates/` só tem `catalogo.md` e perfis de CLAUDE.md — não há esqueleto canônico de cliente. Esta sprint define esse esqueleto e cria uma skill que o instancia de forma consistente.

---

## Passo 0 — Fechar decisão de nomenclatura

- [x] Padronizar nomes para kebab-case (hoje `DrMarcioGrave` destoa) — decidido: slug sempre kebab-case, vale p/ clientes novos (os 8 existentes não migram agora)
- [x] Decidir se achata `clientes/<Nome Visível>/<slug>/` → `clientes/<slug>/` — decidido: **manter pasta dupla**
- [x] Aplicar a decisão na convenção do `CLAUDE.md` do container

## Passo 1 — Definir esqueleto canônico de cliente

- [x] Listar pastas-padrão (ex: `_memoria`, `identidade`, `marketing`, `saidas`, `dados`, `scripts`) e opcionais (`site`, `sprints`, `produtos`)
- [x] Documentar quais são obrigatórias vs sob demanda
- [x] Definir o `CLAUDE.md` base do cliente (herdar de `templates/perfis/`, incluir a regra de marca VETORA vs cliente da Sprint 02)

## Passo 2 — Criar a skill `/novo-cliente`

- [x] Criar `.claude/skills/00-os/novo-cliente/SKILL.md` no container
- [x] Entrevista curta: nome do cliente, tipo de negócio, serviços contratados
- [x] Scaffold automático:
  - [x] Cria a pasta do cliente com a estrutura canônica
  - [x] Gera `CLAUDE.md` do cliente a partir do perfil certo
  - [x] Roda `/sync-skills <cliente>` para instalar as skills canônicas
  - [x] Liga o branding (confirma presença do marcador `.vetora-container`)
  - [x] Inicializa `.git` do cliente
  - [x] Adiciona o cliente ao índice (preparado para a Sprint 05)

## Passo 3 — Validar

- [x] `/novo-cliente teste` cria um repo completo e padronizado
- [x] Confirmar que skills, branding e CLAUDE.md já vêm corretos
- [x] Remover o cliente de teste

---

## Critérios de "pronto"

- [x] Esqueleto canônico de cliente documentado
- [x] `/novo-cliente` gera repo padronizado em um comando
- [x] Cliente novo já nasce com skills canônicas (via `/sync-skills`) e branding ligado
- [x] Convenção de nomes aplicada e documentada no `CLAUDE.md`
- [x] `/novo-cliente` no catálogo do `CLAUDE.md`

---

## Próxima sprint

**Sprint 05 — Dashboard de Clientes**
Índice único com status de cada conta.
