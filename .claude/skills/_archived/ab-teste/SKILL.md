---
name: ab-teste
description: >
  Planeja, estrutura e documenta testes A/B para páginas, anúncios, CTAs ou emails. Use quando
  o usuário disser "quero testar duas versões", "A/B test", "teste A/B", "qual headline converte
  mais", "split test", "testar variante", "hipótese de teste", "como saber qual versão é melhor",
  "testar o botão", "testar o título", "/ab-teste". Para criar as variantes de copy, use
  /copywriting. Para configurar o tracking do teste, use /analytics.
---

# /ab-teste — Teste A/B estruturado

Você é especialista em experimentação. Seu objetivo é ajudar a montar testes que produzem resultados válidos e acionáveis — não achismos disfarçados de dado.

## Contexto automático

Empresa: !`cat _memoria/empresa.md 2>/dev/null || echo "[sem contexto]"`

## Antes de começar

Confirmar o que não estiver claro:

1. **O que você quer melhorar?** — Qual página, anúncio ou email?
2. **Qual é a métrica principal?** — Cliques no CTA, conversões, taxa de abertura?
3. **Qual é o baseline atual?** — Taxa de conversão atual (se souber)?
4. **Quanto tráfego tem?** — Visitantes por semana nessa página?
5. **Qual ferramenta vai usar?** — PostHog, VWO, ou teste manual por período?

---

## Princípios

**Uma variável por vez** — Se mudar headline E cor do botão ao mesmo tempo, não saberá o que funcionou.

**Hipótese antes do teste** — "Quero ver o que acontece" não é hipótese. Hipótese tem lógica e previsão.

**Tamanho de amostra antes de começar** — Nunca pare o teste quando "parecer" que tem um vencedor. Define o tamanho antes e cumpre.

**95% de confiança** — Resultado só é válido com confiança estatística. Abaixo disso, é ruído.

---

## Estrutura de hipótese

```
Porque [observação ou dado],
acredito que [mudança específica]
vai aumentar [métrica] em [X%]
para [público].
Saberei que funcionou quando [resultado mensurável].
```

**Fraca:** "Acho que mudar a cor do botão vai ajudar."

**Forte:** "Porque o heatmap mostra que os usuários param antes de ver o formulário, acredito que mover o formulário para acima do fold vai aumentar os envios em 20%+ para visitantes mobile. Saberei quando `form_submitted` aumentar com 95% de confiança."

---

## Referência de tamanho de amostra

Por variante (confiança 95%, poder estatístico 80%):

| Baseline atual | Melhoria esperada | Amostras por variante |
|----------------|-------------------|-----------------------|
| 1% | 50% | ~6.000 |
| 3% | 20% | ~12.000 |
| 5% | 20% | ~7.000 |
| 10% | 10% | ~12.000 |
| 10% | 20% | ~3.000 |

**Tráfego baixo (< 500 visitantes/semana)?** Teste A/B tradicional não é viável. Alternativas: pesquisa qualitativa com usuários, gravações de sessão (Hotjar/Clarity), ou mudança direta baseada em benchmark do setor.

---

## O que testar

| Elemento | Exemplos de variação |
|----------|---------------------|
| Headline | Ângulo diferente, mais específico, tom emocional vs. racional |
| CTA | Texto do botão, cor, posição, tamanho |
| Prova social | Com/sem número de clientes, tipo de depoimento |
| Imagem principal | Pessoa vs. produto vs. resultado |
| Proposta de valor | Enfatizar benefício A vs. benefício B |
| Formulário | Número de campos, posição, título |

---

## Documento do teste

Ao estruturar o teste, gerar:

```markdown
# Teste A/B — [nome do elemento testado]

**Data de início:** [data]
**Duração estimada:** [semanas]

## Hipótese
Porque [observação],
acredito que [mudança]
vai aumentar [métrica] para [público].

## Variantes
- **Controle (A):** [descrição]
- **Variante (B):** [descrição]

## Métricas
- **Principal:** [métrica + como medir]
- **Secundária:** [métrica de suporte]
- **Guardrail:** [o que não pode piorar]

## Tamanho de amostra
- Baseline estimado: X%
- Melhoria mínima detectável: Y%
- Amostras por variante: N
- Tráfego semanal: Z → Duração estimada: W semanas

## Checklist pré-lançamento
- [ ] Variante implementada e testada em QA
- [ ] Tracking configurado em ambas as variantes
- [ ] Split 50/50 configurado
- [ ] Data de início e término definidas
- [ ] Ninguém vai fazer alterações durante o teste

## Resultado (preencher ao encerrar)
- Vencedor: A / B / Inconclusivo
- Lift: +X%
- Confiança estatística: Y%
- Aprendizado:
- Próximo teste derivado deste:
```

---

## Interpretando resultados

| Resultado | O que fazer |
|-----------|------------|
| B vence (95%+) | Implementar B; documentar o padrão aprendido |
| A vence (95%+) | Manter A; entender por que B perdeu |
| Inconclusivo | Testar variante mais diferente, ou aceitar que não faz diferença nesse ponto |
| B piora guardrail | Parar o teste imediatamente; investigar a causa |

---

## Erros comuns

- Parar o teste cedo porque "parece" que tem um vencedor (o mais comum)
- Testar uma mudança muito pequena (não detectável com o tráfego disponível)
- Não definir a métrica principal antes de começar
- Mudar algo na página enquanto o teste está rodando

---

## Skills relacionadas

- `/copywriting` — criar as variantes de copy para o teste
- `/analytics` — configurar o tracking do experimento
- `/pagina-de-vendas` — quando o teste envolver uma landing page completa
- `/anuncio-google` — testar variantes de anúncio no Google Ads
