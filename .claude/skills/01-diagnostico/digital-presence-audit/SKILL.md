---
name: digital-presence-audit
description: |
  Auditoria da presença digital atual de um cliente — site, SEO básico, redes sociais,
  Google Meu Negócio, consistência de marca e gaps de percepção online.
  Entrega um relatório de auditoria priorizado por impacto.
  Fase 1 do Método VETORA, complementa client-diagnosis.
  Use quando o usuário disser "auditoria digital", "diagnóstico do site", "como está a presença online",
  "o que melhorar primeiro no digital", "/digital-presence-audit".
---

# /digital-presence-audit — Auditoria de Presença Digital VETORA

Mapeia o que existe hoje na presença digital do cliente, identifica gaps críticos e prioriza as ações de maior impacto. Base para a Fase 2 — Direção.

## Quando ativar

- Quando o cliente tem site ou redes e quer entender o que melhorar
- Quando o diagnóstico `client-diagnosis` indicar gap de presença digital
- Quando o usuário disser "auditoria do site", "como está o digital", "ver o que temos hoje"
- Antes de propor um redesign ou reestruturação de site

## O que faz

Audita 5 dimensões da presença digital: site, SEO básico, redes sociais, Google Meu Negócio e consistência de identidade. Entrega uma tabela de gaps priorizados por impacto e esforço, com recomendação de próximos passos.

## O que NÃO faz

- Não faz análise técnica profunda de código (isso é `web-qa-technical-vetora`)
- Não configura ferramentas — apenas audita o estado atual
- Não cria conteúdo — apenas mapeia e prioriza

## Contexto VETORA obrigatório

Antes de auditar, consultar:
- `vetora-brand-os` — para avaliar consistência de tom e identidade verbal
- `vetora-design-system` — para avaliar consistência visual
- `client-diagnosis` (se existir) — para ter contexto do negócio

## Processo

### Passo 1 — Coletar informações

Perguntar ao usuário:
1. "Qual é a URL do site?"
2. "Quais redes sociais estão ativas? (@handle ou URL)"
3. "Tem Google Meu Negócio configurado?"
4. "Qual é o nome da empresa no Google?"

### Passo 2 — Auditar site

Analisar (via inspeção visual ou leitura do código se disponível):
- Clareza do headline principal — o visitante entende o que a empresa faz em 5 segundos?
- Proposta de valor — está explícita e diferenciada?
- CTA principal — existe? É claro? Está visível above the fold?
- Mobile-first — o site funciona bem em mobile?
- Velocidade percebida — carrega rápido?
- SEO básico — title tag, meta description, H1 corretos?
- Consistência visual — paleta, tipografia e logo coerentes com a identidade?

### Passo 3 — Auditar redes sociais

Para cada rede ativa:
- Bio/descrição — clara, com proposta de valor?
- Link na bio — existe? Aponta para o lugar certo?
- Frequência de posts — última postagem quando?
- Consistência visual — paleta e estilo reconhecíveis?
- Engajamento — likes/comentários proporcional ao número de seguidores?

### Passo 4 — Auditar Google Meu Negócio (se aplicável)

- Ficha completa? (nome, endereço, horário, categoria, fotos)
- Avaliações — número, nota média, responde os comentários?
- Posts do Google Meu Negócio — ativos?
- Aparece no Maps para buscas relevantes?

### Passo 5 — Auditar consistência de marca

Cruzar site + redes + GMB:
- Tom de voz consistente entre canais?
- Visual reconhecível e coerente?
- Mensagem central alinhada em todos os pontos de contato?

### Passo 6 — Consolidar e priorizar

Criar tabela de gaps com prioridade por impacto × esforço:

| Gap | Dimensão | Impacto | Esforço | Prioridade |
|---|---|---|---|---|
| [gap 1] | Site | Alto | Baixo | 🔴 Crítico |
| [gap 2] | Redes | Médio | Baixo | 🟡 Importante |
| [gap 3] | GMB | Alto | Médio | 🟡 Importante |

### Passo 7 — Recomendar próximos passos

Com base nos gaps, recomendar a skill da Fase 2:
- Muitos gaps de copy e posicionamento → `brand-positioning-architect`
- Site desatualizado ou inexistente → `site-architecture-vetora`
- Precisa de LP urgente → `landing-page-cro-vetora`

## Critérios de aceite

- [ ] As 5 dimensões foram auditadas
- [ ] Gaps priorizados em tabela com impacto e esforço
- [ ] Nenhum gap óbvio deixado de fora
- [ ] Próximos passos recomendados com skills específicas
- [ ] Tom consultivo e direto — sem suavizar problemas reais

## Output padrão

Relatório inline com: resumo executivo (3 principais gaps), tabela de auditoria por dimensão, tabela de priorização, e recomendação de próximos passos com skills correspondentes.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
