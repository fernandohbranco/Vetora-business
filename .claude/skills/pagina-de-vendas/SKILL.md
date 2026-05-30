---
name: pagina-de-vendas
description: >
  Cria uma página de vendas de alta conversão completa — da estratégia de copy até o HTML pronto pro deploy.
  Passa por dois checkpoints de aprovação antes de gerar qualquer arquivo.
  Use quando o usuário disser "criar página de vendas", "landing page", "sales page", "/pagina-de-vendas"
  ou quando precisar estruturar a argumentação de venda de um produto ou serviço.
---

# /pagina-de-vendas — Página de Vendas de Alta Conversão

Cria uma sales page completa em 8 passos: briefing → estratégia → copy → HTML. Dois checkpoints obrigatórios antes de gerar arquivo.

## Dependências

- `_memoria/empresa.md` — quem é a VETORA (quando a página for da VETORA)
- `_memoria/preferencias.md` — tom de voz e frases proibidas
- `identidade/design-guide.md` — sistema visual (cores, tipografia, restrições)
- `site/index.html` — referência de qualidade do produto (não ler na íntegra; usar como parâmetro)
- `scripts/render.js` — opcional, para preview PNG via Playwright

## Workflow

### Passo 1 — Destino

Fazer a primeira pergunta:

> "Essa página é para a VETORA (produto ou serviço próprio) ou para um cliente?"

**Se VETORA:** ler `_memoria/empresa.md`, `_memoria/preferencias.md` e `identidade/design-guide.md`. Usar identidade visual VETORA automaticamente. Salvar em `marketing/landingpages/`.

**Se cliente:** conduzir briefing de identidade antes das perguntas de produto:
- Nome da marca e segmento
- Paleta de cores (pedir HEX)
- Fontes (ou usar Sora + Inter como fallback)
- Tom de voz em 3 adjetivos
- Restrições visuais ou de linguagem

Salvar em `marketing/landingpages/` igualmente (ou dentro da pasta do cliente se existir).

---

### Passo 2 — Briefing do produto (uma pergunta por vez)

Perguntar em sequência, sem agrupamento. Aguardar a resposta antes de prosseguir.

**Pergunta 1:** Qual é o produto ou serviço? Descreva a **transformação prometida** — o "antes" de quem compra e o "depois" de quem aplica.

**Pergunta 2:** Quem compra isso? Descreva **3 perfis do público-alvo** — cargo, situação atual, motivação de compra.

**Pergunta 3:** O que torna esse produto diferente? Qual é o **mecanismo único** — o método, o processo, a tecnologia, a origem — que o concorrente não tem ou não comunica?

**Pergunta 4:** Qual é a **prova social disponível**? (Cases com resultado, depoimentos, números, autoridade do criador, reconhecimentos, anos de experiência.)

---

### Passo 3 — Briefing da oferta (uma pergunta por vez)

**Pergunta 5:** Qual é o **preço**? Existe mais de um tier? Tem âncora (preço mais caro que justifica o principal)?

**Pergunta 6:** O que está **incluído** na oferta? Módulos, bônus, recursos extras, suporte, atualizações, acesso. E qual é a **garantia** (prazo + condições)?

**Pergunta 7:** Existe **urgência ou escassez real**? (Janela de lançamento com data, vagas limitadas, bônus que saem depois.) Se não houver, não inventar — apenas estruturar o CTA com foco no valor.

---

### Passo 4 — CHECKPOINT 1: Estratégia de copy

**Antes de escrever qualquer seção**, mostrar:

```
ESTRATÉGIA DE COPY

Headline (3 variações):
  [Emocional]   — apela à transformação desejada
  [Racional]    — apela ao método, critério ou prova
  [Provocação]  — questiona o status quo do leitor

Promessa central: [1 frase que resume o antes → depois]

Argumento de vendas:
  Problema       → [qual dor específica]
  Agravamento    → [o que acontece se nada mudar]
  Solução        → [o que o produto oferece]
  Mecanismo      → [por que funciona — o diferencial]
  Prova          → [quem já fez / resultados / autoridade]
  Oferta         → [o que está disponível agora e por quanto]

Objeções a tratar no FAQ:
  1. [...]
  2. [...]
  3. [...]
  4. [...]
  5. [...]
  6. [...]
```

Aguardar confirmação ou ajuste antes de escrever o copy completo.

---

### Passo 5 — Copy completo (12 seções)

Escrever cada seção na ordem. Tom: consultivo, preciso, direto. Sem buzzwords, sem promessas exageradas, sem linguagem de guru.

**Referência de tom (frases no estilo certo):**
- "Não é sobre aparecer mais. É sobre ser percebido melhor."
- "Método antes de estética. Sempre."
- "Construa sua marca com a mesma precisão de um projeto de engenharia."

**Frases proibidas** (nunca usar):
- "Alavanque seu negócio", "soluções inovadoras", "resultado garantido", "fórmula mágica", "transforme sua vida", "seja o melhor", guru digital em geral.

---

**Seção 1 — Hero**
- Headline principal (usar a variação aprovada no CHECKPOINT 1)
- Subheadline: expande a promessa em 2–3 linhas, antecipa o mecanismo
- Microproof: 3–4 dados curtos (ex: "8 módulos · 40+ frameworks · Garantia de 7 dias")
- CTA primário: botão direto ("Quero [nome do produto]")
- CTA secundário opcional: link âncora ("Ver o que está incluído ↓")

**Seção 2 — Problema**
- Título: frase que nomeia a dor com precisão
- 4 sintomas do problema — bullets curtos, identificação imediata
- Encerrar com 1 linha que conecta o problema ao produto (sem vender ainda)

**Seção 3 — Agravamento**
- O que acontece se a pessoa continuar sem resolver
- Custo real (financeiro, reputacional, oportunidade perdida)
- Não dramatizar em excesso — precisão é mais efetiva que exagero

**Seção 4 — Para quem é**
- 3 cards de perfil ideal: cargo/situação + motivação de compra + transformação que busca
- 1 linha de "quem NÃO é pra" (qualifica e aumenta credibilidade)

**Seção 5 — O que está incluído**
- Título da seção
- Cada módulo/item com: nome + ícone sugestivo + 1 linha de valor (o que resolve, não o que é)
- Total de itens em destaque (ex: "8 módulos · 40+ templates")

**Seção 6 — O método / como funciona**
- Posicionar o mecanismo único
- 3 a 5 etapas sequenciais com nome e breve descrição
- 1 parágrafo de autoridade: de onde vem o método (formação, experiência, origem)

**Seção 7 — Autoridade e prova social**
- Bio curta do criador (3–4 linhas, foco em credibilidade relevante pro produto)
- Cases reais ou evidências de resultado (2–3)
- Se não há depoimentos prontos: usar dados de experiência, projetos ou metodologia aplicada

**Seção 8 — Oferta e preço**
- Título: "O que você leva"
- Lista de tudo incluído (módulos + bônus + suporte + atualizações)
- Âncora de preço se houver (tier mais caro ou valor de consultoria equivalente)
- Destaque do preço principal com CTA

**Seção 9 — Garantia**
- Prazo e condições (ex: 7 dias, incondicional)
- Linguagem que reduz risco sem parecer apelativa
- Selo/ícone sugerido: escudo linear

**Seção 10 — FAQ**
- 6 perguntas das objeções mapeadas no CHECKPOINT 1
- Respostas curtas e diretas (3–5 linhas cada)

**Seção 11 — CTA Final**
- Título de fechamento (foco no resultado, não no produto)
- 1 parágrafo curto reforçando o argumento principal
- Botão CTA + repetir garantia em 1 linha abaixo do botão
- Urgência (se real): contador ou prazo explícito

**Seção 12 — Footer**
- Logo
- Links: Política de Privacidade · Termos de Uso · Contato
- CNPJ/CPF se aplicável
- Copyright

---

### Passo 6 — CHECKPOINT 2: Aprovação do copy

Apresentar o copy completo de todas as 12 seções. Perguntar:

> "Copy pronto. Quer ajustar algo antes de gerar o HTML?"

Aguardar aprovação ou revisões. Aplicar qualquer ajuste antes de prosseguir.

---

### Passo 7 — Geração do HTML

Gerar `index.html` único — HTML5, CSS inline no `<style>`, sem dependências externas além das fontes.

**Sistema visual (VETORA padrão):**
```css
/* Fontes */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');

/* Paleta */
--azul-vetor:    #0B1F3B;  /* fundos dark, títulos, autoridade */
--ciano:         #00A6A6;  /* CTAs, destaques, eyebrows */
--branco-gelo:   #F5F7FA;  /* fundos light */
--grafite:       #1E252B;  /* textos, fundos alternativos */
--verde-dir:     #00A86B;  /* indicadores, máx 10% da peça */
--cinza-neutro:  #D9DEE3;  /* divisores, cards */
```

**Regras visuais obrigatórias:**
- Nunca mais de 3 cores por seção
- Ciano nunca como fundo de área grande
- Verde máx 10% da peça
- Alternar: seção escura → clara → destacada → escura (nunca duas escuras seguidas)
- Ícones: sempre lineares (SVG inline), nunca preenchidos com gradiente
- Botão primário: fundo ciano `#00A6A6`, texto branco, radius 4–6px
- Border-radius de cards: 8px máx (não arredondar demais)
- Sombras: discretas ou ausentes — preferir contraste

**Escala tipográfica:**
```css
/* Display hero */    font: 700 clamp(40px, 6vw, 64px)/1.05 'Sora'; letter-spacing: -0.03em;
/* H1 página */       font: 700 clamp(32px, 5vw, 48px)/1.1  'Sora'; letter-spacing: -0.02em;
/* H2 seção */        font: 600 clamp(24px, 4vw, 36px)/1.15 'Sora'; letter-spacing: -0.01em;
/* H3 subtítulo */    font: 600 clamp(18px, 3vw, 24px)/1.2  'Sora';
/* Eyebrow */         font: 600 12px/1 'Sora'; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ciano);
/* Lead */            font: 400 18px/1.6 'Inter';
/* Body */            font: 400 16px/1.6 'Inter';
/* Small */           font: 400 14px/1.5 'Inter';
```

**Estrutura HTML obrigatória:**
- `<header>` sticky com logo e CTA
- Cada seção com `id` correspondente ao slug (ex: `id="problema"`, `id="oferta"`)
- Responsivo mobile-first: breakpoint 960px e 640px
- Accordion FAQ via JS vanilla (toggle de classe, sem biblioteca)
- Countdown timer com `localStorage` se houver urgência — chave `lp_<slug>_start`
- Placeholder do botão de compra: `href="CHECKOUT_URL_AQUI"`
- Logo: `<img src="/identidade/logo-vetora/vetora-horizontal-colorida-semfundo.png" alt="VETORA" width="160">`
  (para cliente: ajustar path ou usar wordmark inline)

**Se for página de cliente:** adaptar paleta e fontes conforme briefing do Passo 1. Manter estrutura das 12 seções.

---

### Passo 7b — UX Review (antes de salvar)

Antes de salvar os arquivos finais, avaliar o HTML gerado nas 9 dimensões do $10K Checklist:

**Dimensões a checar (todas, para landing page):**
- **Ponto de Vista** — a página tem direção criativa definida ou parece template genérico?
- **Tipografia** — escala e pesos criam hierarquia? Display + body com intenção?
- **Sistema de Cores** — máx 3 cores por seção? Ciano nunca como fundo? Verde máx 10%?
- **Hierarquia** — above the fold é claro? Há espaço de respiro entre seções?
- **Imagens** — assets têm intenção ou parecem stock genérico?
- **Movimento** — hover e animações são sutis e on-brand, não AOS genérico?
- **Mobile** — em 375px: CTA visível sem rolar? Layout projetado para coluna única, não comprimido?
- **Fundação Técnica** — logo com alt text? Meta description? Heading hierarchy h1→h2→h3? Contraste 4.5:1?
- **Conversão** — CTA above the fold? Prova social antes do preço? Urgência comunicada?

**Regra de aplicação:**
- Ajustes CRÍTICOS e MÉDIOS: aplicar diretamente no HTML sem perguntar
- Ajustes BAIXOS: listar para o usuário decidir
- Se houver ❌ em Mobile, Conversão ou Fundação Técnica: corrigir antes de salvar

Formato do report:
```
UX/UI Review — Landing Page · [slug]

Dimensão           | Score | Detalhe
Ponto de Vista     |  ✅   | ...
Tipografia         |  ✅   | ...
Sistema de Cores   |  ✅   | ...
Hierarquia         |  ⚠️   | ...
Imagens            |  ✅   | ...
Movimento          |  ✅   | ...
Mobile             |  ❌   | ...
Fundação Técnica   |  ⚠️   | ...
Conversão          |  ✅   | ...

Ajustes aplicados: [lista do que foi corrigido]
Pendências (baixa prioridade): [lista opcional]
```

### Passo 8 — Output

Criar a pasta e salvar os 3 arquivos:

```
marketing/landingpages/<slug>-<YYYY-MM-DD>/
├── index.html        — página completa, pronta para deploy
├── copy.md           — copy em texto puro (reutilizável em email, LinkedIn, ads)
└── checklist.md      — checklist de qualidade preenchida
```

**Slug:** nome do produto em kebab-case (ex: `kit-vetora`, `consultoria-autec`).

**copy.md** — extrair o copy de cada seção em markdown limpo, sem HTML. Útil para reutilizar em emails, LinkedIn, scripts de vídeo.

**checklist.md** — preencher com resultados reais do UX Review (Passo 7b):

```markdown
# Checklist de Qualidade — [Nome da Página]

## Copy
- [ ] Headline comunica o antes → depois em menos de 10 palavras
- [ ] Subheadline antecipa o mecanismo único
- [ ] Nenhuma frase proibida usada
- [ ] Tom consultivo e preciso (sem buzzwords, sem guru)
- [ ] FAQ trata as 6 objeções mapeadas

## Oferta
- [ ] Preço e âncora claros
- [ ] Bônus e garantia em destaque
- [ ] Urgência (se real) comunicada com clareza

## UX/UI — $10K Checklist (preencher com scores do Passo 7b)
- [ ] Ponto de Vista: direção criativa definida, não genérica
- [ ] Tipografia: par display + corpo, escala e pesos criam hierarquia
- [ ] Sistema de Cores: máx 3 cores/seção, contenção e consistência
- [ ] Hierarquia: white space, escala e contraste guiam o olhar
- [ ] Imagens: assets com intenção, não stock genérico
- [ ] Movimento: micro-interações sutis e on-brand
- [ ] Mobile: layout projetado para 375px, CTA visible without scroll
- [ ] Fundação Técnica: WCAG AA, alt text, heading hierarchy, meta tags
- [ ] Conversão: CTA above the fold, prova social antes do preço

## Técnico
- [ ] Placeholder `CHECKOUT_URL_AQUI` identificado
- [ ] Logo carregando do path correto
- [ ] FAQ accordion funcionando
- [ ] Countdown com localStorage (se urgência)
```

Informar o caminho completo dos arquivos salvos. Encerrar com:

> "Página pronta. Para publicar: substitua `CHECKOUT_URL_AQUI` pelo link do checkout e faça deploy via Vercel ou Netlify. Quer que eu ajude com o deploy?"

---

## Regras

- **Nunca** gerar o HTML antes do CHECKPOINT 2 aprovado
- **Nunca** inventar prova social, números ou depoimentos — só usar o que o usuário informou
- **Nunca** usar emojis no HTML ou no copy
- **Sempre** perguntar antes de sobrescrever arquivo já existente na pasta de destino
- Se o usuário der uma resposta vaga no briefing, pedir uma vez mais com exemplo concreto — depois seguir em frente
- Headline: apresentar sempre 3 variações (emocional, racional, provocação) no CHECKPOINT 1
- Se a página for para cliente sem brand guide definido, usar Sora + Inter como fallback tipográfico e pedir pelo menos 2 cores HEX
