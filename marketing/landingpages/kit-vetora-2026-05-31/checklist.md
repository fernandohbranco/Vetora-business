# Checklist de Qualidade — Kit VETORA Landing Page
Data: 2026-05-31 | Status: PRONTO para deploy após pendências abaixo

---

## Copy

- [x] Headline comunica antes → depois (aprovada no Checkpoint 1 — variante Emocional)
- [x] Subheadline antecipa o mecanismo único (método de engenharia)
- [x] Seção Agravamento presente (custo de não corrigir)
- [x] Nenhuma frase proibida ("alavanque", "inovador", "resultado garantido", "fórmula")
- [x] Tom consultivo, preciso, direto — sem buzzwords
- [x] FAQ trata 7 objeções (6 originais + 1 nova: "já tentei outros templates")
- [x] Qualificação negativa presente (quem NÃO é o público)
- [x] Caminho para R$897 em 3 pontos: Autoridade + Oferta + CTA Final

---

## Oferta

- [x] Preço R$397 e âncora R$897 presentes e claros
- [x] Garantia 7 dias em destaque (Garantia + CTA Final)
- [x] Urgência presente (countdown localStorage, chave: vk_end_ts)
- [x] Micro-prova social antes do pricing-card
- [x] Contexto de lançamento explícito ("Após esse período, o Kit retorna ao preço padrão")

---

## UX/UI — $10K Checklist

| Dimensão | Score | Detalhe |
|---|---|---|
| 1. Ponto de Vista | ✅ | Direção "consultivo premium técnico" — McKinsey/Palantir/Linear. Sóbrio, sem infoproduto alarmista. |
| 2. Tipografia | ✅ | Sora 700/600 (títulos) + Inter 400 (corpo). Escala com clamp(). Sem pesos extras. |
| 3. Sistema de Cores | ✅ | Sequência correta: navy→ice→branco→ice→navy→ice→branco→ice→navy→branco→ice→navy→deep. Sem dois escuros consecutivos. |
| 4. Hierarquia | ✅ | Eyebrow→h2→lead→body com espaçamento correto. Hover nos módulos aumentado (.15). |
| 5. Imagens | ⚠️ | Página sem fotos (defensável no estilo consultivo). Placeholder comentado no HTML para foto do Fernando. |
| 6. Movimento | ✅ | FAQ com max-height transition (.35s). Scroll reveal com IntersectionObserver vanilla nas seções abaixo do fold. Header shadow no scroll. |
| 7. Mobile (375px) | ✅ | Stats empilhados em column (mobile), border-top em vez de border-left. Pricing, passos e cards colapsados corretamente. |
| 8. Fundação Técnica | ✅ | Twitter Card, canonical, favicon, Schema.org JSON-LD (Product), display=swap nas fontes, aria-expanded no FAQ. |
| 9. Conversão | ✅ | CTA above the fold ✅, prova social antes do preço ✅, urgência clara ✅, caminho para R$897 em 3 pontos ✅. |

---

## Contraste WCAG 2.1 AA

- [x] Eyebrows em fundos claros (ice/branco) usam `var(--navy)` — razão 14.8:1 (AAA)
- [x] Eyebrows em fundos escuros (navy/deep) usam `var(--cyan)` — razão 4.8:1 (AA)
- [x] cases-label usa `var(--navy)` (corrigido de `var(--cyan)` que estava abaixo do AA em 11px)
- [x] Texto principal Inter 400/16px sobre fundo branco: graphite (#1E252B) — razão >12:1 (AAA)

---

## Técnico

- [x] Logo paths atualizados para `../../../identidade/logo-vetora/...` (novo nível de pasta)
- [x] onerror fallback no logo mantido
- [x] FAQ accordion com max-height transition (substituiu display:none/block)
- [x] aria-expanded atualizado dinamicamente no JS do FAQ
- [x] Countdown com localStorage (chave: vk_end_ts) — 7 dias a partir da primeira visita
- [x] Scroll reveal IntersectionObserver vanilla — sem AOS, sem dependências
- [x] Seção .hero sem scroll reveal (carrega instantaneamente)

---

## Pendências pré-deploy (Sprint 3)

- [ ] Configurar produto R$397 na Kiwify e substituir `KIWIFY_URL_AQUI` na linha 387
- [ ] Configurar produto R$897 na Kiwify e substituir `KIWIFY_URL_897_AQUI` (3 ocorrências: Autoridade, Oferta footer, CTA Final)
- [ ] Inserir foto profissional do Fernando Branco na seção Autoridade (placeholder comentado no HTML — tons frios, fundo neutro, portrait 400×500px)
- [ ] Criar og:image (1200×630px) em kit.vetora.com.br/og-image.png
- [ ] Testar fluxo completo de compra em mobile real (iPhone) + desktop após configurar Kiwify
- [ ] Lighthouse audit após deploy (meta: Performance >90, Accessibility >90, SEO >90)

---

## Critérios de "pronto" (conforme estrategia.md)

| Critério | Status |
|---|---|
| Copy no tom VETORA — consultiva, clara, sem buzzwords | ✅ Verificado |
| Identidade visual seguindo restrições | ✅ Alternância correta, eyebrow WCAG corrigido |
| Landing converte em mobile e desktop (Lighthouse >90) | ⏳ Verificar após deploy |
| Fluxo de compra funcionando ponta a ponta | ⏳ Sprint 3 |
| Produto parece sistema profissional | ✅ Notion com sequência clara (Sprint 1 concluído) |
| Caminho claro do Kit para consultoria R$897 | ✅ Em 3 pontos da página |
