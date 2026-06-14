# Sprint 03 — Hero e Primeira Dobra

> A seção mais crítica do site. Os primeiros 3 segundos definem se o visitante fica ou sai.
> Aqui o site precisa parecer premium antes de qualquer palavra ser lida.

**Depende de:** Sprint 01 (copy aprovada), Sprint 02 (design system pronto)  
**Resultado:** Hero completo com motion, textura e impacto visual máximo.

---

## Objetivo desta sprint

Construir as duas primeiras seções (Hero + O Problema) com total fidelidade ao padrão visual VETORA. O critério de aprovação é subjetivo e exigente: ao abrir o site, a primeira impressão precisa ser de consultoria premium de alto nível — o padrão McKinsey/Palantir/Linear.

---

## Seção 1 — Hero

**Arquivo:** `components/vetora/sections/Hero.tsx`  
**Fundo:** Azul Vetor `#0B1F3B`

### Estrutura visual

```
[ NAVBAR transparente sobre hero ]

[ Eyebrow — centralizado ]
ESTÚDIO ESTRATÉGICO DE BRANDING, SITES E IA

[ Headline — centralizado, 2–3 linhas ]
Sua entrega precisa ser
percebida antes da
primeira conversa.

[ Subheadline — centralizado, max 80ch ]
A VETORA transforma negócios reais em ativos digitais de valor —
corrigindo o desalinhamento entre o que você entrega
e o que o mercado consegue perceber.

[ CTAs — centralizados, gap 16px ]
[  Agendar diagnóstico gratuito  ]  [ Ver como funciona → ]

[ Scroll indicator — linha vertical animada ]

[ Textura de fundo — grid técnico sutil ]
```

### Grid técnico de fundo

Implementar como SVG ou CSS background-image. Linhas em Ciano `#00A6A6` com opacidade 4–6%. Espaçamento: 48px × 48px. Não deve competir com o texto.

```css
background-image:
  linear-gradient(rgba(0, 166, 166, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 166, 166, 0.05) 1px, transparent 1px);
background-size: 48px 48px;
```

Adicionalmente: gradiente radial centralizado em Ciano com opacity 8–10% para dar profundidade:
```css
background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0, 166, 166, 0.08) 0%, transparent 70%);
```

### Linha diagonal decorativa

Um único traço diagonal em SVG, posicionado no canto inferior direito. Cor: Ciano `#00A6A6`, opacidade 15%, espessura 1px. Animação: `pathLength` de 0 a 1 ao carregar (1.2s, ease).

```tsx
// SVG absoluto posicionado no bottom-right do hero
// width: 40%, height: 60% do container
// diagonal simples do canto inferior esquerdo ao superior direito do SVG
```

### Choreografia de animação de entrada

Sequência temporal (nenhum elemento aparece junto):

| Elemento | Delay | Animação |
|---|---|---|
| Grid de fundo | 0ms | fadeIn, 600ms |
| Linha diagonal | 200ms | pathLength 0→1, 1200ms |
| Eyebrow | 300ms | fadeInUp (y: 16px → 0), 500ms |
| Headline (linha 1) | 450ms | fadeInUp, 600ms |
| Headline (linha 2) | 580ms | fadeInUp, 600ms |
| Headline (linha 3) | 710ms | fadeInUp, 600ms |
| Subheadline | 900ms | fadeInUp, 500ms |
| CTAs | 1100ms | fadeInUp, 500ms |
| Scroll indicator | 1400ms | fadeIn + pulse loop |

Usar `motion.span` em cada linha do headline para animar individualmente.

### Scroll indicator

```tsx
// Linha vertical, 40px de altura, 1px de largura, cor Ciano
// Animação CSS: translateY de -100% a 100% em loop (1.6s, ease-in-out)
// Texto "scroll" em Prata Digital, 10px, tracking 0.2em, rotacionado -90deg
```

### Altura do Hero

`min-height: 100dvh` — ocupa tela cheia mas não mais que isso. O texto não fica exatamente centralizado vertical mas sim deslocado levemente para cima (padding-top: 20dvh, padding-bottom: 14dvh).

### Copy implementada

```tsx
<section id="hero">
  <Eyebrow>Estúdio estratégico de branding, sites e IA</Eyebrow>

  <h1 className="text-display text-white">
    <motion.span>Sua entrega precisa ser</motion.span>
    <motion.span>percebida antes da</motion.span>
    <motion.span>primeira conversa.</motion.span>
  </h1>

  <p className="text-lead" style={{ color: '#B8C2CC', maxWidth: '60ch' }}>
    A VETORA transforma negócios reais em ativos digitais de valor —
    corrigindo o desalinhamento entre o que você entrega
    e o que o mercado consegue perceber.
  </p>

  <div className="flex gap-4">
    <VetoraButton variant="primary" href="#contato">
      Agendar diagnóstico gratuito
    </VetoraButton>
    <VetoraButton variant="ghost" href="#metodo">
      Ver como funciona
    </VetoraButton>
  </div>
</section>
```

### Botões — especificação

**Primário (Ciano):**
```css
background: #00A6A6;
color: #0B1F3B;  /* azul escuro para contraste forte */
padding: 14px 28px;
border-radius: 4px;
font: Inter 500 15px;
letter-spacing: 0.01em;
transition: background 200ms, transform 100ms;
hover: background #008f8f; transform scale(1.02);
```

**Ghost (borda branca sutil):**
```css
background: transparent;
border: 1px solid rgba(245, 247, 250, 0.25);
color: #F5F7FA;
padding: 14px 28px;
border-radius: 4px;
hover: border-color rgba(245, 247, 250, 0.6);
```

---

## Seção 2 — O Problema

**Arquivo:** `components/vetora/sections/Problem.tsx`  
**Fundo:** Branco Gelo `#F5F7FA`  
**ID:** `#problema`

### Estrutura visual

```
[ SectionHeading — alinhado à esquerda ]
eyebrow: O ESPECIALISTA INVISÍVEL
heading: Você entrega muito.
         O mercado percebe pouco.

[ Parágrafo lead — max 65ch ]

[ Grid de 3 cards horizontais ]
Card 1 | Card 2 | Card 3

[ Transição suave para próxima seção escura ]
```

### Cards de tensão

**Especificação visual:**
```css
background: #FFFFFF;
border: 1px solid #D9DEE3;
border-radius: 6px;
padding: 28px 24px;
/* Sem ícone decorativo — só texto */
```

**Conteúdo:**
```
Card 1:
Título (h4, Sora 600, 18px): "Entrega excelente, presença genérica."
Texto (Inter 400, 15px): "Seu trabalho é reconhecido por quem já te conhece.
Mas o mercado que não te conhece ainda não consegue perceber o nível do que você faz."

Card 2:
Título: "Arte bonita, estratégia zero."
Texto: "A maioria das agências entrega visual sem diagnóstico.
O resultado: materiais bonitos que não convertem e não constroem autoridade."

Card 3:
Título: "Cada peça parece de uma marca diferente."
Texto: "Sem identidade consolidada, nenhuma consistência acumula.
Cada material reforça a impressão de improviso — não de expertise."
```

### Animação dos cards

`staggerContainer` + `fadeInUp` em `whileInView`, `once: true`.  
Delay entre cards: 120ms.

### Transição visual para seção escura

Sutil degradê no final da seção:
```css
background: linear-gradient(to bottom, #F5F7FA 80%, #0B1F3B 100%);
height: 80px;
```
Isso evita o corte brusco entre fundo claro e fundo escuro.

---

## `app/page.tsx` ao final desta sprint

```tsx
import Hero from '@/components/vetora/sections/Hero'
import Problem from '@/components/vetora/sections/Problem'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
    </main>
  )
}
```

---

## Checklist de conclusão

- [ ] Hero ocupa 100dvh sem scroll horizontal
- [ ] Grid técnico visível mas não dominante (não compete com copy)
- [ ] Linha diagonal aparece animada no carregamento
- [ ] Headline anima por linha em sequência (não tudo junto)
- [ ] CTAs visíveis, contraste WCAG AA verificado
- [ ] Scroll indicator pulsando continuamente
- [ ] Seção "O Problema" com fundo claro correto
- [ ] Cards renderizam em grid 3 colunas (desktop) e 1 coluna (mobile)
- [ ] Animação com `whileInView` funcionando nos cards
- [ ] Transição suave entre hero escuro e problema claro
- [ ] Site testado em 375px (iPhone SE) e 1440px (desktop)
- [ ] Sem layout shift no carregamento de fontes (next/font resolve isso)

---

## Critério subjetivo de aprovação

Abrir o site e perguntar: "Isso parece McKinsey, Palantir ou Linear?"  
Se a resposta for hesitante, ajustar antes de avançar.  
Os ajustes mais comuns: headline muito pequeno no mobile, grid técnico aparecendo demais, botão com border-radius exagerado, subheadline longo demais.
