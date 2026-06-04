---
name: proposal-builder-vetora
description: |
  Cria propostas comerciais estruturadas para projetos VETORA — diagnóstico, escopo por fase,
  investimento, prazo e próximos passos. Tom consultivo, não de vendas.
  Fase 5 do Método VETORA (ou Fase 2, quando a proposta precede o projeto).
  Use quando o usuário disser "proposta comercial", "orçamento", "montar uma proposta",
  "apresentar o projeto para o cliente", "/proposal-builder-vetora".
---

# /proposal-builder-vetora — Proposta Comercial VETORA

Cria propostas que educam antes de vender. Estrutura consultiva: diagnóstico → direção → proposta de valor → investimento → próximo passo.

## Quando ativar

- Quando o diagnóstico de um cliente está concluído e é hora de formalizar o escopo
- Quando o usuário quiser apresentar um projeto a um cliente potencial
- Quando precisar renovar ou expandir um projeto existente
- Quando o usuário disser "proposta", "orçamento", "como apresentar pra Autec/Rancho/outro cliente"

## O que faz

Cria uma proposta comercial completa em 6 seções: contexto do cliente, diagnóstico, proposta de valor, escopo por fase, investimento e próximo passo. Tom consultivo — a proposta convence pela inteligência, não pelo desconto.

## O que NÃO faz

- Não inventa escopo — parte do que foi definido em `client-diagnosis` e `site-architecture-vetora`
- Não define preços sem o usuário — apresenta a estrutura e pede os valores
- Não substitui a reunião de apresentação — prepara o material para ela

## Contexto VETORA obrigatório

Antes de criar, consultar:
- `vetora-brand-os` — tom de voz consultivo (a proposta fala como a VETORA)
- `vetora-method` — para estruturar o escopo por fase do método
- `_memoria/clientes/<nome>/diagnostico.md` — se disponível
- `_memoria/clientes/<nome>/posicionamento.md` — se disponível

## Processo

### Passo 1 — Coletar informações da proposta

Perguntar ao usuário:
1. "Nome do cliente e da empresa?"
2. "Qual é o escopo do projeto? (site, branding, LP, conteúdo, pacote completo)"
3. "Qual fase do método? (Diagnóstico, Direção, Construção, Entrega, Pacote completo)"
4. "Qual é o investimento por fase / total? (se já tiver)"
5. "Qual é o prazo estimado?"
6. "Qual é o próximo passo que o cliente precisa tomar?"

### Passo 2 — Estruturar a proposta

Criar a proposta em 6 seções:

---

**Seção 1 — Contexto**

"Entendemos que a [empresa] enfrenta [desafio principal identificado no diagnóstico]. O que existe hoje é [situação atual]. O que o mercado ainda não percebe é [gap principal]."

(Máx. 2 parágrafos. Demonstra que a VETORA entendeu o problema antes de propor.)

---

**Seção 2 — Nossa Proposta**

"Propomos um projeto estruturado em [X fases] do Método VETORA: [fases aplicáveis]. O resultado esperado é [resultado principal em termos de percepção e negócio]."

---

**Seção 3 — Escopo por Fase**

Para cada fase incluída, listar:
- **Fase X — [Nome]:** O que inclui · O que entrega · Critério de conclusão

Exemplo:
```
Fase 1 — Diagnóstico (1 semana)
  Inclui: Entrevista estruturada + análise de presença digital atual
  Entrega: Relatório de diagnóstico aprovado + hipótese de posicionamento
  Aprovação: Apresentação ao cliente antes de avançar para Fase 2
```

---

**Seção 4 — O que NÃO inclui**

(Previne conflitos de expectativa.)
"Esta proposta não inclui: [lista específica de o que fica fora do escopo]"

---

**Seção 5 — Investimento**

```
Fase 1 — Diagnóstico:        R$ [valor]
Fase 2 — Direção:            R$ [valor]
Fase 3 — Construção:         R$ [valor]
Fase 4 — Entrega/QA:         R$ [valor]
───────────────────────────────────────
Total do projeto:            R$ [total]

Forma de pagamento: [ex: 50% na assinatura + 50% na entrega]
Prazo total estimado: [X semanas]
Validade desta proposta: [data]
```

---

**Seção 6 — Próximo Passo**

"Para avançar, [ação específica do cliente: assinar o contrato / confirmar por email / pagar o sinal]. Assim que confirmado, agendamos o kickoff para [prazo]."

---

### Passo 3 — Revisar tom e formato

Checar antes de entregar:
- [ ] Tom consultivo em todo o documento (sem linguagem de vendas agressiva)
- [ ] Diagnóstico específico (não genérico — o cliente deve se reconhecer)
- [ ] Escopo claro e sem ambiguidade
- [ ] Próximo passo com uma única ação do cliente

### Passo 4 — Salvar

Criar `saidas/propostas/<nome-cliente>-<data>.md` com a proposta final.

## Critérios de aceite

- [ ] As 6 seções estão completas
- [ ] O diagnóstico menciona problemas específicos do cliente
- [ ] O escopo por fase é claro, com entregáveis e critérios de aprovação
- [ ] O que NÃO inclui está explícito
- [ ] Investimento com valores, forma de pagamento e validade
- [ ] Próximo passo com ação única e específica
- [ ] Tom: consultivo, não de vendedor

## Output padrão

Arquivo `saidas/propostas/<nome-cliente>-<data>.md` com proposta completa em 6 seções. Pronto para copiar e enviar por email, apresentar em reunião ou adaptar para PDF.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
