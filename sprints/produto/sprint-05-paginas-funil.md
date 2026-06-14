# Sprint 05 — Páginas e Funil
**Status:** Aguarda Sprint 04 | **Depende de:** Produtos construídos (LT + bumps + Kit)  
**Objetivo:** Construir todas as páginas do funil e configurar o fluxo completo de compra na Cakto.

---

## Páginas a construir

### 5.1 — Landing Page do Diagnóstico de Autoridade (Low Ticket)

**URL:** diagnóstico.vetora.com.br (ou subdomínio a definir)  
**Objetivo:** Converter visitante frio em comprador do Diagnóstico de Autoridade (R$37)

Seções:
- [ ] Hero: headline de dor + subheadline de promessa + CTA
- [ ] Problema: os 5 sintomas do especialista invisível
- [ ] O que é o diagnóstico e por que funciona
- [ ] O que vem dentro (preview dos 30 pontos por bloco)
- [ ] Para quem é e para quem não é
- [ ] Autoridade: Fernando + cases
- [ ] Oferta e preço
- [ ] Garantia 7 dias
- [ ] FAQ (5–7 perguntas)
- [ ] CTA final

**Stack:** HTML + CSS (mesmo padrão do index.html existente) ou Next.js  
**Referência de copy:** `produtos/kit-vetora/copy.md` (adaptar para o novo produto)

### 5.2 — Página de Upsell — Kit VETORA

**Exibida:** Após compra do Diagnóstico de Autoridade  
**Objetivo:** Converter comprador do low ticket em comprador do Kit (R$397)

Seções:
- [ ] Headline de continuidade: "Você acabou de identificar o problema. Agora corrija."
- [ ] Bridge do diagnóstico para o Kit (os pontos que você marcou como problema têm solução nos módulos X, Y, Z)
- [ ] Os 8 módulos com descrição
- [ ] Oferta especial pós-compra (preço único disponível apenas neste momento)
- [ ] Garantia
- [ ] CTA

### 5.3 — Página de Obrigado (Low Ticket)

**Exibida:** Após compra do Diagnóstico (sem upsell ou após recusa do upsell)

- [ ] Confirmação da compra
- [ ] Instruções de acesso na Cakto
- [ ] Próximo passo: sequência de e-mail

### 5.4 — Página de Obrigado (Kit VETORA)

**Exibida:** Após compra do Kit (via upsell ou direta)

- [ ] Confirmação + boas-vindas
- [ ] Instruções de acesso
- [ ] Preview do que esperar nos primeiros 7 dias
- [ ] Menção à opção de consultoria (R$897)

---

## Configuração do funil na Cakto

- [ ] Cadastrar Diagnóstico de Autoridade como produto R$37
- [ ] Configurar order bumps no checkout
- [ ] Configurar página de upsell pós-compra (Kit R$397)
- [ ] Configurar produto Kit VETORA R$397
- [ ] Configurar produto Kit + consultoria R$897
- [ ] Configurar automação de e-mail pós-compra (Resend ou nativo Cakto)
- [ ] Testar fluxo completo: compra LT → bump → upsell → acesso à Cakto
- [ ] Testar acesso mobile + desktop

---

## Automação de e-mail pós-compra

### Sequência para comprador do Diagnóstico (sem upsell):
- [ ] E-mail 1 (imediato): acesso + instruções + o que fazer primeiro
- [ ] E-mail 2 (dia 2): "Qual foi seu resultado?" + bridge para o Kit
- [ ] E-mail 3 (dia 5): detalhe de um ponto do diagnóstico + como o Kit resolve

### Sequência para comprador do Kit:
- [ ] E-mail 1 (imediato): boas-vindas + acesso + roteiro dos primeiros 7 dias
- [ ] E-mail 2 (dia 3): dica do Módulo 01 + encorajamento
- [ ] E-mail 3 (dia 7): checkin + menção à consultoria R$897

---

## Critérios de "pronto"

- [ ] Fluxo de compra funciona de ponta a ponta (testado com compra real)
- [ ] Acesso à área de membros na Cakto funciona automaticamente após compra
- [ ] E-mails disparando corretamente
- [ ] Página responsiva e aprovada em mobile real
- [ ] Lighthouse audit: Performance >90, Accessibility >90, SEO >90

---

## Próxima sprint

**Sprint 06 — Tráfego e Lançamento**  
Persona, criativos, campanha Meta Ads e métricas de decisão.
