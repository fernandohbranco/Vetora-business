# Estratégia

## Fase atual (jun/2026)

**Construção do funil de produto low ticket + Kit VETORA como upsell.** Foco em lançar o Diagnóstico de Autoridade (R$37) como entrada do funil, com o Kit VETORA (R$397) como upsell principal. Consultoria de alto ticket é o destino final — o funil gera leads qualificados para ela.

**ICP definido:** Profissionais liberais (médicos, advogados, consultores) — o especialista invisível.

### O que foi construído (jun/2026):
- `saidas/pesquisa-mercado-2026-06.md` — pesquisa de mercado completa (competidores, keywords, ICP)
- `identidade/manifesto.md` — manifesto de marca escrito
- `identidade/branding-book.md` — branding book compilado
- `site/vetora-site/` — **site institucional reconstruído do zero em Next.js 16 + Tailwind CSS v4 + shadcn/ui** (jun/2026). Projeto limpo, sem código legado. Sprints de site em `sprints/site/`.
  - `components/vetora/sections/Cases.tsx` — seção Cases implementada (2026-06-28): 4 cards — FRBranco, Rancho 517, Prezaro Barbearia, Cantinho das Raízes. Grid 4 col desktop / 2×2 tablet / 1 col mobile. Fontes Sora + Inter, tokens VETORA em globals.css. Dev server rodando na porta 3000.
  - Seções pendentes (por sprint): Hero (sprint 03), Método + Serviços + Diferenciais (sprint 04), Fundador + CTA Final (sprint 05), Footer.
- `scripts/doc-template.html` + `scripts/render-doc-pdf.js` — **template PDF premium** com 12 componentes, header por página, capa full-bleed (Sprint 06 — jun/2026)
- `produtos/kit-vetora/` — copy.md (copy aprovada) + checklist.md (critérios de qualidade). Landing page HTML removida — será reconstruída na Sprint 05 após produto pronto.
- `sprints/produto/sprint-01-estrategia-funil.md` — estratégia e funil completo definidos
- `sprints/produto/sprint-02-produto-low-ticket.md` — escopo do Diagnóstico de Autoridade
- `sprints/produto/sprint-03-order-bumps.md` — escopo dos order bumps
- `sprints/produto/sprint-04-kit-vetora-conteudo.md` — escopo dos 8 módulos do Kit
- `sprints/produto/sprint-05-paginas-funil.md` — escopo das LPs e configuração Cakto
- `sprints/produto/sprint-06-trafego-lancamento.md` — estratégia de tráfego e métricas
- `sprints/site/` — sprints de construção do site institucional (docs completos, sprints 01–06)

### Próximos passos imediatos (sequência de sprints):

**Funil de produto:**
1. **Sprint 02** — Construir conteúdo do Diagnóstico de Autoridade (low ticket R$37)
2. **Sprint 03** — Criar 1–3 order bumps
3. **Sprint 04** — Construir os 8 módulos do Kit VETORA na Cakto
4. **Sprint 05** — Landing pages + configuração completa do funil na Cakto
5. **Sprint 06** — Lançamento orgânico → Meta Ads → métricas → decisão

**Site institucional (`site/vetora-site/`):**
- Sprint 03 — Hero (primeira dobra) — **próxima a executar em código**
- Sprint 04 — Método + Serviços + Diferenciais
- Sprint 05 (restante) — Fundador + CTA Final + Footer
- Sprint 06 — QA + performance + deploy no vetora.com.br

**Clientes com trabalho em andamento:**
- Rancho 517: Phase 2 / Sprint 4 em execução
- Dr. Márcio Grave: site premium em construção (lead ainda não fechado)
- Priscila Pés de Seda: branding em construção (lead ainda não fechado)
- Prezaro Barbearia: aguardando retorno do João (reunião realizada jun/6)
- RoseArts: lead — contato a fazer

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

## Infraestrutura Container + Clientes (frente aberta jun/2026)

Os 8 clientes viraram repos VetoraOS independentes dentro de `clientes/`. Diagnóstico revelou drift de skills (15–24 por cliente, sem fonte única), duplicação massiva, vazamento de template ("MazyOS") e ausência de branding VETORA para entregáveis. Plano em 5 sprints: `sprints/infraestrutura/`.

**Decisões fechadas:**
- Sync de skills: versão canônica em `templates/skills-cliente/` + skill `/sync-skills`
- Marca VETORA: skills de cliente leem assets do container por caminho relativo (não duplicar)
- Git: `clientes/*` no `.gitignore` do container
- Ordem: fonte única de skills primeiro

**Sprints:** 01 Fonte única de skills + limpeza · 02 Marca VETORA + `/relatorio` · 03 Higiene de git · 04 Template + `/novo-cliente` · 05 Dashboard `/clientes`.

**Decisões em aberto:** conjunto canônico de skills · nome do OS de cliente (manter "VetoraOS"?) · achatar nesting `clientes/<Nome>/<slug>/`.

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
