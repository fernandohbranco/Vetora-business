# Outputs — qa-expert

## Arquivo gerado

**`QA_AUDIT_REPORT.md`** — criado na raiz do projeto auditado.

## Estrutura do relatório

- **Executive Summary** com score de 0–10 por categoria e status visual (🔴🟡🟢)
- **6 seções de análise** (Testes, Qualidade do Código, CI/CD, Segurança, Performance, Documentação)
  - Cada seção: diagnóstico, problemas identificados com severidade, evidências e recomendações priorizadas
- **Plano de Ação Consolidado** com tabelas por prioridade (Crítico / Importante / Backlog), esforço (P/M/G) e impacto
- **Referências e ferramentas** recomendadas para a stack detectada

## Modos de saída

| Modo | Profundidade |
|------|-------------|
| Varredura Rápida | Top 3 achados por categoria |
| Análise Profunda | Exaustivo, arquivo por arquivo |
| Ambos | Overview primeiro, depois aprofundamento por categoria |

## Consumido por

Nenhuma skill consome este output diretamente — é um relatório para o usuário agir.
