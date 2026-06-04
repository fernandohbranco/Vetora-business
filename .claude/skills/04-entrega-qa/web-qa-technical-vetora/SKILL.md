---
name: web-qa-technical-vetora
description: |
  Auditoria técnica completa de sites e landing pages — performance, SEO on-page,
  acessibilidade, segurança básica, qualidade de código e integração. Baseada no qa-expert
  com foco específico em projetos web da VETORA.
  Fase 4 do Método VETORA. Use quando o site ou LP está implementado e antes do go-live.
  Use quando o usuário disser "auditoria técnica", "revisar o código", "performance do site",
  "SEO técnico", "acessibilidade", "/web-qa-technical-vetora".
---

# /web-qa-technical-vetora — Auditoria Técnica Web VETORA

Auditoria técnica focada em sites e landing pages — performance, SEO, acessibilidade e qualidade de código. Baseada na skill `qa-expert` com escopo específico para projetos web.

## Quando ativar

- Quando o site ou LP está implementado e antes do go-live
- Quando o usuário quiser verificar performance, SEO técnico ou acessibilidade
- Quando o `vetora-qa-checklist` identificar itens técnicos para investigar
- Quando o usuário disser "auditoria técnica", "performance", "SEO técnico"

## O que faz

Realiza auditoria técnica em 5 dimensões: performance, SEO on-page, acessibilidade, segurança básica e qualidade de código/integração. Entrega relatório priorizado com ajustes específicos.

## O que NÃO faz

- Não faz revisão de copy ou identidade visual — isso é `vetora-qa-checklist`
- Não faz revisão de UX profunda — isso é `ux-review-vetora`
- Não implementa os ajustes — aponta o que corrigir e como

## Contexto VETORA obrigatório

Antes de auditar, consultar:
- `vetora-design-system` — para validar se tokens de design foram aplicados corretamente
- `qa-expert` — para auditoria técnica mais profunda se necessário

## Processo

### Passo 1 — Coletar informações

Perguntar ao usuário:
1. "Qual é a URL do site? (ou o caminho do arquivo HTML local)"
2. "Qual é o stack? (Astro, Next.js, HTML puro, etc.)"
3. "Tem acesso ao Google PageSpeed / Lighthouse?"
4. "Tem preferência de prioridade? (performance, SEO, acessibilidade)"

### Passo 2 — Auditoria de Performance

Verificar ou solicitar resultado do Lighthouse/PageSpeed:

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s ✅ | 2.5-4s ⚠️ | > 4s 🔴
- FID/INP (Interaction to Next Paint): < 200ms ✅ | 200-500ms ⚠️ | > 500ms 🔴
- CLS (Cumulative Layout Shift): < 0.1 ✅ | 0.1-0.25 ⚠️ | > 0.25 🔴

**Otimizações comuns a verificar:**
- [ ] Imagens em formato WebP/AVIF com lazy loading
- [ ] Fontes Google com `display=swap` e preconnect
- [ ] CSS crítico inline (above the fold)
- [ ] JavaScript deferido ou adiado
- [ ] Minificação de CSS e JS em produção

### Passo 3 — Auditoria de SEO On-Page

Para cada página principal:
- [ ] `<title>` único e descritivo (máx. 60 chars)
- [ ] `<meta description>` único (máx. 155 chars)
- [ ] H1 único por página
- [ ] Hierarquia de headings (H1 → H2 → H3) sem pular
- [ ] Alt text em todas as imagens relevantes
- [ ] URL amigável (sem parâmetros, sem underscore)
- [ ] `canonical` definido
- [ ] `robots.txt` e `sitemap.xml` presentes e corretos
- [ ] Open Graph (og:title, og:description, og:image, og:url)
- [ ] Schema.org básico (Organization, LocalBusiness se aplicável)

### Passo 4 — Auditoria de Acessibilidade

Verificar padrões WCAG 2.1 AA:
- [ ] Contraste de texto mínimo 4.5:1 (texto normal) / 3:1 (texto grande)
- [ ] Todos os elementos interativos acessíveis por teclado
- [ ] Links com texto descritivo (não "clique aqui")
- [ ] Formulários com labels associadas
- [ ] `lang` definido na tag `<html>`
- [ ] Skip link presente (para usuários de teclado)

### Passo 5 — Segurança Básica

- [ ] HTTPS ativo com certificado válido
- [ ] Headers de segurança configurados (CSP, X-Frame-Options, HSTS)
- [ ] Formulários com proteção contra spam (reCAPTCHA, honeypot)
- [ ] `.env` não exposto no repositório público
- [ ] Dependências sem vulnerabilidades conhecidas críticas

### Passo 6 — Qualidade de Código e Integração

- [ ] Console do navegador sem erros
- [ ] Links internos e externos funcionam (404 scanner)
- [ ] Formulários testados end-to-end (preenchimento → recebimento do email)
- [ ] Analytics configurado e disparando eventos corretamente
- [ ] Deploy automático funcionando (push → site atualizado)

### Passo 7 — Relatório Priorizado

| Categoria | Item | Criticidade | Ajuste sugerido |
|---|---|---|---|
| Performance | [item] | 🔴 Bloqueante | [o que fazer] |
| SEO | [item] | 🟡 Importante | [o que fazer] |
| Acessibilidade | [item] | 🟡 Importante | [o que fazer] |

## Critérios de aceite

- [ ] As 5 dimensões foram auditadas
- [ ] Core Web Vitals com pontuação conhecida
- [ ] Todos os itens 🔴 Bloqueantes identificados com ajuste específico
- [ ] Relatório claro o suficiente para implementar sem reunião adicional

## Output padrão

Relatório de auditoria técnica com: pontuação por dimensão, tabela de issues por criticidade, ajustes específicos com exemplos de código quando relevante.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial, baseada em qa-expert
