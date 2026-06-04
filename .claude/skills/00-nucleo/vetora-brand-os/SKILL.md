---
name: vetora-brand-os
description: |
  Sistema operacional da marca VETORA. Fornece o contexto de identidade verbal completo —
  tom de voz, arquétipos, frases-marca aprovadas, frases proibidas, palavras restritas e
  paleta verbal — para calibrar qualquer output textual ou visual ao padrão da marca.
  Todas as skills de criação de conteúdo consultam esta skill antes de produzir.
  Use quando precisar revisar o padrão de marca, calibrar um texto ao tom VETORA,
  treinar um novo contexto, ou verificar se um output está alinhado à identidade.
  Ativar explicitamente com "/vetora-brand-os".
---

# /vetora-brand-os — Sistema Operacional da Marca

A skill que calibra o tom de qualquer output ao padrão VETORA. Lida antes de criar qualquer copy, post, landing page ou apresentação.

## Quando ativar

- Quando qualquer skill precisar do padrão de marca antes de criar conteúdo
- Quando o usuário perguntar "está no tom VETORA?", "revisa o tom disso", "como a VETORA escreve"
- Quando precisar treinar um contexto de marca para uma nova skill ou agente
- Antes de redigir qualquer material institucional, proposta ou apresentação

## O que faz

Carrega e expõe o sistema completo de identidade verbal da VETORA: posicionamento, arquétipos, tom de voz, frases-marca aprovadas, frases e palavras proibidas, e os princípios de escrita que diferenciam o output VETORA de output genérico de agência.

## O que NÃO faz

- Não cria conteúdo por conta própria — fornece o contexto para outras skills criarem
- Não substitui `identidade/design-guide.md` para decisões visuais
- Não valida estratégia de negócio — apenas calibra o tom e a identidade verbal

## Contexto VETORA obrigatório

Esta é a skill de contexto base. Não consulta outras skills — é consultada por todas.

Fonte de dados: `_memoria/empresa.md` e `_memoria/preferencias.md`

---

## Identidade da Marca

### Posicionamento

**Nome:** VETORA
**Assinatura oficial:** Estratégia, marca e tecnologia na direção certa.
**O que faz:** Transforma negócios reais em ativos digitais de valor — corrigindo o desalinhamento entre o que uma empresa entrega e o que o mercado consegue perceber.
**Diferencial:** Engenheiro industrial sênior com domínio de IA aplicada a branding, sites e copy. Combinação rara: rigor técnico + visão de negócio + execução com IA.

### Arquétipos

**O Sábio** — estratégia, clareza, método. Fala de um lugar de conhecimento profundo, sem arrogância.
**O Criador** — constrói, materializa, transforma estratégia em execução concreta.

A VETORA pensa como consultoria e age como estúdio.

---

## Tom de Voz

**Tom oficial:** Consultivo, estratégico, claro, elegante e direto.

A VETORA fala como uma consultoria moderna: com profundidade, mas sem complicar. Com autoridade, mas sem arrogância. Com criatividade, mas sem perder objetividade.

### Princípios de escrita

1. **Estratégia antes de estética.** Sempre contextualizar o porquê antes do como.
2. **Diagnóstico antes de proposta.** Nunca apresentar solução sem antes nomear o problema.
3. **Linguagem precisa, consultiva e objetiva.** Sem rodeios, sem buzzwords, sem clichês de agência.
4. **Profundidade sem complicar.** A frase mais simples que carrega mais sentido sempre vence.

### Frases-marca aprovadas (usar como referência de tom)

- "Não é sobre aparecer mais. É sobre ser percebido melhor."
- "Sua entrega precisa ser percebida antes da primeira conversa."
- "Tecnologia sem estratégia vira ferramenta. Estratégia com tecnologia vira ativo."
- "Não é sobre ter mais arquivos. É sobre ter método."
- "Construa sua marca com a mesma precisão de um projeto de engenharia."

---

## O que NUNCA escrever

### Frases proibidas

- "Alavanque seu negócio com soluções inovadoras."
- "Criamos artes incríveis para sua empresa."
- "Tenha uma presença digital de milhões."
- "Somos apaixonados por criatividade."
- "Fazemos posts, logos e sites."
- Qualquer variação de "resultado garantido", "fórmula mágica", linguagem de guru digital.

### Palavras de uso restrito

Não proibidas, mas não devem ser o centro da comunicação:

> Agência · Arte · Logo · Barato · Rápido · Seguidores · Pacote · Social media · Tráfego · Fórmula

### Nunca parecer

- Agência genérica de social media
- Freelancer de site barato
- Startup artificial cheia de buzzwords
- Consultoria distante e acadêmica
- Marca informal demais ou excessivamente futurista

---

## Paleta verbal positiva

Palavras que combinam com a marca:

> Direção · Estratégia · Inteligência · Presença · Percepção · Método · Execução · Tecnologia · Confiança · Transformação · Precisão · Posicionamento · Resultado · Diagnóstico · Construção · Ativo digital

---

## Checklist de validação de tom

Antes de entregar qualquer output textual, verificar:

- [ ] A frase mais importante nomeia um problema ou resultado real — não uma característica do serviço
- [ ] Não há nenhuma palavra da lista restrita como elemento central
- [ ] Não há nenhuma frase proibida ou variação dela
- [ ] O texto poderia ser assinado pela VETORA sem envergonhar a marca
- [ ] Soa consultivo, não comercial; estratégico, não entusiasmado
- [ ] Está alinhado ao arquétipo Sábio + Criador

---

## Processo (quando ativado explicitamente)

1. **Carregar contexto** — Ler `_memoria/empresa.md` e `_memoria/preferencias.md` se houver atualização recente
2. **Expor o bloco de identidade** — Apresentar o resumo de tom, arquétipos e restrições ao usuário
3. **Aplicar ao pedido** — Se o usuário trouxe um texto para revisar, aplicar o checklist acima e devolver com comentários específicos sobre o que ajustar

## Critérios de aceite

- [ ] Todas as frases do output passam pelo checklist de validação de tom
- [ ] Nenhuma palavra da lista restrita é usada como âncora de comunicação
- [ ] O output soa como a VETORA — consultivo, preciso, elegante

## Output padrão

Bloco de contexto de marca (para uso interno de outras skills) ou relatório de revisão de tom (quando ativado explicitamente pelo usuário) com marcações específicas do que ajustar e por quê.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial, criada durante migração para VetoraOS v2
