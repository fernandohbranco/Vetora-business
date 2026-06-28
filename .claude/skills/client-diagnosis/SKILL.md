---
name: client-diagnosis
description: |
  Conduz o diagnóstico estruturado de um novo cliente — entrevista guiada para mapear negócio,
  posicionamento atual, gaps de percepção, público, diferencial e objetivos. Entrega um
  relatório de diagnóstico aprovado antes de qualquer proposta ou execução.
  Fase 1 do Método VETORA. Consulte vetora-method para contexto completo do método.
  Use quando um cliente novo chega, quando precisar estruturar um onboarding,
  ou quando o usuário disser "diagnóstico de cliente", "novo cliente", "/client-diagnosis".
---

# /client-diagnosis — Diagnóstico de Cliente VETORA

Conduz a entrevista estruturada que transforma "conhecer o cliente" em "entender o problema real a resolver". Nada é proposto sem diagnóstico aprovado.

## Quando ativar

- Quando um novo cliente entrar (seja Autec, Rancho 517, FRBranco ou novo)
- Quando o usuário disser "diagnóstico", "novo cliente", "onboarding", "vou começar um projeto"
- Quando precisar estruturar a fase 1 de uma proposta comercial
- Quando quiser mapear o gap entre o que o cliente entrega e o que o mercado percebe

## O que faz

Conduz uma entrevista estruturada com 4 blocos (negócio, mercado, percepção, objetivos), consolida as respostas em um relatório de diagnóstico e obtém aprovação antes de avançar para a Fase 2 — Direção.

## O que NÃO faz

- Não propõe soluções — isso é `brand-positioning-architect` e `site-architecture-vetora`
- Não executa nenhuma entrega — apenas mapeia e documenta
- Não substitui a proposta comercial — mas alimenta o `proposal-builder-vetora`

## Contexto VETORA obrigatório

Antes de iniciar, consultar:
- `vetora-brand-os` — para calibrar o tom da entrevista e do relatório
- `vetora-method` — para entender onde Diagnóstico se encaixa no ciclo completo

## Processo

### Passo 1 — Contexto rápido

Ler `_memoria/empresa.md` para ver se há informações do cliente já registradas. Se sim, partir delas e complementar. Se não, começar do zero.

### Passo 2 — Entrevista estruturada (4 blocos)

Fazer as perguntas em sequência, uma de cada vez:

**Bloco A — O Negócio**
1. "Qual é o nome da empresa e o que ela entrega?"
2. "Há quanto tempo existe? Qual é o modelo de receita?"
3. "Quem são os fundadores / responsáveis? Qual é o tamanho da operação?"
4. "Qual é o ticket médio de venda? Volume mensal?"

**Bloco B — O Mercado**
5. "Quem são os 3 principais concorrentes diretos?"
6. "O que diferencia essa empresa deles — na percepção atual do mercado?"
7. "Quem é o cliente ideal? Descreva o perfil em detalhes."
8. "Qual é o canal de aquisição de clientes hoje? Como os clientes chegam?"

**Bloco C — A Percepção**
9. "Como os clientes descrevem a empresa para outras pessoas?"
10. "O que a empresa gostaria que as pessoas pensassem dela — mas ainda não pensam?"
11. "Qual é o maior gap entre o que a empresa entrega e o que o mercado consegue perceber?"
12. "Tem presença digital hoje? Site, redes, Google Meu Negócio?"

**Bloco D — Os Objetivos**
13. "Qual é o objetivo principal para os próximos 6-12 meses?"
14. "O que uma colaboração bem-sucedida com a VETORA significaria para você?"
15. "Tem prazo, orçamento ou restrições que precise saber?"

### Passo 3 — Consolidar o relatório

Criar `_memoria/clientes/<nome-cliente>/diagnostico.md` com:

```markdown
# Diagnóstico — [Nome do Cliente]
Data: [data]
Fase: 1 — Diagnóstico

## Resumo executivo
[2-3 frases: quem é, o maior gap, o objetivo]

## Negócio
[Respostas consolidadas do Bloco A]

## Mercado
[Respostas consolidadas do Bloco B]

## Percepção atual
[Respostas consolidadas do Bloco C]

## Objetivos
[Respostas consolidadas do Bloco D]

## Gap principal identificado
[O desalinhamento central entre entrega e percepção — 1 parágrafo]

## Hipótese de direção
[Hipótese inicial de como a VETORA pode ajudar — para refinar na Fase 2]

## Próximo passo
[Qual skill ativar: brand-positioning-architect / site-architecture-vetora / landing-page-cro-vetora]
```

### Passo 4 — Checkpoint de aprovação

Apresentar o relatório ao usuário:

> "Aqui está o diagnóstico consolidado. Antes de avançar para a Fase 2, você aprova este mapeamento? Há algo que ficou incompleto ou impreciso?"

Só avançar com aprovação explícita.

### Passo 5 — Recomendar próximo passo

Com o diagnóstico aprovado, recomendar a skill da Fase 2 mais adequada:
- Gap de posicionamento/identidade verbal → `/brand-positioning-architect`
- Gap de presença digital → `/digital-presence-audit` primeiro, depois `/site-architecture-vetora`
- Projeto com LP clara → `/landing-page-cro-vetora`

## Templates / referências

- `vetora-method` — mapa completo de fases
- `_memoria/clientes/` — pasta de contexto de clientes (criar se não existir)

## Critérios de aceite

- [ ] Os 4 blocos da entrevista foram completados
- [ ] Gap principal claramente nomeado em uma frase
- [ ] Hipótese de direção registrada
- [ ] Usuário aprovou o diagnóstico antes de avançar
- [ ] Próximo passo recomendado com skill específica
- [ ] Relatório salvo em `_memoria/clientes/<nome>/diagnostico.md`
- [ ] Tom consultivo e preciso — sem linguagem de agência

## Output padrão

Arquivo `_memoria/clientes/<nome-cliente>/diagnostico.md` com diagnóstico completo em 5 seções. Inline no chat: resumo executivo + gap principal + próximo passo recomendado.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
