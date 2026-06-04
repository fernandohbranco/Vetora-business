# Referência: CI/CD e Gates de Qualidade

## O que verificar

### 1. Existência de Pipeline CI
- GitHub Actions, GitLab CI, CircleCI, Jenkins, Azure DevOps, Bitbucket Pipelines?
- O pipeline roda em PRs/MRs automaticamente?
- O pipeline roda em push para branches principais?
- Existe separação de ambientes (dev / staging / prod)?

### 2. Etapas Essenciais do Pipeline
Verificar se cada etapa existe:

| Etapa | Importância |
|-------|-------------|
| Install dependencies | Obrigatório |
| Lint / format check | Alta |
| Type check (se tipado) | Alta |
| Testes unitários | Obrigatório |
| Testes de integração | Alta |
| Build | Obrigatório |
| Security scan (deps) | Alta |
| Cobertura de testes com threshold | Média |
| Testes E2E | Média |
| SAST (análise estática de segurança) | Média |
| Deploy automático (CD) | Situacional |

### 3. Gates de Qualidade
- O pipeline **falha** se testes falharem? (não apenas avisa)
- Existe threshold de cobertura que bloqueia o merge?
- Lint com erros bloqueia o merge?
- Existe análise de qualidade (SonarQube, CodeClimate, Codacy)?
- PRs precisam de aprovação humana antes de merge?

### 4. Performance do Pipeline
- Tempo total de execução do pipeline (acima de 15 min é problemático)
- Cache de dependências configurado? (`actions/cache`, `cache:` no GitLab)
- Jobs paralelos onde possível?
- Testes sendo executados em paralelo?

### 5. Segurança do Pipeline
- Secrets/tokens expostos no código de pipeline?
- Uso correto de `${{ secrets.X }}` vs valor hardcoded?
- Imagens Docker de base com versão fixada (não `:latest`)?
- Permissões mínimas necessárias (principle of least privilege)?

### 6. Estratégia de Branch e Deploy
- Existe estratégia clara? (GitFlow, trunk-based, etc.)
- Proteção de branch `main`/`master` ativada?
- Rollback é possível e documentado?
- Deploy é idempotente?

### 7. Artefatos e Versionamento
- Build artifacts são versionados/taggeados?
- Docker images têm tags semânticas (não só `latest`)?
- Existe CHANGELOG ou release notes automatizadas?

## Comandos para Investigar
```bash
# Ver estrutura do pipeline
cat .github/workflows/*.yml 2>/dev/null
cat .gitlab-ci.yml 2>/dev/null
cat Jenkinsfile 2>/dev/null

# Verificar se tem cache configurado
grep -r 'cache' .github/workflows/ 2>/dev/null | grep -v '#'

# Verificar thresholds de cobertura
grep -r 'coverage\|threshold\|minimum' .github/workflows/ 2>/dev/null
```

## Sinais de Alerta 🔴
- Sem pipeline de CI
- Pipeline que nunca falha (sem gates reais)
- Secrets hardcoded no yaml do pipeline
- Deploy direto para prod sem staging
- Sem cache (pipeline lento desmotiva uso)
- Branch main sem proteção
- Imagens Docker com tag `:latest`
