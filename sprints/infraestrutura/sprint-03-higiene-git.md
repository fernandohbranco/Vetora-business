# Sprint 03 — Higiene de Git

> Sprint curta e técnica. Saída: o container deixa de rastrear o trabalho dos clientes; cada repo de cliente fica isolado e íntegro.

---

## Objetivo

Hoje `clientes/` não está no `.gitignore` do container e os repos de cliente não são submódulos — são repos git aninhados soltos. Isso arrisca o git do container tentar rastrear (ou confundir) o trabalho dos clientes. Decisão fechada: `clientes/*` no `.gitignore` do container, cada cliente totalmente independente.

---

## Passo 1 — Ignorar clientes no container

- [x] Adicionar `clientes/` ao `.gitignore` do container
- [x] Verificar `git -C vetora status` — conteúdo de `clientes/` não deve mais aparecer
- [x] Se algum arquivo de cliente já foi commitado no container, remover do índice (`git rm --cached`) sem apagar do disco — N/A: nada de `clientes/` estava rastreado

## Passo 2 — Integridade dos repos de cliente

- [x] Confirmar que cada um dos 8 repos de cliente tem `.git` próprio
- [x] (Opcional) Verificar/configurar remote de cada cliente
- [x] Confirmar `.DS_Store` ignorado em todos (vi `.DS_Store` espalhado) — RoseArts não tinha `.gitignore`; criado

## Passo 3 — Documentar a regra

- [x] Registrar no `CLAUDE.md` do container: `clientes/` é local, não versionado pelo container; cada cliente versiona a si mesmo

---

## Critérios de "pronto"

- [x] `git -C vetora status` não lista nada dentro de `clientes/`
- [x] Nenhum arquivo de cliente rastreado pelo container
- [x] Cada repo de cliente tem `.git` próprio e funcional
- [x] Regra documentada no `CLAUDE.md`

---

## Próxima sprint

**Sprint 04 — Template-mestre + `/novo-cliente`**
Scaffold padronizado para abrir cliente novo sem drift.
