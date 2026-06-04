# Referência: Cobertura de Testes

## O que verificar

### 1. Existência e Estrutura de Testes
- Existe diretório de testes? Está organizado (`unit/`, `integration/`, `e2e/`)?
- Nomenclatura consistente (`.test.ts`, `_test.go`, `Test*.java`, etc.)?
- Testes colocalizados com o código ou em diretório separado?

### 2. Cobertura de Testes Unitários
- Comandos para verificar: `jest --coverage`, `pytest --cov`, `go test -cover`, `mvn jacoco:report`
- Thresholds esperados: **mínimo 70%**, **bom 80%+**, **excelente 90%+**
- Verificar: branches, statements, functions, lines
- Checar se há arquivos críticos (services, utils, validators) sem cobertura

### 3. Testes de Integração
- Existem testes que verificam integração entre módulos?
- Banco de dados está sendo mockado ou usa instância real de teste?
- APIs externas estão sendo mockadas (evitar chamadas reais em CI)?
- Existe `docker-compose.test.yml` ou similar para dependências?

### 4. Testes E2E
- Existe framework de E2E? (Cypress, Playwright, Selenium, etc.)
- Fluxos críticos estão cobertos? (login, checkout, CRUD principal)
- Testes E2E rodam em CI ou só localmente?
- Existe ambiente de staging dedicado para E2E?

### 5. Qualidade dos Testes (não só quantidade)
- Testes têm nomes descritivos? (`should return 404 when user not found`)
- Seguem padrão AAA (Arrange, Act, Assert)?
- Existem testes que nunca falham (sempre green mesmo com bug)?
- Há testes com múltiplas assertions não relacionadas?
- Testes dependem de ordem de execução?
- Uso de `test.skip` ou `xit` abandonados?

### 6. Test Doubles
- Uso adequado de mocks, stubs, spies, fakes?
- Mocks excessivos que tornam o teste inútil?
- Fakes de banco (in-memory) para testes rápidos?

## Sinais de Alerta 🔴
- Nenhum arquivo de teste encontrado
- Cobertura < 40%
- Testes E2E sem CI
- Arquivos de serviço/domínio sem qualquer teste
- `console.log` dentro de testes (esquecido de debugar)
- `sleep()`/timeouts hardcoded em testes

## Ferramentas por Stack
- **Node/TS**: Jest, Vitest, Mocha, Playwright, Cypress
- **Python**: pytest, unittest, coverage.py, behave
- **Java**: JUnit 5, Mockito, TestContainers, JaCoCo
- **Go**: testing stdlib, testify, gomock
- **Ruby**: RSpec, Minitest, Capybara
- **.NET**: xUnit, NUnit, Moq, Coverlet
