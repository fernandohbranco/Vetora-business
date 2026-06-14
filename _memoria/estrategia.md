# Estratégia

## Fase atual (jun/2026)

**Profissionalização da VETORA para consultoria de alto ticket.** Kit VETORA pausado temporariamente. Foco em construir presença que atraia clientes de consultoria de alto ticket (R$3-10k/projeto).

**ICP definido:** Profissionais liberais (médicos, advogados, consultores) — o especialista invisível.

### O que foi construído (jun/2026):
- `saidas/pesquisa-mercado-2026-06.md` — pesquisa de mercado completa (competidores, keywords, ICP)
- `identidade/manifesto.md` — manifesto de marca escrito
- `identidade/branding-book.md` — branding book compilado
- `site/vetora/` — site institucional em HTML (versão legada — substituída)
- `site/vetora-next/` — **site institucional em Next.js 14 + Tailwind + Framer Motion** (versão atual). Stack: Next.js 14, Tailwind CSS, Framer Motion. Homepage completa com Hero, Problema, Serviços (bento grid), Método, Para Quem, Cases e CTA Final. Animações clip-path, cursor personalizado, canvas dot grid, scroll-driven timeline. **Live em https://vetora-business.vercel.app/** (URL temporária até compra do domínio `vetora.com.br`).
- `produtos/kit-vetora/` — produto Kit VETORA (movido de `site/kit-vetora/` para pasta dedicada `produtos/`)

### Próximos passos imediatos:
- **Domínio:** comprar `vetora.com.br` e configurar em Vercel → Settings → Domains (projeto vetora-business)
- **Animação de fundo do site:** dois experimentos em andamento — escolher um antes de finalizar o Hero
  - `sprints/sprint-animacao-a-canvas-vetorial.md` — campo vetorial scroll-driven em Canvas 2D
  - `sprints/sprint-animacao-b-video-scrubbing.md` — vídeo gerado no Kling AI, scrubado via scroll
- Páginas internas: `/metodo`, `/servicos`, `/cases`, `/contato`
- Blog: migrar artigo HTML para MDX, rota `/blog/[slug]`
- Configurar formulário de contato no Formspree
- LinkedIn: publicar manifesto e primeiro artigo como posts

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

## Kit VETORA — em pausa

Retomar após tração inicial com consultoria. Decisões tomadas permanecem válidas.

## Decisões estratégicas tomadas (Kit VETORA)

- **Preço tier principal:** R$397
- **Entrega:** ~~Notion~~ → **Cakto ou Kirvano** (área de membros real, acesso controlado por comprador)
- **Checkout:** ~~Kiwify~~ → **Cakto ou Kirvano** (nativas do mercado BR, sem custo fixo)
- **Domínio:** kit.vetora.com.br (subdomain)
- **Lead magnet:** "Mini-diagnóstico de marca em 10 perguntas" (a criar — Sprint 03)
- **Urgência:** ~~countdown localStorage~~ → **data fixa real** de encerramento do preço de lançamento
- **Tudo virtual até estar 100% pronto** — publicação só quando o fluxo completo estiver validado

## Diagnóstico realizado (jun/2026)

Diagnóstico completo em `saidas/diagnostico-kit-vetora-2026-06.md`. Resultado: produto forte, estratégia de lançamento com gaps críticos. Go-live condicionado à conclusão de 6 sprints pré-lançamento.

## Prioridade principal

Lançar o Kit VETORA Completo (R$397) e validar com 30 vendas no primeiro mês (~R$11.910 + 30 leads qualificados para consultoria de ticket alto).

**Roteiro de sprints do Kit VETORA:** planejamento anterior (9 sprints) foi removido — retomar quando o Kit sair da pausa.

## O que pode esperar

- Programa de afiliados (Hotmart) — fase 2
- Recorrência/assinatura R$47/mês — fase 2
- Conteúdo LinkedIn sistemático com perfil do fundador

**Canal principal de tráfego:** LinkedIn (posicionamento engenharia + IA + branding)
**Canal secundário:** Instagram (bastidores do método, antes/depois)
**Sem investimento em ads no início.**

## Critérios de "pronto" para qualquer entregável

- Copy no tom VETORA — consultiva, clara, sem buzzwords
- Identidade visual seguindo restrições de cor e tipografia
- Landing converte em mobile e desktop (Lighthouse >90)
- Fluxo de compra funcionando de ponta a ponta
- O produto parece um sistema profissional, não um amonhoado de arquivos
- Há caminho claro do Kit para a consultoria de ticket alto
