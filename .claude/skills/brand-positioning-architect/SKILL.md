---
name: brand-positioning-architect
description: |
  Define o posicionamento estratégico de marca de um cliente — arquétipo, proposta de valor,
  tom de voz, tagline, diferencial e identidade verbal completa. Entrega o documento de
  posicionamento aprovado que guia toda a execução subsequente.
  Fase 2 do Método VETORA. Requer client-diagnosis concluído como entrada.
  Use quando o usuário disser "posicionamento de marca", "identidade verbal", "como se comunicar",
  "definir o tom de voz do cliente", "arquétipo de marca", "/brand-positioning-architect".
---

# /brand-positioning-architect — Arquiteto de Posicionamento de Marca VETORA

Define onde a marca se posiciona, como fala e por que merece atenção. O documento de posicionamento é a fundação de toda execução criativa subsequente.

## Quando ativar

- Após o `client-diagnosis` ser aprovado
- Quando o cliente não tem posicionamento claro ou precisa redefinir o existente
- Quando o copy, o site e o conteúdo "não conversam" entre si
- Quando o usuário disser "posicionamento", "identidade verbal", "tom de voz do cliente"

## O que faz

Constrói o documento de posicionamento estratégico: arquétipo de marca, proposta de valor única (PVU), diferencial competitivo real, tom de voz com exemplos, tagline, e mapa de mensagens por público. Tudo aprovado pelo cliente antes de qualquer execução.

## O que NÃO faz

- Não cria identidade visual (logo, cores) — isso é `vetora-design-system` + brief para designer
- Não cria copy de site ou LP — isso é `vetora-copywriter` e `landing-page-cro-vetora`
- Não substitui o diagnóstico — sempre parte do `client-diagnosis` concluído

## Contexto VETORA obrigatório

Antes de iniciar, consultar:
- `vetora-brand-os` — para calibrar o processo ao padrão de marca VETORA
- `vetora-method` — para confirmar que estamos na Fase 2 — Direção
- `_memoria/clientes/<nome>/diagnostico.md` — diagnóstico aprovado do cliente

## Processo

### Passo 1 — Revisar o diagnóstico

Ler `_memoria/clientes/<nome>/diagnostico.md`. Identificar:
- O gap principal de percepção
- O diferencial que o mercado ainda não reconhece
- O público prioritário
- O objetivo do cliente para os próximos 12 meses

### Passo 2 — Definir o arquétipo

Selecionar o arquétipo primário + secundário (Carl Jung/Carol S. Pearson aplicado a marcas):

| Arquétipo | Essência | Típico para |
|---|---|---|
| O Sábio | Conhecimento, clareza, método | Consultorias, tech, educação |
| O Criador | Inovação, construção, expressão | Estúdios, produto, tech |
| O Herói | Conquista, superação, coragem | Esporte, saúde, desafios |
| O Cuidador | Proteção, serviço, generosidade | Saúde, educação, bem-estar |
| O Governante | Controle, qualidade, autoridade | Luxo, B2B, liderança |
| O Explorador | Liberdade, aventura, descoberta | Viagem, outdoor, inovação |
| O Rebelde | Ruptura, autenticidade, mudança | Marcas disruptivas |
| O Mago | Transformação, visão, possibilidade | Tech, consultoria transformacional |
| O Inocente | Pureza, otimismo, simplicidade | Alimentos, família, natureza |
| O Amante | Conexão, desejo, beleza | Moda, beleza, gastronomia |
| O Bobo | Diversão, espontaneidade, leveza | Entretenimento, varejo casual |
| O Homem Comum | Pertencimento, confiabilidade | Produtos de massa, serviços locais |

Apresentar top 2 arquétipos com justificativa baseada no diagnóstico. Obter aprovação.

### Passo 3 — Formular a PVU (Proposta de Valor Única)

Estrutura: `[Cliente ideal] que [problema/contexto] conseguem [resultado principal] através de [mecanismo único/diferencial]`

Exemplo VETORA: "Empresas técnicas e industriais que precisam ser percebidas melhor pelo mercado conseguem transformar sua expertise em ativo digital de valor através do método VETORA — diagnóstico, estratégia e execução com IA."

Criar 3 versões e apresentar ao usuário para aprovação.

### Passo 4 — Definir tom de voz

Com base no arquétipo aprovado, definir:
- **Adjetivos do tom** (4-6 palavras: ex: consultivo, preciso, elegante, direto)
- **Como escreve** (3 princípios)
- **Como NÃO escreve** (3 proibições)
- **2-3 frases de exemplo** no tom aprovado

### Passo 5 — Criar a tagline

Criar 5 opções de tagline, votadas pelo usuário:
- Máx. 7 palavras
- Deve nomear um resultado ou transformação — não uma característica
- Deve sobreviver fora de contexto (funcionar sem o logo)

### Passo 6 — Mapa de mensagens

Por público prioritário (1-3 públicos), definir:
- Dor principal
- Desejo principal
- Mensagem de entrada (como capturar atenção)
- Mensagem de conversão (o que convence a agir)

### Passo 7 — Checkpoint de aprovação

Apresentar o documento completo ao usuário:

> "Aqui está o posicionamento estratégico da marca. Antes de usá-lo como base para o site, copy e conteúdo, você aprova este mapeamento? Algum ponto para ajustar?"

### Passo 8 — Salvar

Criar `_memoria/clientes/<nome>/posicionamento.md` com o documento final aprovado.

## Critérios de aceite

- [ ] Arquétipo definido e justificado com base no diagnóstico
- [ ] PVU em formato estruturado e aprovada pelo usuário
- [ ] Tom de voz com exemplos positivos e negativos
- [ ] Tagline aprovada
- [ ] Mapa de mensagens por público
- [ ] Documento salvo em `_memoria/clientes/<nome>/posicionamento.md`
- [ ] Nenhuma decisão de posicionamento é "de agência" — tudo baseado em evidências do diagnóstico

## Output padrão

Documento `_memoria/clientes/<nome>/posicionamento.md` com: arquétipo, PVU, tom de voz, tagline e mapa de mensagens. Inline: resumo executivo em 1 parágrafo + tagline aprovada.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
