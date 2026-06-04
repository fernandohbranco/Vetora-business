# Sprint 04 — Email Sequence

**Fase:** Pré-lançamento | **Esforço:** 3-5h | **Prioridade:** 4 de 9

---

## Contexto

Capturar email sem ter uma sequência de follow-up é capturar leads para nada. O visitante que baixa o lead magnet está interessado — mas não necessariamente pronto para comprar naquele momento. A sequência de emails converte esse interesse em decisão nos dias seguintes, quando o lead já teve tempo de processar o diagnóstico.

Infoprodutos com sequência de email bem estruturada convertem em média 3-5x mais do que landing pages isoladas. Esse sprint existe para não desperdiçar os leads capturados no Sprint 03.

---

## Objetivo

Ao final desse sprint:

1. Sequência de 3-5 emails configurada e ativa na plataforma de email
2. Primeira mensagem entrega o lead magnet + abre o contexto do problema
3. Emails seguintes educam, provam, e apresentam a oferta com CTA claro
4. Sequência termina com oferta do Kit VETORA a R$397

---

## Pré-requisitos

- Sprint 03 concluído (lead magnet criado, lista configurada, plataforma de email ativa)
- URL da landing page e URL de checkout disponíveis

---

## Tarefas

### Estrutura da sequência (5 emails)

**Email 1 — Entrega imediata (D+0)**
- [ ] Assunto: "Seu mini-diagnóstico de marca está aqui"
- [ ] Entrega o lead magnet (link ou PDF anexo)
- [ ] 3 linhas de contexto: o que o diagnóstico revela e por que isso importa
- [ ] CTA suave: "Leia com cuidado — a maioria das pessoas descobre algo que não esperava"
- [ ] Sem CTA de venda nesse email

**Email 2 — Problema aprofundado (D+2)**
- [ ] Assunto: "[nome], o gap que o diagnóstico não consegue medir"
- [ ] Contexto: o problema que o lead magnet identifica é só a superfície — o que está por baixo é o desalinhamento entre entrega real e percepção de mercado
- [ ] História curta: como um negócio competente pode perder contratos para um concorrente inferior pela percepção de marca
- [ ] Sem CTA de venda — termina com pergunta reflexiva

**Email 3 — Método e diferencial (D+4)**
- [ ] Assunto: "Por que método importa mais do que estética em branding"
- [ ] Apresentar o framework VETORA: Diagnóstico → Direção → Construção → Entrega → Evolução
- [ ] Diferencial: não é sobre ter logo bonito — é sobre critérios objetivos que sustentam percepção de valor
- [ ] Mencionar brevemente os 8 módulos (sem detalhar — isso é para a landing)
- [ ] CTA: "Se quiser ver o sistema completo, [aqui está a landing]"

**Email 4 — Prova social (D+6)**
- [ ] Assunto: "O que mudou para [case] depois de aplicar o método"
- [ ] Um case com resultado específico (do Sprint 02)
- [ ] Formato: antes → o que foi feito → resultado
- [ ] CTA direto: "O Kit VETORA tem o mesmo sistema — por R$397 com garantia de 7 dias"
- [ ] Link para landing page

**Email 5 — Oferta final (D+8)**
- [ ] Assunto: "Última mensagem sobre o Kit VETORA"
- [ ] Tom direto e honesto: "Você baixou o diagnóstico há 8 dias. Se o resultado mostrou gaps, o Kit endereça cada um deles. Se não fizer sentido pra você, tudo bem."
- [ ] Listar o que está incluído nos 8 módulos (formato lista, conciso)
- [ ] Garantia 7 dias reforçada
- [ ] CTA final com link de compra
- [ ] Pós-script: "Depois desse email, não envio mais sobre o Kit. Só te contato com novidades da VETORA quando houver algo relevante."

### Configuração técnica
- [ ] Criar sequência de automação na plataforma de email (trigger: lead se inscreve na lista)
- [ ] Configurar delays (D+0, D+2, D+4, D+6, D+8)
- [ ] Testar fluxo completo com email próprio
- [ ] Verificar formatação mobile dos emails

---

## Arquivos envolvidos

- `marketing/kit-vetora/` — salvar rascunhos dos 5 emails aqui (`email-sequence-kit.md`)
- Plataforma de email (Brevo ou nativa da Cakto/Kirvano) — configuração externa

---

## Critério de conclusão

- [ ] 5 emails escritos no tom VETORA — sem guru digital, sem buzzwords
- [ ] Sequência configurada e ativa na plataforma de email
- [ ] Teste de fluxo completo feito com email próprio
- [ ] Cada email tem assunto, corpo e CTA claro
- [ ] Email 1 entrega o lead magnet corretamente
- [ ] Emails formatam bem em mobile

---

## Notas e referências

- Tom dos emails: direto, consultivo, sem pressão artificial — quem recebe deve sentir que está lendo algo útil, não marketing
- Evitar: subject lines clickbait, contagem regressiva falsa, linguagem de escassez artificial
- Referência de tom: `_memoria/preferencias.md`
- Case para o Email 4: usar o melhor resultado do Sprint 02
- Ferramentas de escrita: usar o próprio Claude com o perfil VETORA para rascunhar e revisar cada email
