# Sprint 04 — Método, Serviços e Diferenciais

> O corpo do site. Aqui o visitante entende o que a VETORA faz, como faz e por que é diferente.
> Copy e design precisam transmitir método, rigor e sofisticação — sem ser acadêmico nem genérico.

**Depende de:** Sprint 03 (hero e problema construídos)  
**Resultado:** 3 seções completas — Serviços, Método VETORA, Diferenciais.

---

## Seção 3 — O Que Fazemos

**Arquivo:** `components/vetora/sections/Services.tsx`  
**Fundo:** Azul Vetor `#0B1F3B` (escuro)  
**ID:** `#servicos`

### Layout

```
[ SectionHeading — centralizado ]
eyebrow: O QUE A VETORA FAZ
heading: Transformamos o que você entrega
         em algo que o mercado consegue perceber.
subheading: Não somos uma agência de arte. Somos um estúdio estratégico.
            Cada decisão começa com diagnóstico e termina com posicionamento claro.

[ Grid de 4 service cards — 2×2 no desktop, 1 coluna no mobile ]
```

### Service Cards

**Especificação visual:**
```css
background: #061426;          /* Azul Profundo — mais escuro que o fundo */
border: 1px solid #00A6A6;    /* Borda Ciano — fina, 1px */
border-radius: 6px;
padding: 32px 28px;
transition: border-color 300ms, transform 300ms;
hover: border-color rgba(0, 166, 166, 0.6); transform translateY(-2px);
```

**Sem ícone decorativo.** Número da entrega em canto superior direito:
```css
/* Número de ordem — "01", "02", etc. */
font: JetBrains Mono 400, 11px;
color: rgba(0, 166, 166, 0.4);
letter-spacing: 0.1em;
```

**Conteúdo dos cards:**

```
01 — Branding Estratégico
Posicionamento, arquétipo, tom de voz, identidade verbal.
A estratégia de marca que define tudo o que vem depois — visual, copy e presença.

02 — Sites e Landing Pages
Copy + UX/UI + estrutura de conversão.
Não decoração — resultado. Um site que representa e converte.

03 — Apresentações Comerciais
Narrativa executiva, pitch deck, proposta visual.
O deck que fecha negócio antes da reunião terminar.

04 — IA Aplicada ao Negócio
Prompts, automações e sistemas leves com inteligência artificial.
Tecnologia com estratégia — não tecnologia por tecnologia.
```

Cada card: título em Sora 600 18px (Branco), texto em Inter 400 15px (Prata Digital `#B8C2CC`).

### Animação

`staggerContainer` nos 4 cards, `fadeInUp`, `whileInView`, `once: true`.  
Delay entre cards: 100ms.

---

## Seção 4 — Método VETORA

**Arquivo:** `components/vetora/sections/Method.tsx`  
**Fundo:** Branco Gelo `#F5F7FA` (claro)  
**ID:** `#metodo`

### Layout

```
[ SectionHeading — alinhado à esquerda ]
eyebrow: MÉTODO VETORA
heading: Construa sua marca com a mesma
         precisão de um projeto de engenharia.
subheading: Cada entrega segue cinco etapas. Na sequência certa.
            Sem pular diagnóstico. Sem entregar antes de entender.

[ Linha progressiva horizontal com 5 etapas ]
  (desktop: horizontal / mobile: vertical)
```

### Linha progressiva (desktop)

```
[01] ──── [02] ──── [03] ──── [04] ──── [05]
DIAGNÓS-  DIREÇÃO   CONSTRU-  ENTREGA   EVOLUÇÃO
TICO                ÇÃO
```

**Conector:** linha horizontal de 1px, cor Ciano `#00A6A6`, que "preenche" da esquerda para direita via animação `scaleX` ao entrar na viewport.

```tsx
// Linha conector animada
<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
  style={{ transformOrigin: 'left' }}
  className="h-px bg-ciano w-full"
/>
```

**Nó de cada etapa:**
```css
/* Círculo sobre a linha */
width: 40px;
height: 40px;
border-radius: 50%;
background: #F5F7FA;
border: 2px solid #00A6A6;
/* Número dentro em Sora 600, 14px, Ciano */
```

**Conteúdo abaixo de cada nó:**

```
01 DIAGNÓSTICO
Mapeamos o gap entre o que você entrega e o que o mercado percebe.
Não começamos sem entender o problema real.

02 DIREÇÃO
Definimos posicionamento, arquétipo e estratégia visual.
A estratégia sempre antes da estética.

03 CONSTRUÇÃO
Desenvolvemos os ativos: copy, visual, código, identidade.
Cada elemento tem propósito definido na etapa anterior.

04 ENTREGA
Revisão técnica, checklist de qualidade, validação UX.
Nada vai ao ar antes de estar pronto de verdade.

05 EVOLUÇÃO
Acompanhamos, ajustamos e evoluímos o que foi construído.
Um ativo digital precisa crescer com o negócio.
```

Número: JetBrains Mono 400, 11px, Ciano.  
Título: Sora 600, 16px, Azul Vetor.  
Corpo: Inter 400, 14px, Grafite Técnico.

### Mobile — versão vertical

Quando `< 768px`: linha conector vertical (esquerda), etapas empilhadas.

```
| 01 DIAGNÓSTICO
|    Texto...
|
| 02 DIREÇÃO
|    Texto...
```

Linha vertical em Ciano, 2px, alinhada à esquerda.

---

## Seção 5 — Diferenciais

**Arquivo:** `components/vetora/sections/Differentials.tsx`  
**Fundo:** Azul Vetor `#0B1F3B` (escuro)  
**ID:** `#diferenciais`

### Layout

```
[ SectionHeading — alinhado à esquerda ]
eyebrow: POR QUE A VETORA
heading: Estratégia antes de estética.
         Sempre.

[ 3 cards verticais em linha — ou 1 por linha no mobile ]
```

### Cards de diferencial

**Especificação visual:**
```css
border-left: 2px solid #00A6A6;    /* borda esquerda Ciano */
padding: 28px 24px 28px 28px;
background: rgba(6, 20, 38, 0.6);  /* Azul Profundo semitransparente */
border-radius: 0 6px 6px 0;        /* sem radius na esquerda, tem na direita */
```

**Conteúdo:**

```
Diferencial 1 — "Diagnóstico antes de proposta"
Nunca enviamos orçamento sem entender o problema.
A maioria das agências entrega arte sem estratégia. Nós entregamos estratégia com execução.

Diferencial 2 — "Engenharia aplicada a branding"
Fernando é engenheiro industrial com domínio de IA aplicada.
Rigor técnico de projeto industrial + visão de negócio + execução com inteligência artificial.
Combinação rara no mercado.

Diferencial 3 — "Sistema, não amontoado de arquivos"
Cada entrega é um ativo coerente.
Você sai com identidade consolidada, método documentado e presença digital que te representa de verdade.
```

Título: Sora 600, 20px, Branco.  
Corpo: Inter 400, 15px, Prata Digital.

**Hover state:**
```css
background: rgba(0, 166, 166, 0.06);
```
Transição 250ms.

### Animação

Cada card: `fadeInUp` + delay 150ms entre eles, `whileInView`, `once: true`.

---

## `app/page.tsx` ao final desta sprint

```tsx
import Hero from '@/components/vetora/sections/Hero'
import Problem from '@/components/vetora/sections/Problem'
import Services from '@/components/vetora/sections/Services'
import Method from '@/components/vetora/sections/Method'
import Differentials from '@/components/vetora/sections/Differentials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <Method />
      <Differentials />
    </main>
  )
}
```

---

## Checklist de conclusão

- [ ] Alternância de fundos correta: escuro → claro → escuro → claro → escuro
- [ ] Service cards com borda Ciano e hover correto
- [ ] Número de ordem visível mas não dominante em JetBrains Mono
- [ ] Linha progressiva anima da esquerda para a direita ao entrar na viewport
- [ ] Método versão mobile testado: linha vertical, etapas empilhadas
- [ ] Diferenciais com borda esquerda Ciano
- [ ] Nenhuma animação reanima ao scrollar de volta (once: true)
- [ ] Grid 2×2 em desktop e 1×4 no mobile para os services
- [ ] Diferenciais em 3 colunas no desktop, 1 no mobile
- [ ] Verificar contraste WCAG: texto Prata Digital sobre Azul Vetor (AA ok: 7.6:1)
