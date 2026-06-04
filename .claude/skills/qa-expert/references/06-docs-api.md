# Referência: Documentação e Contratos de API

## O que verificar

### 1. Documentação do Projeto
- Existe `README.md` na raiz?
- O README cobre:
  - [ ] O que é o projeto (propósito, contexto)
  - [ ] Como configurar localmente (pré-requisitos, passo a passo)
  - [ ] Variáveis de ambiente necessárias
  - [ ] Como rodar os testes
  - [ ] Como fazer deploy
  - [ ] Arquitetura básica / diagrama
- Existe `CONTRIBUTING.md` para guiar contribuidores?
- Existe `CHANGELOG.md` ou release notes?
- Decisões arquiteturais documentadas (ADR — Architecture Decision Records)?

### 2. Documentação de API REST
- Existe especificação OpenAPI / Swagger?
  ```bash
  find . -name 'openapi*' -o -name 'swagger*' 2>/dev/null | head -10
  ```
- A spec está atualizada (não desatualizada em relação ao código)?
- Endpoint de UI disponível? (`/api-docs`, `/swagger-ui`)
- Respostas de erro documentadas com exemplos?
- Autenticação documentada?
- Exemplos de request/response em cada endpoint?

### 3. Documentação de API GraphQL (se aplicável)
- Schema documentado com descriptions?
- Playground disponível?
- Deprecation strategy definida?

### 4. Contratos de API
- Existe versionamento de API? (`/v1/`, `/v2/`, headers)
- Breaking changes são comunicados com antecedência?
- Existe Consumer-Driven Contract Testing? (Pact, Spring Cloud Contract)
- APIs internas têm contratos formalizados entre times?
- Mocks de API disponíveis para desenvolvimento paralelo?

### 5. Documentação do Código
- Funções públicas/exportadas têm JSDoc / docstrings / godoc?
- Tipos complexos estão documentados?
- Comentários explicam decisões não-óbvias?
- Sem "comment-driven development" (comentários redundantes que só repetem o código)?

### 6. Documentação de Infraestrutura e Operações
- Runbook para incidentes comuns?
- Diagrama de arquitetura atualizado?
- Dependências externas documentadas (com versões, SLAs)?
- Processo de on-boarding para novos devs documentado?

## Comandos para Investigar
```bash
# Verificar README
wc -l README.md 2>/dev/null || echo "README não encontrado"
head -50 README.md 2>/dev/null

# Verificar OpenAPI
find . -name 'openapi*.yml' -o -name 'openapi*.yaml' -o -name 'openapi*.json' \
       -o -name 'swagger*.yml' -o -name 'swagger*.yaml' 2>/dev/null | head -5

# Verificar se há decorators de documentação (NestJS, FastAPI, Springdoc)
grep -rn "@ApiProperty\|@ApiOperation\|@Schema\|Field(description" \
  --include="*.ts" --include="*.py" src/ 2>/dev/null | wc -l

# Verificar docstrings Python
grep -rn '"""' --include="*.py" src/ app/ 2>/dev/null | wc -l

# Verificar JSDoc
grep -rn '/\*\*' --include="*.ts" --include="*.js" src/ 2>/dev/null | wc -l

# Verificar ADRs
find . -name 'ADR*' -o -name 'adr*' -o -path '*/docs/decisions/*' 2>/dev/null | head -10
```

## Avaliação da Qualidade do README
Pontue de 0–10:
- Existe: +2
- Tem setup local: +2
- Tem variáveis de ambiente: +1
- Tem como rodar testes: +1
- Tem arquitetura/contexto: +2
- Está atualizado (sem instruções quebradas óbvias): +2

## Sinais de Alerta 🔴
- README inexistente ou com menos de 20 linhas
- API sem nenhuma documentação (nem comentários)
- Spec OpenAPI existe mas está flagrantemente desatualizada
- Sem versionamento de API em projeto com clientes externos
- Sem documentação de variáveis de ambiente necessárias

## Ferramentas Recomendadas
- **OpenAPI**: Swagger UI, Redoc, Stoplight
- **Geração automática**: NestJS Swagger, FastAPI, Springdoc
- **Contract Testing**: Pact, Spring Cloud Contract
- **Diagramas**: Mermaid (in-markdown), C4 Model, draw.io
- **ADR**: adr-tools, Log4brains
