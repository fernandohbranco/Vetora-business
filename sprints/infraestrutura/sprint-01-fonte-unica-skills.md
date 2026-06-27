# Sprint 01 — Fonte Única de Skills + Limpeza de Vazamentos

> Base técnica de tudo. Sem isso, qualquer melhoria depois precisa ser repetida 8 vezes.
> Saída: uma versão canônica de cada skill operacional + skill `/sync-skills` + 8 clientes alinhados e limpos.

---

## Objetivo

Hoje cada cliente carrega sua própria cópia de ~24 skills (100K–268K por repo) e os conjuntos divergem (15 a 24 skills). Não há fonte única da verdade — corrigir um bug exige repetir em 8 lugares. Esta sprint elege uma versão canônica de cada skill, cria o mecanismo de sincronização e limpa os vazamentos de template no mesmo passo.

---

## Passo 0 — Fechar decisões em aberto

Antes de mexer em arquivo:

- [ ] **Conjunto canônico:** confirmar baseline = superset de 24 skills (de `DrMarcioGrave` / `prezaro-barbearia` / `priscila-pes-de-seda`)
- [ ] Identificar se alguma skill é VETORA-interna e **não** deve ir pros clientes
- [ ] **Nome do OS:** confirmar matar `MazyOS`; decidir se mantém `VetoraOS` genérico ou migra para `<Cliente>OS`

---

## Passo 1 — Auditoria e diff das skills

- [ ] Listar as skills de cada um dos 8 repos de cliente
- [ ] Para cada skill que existe em mais de um repo, comparar conteúdo (`diff`) e marcar divergências
- [ ] Registrar tabela: skill × cliente × (presente? / versão diverge?)
- [ ] Decidir, para cada skill divergente, qual versão vira canônica (regra: a mais completa e atual)

## Passo 2 — Criar a biblioteca canônica

- [ ] Criar `templates/skills-cliente/` no container
- [ ] Copiar a versão canônica de cada skill operacional para lá
- [ ] **Limpar vazamentos durante a cópia:** remover `MazyOS` (34 arquivos), normalizar nome do OS conforme decisão do Passo 0
- [ ] Garantir que nenhuma skill canônica tenha referência hardcoded a um cliente específico (devem ler `identidade/` relativamente)

## Passo 3 — Criar a skill `/sync-skills`

- [ ] Criar `.claude/skills/00-os/sync-skills/SKILL.md` no container
- [ ] Comportamento: lê `templates/skills-cliente/` → escreve em cada `clientes/*/*/.claude/skills/`
- [ ] Grava hash de cada skill no `skills-lock.json` do cliente (padrão que já existe em `priscila-pes-de-seda`)
- [ ] Suporta `--dry-run` (mostra diff sem aplicar) e relatório de diferenças por cliente
- [ ] Suporta alvo único (`/sync-skills rancho517`) e todos (`/sync-skills --all`)

## Passo 4 — Rodar e validar

- [ ] `/sync-skills --dry-run --all` — revisar o diff de cada cliente
- [ ] Aplicar nos 8 clientes
- [ ] Confirmar que cada `skills-lock.json` lista as skills canônicas com hash
- [ ] Registrar no catálogo de skills do `CLAUDE.md` a nova `/sync-skills`

---

## Critérios de "pronto"

- [ ] `templates/skills-cliente/` contém a versão canônica de cada skill operacional
- [ ] `/sync-skills --dry-run --all` retorna 0 diffs após o sync
- [ ] `grep -rl MazyOS clientes/` retorna vazio
- [ ] Os 8 clientes têm o mesmo conjunto de skills (ou subconjunto justificado e documentado)
- [ ] Conserto de bug em 1 skill canônica → propaga pros 8 com um comando
- [ ] `/sync-skills` está no catálogo do `CLAUDE.md`

---

## Referências

- Diagnóstico e decisões: `sprints/infraestrutura/README.md`
- Padrão de lock existente: `clientes/Priscila - Pés de Seda/priscila-pes-de-seda/skills-lock.json`

---

## Próxima sprint

**Sprint 02 — Marca VETORA + `/relatorio`**
Camada de branding VETORA para todo entregável que vai da VETORA para o cliente.
