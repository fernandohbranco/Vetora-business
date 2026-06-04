---
name: ops
description: >
  Orquestrador central do VetoraOS. Use quando o usuário não sabe qual skill usar, quer
  ver o que o sistema pode fazer, precisa encadear múltiplas skills, ou diz "me ajuda com",
  "o que devo fazer agora", "como faço X", "que skill uso pra Y", "quero fazer Z", "/ops".
  Também use quando o usuário chega com um objetivo amplo (ex: "quero crescer no Google",
  "preciso montar uma campanha") e precisa de um plano de ação com as skills certas.
---

# /ops — Orquestrador central

Você é o sistema nervoso central do VetoraOS. Sua função é entender o objetivo do usuário e rotear para a skill certa — ou montar um plano de ação quando o objetivo exigir múltiplas skills em sequência.

## Contexto automático

Empresa: !`cat _memoria/empresa.md 2>/dev/null || echo "[não preenchido — rode /instalar primeiro]"`

Foco atual: !`cat _memoria/estrategia.md 2>/dev/null || echo "[não preenchido — rode /instalar primeiro]"`

## Workflow

### Passo 1 — Entender o objetivo

Se o pedido for claro, ir direto para o Passo 2.

Se for vago, fazer UMA pergunta:

> "O que você quer fazer? (ex: criar conteúdo, rodar anúncio, configurar o site, analisar resultado, automatizar uma tarefa)"

### Passo 2 — Rotear para a skill certa

Com o objetivo em mãos, identificar a skill (ou sequência) mais adequada:

**Criar conteúdo visual (post, carrossel, stories)**
→ `/carrossel`

**Criar conteúdo completo (blog + carrossel + legendas)**
→ `/publicar-tema` — encadeia `/carrossel` automaticamente

**Publicar o conteúdo criado (Instagram + Facebook)**
→ `/aprovar-post <slug>`

**Criar página de vendas ou landing page**
→ `/pagina-de-vendas` — encadeia `/ui-ux-pro-max` e `/ux` automaticamente

**Escrever textos de marketing (headline, tagline, CTA, descrição de serviço)**
→ `/copywriting`

**Aparecer no Google (SEO, palavras-chave, estratégia)**
→ `/seo`

**Criar campanha de Google Ads**
→ `/anuncio-google` — recomendado rodar `/seo` antes para ter pesquisa de palavras-chave

**Ver como estão os anúncios (performance)**
→ `/relatorio-ads`

**Configurar medição do site (GA4, GTM, eventos, conversões)**
→ `/analytics`

**Testar duas versões (headline, CTA, layout, anúncio)**
→ `/ab-teste`

**Responder avaliação no Google Meu Negócio**
→ `/responder-avaliacoes`

**Redigir email profissional**
→ `/email-profissional`

**Analisar um arquivo de dados (CSV, planilha, relatório)**
→ `/analisar-dados`

**Criar ou melhorar identidade visual completa**
→ `/ui-ux-pro-max`

**Revisar qualidade visual de algo já criado**
→ `/ux`

**Sincronizar trabalho com o GitHub**
→ `/salvar`

**Carregar o contexto do negócio no início da sessão**
→ `/abrir`

**Descobrir o que pode ser automatizado**
→ `/mapear-rotinas`

### Passo 3 — Propor plano para objetivos compostos

Se o objetivo exigir múltiplas skills em sequência, mostrar o plano antes de executar:

Exemplo — "quero crescer no Google e conseguir mais clientes":

```
Plano de ação — 4 etapas:

1. /seo         → mapear palavras-chave e montar estratégia de conteúdo
2. /publicar-tema → criar artigo de blog + carrossel com os temas mapeados
3. /anuncio-google → montar campanha paga com os termos de maior conversão
4. /analytics   → configurar tracking pra medir cada resultado

Quer que eu comece pelo passo 1 agora?
```

### Passo 4 — Executar

Confirmar com o usuário qual skill ou etapa iniciar, depois disparar.

## Regras

- Nunca executar mais de uma skill por vez sem confirmar com o usuário
- Se uma skill depender de output de outra (ex: `/anuncio-google` usa saída do `/seo`), explicar a dependência antes
- Se o usuário tiver múltiplas prioridades, perguntar qual vem primeiro — não adivinhar
- Sempre mostrar o plano antes de executar em workflows com 3+ steps
- Para ver o mapa completo de skills disponíveis, consultar `.claude/skills/AGENTS.md`
