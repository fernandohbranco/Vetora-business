---
name: vetora-qa-checklist
description: |
  Executa o checklist de qualidade VETORA antes de qualquer entrega a um cliente —
  verifica copy, visual, técnico e alinhamento estratégico. Garante que nada vai ao ar
  sem aprovação estruturada.
  Fase 4 do Método VETORA. Use ao final de qualquer projeto antes do deploy ou entrega.
  Use quando o usuário disser "checklist", "revisar antes de entregar", "qa da entrega",
  "está pronto?", "/vetora-qa-checklist".
---

# /vetora-qa-checklist — Checklist de Qualidade VETORA

A última linha de defesa antes de qualquer entrega. Garante que copy, visual, técnico e estratégia estão alinhados ao padrão VETORA.

## Quando ativar

- Antes de qualquer deploy de site ou landing page
- Antes de entregar qualquer material a um cliente (apresentação, proposta, peças visuais)
- Quando o usuário disser "está pronto pra entregar?", "revisar antes de mandar", "qa"
- Ao final de qualquer ciclo de Construção (Fase 3)

## O que faz

Aplica checklists estruturados por tipo de entrega (site, LP, carrossel, apresentação, proposta) e entrega um relatório de aprovação ou lista de ajustes pendentes com criticidade.

## O que NÃO faz

- Não faz auditoria técnica profunda — isso é `web-qa-technical-vetora`
- Não faz revisão de UX aprofundada — isso é `ux-review-vetora`
- Não cria conteúdo — apenas valida o que foi criado

## Contexto VETORA obrigatório

Antes de revisar, consultar:
- `vetora-brand-os` — critérios de tom e identidade verbal
- `vetora-design-system` — critérios visuais

## Processo

### Passo 1 — Identificar o tipo de entrega

Perguntar: "O que vamos revisar? (site, landing page, carrossel, apresentação, proposta, email)"

### Passo 2 — Aplicar o checklist correspondente

---

**CHECKLIST A — Site ou Landing Page**

**Copy:**
- [ ] Headline principal: o visitante entende o que a empresa faz em 5 segundos?
- [ ] Proposta de valor: está explícita e diferenciada?
- [ ] CTA principal: claro, específico, acima da dobra?
- [ ] Sem jargão, buzzwords ou frases de agência genérica
- [ ] Tom de voz consistente do início ao fim

**Visual:**
- [ ] Paleta de cores respeitada (máx. 3 cores por seção)
- [ ] Tipografia correta (Sora para títulos, Inter para corpo)
- [ ] Logo na versão correta para o fundo
- [ ] Ícones lineares — nenhum preenchido com gradiente
- [ ] Sem emojis em materiais institucionais
- [ ] Mobile-first — testado em iPhone SE (375px) e iPhone 14 Pro (390px)

**Técnico (básico):**
- [ ] Title tag definida (máx. 60 chars)
- [ ] Meta description definida (máx. 155 chars)
- [ ] OG tags configuradas (og:title, og:description, og:image)
- [ ] Favicon configurado
- [ ] Formulários funcionam e enviam para o email correto
- [ ] Links internos e externos funcionam

---

**CHECKLIST B — Carrossel ou Post Visual**

- [ ] Slide 1 (capa): captura atenção sem abrir o carrossel?
- [ ] Slide final (CTA): tem chamada clara para ação?
- [ ] Paleta de cores respeitada
- [ ] Tipografia correta (Sora + Inter)
- [ ] Logo presente no último slide com assinatura oficial
- [ ] Legenda: inclui call-to-action e quebras de linha para leitura fácil?
- [ ] Legenda: não usa emojis decorativos em excesso?
- [ ] Resolução correta: 1080x1350 (Instagram vertical) ou 1080x1080 (quadrado)

---

**CHECKLIST C — Apresentação Comercial**

- [ ] Slide de abertura: proposta de valor clara nos primeiros 10 segundos
- [ ] Estrutura: problema → solução → método → prova → proposta → próximo passo
- [ ] Paleta de cores consistente em todos os slides
- [ ] Tipografia correta
- [ ] Sem walls of text — cada slide tem no máximo 1 ideia central
- [ ] Logo presente (slide 1 e último)
- [ ] Versão para impressão testada (se necessário)

---

**CHECKLIST D — Proposta Comercial**

- [ ] Nome e empresa do cliente corretos
- [ ] Escopo descrito com clareza (o que inclui e o que NÃO inclui)
- [ ] Prazo estimado por fase
- [ ] Valor e forma de pagamento claros
- [ ] Próximo passo explícito (o que o cliente deve fazer para avançar)
- [ ] Tom consultivo e direto — sem linguagem de vendas agressiva
- [ ] Prazo de validade da proposta definido

---

**CHECKLIST E — Email Marketing ou Sequência**

- [ ] Subject line: abre curiosidade sem clickbait
- [ ] Preview text configurado (complementa, não repete o subject)
- [ ] Primeiro parágrafo: relevante sem rodeios
- [ ] CTA único e claro por email
- [ ] Link de descadastro presente
- [ ] Mobile testado (texto não corta em tela pequena)

---

### Passo 3 — Classificar o que está pendente

Para cada item marcado como não aprovado:

| Item | Criticidade | Descrição do ajuste |
|---|---|---|
| [item] | 🔴 Bloqueante | [o que precisa mudar antes de entregar] |
| [item] | 🟡 Importante | [ajuste recomendado antes de entregar] |
| [item] | ⚪ Desejável | [pode melhorar em versão futura] |

### Passo 4 — Dar o veredicto

- Se todos os itens bloqueantes estão OK: **"✅ Aprovado para entrega"**
- Se há itens bloqueantes: **"🔴 Ajustes necessários antes de entregar"** + lista

## Critérios de aceite

- [ ] Checklist correto para o tipo de entrega foi aplicado
- [ ] Todos os itens bloqueantes resolvidos ou documentados
- [ ] Veredicto claro dado ao usuário
- [ ] Relatório de QA disponível para referência futura

## Output padrão

Relatório inline com: checklist completo (itens aprovados ✅ e pendentes), tabela de ajustes por criticidade, e veredicto final (aprovado / ajustes necessários).

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
