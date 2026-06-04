---
name: linkedin-fhb-authority
description: |
  Cria conteúdo de autoridade para o LinkedIn de Fernando Henrique Branco (FHB) —
  posts que posicionam o fundador como referência em branding estratégico, IA aplicada
  e engenharia industrial, sem soar como guru ou vendedor. Tom de voz: engenheiro sênior
  que pensa estrategicamente e compartilha com precisão.
  Fase 5 do Método VETORA. Use quando o usuário disser "post no LinkedIn", "conteúdo de autoridade",
  "quero postar", "criar post LinkedIn", "/linkedin-fhb-authority".
---

# /linkedin-fhb-authority — Conteúdo de Autoridade LinkedIn (FHB)

Cria posts LinkedIn que constroem a autoridade do Fernando como fundador da VETORA — sem soar como guru, sem clickbait, sem linguagem de infoprodutor.

## Quando ativar

- Quando o usuário quiser criar um post para o LinkedIn pessoal
- Quando quiser compartilhar um aprendizado, caso, insight ou ponto de vista estratégico
- Quando precisar de uma sequência de posts para o lançamento do Kit VETORA
- Quando o usuário disser "post LinkedIn", "conteúdo de autoridade", "quero postar"

## O que faz

Cria posts LinkedIn no tom de Fernando Henrique Branco: engenheiro industrial sênior com domínio de IA aplicada, que compartilha perspectivas estratégicas com precisão e sem rodeios. Entrega o texto pronto para copiar + sugestão de gancho visual (quando aplicável).

## O que NÃO faz

- Não cria conteúdo genérico de "dicas de marketing"
- Não usa linguagem de guru, infoprodutor ou coach
- Não faz posts motivacionais vazios

## Contexto VETORA obrigatório

Antes de criar, consultar:
- `vetora-brand-os` — para calibrar ao tom de voz VETORA
- `_memoria/empresa.md` — para contexto de Fernando e da VETORA

## Perfil do Autor (Fernando H. Branco)

- Engenheiro mecânico + Coordenador de Engenharia Industrial na Docol (CLT integral)
- Fundador da VETORA — estúdio estratégico de branding, sites e IA
- Recurso mais escasso: tempo → tudo que Fernando compartilha é denso e direto
- Não é influencer — é profissional que compartilha o que aprende fazendo
- Canal mais forte: LinkedIn → audiência de engenheiros, gestores e empreendedores B2B

**Tom pessoal do Fernando:** Preciso, direto, estratégico. Não usa emoji em excesso. Não faz retórica de motivação. Pensa como engenheiro e escreve como consultor.

## Formatos de Post LinkedIn

### Formato 1 — Insight de Engenharia Aplicada ao Negócio

Pegar um conceito de engenharia industrial (FMEA, lean, tolerâncias, projeto de produto) e aplicar a um problema de branding, marketing ou negócio.

Estrutura:
```
[Conceito de engenharia] e [aplicação ao negócio]

[Explicação do conceito em 1-2 frases]

Aplicado ao [branding/site/IA/estratégia]:
[Como funciona na prática]

O que a maioria ignora:
[Insight inesperado]

[Pergunta ou ponto de reflexão para comentários]
```

### Formato 2 — Bastidores do Projeto

Compartilhar um aprendizado real de um projeto (Autec, Rancho 517, Kit VETORA) sem revelar dados confidenciais.

Estrutura:
```
[Observação que surgiu no projeto]

O que eu achava:
[Suposição inicial]

O que descobri:
[O que mudou e por quê]

Por que importa para [segmento da audiência]:
[1-2 frases de generalização útil]
```

### Formato 3 — Ponto de Vista Polêmico (Construtivo)

Uma posição clara sobre algo que o mercado faz de errado, sem ser arrogante.

Estrutura:
```
[Afirmação direta que desafia o senso comum]

Sim, estou dizendo que [repetição da afirmação com mais contexto]

O que acontece quando você ignora isso:
[Consequência real]

O que funciona melhor:
[A posição da VETORA, com justificativa]

[Pergunta: "Concorda? Tem uma perspectiva diferente?"]
```

### Formato 4 — Anúncio / Lançamento

Para o Kit VETORA ou novos serviços — sem hype, com substância.

Estrutura:
```
[O problema que esse produto/serviço resolve]

[O que estou lançando — 1 frase]

Por que agora:
[Contexto e timing]

Para quem é:
[Público específico]

Como funciona:
[Mecanismo em 2-3 bullets]

[Link + CTA claro]
```

---

## Processo

### Passo 1 — Entender o tema

Perguntar ao usuário:
1. "Qual é o tema ou insight que você quer compartilhar?"
2. "Tem alguma história ou situação real que originou esse insight?"
3. "Para qual formato? (insight, bastidores, ponto de vista, anúncio)"
4. "Tem prazo? É urgente ou pode refinar?"

### Passo 2 — Criar o gancho

O gancho (primeiras 1-2 linhas) é o que aparece antes do "ver mais". Tem que parar o scroll.

Regras do gancho:
- Máx. 2 linhas antes do "ver mais"
- Afirmação direta ou pergunta de 1-2 palavras — nunca explicação
- Nunca "Hoje aprendi que..." ou "Compartilho aqui que..."
- Nunca emoji no gancho institucional

### Passo 3 — Desenvolver o post

Escrever o post completo no formato escolhido. Tom: Fernando F.H.B. — preciso, sem rodeio, com substância.

Extensão:
- Posts de insight: 150-300 palavras
- Posts de anúncio: 200-400 palavras
- Evitar posts acima de 500 palavras (perdem leitura no mobile)

### Passo 4 — Revisar contra o padrão

- [ ] Nenhuma palavra da lista restrita do `vetora-brand-os` como âncora
- [ ] Nenhuma frase proibida ou variação
- [ ] Tom: engenheiro preciso — não guru entusiasmado
- [ ] Gancho para o scroll em 2 linhas
- [ ] CTA (comentário, pergunta ou link) no final

### Passo 5 — Sugerir visual (se relevante)

Para posts de lançamento ou com dado visual forte:
- Sugerir um carrossel → ativar `/social-carousel-builder` para criar
- Sugerir uma imagem single → descrever o conceito visual

## Critérios de aceite

- [ ] Tom é Fernando H.B. — não VETORA corporativo, não guru, não coach
- [ ] Gancho para no scroll
- [ ] Sem hashtags em excesso (máx. 3-5 no final, se necessário)
- [ ] Passa no checklist do `vetora-brand-os`
- [ ] CTA claro no final (pergunta, link ou reflexão)

## Output padrão

Post LinkedIn completo pronto para copiar e colar. Quando relevante: sugestão de visual ou carrossel complementar. Extensão: 150-400 palavras.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
