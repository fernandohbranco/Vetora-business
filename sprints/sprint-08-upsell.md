# Sprint 08 — Upsell Pós-Compra

**Fase:** Pós-lançamento | **Esforço:** 1-2h | **Prioridade:** 8 de 9

---

## Contexto

O caminho para R$897 (Kit + 1h de consultoria) existe na landing, mas não há nenhum mecanismo ativo de conversão pós-compra. Um comprador do Kit a R$397 é exatamente o lead mais qualificado para a consultoria — ele já confia no método, já está aplicando, e já tem contexto suficiente para uma sessão produtiva.

Um email automático enviado 7 dias após a compra, quando o comprador está no meio da aplicação dos primeiros módulos, é o momento certo para apresentar a oferta de acompanhamento. Esse email custa 2 horas para escrever e pode gerar 2-3 contratos de consultoria por mês sem nenhum esforço adicional.

---

## Objetivo

Ao final desse sprint:

1. Email automático D+7 pós-compra configurado e ativo
2. Oferta da consultoria de 1h clara, com link de agendamento ou contato
3. Tom consultivo — não pressão de vendas

---

## Pré-requisitos

- Sprint 05 concluído (plataforma de entrega configurada — a automação vem de lá)
- Link de agendamento de consultoria definido (Calendly, Google Agenda ou link de contato direto)
- Preço e formato da consultoria de 1h confirmados (R$897 com ou sem Kit, ou apenas a hora avulsa)

---

## Tarefas

### Email de upsell (D+7 pós-compra)

- [ ] Escrever o email com a seguinte estrutura:
  - **Abertura:** "Você está há 7 dias com o Kit — como está a aplicação?"
  - **Contexto:** "Muitos começam pelo Módulo 1 e já identificam 3-4 gaps que não tinham nome antes. Se foi o seu caso, o próximo passo pode ser fazer o Módulo 2 (Posicionamento) com acompanhamento direto."
  - **Oferta:** "Tenho disponibilidade para uma sessão de 1h de posicionamento estratégico. Nessa hora, você sai com sua Tese de Marca, ICP definido e mensagens-chave para cada etapa do funil."
  - **Preço:** "A sessão custa R$X. [Link de agendamento]"
  - **Sem pressão:** "Se preferir continuar aplicando sozinho, o Kit tem tudo que você precisa. Esse email só vai uma vez."

- [ ] Assunto do email: "Como está a aplicação do Kit? (e uma oferta de acompanhamento)"
- [ ] Revisar no tom VETORA: consultivo, direto, sem linguagem de vendedor

### Configuração técnica
- [ ] Criar automação de email D+7 pós-compra na plataforma (Cakto/Kirvano ou Brevo)
- [ ] Trigger: confirmação de compra do produto R$397
- [ ] Delay: 7 dias após a compra
- [ ] Testar com compra de teste (verificar que o email chega no prazo correto)

### Link de agendamento
- [ ] Criar link de agendamento (Calendly gratuito funciona, ou Google Agenda com link público)
- [ ] Configurar disponibilidade: definir quantas sessões por mês Fernando pode atender
- [ ] Definir se o pagamento da consultoria é separado ou embutido no agendamento

### Opcional — email D+30 para compradores inativos
- [ ] Se a plataforma permitir, criar segundo email D+30 para compradores que não responderam ao D+7
- [ ] Tom: "Está tudo bem com o Kit? Se tiver dúvida em algum módulo, responda esse email."
- [ ] Sem oferta de venda — apenas abertura de canal de suporte (que pode converter em consultoria naturalmente)

---

## Arquivos envolvidos

- `marketing/kit-vetora/` — salvar rascunho do email de upsell aqui (`email-upsell-d7.md`)
- Plataforma de email/automação (Cakto, Kirvano ou Brevo) — configuração externa

---

## Critério de conclusão

- [ ] Email D+7 escrito e revisado no tom VETORA
- [ ] Automação configurada e testada na plataforma
- [ ] Link de agendamento funcionando
- [ ] Email de upsell chega corretamente 7 dias após compra de teste

---

## Notas e referências

- O upsell funciona melhor quando não parece upsell — é uma extensão natural de serviço, não uma oferta de vendas
- Tom do email: Fernando falando como consultor, não como vendedor — "como está indo?" antes de qualquer oferta
- Definir quantas sessões de consultoria por mês são sustentáveis para Fernando antes de ativar (considerando o CLT integral)
- Referência: a consultoria é o produto de ticket alto da VETORA — o Kit é o funil de entrada
