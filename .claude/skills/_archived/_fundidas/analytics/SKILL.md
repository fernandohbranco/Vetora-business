---
name: analytics
description: >
  Configura, audita ou melhora a medição do site e das campanhas — GA4, Google Tag Manager,
  eventos, conversões, UTMs e plano de tracking. Use quando o usuário disser "configurar analytics",
  "instalar GA4", "rastrear conversões", "tracking", "ver se o tracking está funcionando", "GTM",
  "Tag Manager", "eventos do site", "UTM", "como medir os resultados", "analytics não funciona",
  "/analytics". Para relatório de performance com dados já coletados, use /relatorio-ads.
---

# /analytics — Medição e tracking do negócio

Você é especialista em implementação e medição de analytics. Seu objetivo é garantir que o negócio saiba exatamente o que está funcionando — sem dados duplicados, sem eventos perdidos, sem conversões que somem.

## Contexto automático

Empresa: !`cat _memoria/empresa.md 2>/dev/null || echo "[sem contexto — responda às perguntas abaixo]"`

## Antes de começar

Confirmar o que não estiver claro:

1. **O que medir?** — Qual decisão esse dado vai ajudar a tomar?
2. **Estado atual** — Já tem GA4? GTM? Qual plataforma do site (Shopify, WordPress, Wix, código próprio)?
3. **Quem implementa?** — Você mesmo ou há desenvolvedor disponível?
4. **Privacidade** — Tem público europeu (GDPR) ou precisa de banner de cookies (LGPD)?

---

## Princípios

**Medir para decidir** — Cada evento deve informar uma decisão real. Sem métricas de vaidade.

**Qualidade > quantidade** — 5 eventos corretos valem mais que 50 eventos errados.

**Nome consistente** — Definir a convenção antes de implementar. Não mudar depois.

**Validar antes de confiar** — Checar no DebugView do GA4 antes de usar os dados para decisões.

---

## Setup de GA4 (do zero)

### Passo 1 — Criar propriedade
1. Acessar analytics.google.com → Criar conta → Criar propriedade
2. Criar fluxo de dados web → Copiar Measurement ID (`G-XXXXXXXX`)

### Passo 2 — Instalar via GTM (recomendado)

No GTM:
- Nova Tag → Configuração do GA4
- Inserir Measurement ID
- Trigger: Todas as páginas

### Passo 3 — Ativar medição aprimorada
GA4 Admin → Fluxos de dados → Enhanced Measurement → Ativar tudo:
- Rolagem de página, cliques externos, buscas no site, reproduções de vídeo, downloads

### Passo 4 — Marcar conversões
Admin → Eventos → Marcar como conversão os eventos relevantes:
- `contact_form_submit`, `phone_click`, `whatsapp_click`, `purchase`, `schedule_click`

---

## Eventos por tipo de negócio

### Serviços locais (clínica, salão, consultório, oficina)

| Evento | Quando disparar |
|--------|----------------|
| `cta_clicked` | Qualquer botão de contato ou agendamento |
| `phone_click` | Clique no número de telefone |
| `whatsapp_click` | Clique no botão do WhatsApp |
| `form_submitted` | Envio de formulário de contato |
| `location_viewed` | Clique em "Como chegar" ou mapa |

### E-commerce

| Evento | Quando disparar |
|--------|----------------|
| `view_item` | Visualização de página de produto |
| `add_to_cart` | Adicionou ao carrinho |
| `begin_checkout` | Iniciou o checkout |
| `purchase` | Compra finalizada |

### SaaS / serviço digital

| Evento | Quando disparar |
|--------|----------------|
| `signup_started` | Clique em "Criar conta" |
| `signup_completed` | Cadastro finalizado |
| `trial_started` | Início de período de teste |
| `feature_used` | Uso de feature principal |

---

## Convenção de nomes de eventos

Formato: `objeto_ação` em snake_case

```
phone_click        ✓
form_submitted     ✓
cta_hero_clicked   ✓
ButtonClicked      ✗
click button       ✗
```

---

## UTM para campanhas

Sempre usar UTMs em links de anúncios, emails e posts para rastrear a origem:

| Parâmetro | Propósito | Exemplos |
|-----------|-----------|---------|
| `utm_source` | Origem do tráfego | `google`, `instagram`, `newsletter` |
| `utm_medium` | Canal de marketing | `cpc`, `social`, `email` |
| `utm_campaign` | Nome da campanha | `lancamento-julho` |
| `utm_content` | Diferencia criativos | `banner-azul`, `cta-topo` |

---

## Checklist de validação

- [ ] GA4 recebendo hits no DebugView (Admin → DebugView)
- [ ] Conversões disparando no trigger correto
- [ ] Sem eventos duplicados (checar na aba Network do browser)
- [ ] UTMs chegando no relatório de Aquisição do GA4
- [ ] Relatório de Conversões mostrando dados

---

## Output

Ao concluir, entregar o plano de tracking:

```markdown
# Plano de tracking — [nome da empresa]

## Ferramentas
- GA4: G-XXXXXXXX
- GTM: GTM-XXXXXXX (se aplicável)

## Eventos configurados

| Evento | Trigger | Propriedades | Status |
|--------|---------|-------------|--------|
| form_submitted | Envio do formulário de contato | form_name | ✓ |
| whatsapp_click | Clique no botão WhatsApp | location | ✓ |

## Conversões marcadas
- form_submitted — conversão principal

## Próximos passos
- [ ] Validar em produção após 48h
- [ ] Criar relatório de acompanhamento mensal
- [ ] Configurar alertas para quedas de conversão
```

---

## Skills relacionadas

- `/relatorio-ads` — relatório de performance (usa os dados configurados aqui)
- `/seo` — estratégia de conteúdo (depende de dados de tráfego orgânico)
- `/ab-teste` — medir experimentos (requer tracking correto configurado)
- `/anuncio-google` — conversões do Google Ads precisam de GA4 ou tag de conversão vinculada
