# Sprint 06 — Urgência Real

**Fase:** Pré-lançamento | **Esforço:** 1-2h | **Prioridade:** 6 de 9

---

## Contexto

A landing page atual usa um countdown de 7 dias calculado a partir da primeira visita, armazenado em localStorage. Esse mecanismo tem dois problemas sérios:

1. **É contornável:** qualquer visitante em modo anônimo ou com cookies limpos vê o contador reiniciar. Compradores atentos percebem isso e perdem confiança.
2. **Não tem narrativa:** urgência sem razão real parece manipulação. E confiança é exatamente o que o produto vende.

Urgência funciona quando tem uma razão honesta e verificável. "O preço sobe no dia X" é simples, direto, e pode ser comprovado por quem voltar depois da data.

---

## Objetivo

Ao final desse sprint:

1. Countdown de localStorage removido do código
2. Data fixa de encerramento do preço de lançamento definida
3. Comunicação de urgência na landing atualizada com a data real
4. Narrativa da urgência clara e honesta

---

## Pré-requisitos

- Data de lançamento público definida (Sprint 07 deve ter essa data)
- Sprint 01 concluído (landing com design atualizado)

---

## Tarefas

### Decisão estratégica
- [ ] Definir a data de encerramento do preço de lançamento (ex: 30 dias após o go-live público)
- [ ] Definir o preço após o encerramento (R$397 → R$497, ou R$397 permanente sem urgência)
- [ ] Decidir a narrativa: "preço de lançamento" ou "acesso antecipado"

### Código — remover countdown falso
- [ ] Em `site/kit-vetora/index.html`, localizar o bloco de countdown com localStorage
- [ ] Remover a lógica de cálculo baseada em primeira visita
- [ ] Substituir por: (a) countdown para data fixa, ou (b) banner estático de urgência com data

### Implementação de urgência real

**Opção A — Countdown para data fixa (mais visual):**
- [ ] Implementar countdown simples para a data definida
- [ ] Usar `new Date('YYYY-MM-DDTHH:MM:SS')` — data fixa no código, sem localStorage
- [ ] Quando o prazo vencer, o countdown some e o preço volta ao normal

**Opção B — Banner estático (mais simples e mais honesto):**
- [ ] Remover o countdown completamente
- [ ] Adicionar texto de urgência: "Preço de lançamento: R$397 até [data]. Após essa data, o valor retorna a R$497."
- [ ] Texto visível na seção Oferta e no rodapé do Hero

**Recomendação:** Opção B é mais honesta e menos propensa a desgastar confiança. Countdown visual funciona melhor quando a urgência é de horas, não de semanas.

### Copy da urgência
- [ ] Escrever o texto de urgência no tom VETORA — sem "corra!" ou "aproveite enquanto dura!"
- [ ] Exemplo de copy aprovado: "O Kit está disponível por R$397 até [data]. Após essa data, o preço passa a R$497."
- [ ] Garantir que a data é a mesma em todas as seções da landing (Hero, Oferta, FAQ se relevante)

---

## Arquivos envolvidos

- `site/kit-vetora/index.html` — remover lógica de localStorage e atualizar copy de urgência

---

## Critério de conclusão

- [ ] Lógica de countdown localStorage completamente removida do código
- [ ] Data de encerramento do preço de lançamento definida e documentada
- [ ] Urgência comunicada de forma honesta e verificável na landing
- [ ] Copy de urgência no tom VETORA (sem linguagem de guru ou pressão artificial)
- [ ] Testar que a página funciona corretamente sem o localStorage de countdown

---

## Notas e referências

- A urgência só funciona se for honesta. Se a data passar e o preço não mudar, os primeiros compradores vão perceber e a credibilidade da marca cai.
- Se decidir não ter urgência de preço, remova completamente qualquer referência a prazo. Uma landing sem urgência é melhor do que uma landing com urgência falsa.
- Referência de tom: `_memoria/preferencias.md` — "estratégia antes de estética, diagnóstico antes de proposta"
