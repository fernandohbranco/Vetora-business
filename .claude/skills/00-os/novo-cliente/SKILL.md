---
name: novo-cliente
description: >
  Abre um cliente novo como um repo VetoraOS padronizado, sem o drift de clones ad hoc.
  Faz entrevista curta (nome, tipo de negócio, serviços), instancia o esqueleto canônico
  em clientes/<Nome>/<slug>/, gera o CLAUDE.md base, roda /sync-skills para instalar as
  skills canônicas, confirma o branding e inicializa o .git do cliente. Use quando o
  usuário disser "novo cliente", "/novo-cliente", "abrir cliente", "criar repo de cliente"
  ou "cadastrar cliente novo".
---

# /novo-cliente — Scaffold de cliente VetoraOS

Skill interna da VETORA (não vai pros clientes). Resolve o drift de origem: em vez de
clonar um template antigo à mão (o que gerou o "MazyOS" e estruturas divergentes), esta
skill instancia um repo de cliente a partir de **uma fonte canônica única** e o liga ao
container VETORA num passo só.

> Esqueleto canônico: `templates/cliente-base/`
> Skills canônicas: `templates/skills-cliente/` (via `/sync-skills`)
> Engine: `scripts/novo-cliente.py`
> Convenção: `clientes/<Nome Visível>/<slug>/`, com `<slug>` em **kebab-case**

## Princípios

- **Fonte única:** a estrutura nasce de `templates/cliente-base/`. Pra mudar o que clientes
  novos recebem, edite o esqueleto — nunca o cliente gerado.
- **Branding por construção:** não há config de marca por cliente. As skills sobem a árvore
  até o marcador `.vetora-container` na raiz do container. Como o cliente vive dentro de
  `clientes/`, a marca VETORA já está ligada. A skill só confirma o marcador.
- **Skills via sync:** as skills operacionais chegam por `/sync-skills`, nunca copiadas à
  mão. Assim o cliente novo já nasce alinhado com todos os outros.
- **Cliente independente:** cada cliente tem `.git` próprio e é ignorado pelo git do
  container (ver regra em `CLAUDE.md` do container).

## Workflow

### 1. Entrevista curta

Coletar com o usuário (uma pergunta de cada vez, ou tudo junto se já vier no pedido):

- **Nome visível** do cliente (ex: "Padaria do Zé") — vira a pasta `<Nome Visível>/`
- **Tipo de negócio** (ex: padaria de bairro, clínica, e-commerce)
- **Serviços contratados** (ex: gestão de redes, SEO local, identidade visual)

O slug é derivado automaticamente do nome (kebab-case). Confirmar o slug proposto com o
usuário antes de criar; aceitar override se ele preferir outro.

### 2. Conferir antes de escrever (dry-run)

```bash
python3 scripts/novo-cliente.py --nome "Padaria do Zé" --dry-run
```

Mostra o slug derivado, o destino, a lista de arquivos que seriam criados e se o marcador
`.vetora-container` está presente. Revisar com o usuário. Se o slug não agradar, repetir
com `--slug <slug-desejado>`.

### 3. Criar

```bash
python3 scripts/novo-cliente.py \
  --nome "Padaria do Zé" \
  --servicos "Gestão de redes, SEO local, identidade visual"
```

Em um comando, o engine:

1. Cria `clientes/Padaria do Zé/padaria-do-ze/` com a estrutura canônica e os placeholders
   resolvidos (`{{NOME}}`, `{{SLUG}}`, `{{DATA}}`, `{{SERVICOS}}`).
2. Confirma o marcador `.vetora-container` (branding ligado).
3. Roda `git init` no repo do cliente (`.git` próprio).
4. Roda `scripts/sync-skills.py <slug>` para instalar as skills canônicas + `AGENTS.md` e
   gravar o `skills-lock.json`.
5. Roda `scripts/clientes-index.py` para regenerar o `clientes-index.md` (Sprint 05),
   mantendo o índice de portfólio vivo com o cliente novo já listado.

Flags úteis: `--slug <slug>` (override), `--no-git`, `--no-sync`, `--no-index` (pular etapas).

### 4. Validar

Confirmar que o repo nasceu correto:

```bash
ls "clientes/Padaria do Zé/padaria-do-ze"                          # estrutura canônica
git -C "clientes/Padaria do Zé/padaria-do-ze" rev-parse --git-dir # .git próprio
python3 scripts/sync-skills.py --dry-run padaria-do-ze            # deve dar "em dia (0 diffs)"
```

Checklist de "nasceu certo":
- [ ] `_memoria/`, `identidade/`, `marketing/`, `saidas/`, `dados/`, `scripts/` presentes
- [ ] `CLAUDE.md` e `README.md` com o nome do cliente resolvido
- [ ] `.claude/skills/` com as skills canônicas + `skills-lock.json` em dia
- [ ] `.git` próprio inicializado
- [ ] cliente não aparece em `git status` do container (ignorado por `clientes/`)

### 5. Próximos passos (informar o usuário)

- Abrir o repo do cliente e rodar `/instalar` para preencher `_memoria/` e `identidade/`
  na entrevista de onboarding.
- (Opcional) Criar o remote no GitHub e dar o primeiro push de dentro do repo do cliente.

## Observações

- **Não migra clientes antigos.** Esta skill é para clientes **novos**. Os 8 existentes
  seguem na estrutura atual até uma migração dedicada.
- **Esqueleto vs skills.** `templates/cliente-base/` define pastas e arquivos base;
  `templates/skills-cliente/` define as skills. São fontes separadas, sincronizadas por
  scripts distintos (`novo-cliente.py` e `sync-skills.py`).
- **Pastas sob demanda** (`site/`, `produtos/`, `sprints/`, `_estado/`) não vêm no esqueleto
  — são criadas quando houver necessidade. Ver `templates/cliente-base/ESTRUTURA.md`.
