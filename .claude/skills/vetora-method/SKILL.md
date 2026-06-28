---
name: vetora-method
description: |
  Método operacional VETORA em 5 fases: Diagnóstico → Direção → Construção → Entrega → Evolução.
  Fornece o framework de referência para organizar o trabalho de qualquer cliente, identificar em
  qual fase o projeto está, e selecionar as skills corretas para cada momento.
  Consulte esta skill quando precisar entender onde um projeto está no método,
  estruturar uma proposta por fases, ou explicar o processo VETORA a um cliente.
  Ativar com "/vetora-method".
---

# /vetora-method — O Método Operacional VETORA

O método que dá estrutura a todo projeto da VETORA. Cinco fases em sequência, cada uma com entregáveis claros e skills correspondentes.

## Quando ativar

- Quando uma skill precisar saber em qual fase do método o projeto está
- Quando o usuário perguntar "por onde começo?", "qual é o processo?", "como a VETORA trabalha?"
- Quando montar uma proposta comercial por fases
- Quando estruturar o diagnóstico inicial de um novo cliente
- Quando precisar explicar o método em uma apresentação ou conversa de vendas

## O que faz

Define as 5 fases do método VETORA, os entregáveis de cada fase, os gatilhos de entrada/saída e quais skills do VetoraOS correspondem a cada momento do projeto. Serve como mapa de navegação para qualquer projeto de cliente.

## O que NÃO faz

- Não executa nenhuma fase — roteia para as skills corretas
- Não substitui o diagnóstico real do cliente — é o framework, não a análise
- Não toma decisões de escopo — isso é feito em `client-diagnosis`

## Contexto VETORA obrigatório

Antes de usar este método, o contexto do cliente deve estar em `_memoria/empresa.md` (ou em arquivo dedicado do projeto).

---

## As 5 Fases do Método VETORA

### Fase 1 — Diagnóstico

**O que é:** Entender profundamente o negócio, o mercado, o posicionamento atual e os gaps de percepção.

**Pergunta central:** "O que o cliente entrega e o que o mercado consegue perceber?"

**Entregáveis:**
- Mapa de posicionamento atual vs. desejado
- Análise de presença digital existente
- Identificação dos 3 maiores gaps de percepção
- Clareza sobre o público, o diferencial e a proposta de valor

**Skills correspondentes:**
- `client-diagnosis` — entrevista estruturada de diagnóstico de cliente
- `digital-presence-audit` — auditoria de presença digital atual

**Gatilho de saída:** Cliente e VETORA têm clareza sobre o problema a resolver. Aprovação do diagnóstico antes de avançar.

---

### Fase 2 — Direção

**O que é:** Definir o posicionamento estratégico e a arquitetura de solução antes de qualquer execução.

**Pergunta central:** "Para onde vamos e qual é o caminho mais preciso?"

**Entregáveis:**
- Posicionamento estratégico definido (arquétipo, tom, diferencial)
- Arquitetura do site ou plataforma digital
- Framework da landing page ou página de vendas
- Mapa de conteúdo e hierarquia de mensagens

**Skills correspondentes:**
- `brand-positioning-architect` — define posicionamento e identidade verbal do cliente
- `site-architecture-vetora` — estrutura a arquitetura do site
- `landing-page-cro-vetora` — estrutura o framework da LP antes de construir

**Gatilho de saída:** Aprovação da estratégia. Nada é construído sem isso.

---

### Fase 3 — Construção

**O que é:** Executar as entregas aprovadas na fase de Direção com qualidade VETORA.

**Pergunta central:** "Como construir com precisão e identidade?"

**Entregáveis:**
- Copy completo (site, landing page, apresentação, conteúdo)
- HTMLs e assets visuais prontos
- Carrosséis e conteúdo de redes sociais
- Handoff técnico para desenvolvimento

**Skills correspondentes:**
- `vetora-copywriter` — copy com tom e identidade VETORA
- `landing-page-cro-vetora` — HTML + copy da LP
- `social-carousel-builder` — carrosséis e posts visuais
- `claude-code-handoff` — pacote técnico para desenvolvedor

**Gatilho de saída:** Entregáveis revisados internamente com critérios de aceite da fase 4.

---

### Fase 4 — Entrega / QA

**O que é:** Revisar tudo antes de ir ao ar. Garantia de qualidade técnica, visual e de copy.

**Pergunta central:** "Isso está pronto para o mercado perceber?"

**Entregáveis:**
- Checklist de qualidade preenchido
- Revisão técnica do site/landing page
- Revisão de UX e experiência
- Aprovação final antes do deploy

**Skills correspondentes:**
- `vetora-qa-checklist` — checklist de entrega por tipo de projeto
- `web-qa-technical-vetora` — auditoria técnica (performance, SEO, acessibilidade)
- `ux-review-vetora` — revisão de UX e experiência do usuário

**Gatilho de saída:** Checklist 100% aprovado. Deploy autorizado.

---

### Fase 5 — Evolução

**O que é:** Acompanhar resultados, refinar o que foi entregue e construir autoridade contínua.

**Pergunta central:** "O que melhorar para que a percepção continue crescendo?"

**Entregáveis:**
- Autoridade no LinkedIn (conteúdo do founder)
- Proposta para novos escopos (retentiva, expansão)
- Ajustes com base em dados reais de uso

**Skills correspondentes:**
- `linkedin-fhb-authority` — conteúdo de autoridade no LinkedIn (Fernando H. Branco)
- `proposal-builder-vetora` — proposta de renovação ou expansão de escopo

**Gatilho de saída:** Cliente renovando ou indicando — ciclo reinicia com novo Diagnóstico.

---

## Mapa de Skills por Fase

| Fase | Skills |
|---|---|
| 1 — Diagnóstico | `client-diagnosis`, `digital-presence-audit` |
| 2 — Direção | `brand-positioning-architect`, `site-architecture-vetora`, `landing-page-cro-vetora` |
| 3 — Construção | `vetora-copywriter`, `landing-page-cro-vetora`, `social-carousel-builder`, `claude-code-handoff` |
| 4 — Entrega/QA | `vetora-qa-checklist`, `web-qa-technical-vetora`, `ux-review-vetora` |
| 5 — Evolução | `linkedin-fhb-authority`, `proposal-builder-vetora` |
| Transversal | `vetora-brand-os`, `vetora-method`, `vetora-design-system`, `ops`, `aprovar-post` |
| OS | `abrir`, `atualizar`, `instalar`, `salvar` |

---

## Processo (quando ativado explicitamente)

1. **Identificar fase** — Perguntar ao usuário: "Em qual fase estamos com esse cliente?" (ou deduzir do contexto)
2. **Apresentar entregáveis da fase** — Listar o que esta fase produz e o que aprova a passagem para a próxima
3. **Recomendar skill** — Indicar a skill correspondente e propor o próximo passo concreto

## Critérios de aceite

- [ ] Fase do projeto claramente identificada
- [ ] Entregáveis da fase listados com critério de saída claro
- [ ] Skill correspondente indicada corretamente

## Output padrão

Mapa de fase atual + entregáveis + skill recomendada para o próximo passo. Em propostas, tabela completa de fases com escopo e prazo estimado por fase.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial, criada durante migração para VetoraOS v2
