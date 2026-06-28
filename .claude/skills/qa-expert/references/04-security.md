# Referência: Segurança (OWASP + Dependências)

## O que verificar

### 1. OWASP Top 10 — Verificações Básicas

#### A01 — Broken Access Control
- Autorização verificada em todos os endpoints (não só autenticação)?
- Dados de um usuário acessíveis por outro? (IDOR)
- Rotas administrativas protegidas?
- Verificar: middlewares de auth, decorators, guards

#### A02 — Cryptographic Failures
- Senhas armazenadas com hash forte (bcrypt, argon2, scrypt)? Não MD5/SHA1 simples.
- Dados sensíveis em logs? (senhas, tokens, CPF, cartão)
- Comunicação interna entre serviços usa TLS?
- Chaves/certificados com validade e rotação?

#### A03 — Injection
- SQL Queries com concatenação de strings? (vs. prepared statements / ORM)
- Inputs do usuário usados em queries sem sanitização?
- NoSQL injection (MongoDB `$where`, etc.)?
- Command injection (`exec`, `shell`, `subprocess` com input do usuário)?

#### A05 — Security Misconfiguration
- Modo debug/verbose ativado em produção?
- CORS configurado com `*` (wildcard) em APIs privadas?
- Headers de segurança configurados? (CSP, HSTS, X-Frame-Options)
- Tratamento de erros expõe stack traces ao cliente?

#### A07 — Authentication Failures
- Tokens JWT: algoritmo `none` ou RS256 vs HS256 adequado?
- Refresh tokens com expiração?
- Rate limiting em endpoints de login?
- Sem bloqueio após múltiplas tentativas falhas?

#### A09 — Logging & Monitoring Failures
- Eventos de segurança sendo logados? (login, acesso negado, alteração de senha)
- Logs com dados sensíveis (tokens, senhas)?

### 2. Dependências Vulneráveis

```bash
# Node.js
npm audit 2>/dev/null | tail -20
npx audit-ci --moderate 2>/dev/null | tail -10

# Python
pip-audit 2>/dev/null | head -30
safety check 2>/dev/null | head -30

# Java (Maven)
mvn dependency-check:check 2>/dev/null | grep -A2 'VULNERABILITY\|CVE' | head -30

# Ruby
bundle audit check 2>/dev/null | head -20

# Go
govulncheck ./... 2>/dev/null | head -20
```

### 3. Segredos Expostos
```bash
# Verificar se há chaves, tokens, senhas hardcoded
grep -rn --include="*.ts" --include="*.js" --include="*.py" --include="*.env" \
  -E "(password|secret|api_key|apikey|token|private_key)\s*=\s*['\"][^'\"]{8,}" \
  . 2>/dev/null | grep -v 'test\|mock\|example\|placeholder' | head -20

# .env commitado?
git log --all --full-history -- "**/.env" 2>/dev/null | head -5

# Verificar .gitignore
cat .gitignore 2>/dev/null | grep -E '\.env|secret|credential'
```

### 4. Configurações de Segurança
- `.env.example` existe mas `.env` real não está no `.gitignore`?
- Variáveis de ambiente de produção documentadas?
- Rate limiting configurado nas APIs?
- Validação de entrada (input validation) nas APIs?

## Sinais de Alerta 🔴
- Vulnerabilidades `critical` ou `high` em dependências sem plano de atualização
- Senhas ou tokens no código-fonte ou no histórico git
- SQL queries por concatenação de strings
- CORS com `*` em APIs autenticadas
- Sem hash de senhas (ou usando MD5/SHA1)
- Modo debug ativo sem verificação de ambiente
- `.env` no repositório

## Ferramentas Recomendadas
- **Geral**: Snyk, OWASP ZAP, Trivy
- **SAST**: Semgrep, SonarQube, Bandit (Python), ESLint-security
- **Secrets**: TruffleHog, GitLeaks, detect-secrets
- **Deps**: Dependabot, Renovate, npm audit, pip-audit
