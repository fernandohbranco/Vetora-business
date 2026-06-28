# Sprint 01 — Estratégia, Arquitetura e Copy Completa

> Sprint de estratégia pura — nenhum código. Saída: toda a copy do site aprovada e mapa de seções definido.  
> Insumo para todas as sprints seguintes.

---

## Objetivo

Antes de qualquer linha de código, definir o que o site comunica, para quem, em que ordem e com qual copy. Cada seção tem propósito estratégico claro. Nenhuma seção existe por estética — existe para mover o visitante de "o que é isso?" para "preciso falar com eles".

---

## ICP do Site

**Quem chega no site da VETORA:**
- Profissional liberal (médico, advogado, consultor) com reputação consolidada mas presença digital fraca
- Empresas técnicas (engenharia, industrial, B2B) que precisam de credibilidade visual e digital
- Empreendedores que já passaram por agências genéricas e saíram insatisfeitos

**O que eles sentem ao chegar:**
- "Entrego muito mas ninguém consegue me perceber bem"
- "Meu site/marca não me representa"
- "Já tentei agência, não funcionou — precisava de estratégia, não de arte"

**O que precisam sentir ao sair:**
- "Esses caras entendem o que eu faço"
- "Isso é diferente de tudo que já vi — é estratégia de verdade"
- "Quero saber mais / já quero conversar"

---

## Arquitetura de Seções

Sequência de seções com alternância de fundos (regra VETORA: nunca dois fundos escuros consecutivos).

| # | Seção | Fundo | Propósito estratégico |
|---|---|---|---|
| 0 | Navbar | Transparente → Azul Vetor ao scroll | Âncora de identidade |
| 1 | Hero | Azul Vetor `#0B1F3B` (escuro) | Capturar atenção, declarar posição |
| 2 | O problema | Branco Gelo `#F5F7FA` (claro) | Criar identificação com a dor |
| 3 | O que fazemos | Azul Vetor `#0B1F3B` (escuro) | Apresentar a solução com clareza |
| 4 | Método VETORA | Branco Gelo `#F5F7FA` (claro) | Transmitir rigor e método |
| 5 | Diferenciais | Azul Vetor `#0B1F3B` (escuro) | Separar do mercado |
| 6 | Cases | Branco Gelo `#F5F7FA` (claro) | Prova social — resultados reais |
| 7 | O fundador | Azul Profundo `#061426` (premium escuro) | Credencial única e autoridade |
| 8 | CTA Final | Branco Gelo `#F5F7FA` (claro) | Converter — agendar diagnóstico |
| 9 | Footer | Grafite Técnico `#1E252B` (escuro) | Aterrar a identidade |

---

## Copy por Seção

### 0. Navbar

```
Logo VETORA (variação 2 — negativa, fundo escuro)

Links: Método · Serviços · Cases · Sobre
CTA: Agendar diagnóstico  →  [botão Ciano #00A6A6]
```

Comportamento: transparent no topo, transição para `#0B1F3B` com leve blur ao scroll 60px.

---

### 1. Hero

> Tom: declaração de posição — não pitch. Não "o que fazemos" — o que o cliente ganha.

**Eyebrow** (Sora 600, 12px, tracking 0.18em, uppercase, Ciano):
```
ESTÚDIO ESTRATÉGICO DE BRANDING, SITES E IA
```

**Headline Display** (Sora 700, 64px, lh 1.05, tracking -0.03em, Branco):
```
Sua entrega precisa ser
percebida antes da
primeira conversa.
```

**Subheadline Lead** (Inter 400, 18px, lh 1.6, Prata Digital `#B8C2CC`):
```
A VETORA transforma negócios reais em ativos digitais de valor —
corrigindo o desalinhamento entre o que você entrega e o que o
mercado consegue perceber.
```

**CTAs:**
- Principal: `Agendar diagnóstico gratuito` → [botão preenchido Ciano]
- Secundário: `Ver como funciona` → [botão ghost, borda branca sutil]

**Elemento visual:**
Grid técnico sutil como textura de fundo. Linha diagonal discreta em Ciano com baixa opacidade partindo da diagonal inferior direita. Nenhuma ilustração.

**Scroll indicator:** linha vertical animada em Ciano, pulsando suavemente.

---

### 2. O Problema

> Tom: espelho — o visitante precisa se reconhecer aqui.

**Eyebrow** (Ciano, sobre fundo claro):
```
O ESPECIALISTA INVISÍVEL
```

**Headline h2** (Sora 600, 36px, Azul Vetor):
```
Você entrega muito.
O mercado percebe pouco.
```

**Corpo** (Inter 400, 16px):
```
Boa parte dos profissionais mais competentes que conheço tem o mesmo problema:
sua reputação existe — mas não aparece.

Seu site não te representa. Sua marca não comunica o nível do que você entrega.
E quando um cliente em potencial pesquisa seu nome, o que ele encontra não passa
metade do que você é de verdade.

Isso não é problema de esforço. É problema de percepção.
```

**Três tensões em cards horizontais** (fundo branco, borda `#D9DEE3`, sem ícone decorativo):
```
Card 1 — "Minha entrega é excelente, mas minha presença digital é genérica."
Card 2 — "Já tentei agência. Recebo arte bonita, não estratégia."
Card 3 — "Cada peça parece diferente. Não tenho identidade consolidada."
```

---

### 3. O Que Fazemos

> Tom: solução clara, sem menu de serviços. Uma ideia central com desdobramentos.

**Eyebrow** (Ciano, sobre fundo escuro):
```
O QUE A VETORA FAZ
```

**Headline h2** (Sora 600, 36px, Branco):
```
Transformamos o que você entrega
em algo que o mercado consegue perceber.
```

**Lead** (Inter 400, 18px, Prata Digital):
```
Não somos uma agência de arte. Somos um estúdio estratégico.
Cada decisão — de copy, visual ou tecnologia — começa com diagnóstico
e termina com posicionamento claro.
```

**Grid de entregas** (4 cards, fundo `#061426` com borda `#00A6A6` de 1px):

```
Branding Estratégico
Posicionamento, arquétipo, tom de voz, identidade verbal.
Antes de qualquer logo.

Sites e Landing Pages
Copy + UX/UI + estrutura de conversão.
Não decoração — resultado.

Apresentações Comerciais
Narrativa executiva, pitch deck, proposta visual.
O deck que fecha negócio.

IA Aplicada ao Negócio
Prompts, automações e sistemas leves.
Tecnologia com estratégia — não tecnologia por tecnologia.
```

---

### 4. Método VETORA

> Tom: rigor de engenharia aplicado a negócio. Processo, não magia.

**Eyebrow** (Ciano, sobre fundo claro):
```
MÉTODO VETORA
```

**Headline h2** (Sora 600, 36px, Azul Vetor):
```
Construa sua marca com a mesma
precisão de um projeto de engenharia.
```

**Subtítulo** (Inter 400, 18px):
```
Cada entrega segue cinco etapas. Na sequência certa.
Sem pular diagnóstico. Sem entregar antes de entender.
```

**Cinco etapas em linha progressiva com conector Ciano:**

```
01 DIAGNÓSTICO
Mapeamos o gap entre o que você entrega e o que o mercado percebe.
Não começamos sem entender o problema real.

02 DIREÇÃO
Definimos posicionamento, arquétipo e estratégia visual antes de criar qualquer peça.
A estratégia sempre antes da estética.

03 CONSTRUÇÃO
Desenvolvemos os ativos com precisão: copy, visual, código, identidade.
Cada elemento tem propósito definido na etapa anterior.

04 ENTREGA
Revisão técnica, checklist de qualidade, validação UX.
Nada vai ao ar antes de estar pronto de verdade.

05 EVOLUÇÃO
Acompanhamos, ajustamos e evoluímos o que foi construído.
Um ativo digital precisa crescer com o negócio.
```

---

### 5. Diferenciais

> Tom: comparação implícita — sem dizer "somos melhores que agências", mostrar o que é diferente.

**Eyebrow** (Ciano, sobre fundo escuro):
```
POR QUE A VETORA
```

**Headline h2** (Sora 600, 36px, Branco):
```
Estratégia antes de estética.
Sempre.
```

**Três diferenciais em cards verticais** (borda esquerda Ciano 2px, fundo `#061426`):

```
Diferencial 1 — Diagnóstico antes de proposta
Nunca enviamos orçamento sem entender o problema.
A maioria das agências entrega arte sem estratégia.
Nós entregamos estratégia com execução.

Diferencial 2 — Engenharia aplicada a negócio
O Fernando é engenheiro industrial com domínio de IA aplicada.
Rigor técnico de projeto industrial + visão de negócio + execução com inteligência artificial.
Combinação rara no mercado de branding.

Diferencial 3 — Sistema, não amontoado de arquivos
Cada entrega é um ativo coerente — não uma pasta com logos e PDFs soltos.
Você sai com identidade consolidada, método documentado e presença digital que te representa.
```

---

### 6. Cases

> Tom: resultado, não processo. Números e transformações quando possível.

**Eyebrow** (Ciano, sobre fundo claro):
```
CASES
```

**Headline h2** (Sora 600, 36px, Azul Vetor):
```
Negócios reais.
Percepção transformada.
```

**Cards de case** (fundo branco, borda `#D9DEE3`, imagem ou mockup no topo):

Grid: 4 colunas desktop / 2×2 tablet / 1 coluna mobile

```
Case — FRBranco Personalizados
Papelaria afetiva | DTC | Autoridade criativa
"Marca afetiva sem identidade estruturada."
→ Identidade verbal + visual + presença digital alinhada ao produto.
[Tag: Branding · Identidade Visual · Copy]

Case — Rancho 517
Espaço de eventos | Local | Premium
"Reputação local consolidada mas identidade visual sem coerência."
→ Posicionamento + identidade visual + site que justifica o posicionamento premium.
[Tag: Branding · Identidade Visual]

Case — Prezaro Barbearia
Barbearia premium | Assinatura | Local
"Maior clube de barbearia de Joinville com 700+ membros — mas conteúdo digital sem estratégia para comunicar o nível do serviço."
→ Estratégia de conteúdo + presença digital construída para comunicar a experiência premium do clube de assinatura.
[Tag: Conteúdo · Estratégia Digital · Analytics]

Case — Cantinho das Raízes
Plantas e decoração verde | B2C | Local
"Negócio com identidade genuína mas sem estrutura visual ou presença digital."
→ Branding completo + sistema de identidade visual + site com galeria de produtos.
[Tag: Branding · Identidade Visual · Site]
```

**CTA de seção:** `Ver diagnóstico completo → [link em Ciano]`

---

### 7. O Fundador

> Tom: credencial, não biografia. Uma linha de autoridade única.

**Eyebrow** (Ciano, sobre fundo premium escuro `#061426`):
```
QUEM ESTÁ POR TRÁS
```

**Headline h2** (Sora 600, 36px, Branco):
```
Fernando Branco
```

**Cargo / credencial** (Inter 400, 18px, Prata Digital):
```
Engenheiro Mecânico · Coordenador de Engenharia Industrial
Especialista em IA aplicada a branding e presença digital
```

**Corpo** (Inter 400, 16px, Prata Digital):
```
Durante anos projetei sistemas industriais onde cada decisão tem impacto real —
tolerâncias, falhas, custo. Aprendi que rigor técnico não é opcional.

Trouxe esse mesmo rigor para o branding e a presença digital.
Na VETORA, nenhuma decisão visual ou estratégica é tomada sem diagnóstico.
Nenhuma entrega vai ao ar sem checklist. Nenhum posicionamento é definido sem entender
a fundo o que o cliente realmente entrega.

Hoje, combino engenharia com inteligência artificial para construir ativos digitais
que representam negócios reais com a precisão que eles merecem.
```

**Foto:** retrato profissional, tons frios, composição clean, fundo neutro ou técnico.

---

### 8. CTA Final

> Tom: convite direto — sem pressão, sem urgência artificial.

**Eyebrow** (Ciano, sobre fundo claro):
```
PRÓXIMO PASSO
```

**Headline h2** (Sora 600, 36px, Azul Vetor):
```
Pronto para o mercado perceber
o que você realmente entrega?
```

**Subtítulo** (Inter 400, 18px):
```
O diagnóstico é gratuito e dura 30 minutos.
Saímos com clareza sobre o gap entre sua entrega e sua percepção de mercado
— e o que fazer a respeito.
```

**CTA principal:** `Agendar diagnóstico gratuito` → [botão Ciano, grande]

**Nota de credibilidade** (Inter 400, 14px, Grafite Técnico):
```
Sem compromisso. Sem pitch de vendas imediato.
Diagnóstico honesto — mesmo que a resposta seja "não precisa de nós agora".
```

---

### 9. Footer

```
Coluna 1:
Logo VETORA (horizontal negativa — pequena)
Estratégia, marca e tecnologia na direção certa.
© 2026 VETORA. Todos os direitos reservados.

Coluna 2:
Navegação
Método · Serviços · Cases · Sobre · Diagnóstico

Coluna 3:
Contato
fernandohbranco@gmail.com
LinkedIn → [link]
Instagram → [link]
```

---

## Checklist de aprovação de copy

Antes de avançar para Sprint 02, validar cada item:

- [ ] Headline do hero: declaração de posição, não pitch de serviço
- [ ] Nenhuma frase proibida do `preferencias.md` em qualquer seção
- [ ] Eyebrow de cada seção em Ciano uppercase tracking largo
- [ ] Copy do "o problema" gera identificação — o leitor se vê ali
- [ ] Método tem 5 etapas numeradas com verbo de ação
- [ ] Diferenciais não dizem "somos melhores" — mostram o que é diferente
- [ ] Cases têm contexto + transformação (não apenas "fizemos um site")
- [ ] CTA final não tem linguagem de guru: sem "urgência artificial", sem "transforme sua vida"
- [ ] Copy mobile-first: cada headline funciona em 2 linhas no celular

---

## Output desta sprint

- [ ] Este documento revisado e aprovado por Fernando
- [ ] Nenhum código escrito — sprint 02 começa após aprovação aqui
