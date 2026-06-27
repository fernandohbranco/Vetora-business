---
name: sync-skills
description: >
  Propaga a biblioteca canônica de skills (templates/skills-cliente/) para os repos de
  cliente em clientes/*/*/. Mantém os 8 clientes alinhados sem drift — corrigir um bug em
  uma skill e rodar /sync-skills atualiza todos. Use quando o usuário disser "sincronizar
  skills", "sync skills", "/sync-skills", "atualizar skills dos clientes", ou depois de editar
  qualquer skill em templates/skills-cliente/.
---

# /sync-skills — Fonte única de skills dos clientes

Skill interna da VETORA (não vai pros clientes). Resolve o drift: a versão canônica de cada
skill operacional vive em `templates/skills-cliente/` no container, e esta skill copia para
cada repo de cliente, gravando o hash no `skills-lock.json` de cada um.

> Fonte da verdade: `templates/skills-cliente/`
> Alvo: `clientes/<Nome>/<slug>/.claude/skills/`
> Engine: `scripts/sync-skills.py`

## Princípios

- **Aditivo, nunca destrutivo:** skills que o cliente tem e a biblioteca não são reportadas
  como `extra` e **não** são apagadas. Pra remover uma skill de um cliente, faça à mão.
- **Hash cobre a skill inteira:** `SKILL.md` + arquivos de apoio (`outputs.md`, `references/`).
- **VetoraOS genérico:** as skills canônicas não têm nome de cliente hardcoded — leem
  `identidade/` e `_memoria/` do próprio repo por caminho relativo.

## Workflow

### 1. Sempre começar com dry-run

```bash
python3 scripts/sync-skills.py --dry-run --all
```

Mostra, por cliente: `+ novas`, `~ alteradas`, `= em dia`, `! extra`. Revisar o diff antes
de escrever. Se algo inesperado aparecer (ex: uma skill `alterada` que não devia mudar),
investigar antes de aplicar.

### 2. Aplicar

Todos os clientes:
```bash
python3 scripts/sync-skills.py --all
```

Um cliente só (pelo slug):
```bash
python3 scripts/sync-skills.py rancho517
```

Cada aplicação reescreve as pastas de skill no cliente e regrava `skills-lock.json` com o
hash de cada skill canônica.

### 3. Validar

```bash
python3 scripts/sync-skills.py --dry-run --all   # deve retornar 0 diffs
```

## Quando editar uma skill

1. Editar **apenas** em `templates/skills-cliente/<skill>/`.
2. Rodar `/sync-skills --dry-run --all` pra conferir o alcance.
3. Aplicar com `/sync-skills --all`.
4. `/salvar` pra commitar (container + clientes seguem repos git separados).

Nunca editar uma skill direto no repo do cliente — a próxima sincronização sobrescreve.

## Adicionar uma skill nova ao conjunto canônico

1. Criar a pasta em `templates/skills-cliente/<skill>/` com `SKILL.md` (+ apoio).
2. Garantir zero referência hardcoded a cliente específico.
3. `/sync-skills --all`.

## Argumentos

| Forma | Efeito |
|---|---|
| `--dry-run --all` | Diff de todos os clientes, sem escrever |
| `--all` | Aplica em todos |
| `<slug>` | Aplica só no cliente do slug (ex: `rancho517`) |
| `--dry-run <slug>` | Diff de um cliente só |
