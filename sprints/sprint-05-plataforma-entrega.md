# Sprint 05 — Plataforma de Entrega

**Fase:** Pré-lançamento | **Esforço:** 2-4h | **Prioridade:** 5 de 9

---

## Contexto

A entrega do Kit VETORA está planejada via Notion compartilhado. Esse formato tem um problema crítico: qualquer pessoa com o link acessa o conteúdo — sem autenticação, sem controle por comprador, sem progressão de curso. Para um produto de R$397 posicionado como sistema profissional, a experiência de "link de Notion que qualquer um abre" está em desacordo com o posicionamento.

Além disso, o modelo de checkout atual aponta para Kiwify, mas o produto precisará de uma área de membros com acesso controlado por aluno — algo que Cakto e Kirvano entregam nativamente, com checkout integrado e sem custo fixo mensal.

---

## Objetivo

Ao final desse sprint:

1. Produto configurado em Cakto ou Kirvano com área de membros real
2. Checkout funcionando (Pix + cartão) para R$397 e R$897
3. Acesso liberado automaticamente após compra confirmada
4. Notion pode permanecer como repositório de templates — mas não como interface principal

---

## Pré-requisitos

- Decisão tomada entre Cakto e Kirvano (ver comparativo abaixo)
- Conteúdo dos 8 módulos em formato pronto para upload (Markdown ou PDF)
- Dados bancários / CNPJ ou CPF para cadastro na plataforma

---

## Comparativo: Cakto vs. Kirvano

| Critério | Cakto | Kirvano |
|---|---|---|
| Modelo de custo | Comissão sobre vendas | Comissão sobre vendas |
| Área de membros | Nativa, simples | Nativa, mais customizável |
| Checkout | Integrado (Pix + cartão) | Integrado (Pix + cartão) |
| Upsell nativo | Sim | Sim |
| Email marketing | Integrado básico | Integrado básico |
| Reconhecimento BR | Alto | Alto |
| Ideal para | Produto simples, rápido de configurar | Produto com mais seções e customização |

**Recomendação:** Começar com Cakto pela simplicidade de setup. Migrar para Kirvano se precisar de mais customização visual ou de estrutura de módulos.

---

## Tarefas

### Decisão e cadastro
- [ ] Criar conta em Cakto (cakto.com.br) ou Kirvano (kirvano.com.br)
- [ ] Configurar dados de pagamento e recebimento
- [ ] Verificar taxas de comissão e prazos de repasse

### Estrutura do produto
- [ ] Criar produto "Kit VETORA Completo" — R$397
- [ ] Criar produto "Kit VETORA + Consultoria 1h" — R$897
- [ ] Organizar os 8 módulos como seções/aulas dentro da plataforma
- [ ] Fazer upload dos conteúdos (PDFs dos módulos ou links do Notion como material complementar)
- [ ] Configurar material de boas-vindas (texto ou vídeo curto de introdução — pode ser texto simples)

### Checkout e acesso
- [ ] Configurar página de checkout com branding da VETORA (logo, cores)
- [ ] Testar compra com cartão de teste (se a plataforma oferece)
- [ ] Confirmar que o acesso à área de membros é liberado automaticamente após pagamento confirmado
- [ ] Configurar email de confirmação de compra (com link para área de membros)

### Integração com landing page
- [ ] Obter URL de checkout do produto R$397
- [ ] Obter URL de checkout do produto R$897
- [ ] Substituir `KIWIFY_URL_AQUI` e `KIWIFY_URL_897_AQUI` na landing page (3 ocorrências em `site/kit-vetora/index.html`)

### Teste de fluxo completo
- [ ] Simular compra ponta a ponta: landing → checkout → confirmação → acesso à área de membros
- [ ] Verificar email de confirmação enviado corretamente
- [ ] Verificar que o conteúdo está organizado e acessível na plataforma

---

## Arquivos envolvidos

- `site/kit-vetora/index.html` — substituir URLs de checkout (3 ocorrências)
- `marketing/kit-vetora/modulos/` — conteúdo a fazer upload na plataforma

---

## Critério de conclusão

- [ ] Conta criada e verificada em Cakto ou Kirvano
- [ ] Produto R$397 configurado com área de membros e 8 módulos organizados
- [ ] Produto R$897 configurado (Kit + consultoria)
- [ ] Checkout funciona em desktop e mobile
- [ ] Acesso liberado automaticamente pós-compra
- [ ] Email de confirmação enviado e recebido no teste
- [ ] URLs substituídas na landing page (zero ocorrências de `KIWIFY_URL_AQUI`)
- [ ] Fluxo completo testado de ponta a ponta

---

## Notas e referências

- Notion pode continuar como referência para os templates e frameworks — mas como material complementar dentro da plataforma, não como a interface principal
- Não abandonar o conteúdo em Markdown — manter como backup e fonte de verdade
- Se a plataforma permitir embed de Notion dentro da área de membros, essa é uma opção válida para templates editáveis
- Prazo de repasse típico: Cakto e Kirvano fazem repasse em D+30 ou D+14 dependendo do plano
