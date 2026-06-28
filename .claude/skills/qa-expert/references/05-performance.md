# Referência: Performance e Observabilidade

## O que verificar

### 1. Observabilidade — Os Três Pilares

#### Logs
- Existe biblioteca de logging estruturado? (Winston, Pino, structlog, Zap, Logrus)
- Logs são em JSON (estruturado) ou texto livre?
- Níveis de log usados corretamente? (ERROR, WARN, INFO, DEBUG)
- Request ID / Correlation ID propagado entre serviços?
- Logs de auditoria para ações críticas?
- `console.log` / `print` espalhados no código de produção?

#### Métricas
- Existe coleta de métricas? (Prometheus, Datadog, CloudWatch, New Relic)
- Métricas de negócio coletadas (não só infra)?
- Latência de endpoints sendo medida (p50, p95, p99)?
- Taxa de erros monitorada?
- Alertas configurados com thresholds sensatos?

#### Traces / Rastreamento Distribuído
- OpenTelemetry configurado?
- Spans propagados em chamadas HTTP entre serviços?
- Banco de dados / filas instrumentados?
- APM ativo? (Jaeger, Zipkin, Datadog APM, AWS X-Ray)

### 2. Performance — Backend

#### Banco de Dados
- N+1 queries? (loop que faz query por iteração)
- Índices nos campos mais consultados (WHERE, JOIN, ORDER BY)?
- Queries sem LIMIT em tabelas grandes?
- Transações longas / locks desnecessários?
- Connection pooling configurado?
- Queries lentas logadas? (slow query log)

#### Cache
- Existe estratégia de cache? (Redis, Memcached, in-memory)
- Cache invalidation tem TTL definido?
- Cache sendo usado em chamadas externas repetidas?
- Cache distribuído em ambiente multi-instância?

#### Async / Concorrência
- Operações pesadas bloqueiam a thread principal? (Node.js)
- Uso de filas para tarefas assíncronas (BullMQ, Celery, RabbitMQ, SQS)?
- Timeouts configurados em chamadas externas (HTTP, DB)?
- Circuit breaker implementado para dependências externas?

### 3. Performance — Frontend (se aplicável)
- Bundle size analisado? (webpack-bundle-analyzer, source-map-explorer)
- Code splitting implementado?
- Imagens otimizadas (WebP, lazy loading)?
- Lighthouse score conhecido?
- Web Vitals monitorados (LCP, FID/INP, CLS)?

### 4. Health Checks e Resiliência
- Endpoint `/health` ou `/healthz` existe?
- Liveness vs. Readiness checks separados (Kubernetes)?
- Graceful shutdown implementado?
- Retry com backoff exponencial em chamadas externas?
- Timeout em todas as chamadas de rede?

## Comandos para Investigar
```bash
# Buscar console.log em produção
grep -rn "console\.log\|print(" --include="*.ts" --include="*.js" --include="*.py" \
  src/ app/ lib/ 2>/dev/null | grep -v test | grep -v spec | wc -l

# Verificar se há biblioteca de logging
grep -rn "winston\|pino\|bunyan\|structlog\|loguru\|zap\|logrus" \
  package.json requirements.txt go.mod 2>/dev/null

# Buscar N+1 suspeito (loops com queries)
grep -rn "\.find\|\.findOne\|\.query\|SELECT" --include="*.ts" --include="*.js" \
  src/ 2>/dev/null | head -20

# Verificar se há health check
grep -rn "health\|healthz\|ping\|ready\|live" --include="*.ts" --include="*.js" \
  src/ 2>/dev/null | grep -i "route\|get\|endpoint" | head -10
```

## Sinais de Alerta 🔴
- Sem nenhuma forma de logging estruturado
- `console.log` como única forma de debug em produção
- Sem métricas ou alertas
- N+1 queries visíveis em código de repository
- Sem timeout em chamadas HTTP externas
- Sem health check endpoint
- Sem cache em operações evidentemente cacheáveis

## Ferramentas Recomendadas
- **APM**: Datadog, New Relic, Elastic APM, Dynatrace
- **Logs**: Grafana Loki, ELK Stack, CloudWatch Logs
- **Métricas**: Prometheus + Grafana, Datadog Metrics
- **Tracing**: Jaeger, Zipkin, OpenTelemetry
- **DB**: pganalyze, Percona Monitoring, explain.depesz.com
