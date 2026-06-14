# Estratégia

## Fase atual (jun/2026)

**Construção do funil de produto low ticket + Kit VETORA como upsell.** Foco em lançar o Diagnóstico de Autoridade (R$37) como entrada do funil, com o Kit VETORA (R$397) como upsell principal. Consultoria de alto ticket é o destino final — o funil gera leads qualificados para ela.

**ICP definido:** Profissionais liberais (médicos, advogados, consultores) — o especialista invisível.

### O que foi construído (jun/2026):
- `saidas/pesquisa-mercado-2026-06.md` — pesquisa de mercado completa (competidores, keywords, ICP)
- `identidade/manifesto.md` — manifesto de marca escrito
- `identidade/branding-book.md` — branding book compilado
- `site/vetora-site/` — **site institucional reconstruído do zero em Next.js + Tailwind CSS v4 + shadcn/ui** (jun/2026). Projeto limpo, sem código legado. Sprints de site em `sprints/site/`.
- `produtos/kit-vetora/` — copy.md (copy aprovada) + checklist.md (critérios de qualidade). Landing page HTML removida — será reconstruída na Sprint 05 após produto pronto.
- `sprints/produto/sprint-01-estrategia-funil.md` — estratégia e funil completo definidos
- `sprints/produto/sprint-02-produto-low-ticket.md` — escopo do Diagnóstico de Autoridade
- `sprints/produto/sprint-03-order-bumps.md` — escopo dos order bumps
- `sprints/produto/sprint-04-kit-vetora-conteudo.md` — escopo dos 8 módulos do Kit
- `sprints/produto/sprint-05-paginas-funil.md` — escopo das LPs e configuração Cakto
- `sprints/produto/sprint-06-trafego-lancamento.md` — estratégia de tráfego e métricas
- `sprints/site/` — sprints de construção do site institucional

### Próximos passos imediatos (sequência de sprints):
1. **Sprint 02** — Construir conteúdo do Diagnóstico de Autoridade (low ticket R$37)
2. **Sprint 03** — Criar 1–3 order bumps
3. **Sprint 04** — Construir os 8 módulos do Kit VETORA na Cakto
4. **Sprint 05** — Landing pages + configuração completa do funil na Cakto
5. **Sprint 06** — Lançamento orgânico → Meta Ads → métricas → decisão

**Site institucional:** reconstruído do zero em `site/vetora-site/` — domínio vetora.com.br e publicação após funil validado.

---

## VETORA Brand — SaaS em construção (jun/2026)

Plataforma de identidade de marca para MEIs e pequenos negócios. Produto SaaS sob o guarda-chuva VETORA.
Contexto completo: `produtos/saas/VETORA_Brand_SaaS_Context.md`

**Stack:** Next.js 14 + Tailwind + Framer Motion · Supabase (auth, DB, storage) · Claude API (Branding Book) · DALL-E 3 (logo) · Stripe · Vercel
**Planos:** Starter R$49 · Pro R$127 · Agency R$297 (recorrência mensal)
**MVP (30 dias):** onboarding 13 perguntas → Branding Book via Claude API → 2 conceitos de logo → export PDF · sem login nem pagamento no MVP

**Fase atual:** definição de nome final, construção do prompt mestre e landing de validação (captura de e-mail)
**Próximos passos imediatos:**
- Definir nome final do produto
- Mapear fluxo de onboarding com opções de resposta
- Construir e testar o Prompt Mestre do Branding Book
- Landing page de validação (captura de e-mail antes do código)

---

## Funil de produto (estrutura definida em jun/2026)

```
Diagnóstico de Autoridade (R$37)  ← entrada do funil
        ↓
Order Bumps R$47–R$97             ← eleva ticket médio
        ↓
Kit VETORA R$397 (upsell)         ← produto principal
        ↓
Kit + Consultoria R$897           ← anchor + lead para consultoria
        ↓
Consultoria de alto ticket R$3–10k ← destino final
```

## Decisões estratégicas consolidadas

- **Produto low ticket:** Diagnóstico de Autoridade — 30 sinais que definem se o mercado reconhece (ou ignora) a expertise. Formato: PDF interativo. **Preço: R$37**
- **Kit VETORA:** posição no funil = upsell principal. **Preço: R$397**. Anchor: Kit + 1h consultoria R$897
- **Plataforma:** **Cakto** (definitivo — descartadas Kirvano e Kiwify)
- **Urgência:** data fixa real de encerramento (definir na Sprint 05 antes de publicar)
- **Landing page do low ticket:** a construir na Sprint 05 (produto primeiro, LP depois)
- **Tudo virtual até fluxo completo validado** — publicação só quando funil de ponta a ponta estiver testado

## Prioridade principal

Construir e lançar o funil completo: Diagnóstico de Autoridade (R$37) → order bumps → Kit VETORA (R$397). Meta de validação: 30 compradores do low ticket no primeiro mês, com taxa de upsell ≥ 10% para o Kit.

## O que pode esperar

- Tráfego pago Meta Ads — fase 2 (após validação orgânica)
- Programa de afiliados — fase 3
- SaaS VETORA Brand — fase 3 (após funil validado e gerando receita)
- Conteúdo LinkedIn sistemático — em paralelo ao funil

**Canal inicial:** orgânico (LinkedIn + Instagram + rede de contatos)
**Canal fase 2:** Meta Ads (orçamento de teste R$200–R$360)

## Critérios de "pronto" para qualquer entregável

- Copy no tom VETORA — consultiva, clara, sem buzzwords
- Identidade visual seguindo restrições de cor e tipografia
- Landing converte em mobile e desktop (Lighthouse >90)
- Fluxo de compra funcionando de ponta a ponta
- O produto parece um sistema profissional, não um amonhoado de arquivos
- Há caminho claro do Kit para a consultoria de ticket alto
