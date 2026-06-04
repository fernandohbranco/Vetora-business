# Sprint 03 — Lead Magnet

**Fase:** Pré-lançamento | **Esforço:** 3-4h | **Prioridade:** 3 de 9

---

## Contexto

Sem lead magnet, toda visita que não converte imediatamente é perda irrecuperável. A taxa de conversão de uma landing sem captura de email é estruturalmente inferior — porque o visitante que chega curioso mas não pronto para comprar não tem motivo para deixar contato.

O mini-diagnóstico de marca em 10 perguntas está planejado desde o briefing, mas nunca foi criado. Esse ativo tem retorno direto em lista de email qualificada — exatamente o público que vai receber a sequência de emails do Sprint 04 e converter nas semanas seguintes ao lançamento.

---

## Objetivo

Ao final desse sprint:

1. O lead magnet existe como documento (PDF ou página formatada)
2. Está integrado à landing page com campo de captura de email
3. A entrega do lead magnet é automática (via plataforma de email configurada)

---

## Pré-requisitos

- Decisão sobre plataforma de email (Brevo, Mailchimp, ou nativa da Cakto/Kirvano — ver Sprint 05)
- Sprint 01 concluído (landing com o formulário de captura integrado ao design)

---

## Tarefas

### Conteúdo do lead magnet
- [ ] Escrever as 10 perguntas de diagnóstico de marca (adaptar do Módulo 1 do Kit)
- [ ] Para cada pergunta, adicionar contexto breve: por que essa dimensão importa (2-3 linhas)
- [ ] Criar sistema de pontuação simples: 0-3 por pergunta, total revela "nível de alinhamento" (verde/amarelo/vermelho)
- [ ] Escrever interpretação dos resultados: o que cada faixa de pontuação significa e o que fazer
- [ ] Incluir CTA ao final: "Se você identificou gaps, o Kit VETORA foi construído para endereçar cada um deles"

### Formato e entrega
- [ ] Decidir formato: PDF (mais profissional, harder to share) ou página web (mais fácil de medir)
- [ ] Se PDF: formatar em Canva ou Notion exportado — identidade visual da VETORA
- [ ] Se página web: criar `site/kit-vetora/diagnostico.html` com o mesmo design system da landing
- [ ] Título do lead magnet: "Mini-diagnóstico de marca: descubra onde sua percepção de valor está vazando"

### Integração na landing
- [ ] Adicionar seção ou modal de captura de email na landing (entre Hero e Problema, ou como CTA secundário)
- [ ] Copy do CTA de captura: "Faça o diagnóstico gratuito — 10 perguntas, 5 minutos, resultado imediato"
- [ ] Conectar formulário à plataforma de email escolhida
- [ ] Configurar entrega automática do lead magnet por email (ou link imediato pós-confirmação)

### Configuração de email
- [ ] Criar conta na plataforma de email (Brevo recomendado — gratuito até 300 emails/dia)
- [ ] Configurar email de boas-vindas com entrega do lead magnet
- [ ] Criar lista segmentada "Leads Kit VETORA" — essa lista vai receber a sequência do Sprint 04

---

## Arquivos envolvidos

- `marketing/kit-vetora/modulos/modulo-1-diagnostico.md` — base para as 10 perguntas
- `site/kit-vetora/index.html` — adicionar formulário de captura
- `site/kit-vetora/diagnostico.html` — novo arquivo se formato for página web
- `marketing/kit-vetora/` — salvar o conteúdo do lead magnet aqui

---

## Critério de conclusão

- [ ] Lead magnet com 10 perguntas, pontuação e interpretação de resultados — concluído
- [ ] Formatação visual no padrão VETORA (não parece template genérico de agência)
- [ ] Campo de captura de email integrado à landing page
- [ ] Entrega automática funcionando (testar com email próprio)
- [ ] Lead vai para lista segmentada na plataforma de email

---

## Notas e referências

- As 10 perguntas devem cobrir: posicionamento, comunicação, identidade visual, presença digital, proposta de valor, diferenciação
- Adaptar do Módulo 1 — não copiar integralmente (o lead magnet é uma amostra, não o produto)
- Tom do lead magnet: consultivo, direto — o visitante sente que está recebendo diagnóstico real, não conteúdo genérico
- Plataforma de email recomendada: **Brevo** (gratuito, automação incluída, LGPD-ready)
- Alternativa: usar a plataforma nativa da Cakto/Kirvano após o Sprint 05
