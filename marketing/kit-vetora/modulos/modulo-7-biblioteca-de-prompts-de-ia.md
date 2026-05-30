# Módulo 7 — Biblioteca de Prompts de IA

> Um bom prompt não é uma pergunta. É um briefing. Quanto mais contexto você fornece, mais preciso é o resultado — e menos tempo você perde iterando.

---

## O que é e para que serve

Esta biblioteca contém 40 prompts categorizados para as principais tarefas de branding, comunicação e presença digital. Cada prompt segue uma estrutura de briefing completo — não é uma pergunta genérica, é uma instrução com contexto suficiente para gerar resultado utilizável.

**Ferramentas de IA mencionadas neste módulo:**
- **Claude** (claude.ai) — escrita, estratégia, copy, estrutura
- **ChatGPT** (chat.openai.com) — escrita, revisão, brainstorm
- **Midjourney** (midjourney.com) — geração de imagem
- **DALL-E** (via ChatGPT Plus) — geração de imagem
- **Canva Magic Write** — copy para templates Canva
- **Notion AI** — resumos, geração de texto no Notion

Os prompts são compatíveis com qualquer ferramenta de IA de texto — adapte conforme o que você usa.

---

## Instruções de Qualidade

Antes de usar qualquer prompt, aplique estas regras para melhorar o resultado:

### Regra 1 — Forneça contexto sempre
Nunca use um prompt sem completar os campos em `[colchetes]`. Um prompt sem contexto gera resultado genérico. Contexto transforma IA em colaborador estratégico.

### Regra 2 — Avalie pela função, não pela forma
Um bom output não é aquele que parece bonito — é aquele que cumpre a função para a qual foi criado. Pergunte: esse texto comunica o posicionamento correto? Essa imagem transmite o nível de qualidade que queremos?

### Regra 3 — Itere em cima, não do zero
Quando o resultado não está bom, adicione mais contexto ou corrija especificamente o que está errado. Evite jogar fora e recomeçar — o ajuste fino é mais eficiente.

### Regra 4 — Teste em contexto real
Todo output de IA deve ser visto no contexto onde vai aparecer. Um texto que parece bom isolado pode parecer genérico no site. Uma imagem que parece boa na miniatura pode parecer errada no banner.

### Regra 5 — Filtre pela identidade verbal
Antes de publicar qualquer texto gerado por IA, revise com a lista de palavras do Módulo 3. Remova jargão genérico, frases proibidas e qualquer expressão que não soe como a sua marca.

---

## Prompts de Copy e Texto (15 prompts)

### 1 — Headline de hero para site

```
Escreva 5 opções de headline para a seção hero de um site de [tipo de negócio].

Contexto da marca:
- O que faz: [descrição do negócio em 1–2 frases]
- Para quem: [perfil do cliente ideal]
- Resultado principal que entrega: [resultado concreto]
- Tom de voz: [2–3 adjetivos: ex. consultivo, claro, direto]
- Palavras a evitar: [lista da identidade verbal]

Requisitos para a headline:
- Máximo 10 palavras
- Deve comunicar o resultado ou o problema que resolve
- Não deve começar com "Nós" ou "Somos"
- Deve ser compreensível por alguém de fora do setor
```

---

### 2 — Subheadline / descrição de hero

```
Escreva uma subheadline (2–3 frases) para acompanhar a headline abaixo em um site de [tipo de negócio].

Headline: [insira a headline escolhida]
Contexto da marca: [breve descrição do negócio e público]
Objetivo da subheadline: complementar a headline com mais contexto sobre para quem é e como funciona.
Tom: [adjetivos do tom de voz]
```

---

### 3 — Seção "Sobre" / Bio do fundador

```
Escreva uma bio para a página "Sobre" de [nome da pessoa], fundador/a de [nome do negócio].

Informações:
- Formação: [formação acadêmica ou técnica]
- Experiência principal: [cargos/empresas relevantes]
- Por que criou o negócio: [motivação]
- Diferencial único: [o que combina na pessoa que é raro]
- Negócio atual: [o que faz, para quem]

Formato: 3–4 parágrafos curtos.
Tom: [adjetivos — ex. profissional, humano, direto]
Perspectiva: terceira pessoa.
```

---

### 4 — Proposta de valor em 1 frase

```
Crie 5 versões de uma proposta de valor em uma frase para [nome do negócio].

Estrutura base: "Eu ajudo [quem] a [fazer o quê] para [resultado]."
Mas pode variar a estrutura — o importante é que seja clara e específica.

Contexto:
- Público: [quem atende]
- Problema resolvido: [problema central]
- Resultado: [resultado principal]
- Diferencial: [o que te diferencia]
```

---

### 5 — Copy de seção de problema

```
Escreva o texto da seção "O problema" de uma landing page de [produto/serviço].

Contexto:
- Produto/serviço: [descrição]
- Problema que resolve: [problema central]
- 3 sintomas que o cliente ideal reconhece: [liste]
- Como o cliente se sente com esse problema: [descrição emocional]
- O que ele geralmente tenta antes de encontrar a solução certa: [tentativa comum]

Tom: empático, não dramático. Factual, não catastrófico.
Tamanho: 1 parágrafo de abertura + 3 bullets + 1 linha de transição.
```

---

### 6 — Descrição dos itens da oferta

```
Escreva descrições curtas (2–3 linhas) para cada item da oferta abaixo, para usar em uma landing page ou proposta.

Formato: [Nome do item] + O que contém + Benefício para o cliente.
Tom: [adjetivos do tom de voz]
Público: [perfil do cliente]

Itens da oferta:
1. [nome do item 1]
2. [nome do item 2]
3. [nome do item 3]
(adicione quantos precisar)
```

---

### 7 — FAQ de landing page

```
Escreva 6 perguntas frequentes e respostas para a landing page de [produto/serviço].

Contexto:
- Produto: [descrição]
- Público: [perfil]
- Principais objeções antes da compra: [liste 3–4]
- Forma de entrega: [como o cliente recebe]
- Garantia: [condições]

Formato: Pergunta em negrito + resposta em 2–4 linhas.
Tom: [adjetivos]
```

---

### 8 — E-mail de boas-vindas / entrega de produto

```
Escreva um e-mail de boas-vindas para quem acabou de comprar [produto].

Contexto:
- Produto: [nome e breve descrição]
- O que o cliente recebe agora: [link, acesso, arquivo, etc.]
- O que ele deve fazer primeiro: [primeiro passo recomendado]
- Tom da marca: [adjetivos]
- Assinatura: [nome do fundador + cargo/empresa]

Requisitos:
- Subject line chamativo mas não clickbait
- Máximo 250 palavras
- CTA claro no final
```

---

### 9 — Post LinkedIn — argumento estratégico

```
Escreva um post para LinkedIn sobre o tema: [tema].

Contexto da marca:
- Nome: [nome do negócio ou fundador]
- Posicionamento: [breve descrição]
- Público do LinkedIn: [perfil do seguidor ideal]
- Tom de voz: [adjetivos]

Estrutura do post:
1. Linha de abertura que provoca curiosidade ou concordância
2. Desenvolvimento do argumento (3–5 parágrafos curtos)
3. Conclusão com perspectiva prática ou provocação
4. CTA opcional (link, comentário, etc.)

Requisitos:
- Não usar hashtags em excesso (máx. 3, no final)
- Sem emojis decorativos
- Linguagem direta, sem buzzwords
- Máximo 300 palavras
```

---

### 10 — Legenda para Instagram

```
Escreva uma legenda para um post de Instagram sobre: [tema do post].

Contexto:
- Marca: [nome + breve posicionamento]
- Tom: [adjetivos]
- Público: [perfil]
- O que aparece na imagem/carrossel: [descrição visual]
- Objetivo do post: [engajamento / awareness / conversão / educação]

Formato:
- Linha de abertura forte (aparece antes do "ver mais")
- Corpo com 2–3 parágrafos curtos
- CTA ao final
- 3–5 hashtags relevantes no final
```

---

### 11 — Proposta comercial — texto de apresentação

```
Escreva a seção de abertura de uma proposta comercial para [tipo de projeto].

Contexto:
- Cliente: [nome ou perfil]
- Problema identificado no cliente: [o problema específico desse cliente]
- Solução proposta: [o que você vai entregar]
- Tom: [adjetivos — ex. direto, consultivo, confiante]

Estrutura:
1. Parágrafo de contexto (o que foi entendido sobre o cliente)
2. Diagnóstico (por que o problema existe)
3. Transição para a proposta ("Com base nisso...")
```

---

### 12 — Copy para botão de CTA

```
Escreva 8 opções de texto para o botão de call-to-action de [produto/serviço].

Contexto:
- O que acontece ao clicar: [ex. vai para o checkout / abre formulário / baixa PDF]
- Público: [perfil]
- Tom: [adjetivos]

Requisitos:
- Máximo 5 palavras por opção
- Começar com verbo de ação
- Específico — não "Clique aqui"
```

---

### 13 — Frases de marca (brand voice phrases)

```
Crie 10 frases curtas que expressam o posicionamento e os valores de [nome do negócio].

Contexto:
- Posicionamento: [tese de marca ou proposta de valor]
- Arquétipo: [arquétipo primário e secundário]
- Valores centrais: [liste 3–5]
- Tom de voz: [adjetivos]
- Palavras a evitar: [lista]

Requisitos:
- Cada frase com no máximo 12 palavras
- Devem soar como afirmações originais, não clichês
- Evitar jargão do setor
- Variar estrutura: algumas provocativas, algumas assertivas, algumas educativas
```

---

### 14 — Descrição de perfil (bio de rede social)

```
Escreva 3 opções de bio para o perfil de [LinkedIn / Instagram] de [nome / empresa].

Contexto:
- O que faz: [descrição em 1 frase]
- Para quem: [público]
- Diferencial: [o que te diferencia]
- Tom: [adjetivos]

Requisitos por plataforma:
- LinkedIn: até 220 caracteres, sem emojis
- Instagram: até 150 caracteres, pode ter emojis funcionais (não decorativos)
```

---

### 15 — Revisão de copy com filtro de identidade verbal

```
Revise o texto abaixo e reescreva-o no tom de voz da marca [nome do negócio].

Tom de voz: [adjetivos — ex. consultivo, direto, técnico sem jargão]
Palavras a evitar: [lista da identidade verbal]
Palavras que combinam: [lista da identidade verbal]

Texto original:
[cole o texto aqui]

Instrução: mantenha o conteúdo e a estrutura, mas ajuste o tom, elimine clichês, e substitua palavras genéricas por linguagem específica da marca.
```

---

## Prompts de Imagem (10 prompts)

Estes prompts são para uso em Midjourney, DALL-E 3 (ChatGPT Plus) ou Leonardo AI. A estrutura padrão é: **sujeito + estilo visual + paleta + iluminação + composição + o que evitar**.

---

### 16 — Foto de perfil profissional (estilo editorial)

```
Professional portrait of a [gênero] person in their [30s/40s], wearing [tipo de roupa], 
shot in a clean and minimal office environment. 
Color palette: dark navy blue (#0B1F3B) and cool white tones. 
Lighting: natural side light, cool temperature, no harsh shadows. 
Composition: upper body, slight angle, confident and approachable expression. 
Style: editorial, corporate but modern, not posed. 
Camera: 85mm lens, shallow depth of field. 
Avoid: warm filters, cheesy smiles, generic stock photo aesthetic.
```

---

### 17 — Imagem de hero para site (fundo abstrato premium)

```
Abstract premium background for a strategic consulting website. 
Color palette: deep navy blue (#0B1F3B) as base, cyan accent (#00A6A6) as subtle light element, 
white (#F5F7FA) geometric lines or grid. 
Style: minimal, technical, corporate. 
Elements: subtle vector lines suggesting direction or movement, faint grid pattern. 
Mood: intelligent, precise, confident. 
Format: wide horizontal (16:9). 
Avoid: gradients that look cheap, too many colors, busy patterns.
```

---

### 18 — Thumbnail para conteúdo LinkedIn / YouTube

```
Minimalist thumbnail for a LinkedIn article about [tema].
Text overlay (do not include): handled separately.
Background: [cor primária da marca] with subtle texture or geometric element.
Accent: [cor de destaque] in a single graphic element (line, shape, icon).
Style: editorial, consulting firm aesthetic — think McKinsey or BCG visual language.
Mood: authoritative, clear, intelligent.
Format: 1:1 square or 1.91:1 horizontal.
Avoid: stock photo humans, clip art, busy backgrounds.
```

---

### 19 — Mockup de produto digital

```
Realistic product mockup for a digital product (Notion template / PDF / course).
Show a MacBook or iPad displaying a clean, well-organized Notion workspace or document.
Screen content: minimal placeholder text, simple header, structured layout.
Background: [cor neutra clara da marca] (#F5F7FA) with soft shadow.
Style: product photography, clean, premium tech aesthetic.
Lighting: soft, diffused, no glare on screen.
Avoid: cheap stock mockups, distorted screens, unrealistic reflections.
```

---

### 20 — Ícone linear para módulo ou serviço

```
Minimalist line icon for [conceito — ex. "brand strategy", "diagnosis", "verbal identity"].
Style: single line weight, geometric, clean. No fill, no gradient.
Color: [cor de destaque da marca — ex. cyan #00A6A6] on transparent background.
Size: designed for 48x48px display.
Aesthetic: similar to Phosphor Icons or Feather Icons.
Format: single icon, centered composition.
Avoid: filled icons, gradients, decorative elements, 3D effects.
```

---

### 21 — Background para carrossel Instagram (slide padrão)

```
Abstract geometric background for an Instagram carousel slide.
Canvas: 1080x1350px (portrait 4:5).
Color palette: [primária] as dominant, [acento] as subtle element, [neutra] as text area.
Style: minimal, editorial, consulting aesthetic.
Elements: subtle grid or diagonal lines, one geometric accent shape.
Mood: premium, intelligent, not "social media agency generic".
Avoid: bright gradients, excessive elements, anything that looks like a Canva default template.
```

---

### 22 — Foto de ambiente para site / redes

```
Professional workspace photograph showing a clean, organized desk setup.
Environment: modern, minimal, no clutter. 
Objects: laptop, notebook, coffee cup — arranged with intention.
Color palette: cool tones, dark navy or gray surfaces, white or light background.
Lighting: natural light from the left, cool temperature.
Style: editorial lifestyle, not stock photo.
Mood: productive, precise, intelligent.
Avoid: warm filters, overly styled "Instagram aesthetic", too many colorful props.
```

---

### 23 — Ilustração conceitual (abstrata, para conteúdo)

```
Abstract conceptual illustration for the theme of [tema — ex. "brand clarity", "strategic direction", "gap between delivery and perception"].
Style: minimal vector illustration, flat design with subtle depth.
Colors: [paleta da marca — máx. 3 cores].
Elements: [descreva metáforas visuais — ex. compass, path, gap between two levels].
Mood: [adjetivos visuais — ex. clean, technical, precise].
Avoid: clip art style, generic icons, overly literal representation of the concept.
```

---

### 24 — Capa de ebook / PDF

```
Cover design concept for a digital PDF or ebook titled "[título]" by [autor/marca].
Style: editorial, consulting firm book cover — think Harvard Business Review or McKinsey Quarterly.
Color palette: [paleta da marca].
Typography suggestion: bold serif or geometric sans-serif headline.
Layout: text-forward, minimal graphic element as accent.
Mood: authoritative, professional, premium.
Format: portrait (A4 or US Letter ratio).
Avoid: stock photo covers, generic gradients, template-looking designs.
```

---

### 25 — Foto conceitual para LinkedIn (pessoas em contexto profissional)

```
Editorial photograph of a professional in a strategic meeting or deep work context.
Person: [gênero], [faixa etária], professional attire — not corporate stiff, but serious and focused.
Setting: minimal modern office, whiteboard with diagrams, or window with city view.
Composition: candid or semi-candid, not posed.
Lighting: natural or soft studio light, cool tones.
Color palette: background with [cor da marca] elements.
Style: editorial, magazine quality — not stock photo.
Avoid: forced smiles, handshakes, generic "diverse team" stock compositions.
```

---

## Prompts para Processo e Estratégia (10 prompts)

### 26 — Diagnóstico de posicionamento

```
Analise o posicionamento de [nome do negócio] com base nas informações abaixo e identifique:
1. Principal lacuna entre entrega e percepção
2. 3 oportunidades de diferenciação
3. 2 riscos de posicionamento atual

Informações do negócio:
- O que faz: [descrição]
- Para quem: [público]
- Como se diferencia (auto-percepção): [diferencial declarado]
- Concorrentes diretos: [liste 2–3]
- Preço médio praticado: [valor]
- Como os clientes descrevem o negócio: [frases reais, se disponível]
```

---

### 27 — Criação de arquitetura de oferta

```
Crie uma arquitetura de oferta com 3 tiers para [tipo de negócio].

Contexto:
- Serviço/produto principal: [descrição]
- Público: [perfil]
- Ticket médio atual: [valor]
- Meta de ticket máximo: [valor]

Entregue:
1. Tier de entrada: nome, o que inclui, preço sugerido, objetivo estratégico
2. Tier principal (foco): nome, o que inclui, preço sugerido, objetivo estratégico
3. Tier premium: nome, o que inclui, preço sugerido, objetivo estratégico

Critério: cada tier deve ser logicamente diferente — não apenas mais do mesmo por mais dinheiro.
```

---

### 28 — Planejamento de conteúdo mensal

```
Crie um calendário editorial de 30 dias para [plataforma: LinkedIn / Instagram] de [nome do negócio].

Contexto:
- Posicionamento: [tese de marca resumida]
- Público: [perfil]
- Objetivo do mês: [ex. awareness / lançamento / captação]
- Tom de voz: [adjetivos]
- Temas de autoridade do negócio: [liste 4–5 temas em que tem expertise]
- Frequência desejada: [posts por semana]

Para cada post, entregue:
- Data
- Tema / assunto
- Tipo de conteúdo (texto, carrossel, vídeo, story)
- Objetivo (educação / autoridade / conversão / conexão)
- 1 linha de pitch do que abordar
```

---

### 29 — Análise de concorrente

```
Analise o posicionamento do concorrente abaixo e identifique como [meu negócio] pode se diferenciar.

Concorrente: [nome]
O que faz: [descrição]
Para quem: [público aparente]
Como se posiciona (site, redes, materiais): [descrição]
Pontos fortes percebidos: [liste]
Pontos fracos percebidos: [liste]

Contexto do meu negócio: [descrição resumida]

Entregue:
1. Gaps de posicionamento que posso explorar
2. Mensagens de diferenciação específicas
3. Áreas onde não devo competir diretamente
```

---

### 30 — Estrutura de sequência de e-mail de lançamento

```
Crie o outline de uma sequência de e-mail de lançamento para [produto/serviço].

Contexto:
- Produto: [nome + descrição]
- Público: [perfil]
- Duração do lançamento: [dias]
- Tipo de lançamento: [aberto / com janela de urgência]
- Tom: [adjetivos]

Entregue:
- Número de e-mails
- Momento de cada e-mail (Dia 1, Dia 3, etc.)
- Objetivo de cada e-mail
- Subject line sugerida
- 2–3 pontos de copy para cada e-mail
```

---

### 31 — Roteiro de conversa de discovery (pré-proposta)

```
Crie um roteiro de perguntas para uma reunião de discovery de [30 / 60] minutos com um potencial cliente de [tipo de serviço].

Objetivo da reunião: entender o problema, qualificar o cliente, e ter informação suficiente para preparar uma proposta.

Estrutura:
1. Abertura e contexto (5 min) — como dar início à conversa
2. Entendimento do negócio (10 min) — perguntas sobre o negócio e momento atual
3. Entendimento do problema (10 min) — perguntas sobre o problema específico
4. Entendimento de expectativas (10 min) — o que seria sucesso, prazo, orçamento
5. Próximos passos (5 min) — como fechar a reunião com encaminhamento claro

Para cada bloco: 3–4 perguntas específicas.
```

---

### 32 — Geração de nome de produto ou serviço

```
Sugira 10 opções de nome para [produto/serviço].

Contexto:
- O que é: [descrição]
- Para quem: [público]
- Posicionamento: [consultivo / premium / técnico / acessível / outro]
- Tom: [adjetivos]
- Palavras que remetem à essência: [liste 4–5]
- Palavras a evitar: [liste]
- Idioma: [português / inglês / misto]

Critérios:
- Fácil de falar e lembrar
- Não genérico (evitar palavras como "Pro", "Plus", "Smart")
- Disponível como domínio .com.br (a verificar)
- Sugira o conceito por trás de cada nome
```

---

### 33 — Depoimento estruturado (perguntas para colher prova social)

```
Crie um questionário de 5–7 perguntas para colher depoimentos de clientes de [tipo de negócio].

Objetivo: obter respostas que descrevam o problema antes, o processo, o resultado, e a transformação — de forma que sirva como prova social convincente.

Contexto do negócio: [breve descrição]

Requisitos:
- Perguntas abertas (não "sim/não")
- Foco no resultado e na transformação, não em adjetivos vagos
- Uma pergunta sobre o antes (o problema que tinham)
- Uma pergunta sobre o depois (o resultado concreto)
- Uma pergunta de recomendação
```

---

### 34 — Pitch de 30 segundos (elevator pitch)

```
Escreva um elevator pitch de 30 segundos para [nome do negócio].

Contexto:
- O que faz: [descrição]
- Para quem: [público]
- Resultado principal: [resultado concreto]
- Diferencial: [o que te diferencia]
- Tom: [adjetivos]

Formato: texto corrido (não bullets), como seria falado em uma conversa casual.
Máximo: 80 palavras.
```

---

### 35 — Análise de copy existente

```
Analise a copy abaixo e avalie:
1. Clareza: o leitor entende o que é e para quem é em menos de 5 segundos?
2. Posicionamento: a copy comunica diferenciação ou é genérica?
3. Tom: está alinhada com o tom [adjetivos do tom desejado]?
4. CTA: a ação desejada está clara?
5. Sugestão: reescreva o trecho mais fraco com as melhorias sugeridas.

Copy para analisar:
[cole o texto aqui]
```

---

## Prompts Rápidos (5 prompts)

Para uso no dia a dia — sem grande configuração.

### 36 — Ideia de conteúdo em 30 segundos

```
Me dê 5 ideias de posts para [LinkedIn / Instagram] sobre [tema].
Tom: [adjetivos].
Público: [perfil em 1 linha].
Formato preferido: [texto / carrossel / vídeo curto].
```

---

### 37 — Revisão rápida de texto

```
Revise este texto e devolva mais claro, direto e no tom [adjetivos]. Mantenha o conteúdo:
[cole o texto]
```

---

### 38 — Brainstorm de títulos

```
Dê 10 títulos para [conteúdo: post / e-mail / seção de site] sobre [tema].
Tom: [adjetivos]. Público: [perfil].
```

---

### 39 — Resumo executivo

```
Resuma em 3 bullets o conteúdo abaixo, para ser usado como preview em [LinkedIn / e-mail / slide].
Cada bullet: máximo 15 palavras.
[cole o texto ou descreva o conteúdo]
```

---

### 40 — Verificação de tom de voz

```
Este texto está no tom correto para [nome da marca]?
Tom da marca: [adjetivos]. Palavras a evitar: [lista].
Aponte 3 trechos que destoam e reescreva-os.
[cole o texto]
```

---

## Como usar este módulo nos próximos passos

1. Salve os prompts mais usados no seu próprio Notion para acesso rápido
2. Crie uma pasta de prompts favoritos com os resultados que funcionaram bem — eles viram referência para o próximo
3. Use o Prompt #15 (revisão de copy) em todo texto antes de publicar
4. Os prompts de imagem (16–25) produzem melhores resultados com Midjourney V6 ou DALL-E 3 no modo HD

> A qualidade do output de IA é diretamente proporcional à qualidade do briefing que você fornece. Um prompt bem escrito vale mais do que 10 tentativas com prompts genéricos.
