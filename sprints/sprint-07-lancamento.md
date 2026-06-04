# Sprint 07 — Lançamento

**Fase:** Lançamento | **Esforço:** 4-6h distribuídas em 7 dias | **Prioridade:** 7 de 9

---

## Contexto

Lançamentos de baixa energia — poucos posts, CTA fraca, pouca presença nos primeiros dias — costumam performar muito abaixo da meta mesmo com produto bom. O risco aqui é Fernando ter CLT integral e entregar um lançamento feito nas sobras de tempo, sem consistência.

A estratégia desse sprint é concentrar energia nos primeiros 7 dias com posts planejados antecipadamente, ativação de rede de confiança antes do anúncio público, e monitoramento diário de conversão.

---

## Objetivo

Ao final desse sprint (D+7 após go-live):

1. 7 posts publicados no LinkedIn (1 por dia)
2. 3 emails enviados para a lista capturada
3. 5-10 compradores de confiança ativados antes do anúncio público
4. Métricas de conversão monitoradas diariamente
5. Primeiros depoimentos coletados

---

## Pré-requisitos

- Sprints 01 a 06 concluídos (todos os pré-lançamento)
- Landing page com URL definitiva publicada (Vercel ou domínio kit.vetora.com.br)
- Og:image criada (1200×630px para compartilhamento no LinkedIn)
- Foto de Fernando inserida na landing
- Checkout funcionando (Sprint 05)
- Lista de email com ao menos alguns leads capturados (Sprint 03)

---

## Tarefas

### Preparação (antes do D+0)
- [ ] Publicar a landing page na URL definitiva
- [ ] Criar og:image (1200×630px) — usar Canva com identidade VETORA
- [ ] Testar compartilhamento da URL no LinkedIn (verificar preview correto)
- [ ] Identificar 5-10 pessoas da rede de confiança para ativação prévia (ex-clientes, parceiros, colegas de confiança)
- [ ] Enviar mensagem individual para cada uma dessas pessoas — não em grupo, não post público
- [ ] Objetivo: que eles comprem e deem feedback antes do anúncio público (pode ser a preço de custo ou cortesia)
- [ ] Coletar ao menos 2 depoimentos breves dessas compras (uma frase basta)

### Posts LinkedIn — D+0 a D+6 (rascunhar todos antes de lançar)

**D+0 — Anúncio de lançamento:**
- [ ] Tom: direto, sem euforia — "Lancei hoje o Kit VETORA. Aqui está o que é e para quem é."
- [ ] Incluir link da landing page
- [ ] Incluir o que diferencia: método de engenharia, não pack genérico

**D+1 — O problema que o Kit resolve:**
- [ ] Post educacional: "A maioria dos negócios entrega mais do que a marca comunica. Eis como identificar esse gap."
- [ ] Sem CTA de venda direta — terminar com pergunta para engajamento
- [ ] Mencionar o mini-diagnóstico gratuito no final

**D+2 — Bastidores do método:**
- [ ] Post sobre como o Módulo 1 (Diagnóstico) foi construído e por que começa por aí
- [ ] Tom: engenheiro que pensa em sistema — não guru que pensa em inspiração
- [ ] CTA: link para o lead magnet (gratuito)

**D+3 — Case com resultado:**
- [ ] Post com um dos cases do Sprint 02 — antes → o que foi feito → resultado
- [ ] Formato curto, direto, sem jargão
- [ ] CTA: "O Kit tem o mesmo sistema aplicável ao seu negócio"

**D+4 — Objeção mais comum:**
- [ ] Post respondendo: "Por que não contratar uma agência de branding?"
- [ ] Comparativo honesto: agência vs. Kit — quando faz sentido cada um
- [ ] CTA: para quem não tem budget de agência agora, o Kit é o caminho

**D+5 — Módulo em destaque:**
- [ ] Destaque do Módulo 7 (Biblioteca de Prompts) — o mais subestimado e o mais prático
- [ ] Mostrar 2-3 exemplos de prompts do módulo (conteúdo de valor real)
- [ ] CTA: "São 40 prompts no Kit"

**D+6 — CTA final da janela de lançamento:**
- [ ] Post direto: "Último dia do preço de lançamento" (se a data for D+7)
- [ ] Tom honesto: "Se faz sentido pra você, esse é o momento. Se não, sem problema."
- [ ] Garantia de 7 dias reforçada

### Emails para lista — durante os 7 dias
- [ ] D+0: email de anúncio de lançamento para lista capturada
- [ ] D+3: email de proof social (case com resultado)
- [ ] D+6: email final de encerramento do preço de lançamento

### Monitoramento diário
- [ ] Verificar acessos à landing page (Google Analytics ou Vercel Analytics)
- [ ] Verificar conversões no checkout
- [ ] Verificar novas capturas de email (lead magnet)
- [ ] Documentar em nota diária: visitas / leads / vendas

---

## Arquivos envolvidos

- `marketing/kit-vetora/` — salvar rascunhos dos 7 posts LinkedIn e 3 emails aqui
- `saidas/lancamento-d7-relatorio.md` — criar ao final dos 7 dias com resumo de métricas

---

## Critério de conclusão

- [ ] 7 posts publicados no LinkedIn (1 por dia)
- [ ] 3 emails enviados para a lista
- [ ] Ao menos 5 compradores de confiança ativados pré-go-live
- [ ] Ao menos 2 depoimentos coletados
- [ ] Relatório de métricas D+7 criado: visitas, leads, vendas, taxa de conversão
- [ ] Decisão tomada sobre o próximo ciclo (manter preço, ajustar estratégia, ativar tráfego pago)

---

## Notas e referências

- Meta: 30 vendas no mês 1. Se não atingir até D+7, avaliar se o ritmo de vendas é sustentável para o restante do mês ou se é necessário ativar tráfego pago
- Ponto de pivô: se até D+14 tiver menos de 10 vendas, revisar a estratégia de distribuição (considerar tráfego pago no LinkedIn ou parceiros/afiliados)
- Tom dos posts LinkedIn: engenheiro sênior que descobriu como branding funciona — não marketeiro ou guru
- Usar a skill `linkedin-fhb-authority` (`.claude/skills/05-comercial/linkedin-fhb-authority/`) para rascunhar e revisar os posts
