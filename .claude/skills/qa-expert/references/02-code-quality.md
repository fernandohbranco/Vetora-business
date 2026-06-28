# Referência: Qualidade do Código

## O que verificar

### 1. Complexidade Ciclomática
- Funções com muitos `if/else`, `switch`, loops aninhados
- Threshold: funções com complexidade > 10 merecem refatoração
- Arquivos com > 300 linhas são candidatos a divisão
- Funções com > 30 linhas geralmente fazem coisas demais

### 2. Code Smells Clássicos
- **God Class/God Function**: uma classe/função que faz tudo
- **Long Parameter List**: funções com > 4–5 parâmetros
- **Duplicação de código**: blocos similares em múltiplos lugares (DRY)
- **Dead Code**: funções, variáveis, imports nunca usados
- **Magic Numbers/Strings**: valores literais sem nome (`if (status === 3)`)
- **Feature Envy**: método que usa mais dados de outra classe do que da própria
- **Shotgun Surgery**: uma mudança exige alterações em muitos lugares
- **Primitive Obsession**: usar string/int onde um tipo próprio seria melhor

### 3. Princípios SOLID
- **S** — Single Responsibility: classes/módulos com uma razão para mudar
- **O** — Open/Closed: extensível sem modificar código existente
- **L** — Liskov: subtipos substituem seus tipos base
- **I** — Interface Segregation: interfaces pequenas e específicas
- **D** — Dependency Inversion: depender de abstrações, não implementações

### 4. Tratamento de Erros
- Existem `catch` vazios ou que só fazem `console.log`?
- Erros são tipados/classificados ou todos são genéricos?
- Existe estratégia consistente de error handling (middleware, Result type, etc.)?
- Exceções de negócio vs. erros técnicos estão separados?

### 5. Nomenclatura e Legibilidade
- Nomes de variáveis/funções são auto-explicativos?
- Abreviações obscuras? (`usr`, `tmp`, `d`, `cb`)
- Inconsistência de convenções (`camelCase` vs `snake_case` misturados)?
- Comentários explicam o "porquê", não o "o quê"?
- Comentários desatualizados (contradizem o código)?

### 6. Configuração e Linters
- Existe configuração de linter? (ESLint, Pylint, Checkstyle, golint)
- Existe formatter configurado? (Prettier, Black, gofmt, Spotless)
- Configurações são razoáveis ou cheias de `disable` / `ignore`?
- `.editorconfig` presente para consistência entre editores?

### 7. Gestão de Dependências
- `package.json` / `requirements.txt` com versões fixadas ou com ranges perigosos?
- Dependências desnecessárias ou abandonadas?
- Dependências de dev misturadas com prod?
- Lock file commitado? (`package-lock.json`, `poetry.lock`, `go.sum`)

## Comandos Úteis para Investigar
```bash
# Arquivos muito grandes
find . -name '*.ts' -o -name '*.js' -o -name '*.py' | xargs wc -l 2>/dev/null \
  | sort -rn | head -20

# Imports não usados / dead code (Node)
npx ts-unused-exports tsconfig.json 2>/dev/null | head -20

# Duplicação (se tiver jscpd instalado)
npx jscpd --min-lines 10 --reporters console . 2>/dev/null | head -40
```

## Sinais de Alerta 🔴
- Arquivos > 500 linhas em quantidade significativa
- Sem linter configurado
- `eslint-disable` / `# noqa` em excesso
- Funções com > 5 parâmetros sem objeto de configuração
- `any` em excesso em projetos TypeScript
- Tratamento de erro inexistente ou silencioso
