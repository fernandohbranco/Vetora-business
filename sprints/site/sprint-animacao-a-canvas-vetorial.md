# Sprint Animação A — Campo Vetorial em Canvas

**Tipo:** Experimento visual independente | **Esforço estimado:** 4–6h | **Stack:** React + Canvas 2D + Framer Motion
**Status:** Aguardando execução — comparar com Sprint B antes de adotar como oficial

---

## Contexto

O site atual (`site/vetora-next/`) já tem um `DotGrid` no Hero: pontos que reagem ao mouse via Canvas 2D. É elegante, mas genérico — poderia ser de qualquer empresa de tech.

Este sprint substitui o DotGrid por um **campo vetorial animado** que:

1. Começa caótico — vetores apontando em direções aleatórias controladas por Perlin noise
2. Vai se alinhando progressivamente conforme o usuário faz scroll
3. No final da página, todos os vetores apontam em diagonal para cima e à direita — exatamente a direção do "V" da logo VETORA

Isso não é decoração. É narrativa: o site representa visualmente o que a empresa faz — pega negócios sem direção e dá um vetor.

A implementação é 100% em Canvas 2D + JavaScript. Sem WebGL, sem bibliotecas de física, sem dependências além de `simplex-noise` (2.5kb gzipado).

---

## Objetivo

Ao final deste sprint, existirá:

1. Componente `VectorField.tsx` — canvas com campo vetorial scroll-driven, isolado e reutilizável
2. Hero alternativo `HeroCanvas.tsx` — o Hero atual com `VectorField` no lugar do `DotGrid`
3. Página de demo `/demo/canvas-vetorial` — site completo com esse Hero, para comparação

O componente principal **não** quebra nada do site atual. O Hero original permanece intacto.

---

## Pré-requisitos

### Dependências
- [ ] `simplex-noise@4.x` instalado: `npm install simplex-noise`
  - Versão 4+ usa named exports: `import { createNoise2D } from 'simplex-noise'`
  - Não instalar v3 (API diferente: `new SimplexNoise()`)
- [ ] Framer Motion já instalado no projeto (confirmar em `package.json`)
- [ ] Next.js 14 com `"use client"` funcionando (confirmar que o Hero atual compila)

### Leitura obrigatória antes de começar
- [ ] `identidade/design-guide.md` — confirmar cores: `#061426` (Azul Profundo), `#00A6A6` (Ciano Inteligente)
- [ ] `site/vetora-next/components/sections/Hero.tsx` — entender o DotGrid atual e o layout do Hero
- [ ] `site/vetora-next/tailwind.config.ts` — confirmar tokens CSS disponíveis (`bg-deep`, `text-cyan`, etc.)

### Ambiente
- [ ] `cd site/vetora-next && npm run dev` rodando na porta 3000
- [ ] Browser com DevTools aberto — aba Performance para monitorar FPS durante desenvolvimento

---

## Arquitetura técnica

### Matemática do campo vetorial

**Estrutura de dados:**
Não existe lista de objetos. É um grid implícito: para cada posição `(x, y)` do canvas com espaçamento `SPACING`, calculamos o ângulo em tempo real no loop de renderização.

```
SPACING = 36px          — densidade da grade (colunas × linhas de vetores)
SCALE = 160             — escala do noise (160px = "tamanho" de uma região de fluxo)
SPEED = 0.00022         — velocidade da deriva temporal (por frame)
LENGTH = 20             — comprimento de cada seta em pixels
LINE_WIDTH = 0.65       — espessura da linha (fina = elegante)
BASE_OPACITY = 0.11     — opacidade base sem interação
ARROW_SIZE = 4          — tamanho das "asas" da pontinha da seta
ARROW_ANGLE = 0.45      — ângulo das asas em radianos (~26°)
```

**Cálculo do ângulo:**
```
noise2D retorna: -1 a 1
angle = noise2D(x / SCALE, y / SCALE + time * SPEED) × π × 2
→ resultado: 0 a 6.28 rad (rotação completa)
```

**Direção alvo (alinhamento VETORA):**
```
TARGET_ANGLE = -π × 0.38   →   ≈ -68° = diagonal para cima e à direita
                               Exatamente a direção do vetor na logo
```

**Blending scroll → alinhamento:**
```
scrollFactor: 0 a 1 (vem do Framer Motion useScroll)
eased = scrollFactor ^ 1.6   (easing power para resposta mais suave no início)
displayAngle = lerp(noiseAngle, TARGET_ANGLE, eased)

function lerp(a, b, t) { return a + (b - a) × t }
```

**Opacidade dinâmica:**
```
opacity = BASE_OPACITY + eased × 0.09 + mouseProximityBonus
→ Os vetores ficam levemente mais visíveis conforme se alinham
→ Cria a percepção de que o campo "acorda" com o scroll
```

**Efeito de mouse (hover):**
```
Para cada vetor em (x, y):
  dist = distância euclidiana até o cursor
  se dist < MOUSE_RADIUS (120px):
    bonus = (1 - dist/MOUSE_RADIUS) × 0.28
    comprimento += bonus × 8
    opacidade += bonus × 0.22
→ Cria uma região luminosa que segue o cursor — o campo "responde" à presença
```

### Desenho de cada vetor

Cada vetor é composto de:
1. Uma linha principal de `(x, y)` até `(x + cos(angle) × length, y + sin(angle) × length)`
2. Duas linhas menores formando uma ponta de seta (arrowhead)

A ponta de seta é desenhada na extremidade final:
```
tip = (x + cos(angle) × length, y + sin(angle) × length)
asa1 = (tip.x + cos(angle + π - ARROW_ANGLE) × ARROW_SIZE,
        tip.y + sin(angle + π - ARROW_ANGLE) × ARROW_SIZE)
asa2 = (tip.x + cos(angle + π + ARROW_ANGLE) × ARROW_SIZE,
        tip.y + sin(angle + π + ARROW_ANGLE) × ARROW_SIZE)
```

### Loop de renderização

```
requestAnimationFrame loop:
  1. clearRect
  2. time += 1 (incremento por frame)
  3. Para cada ponto do grid:
     a. calcular noiseAngle
     b. calcular mouseProximityBonus
     c. calcular displayAngle via lerp com scrollFactor
     d. calcular opacity e length com bonuses
     e. desenhar linha + seta
  4. requestAnimationFrame(draw)
```

**Otimização de performance:**
- O `scrollFactor` é lido de uma `ref` mutável — não do estado React — para não causar re-renders
- `IntersectionObserver` pausa o loop quando o canvas sai da viewport
- Em mobile (`window.innerWidth < 768`), `SPACING` sobe para 54 (menos vetores = menos cálculo)
- Retina: `canvas.width = offsetWidth × devicePixelRatio`, `ctx.scale(dpr, dpr)` — igual ao DotGrid atual

---

## Arquivos a criar

### 1. `site/vetora-next/components/animations/VectorField.tsx`

Componente React puro. Aceita uma prop `scrollProgress: MotionValue<number>` do Framer Motion.

**Props:**
```typescript
interface VectorFieldProps {
  scrollProgress: MotionValue<number>
  className?: string
}
```

**Estrutura interna:**
```
VectorField (componente)
  └─ useEffect principal
       ├─ setup: resize, devicePixelRatio, event listeners
       ├─ noise2D = createNoise2D() — criar UMA instância, fora do loop
       ├─ scrollRef = useRef(0) — recebe updates do scrollProgress sem re-render
       ├─ mouseRef = useRef({x: -9999, y: -9999})
       ├─ draw() — loop rAF com toda a lógica de campo
       ├─ IntersectionObserver — pausa/retoma draw()
       └─ cleanup: cancelAnimationFrame, removeEventListeners, disconnect observer
```

**Por que `scrollProgress` vem de fora como prop?**
O `useScroll` do Framer Motion precisa de uma referência ao elemento de scroll. O componente pai (HeroCanvas ou a página de demo) sabe qual é esse elemento. O VectorField não precisa saber — ele só recebe um número de 0 a 1.

### 2. `site/vetora-next/hooks/useScrollProgress.ts`

Hook simples que encapsula o `useScroll` do Framer Motion para o scroll da página inteira.

```typescript
// Retorna: { scrollYProgress: MotionValue<number> }
// scrollYProgress: 0 quando no topo, 1 quando no final da página
export function usePageScrollProgress() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}
```

### 3. `site/vetora-next/components/sections/HeroCanvas.tsx`

Cópia do `Hero.tsx` atual com estas modificações:
- Importa `VectorField` em vez de `DotGrid`
- Usa `usePageScrollProgress()` para obter o `scrollProgress`
- Passa o `scrollProgress` como prop para o `VectorField`
- Ajusta o fundo para `bg-[#061426]` (Azul Profundo — reservado para versões premium)
- Remove os orbs de luz radial do Hero original (o campo vetorial substitui o papel deles)
- Mantém 100% do conteúdo textual, CTAs, stats e scroll indicator

**Diferenças visuais em relação ao Hero original:**
| Elemento | Hero original | HeroCanvas |
|---|---|---|
| Fundo | `bg-deep` (#0B1F3B) | `#061426` (mais profundo) |
| Background animado | DotGrid (pontos + mouse) | VectorField (setas + scroll + mouse) |
| Orbs de luz | 2 orbs radiais | Removidos (campo vetorial os substitui) |
| Resto | Idêntico | Idêntico |

### 4. `site/vetora-next/app/demo/canvas-vetorial/page.tsx`

Página de demo que renderiza o site completo com `HeroCanvas`.

```typescript
// app/demo/canvas-vetorial/page.tsx
import { HeroCanvas } from "@/components/sections/HeroCanvas"
import { Problema } from "@/components/sections/Problema"
import { Servicos } from "@/components/sections/Servicos"
// ... demais seções

export default function DemoCanvasVetorial() {
  return (
    <main>
      <HeroCanvas />
      <Problema />
      <Servicos />
      <Metodo />
      <ParaQuem />
      <Cases />
      <CtaFinal />
    </main>
  )
}
```

**Rota:** `localhost:3000/demo/canvas-vetorial`

Essa rota **não aparece na navegação principal** — é apenas para comparação visual interna.

---

## Sequência de execução

### Passo 1 — Instalar dependência
```bash
cd site/vetora-next
npm install simplex-noise
```
Confirmar que `simplex-noise` aparece em `package.json` dependencies.

### Passo 2 — Criar o hook de scroll
Criar `site/vetora-next/hooks/useScrollProgress.ts`.
Testar: importar no `page.tsx` principal e logar o valor no console — confirmar que vai de 0 a 1 com o scroll.

### Passo 3 — Criar o VectorField
Criar `site/vetora-next/components/animations/VectorField.tsx`.

Sequência de desenvolvimento interno:
1. **Primeiro:** desenhar o grid estático (sem noise, sem scroll) — só linhas horizontais — confirmar que cobre o canvas
2. **Segundo:** adicionar noise — as linhas ficam com ângulos diferentes
3. **Terceiro:** adicionar drift temporal (time++) — campo começa a "fluir"
4. **Quarto:** adicionar efeito de mouse — região luminosa
5. **Quinto:** adicionar scrollProgress → displayAngle lerp — campo alinha com scroll
6. **Sexto:** ajustar opacidades, comprimentos, performance

**Não pular etapas.** É muito mais fácil depurar em steps do que tudo de uma vez.

### Passo 4 — Criar HeroCanvas
Duplicar `Hero.tsx` → `HeroCanvas.tsx`.
Substituir `<DotGrid />` por `<VectorField scrollProgress={scrollProgress} />`.
Adicionar `usePageScrollProgress()`.

### Passo 5 — Criar página de demo
Criar `app/demo/canvas-vetorial/page.tsx`.
Acessar `localhost:3000/demo/canvas-vetorial` e verificar.

### Passo 6 — Calibração visual
Esta é a etapa mais importante e mais demorada.

Ajustar os parâmetros nesta ordem:
1. `SPACING` — aumentar até as setas não parecerem apertadas demais
2. `SCALE` — ajustar até os "turbilhões" do campo terem tamanho elegante (nem muito pequeno, nem um único turbilhão)
3. `LENGTH` — ajustar comprimento das setas para comunicar direção sem dominar o layout
4. `BASE_OPACITY` — mínimo que permita ler o campo sem competir com o texto
5. `SPEED` — lento o suficiente para ser ambiente, rápido o suficiente para perceber movimento
6. Velocidade de alinhamento — testar se 1 scroll completo é suficiente para alinhar ou precisa de mais

---

## Checklist de performance

- [ ] FPS estável em 60fps no desktop (verificar em DevTools > Performance)
- [ ] FPS aceitável em 30fps no mobile (abrir no iPhone/Android real ou simulador)
- [ ] Canvas pausa quando fora da viewport (verificar com IntersectionObserver)
- [ ] Resize funciona: redimensionar a janela recalcula o canvas sem quebrar
- [ ] devicePixelRatio aplicado: canvas não está borrado em telas retina
- [ ] Sem memory leak: componente desmontado cancela rAF e remove event listeners
- [ ] `scrollProgress.onChange` não causa re-renders do componente React (usar ref, não state)

---

## Checklist de qualidade visual

- [ ] Campo vetorial visível mas **não compete** com o texto do Hero
- [ ] Diferença entre estado caótico (topo) e alinhado (final da página) é perceptível
- [ ] Alinhamento final aponta claramente para cima e à direita
- [ ] Efeito de mouse sutil — presente mas não distrativo
- [ ] Setas têm espessura fina e elegante (não parecem "grafismo de jogo")
- [ ] Campo parece orgânico, não mecânico — o noise deve estar calibrado
- [ ] Em mobile (375px), o campo está menos denso mas ainda presente e funcional
- [ ] Acessibilidade: `aria-hidden="true"` no canvas, sem impacto em leitores de tela

---

## Critério de conclusão

- [ ] `npm install simplex-noise` feito e confirmado
- [ ] `VectorField.tsx` criado e funcionando sem erros no console
- [ ] `HeroCanvas.tsx` criado e substituindo DotGrid pelo VectorField
- [ ] `Hero.tsx` original **intacto** — não modificado
- [ ] Rota `/demo/canvas-vetorial` acessível e renderizando o site completo
- [ ] Campo vetorial alinha visivelmente com o scroll de topo a fundo da página
- [ ] Performance: sem janking visível no desktop, sem crash no mobile
- [ ] Nenhum erro TypeScript

---

## Notas e armadilhas

**Sobre `simplex-noise` v4:**
A API mudou completamente da v3. Não usar:
```js
const simplex = new SimplexNoise() // ERRADO em v4
```
Usar:
```js
import { createNoise2D } from 'simplex-noise'
const noise2D = createNoise2D() // CORRETO em v4
```

**Sobre `scrollYProgress` como prop:**
Passar `MotionValue<number>` como prop é diferente de passar `number`. O componente filho usa `.get()` para ler o valor atual dentro do loop rAF, ou `.onChange(callback)` para subscrever a mudanças. Não usar no JSX diretamente.

**Sobre `ctx.clearRect` e performance:**
`clearRect` é mais rápido que `fillRect` com cor de fundo, mas o canvas fica transparente — o fundo CSS da seção aparece atrás. Isso é intencional: o fundo `#061426` está no CSS da `<section>`, o canvas só desenha as setas.

**Sobre setas vs pontos:**
O campo vetorial comunica DIREÇÃO — ponto não tem direção, seta sim. A tentação de usar pontos é grande (mais simples de implementar) mas perde exatamente o elemento narrativo central deste sprint.

**Sobre o alinhamento TARGET_ANGLE:**
`-π × 0.38 ≈ -68°` a partir do eixo X positivo = diagonal para cima e à direita em coordenadas de canvas (onde Y cresce para baixo). Testar visualmente: o vetor alinhado deve parecer apontar para o canto superior direito, como a seta do logo.

**Sobre a decisão de usar `#061426` no fundo:**
O `design-guide.md` reserva o Azul Profundo para "versões premium, eventos executivos". Um Hero com campo vetorial é exatamente isso — versão premium. O `#0B1F3B` (Azul Vetor) padrão fica levemente claro demais para o contraste sutil das setas em `opacity: 0.11`.

---

## Referências visuais

- **Linear.app** — hero com grid técnico e partículas: simplicidade + presença
- **Vercel.com** — fundo escuro com luzes ambiente sutis
- **Anthropic.com** — campo de partículas que se organizam: mesma narrativa de "caos → ordem"
- Campo vetorial em física: visualizações de campo magnético, campo elétrico — a fonte do conceito

---

## O que fazer depois que estiver pronto

1. Acessar `/demo/canvas-vetorial` e `/demo/video-scroll` lado a lado (Sprint B)
2. Avaliar em mobile também — a sensação muda muito no touch
3. Decidir qual adotar como oficial
4. Se este for escolhido: substituir `Hero.tsx` pelo `HeroCanvas.tsx` e deletar o demo
5. Se o Sprint B for escolhido: mover este arquivo para `sprints/_archived/`
