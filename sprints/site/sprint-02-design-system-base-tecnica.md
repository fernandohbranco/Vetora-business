# Sprint 02 — Design System e Base Técnica

> Fundação técnica do site. Nenhuma seção de conteúdo ainda — apenas a infraestrutura que garante coerência visual em todo o projeto.

**Depende de:** Sprint 01 (copy aprovada)  
**Resultado:** Site rodando localmente com layout vazio mas visualmente correto — fontes, cores, navbar, footer.

---

## Stack confirmada

```
Next.js 14 (App Router)
Tailwind CSS v4
shadcn/ui
Framer Motion 11
TypeScript
```

Projeto em: `site/vetora-site/`

---

## Tarefa 1 — Tokens de design no Tailwind v4

Implementar a paleta VETORA e a escala tipográfica como CSS custom properties no `globals.css`.

**Cores:**
```css
/* globals.css — dentro de @theme {} no Tailwind v4 */
--color-azul-vetor: #0B1F3B;
--color-azul-profundo: #061426;
--color-ciano: #00A6A6;
--color-grafite: #1E252B;
--color-branco-gelo: #F5F7FA;
--color-verde-direcao: #00A86B;
--color-cinza-neutro: #D9DEE3;
--color-prata-digital: #B8C2CC;
```

**Tipografia — carregar via `next/font/google`:**
```ts
// app/layout.tsx
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})
```

**Escala tipográfica como utilitários Tailwind v4:**
```css
/* globals.css */
.text-display {
  font-family: var(--font-sora);
  font-size: 64px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
}
.text-h1 { font-size: 48px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
.text-h2 { font-size: 36px; font-weight: 600; line-height: 1.15; letter-spacing: -0.01em; }
.text-h3 { font-size: 24px; font-weight: 600; line-height: 1.2; }
.text-h4 { font-size: 18px; font-weight: 600; line-height: 1.3; }
.text-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-ciano);
}
.text-lead { font-size: 18px; line-height: 1.6; }
.text-body { font-size: 16px; line-height: 1.6; }
.text-small { font-size: 14px; line-height: 1.5; }
.text-caption { font-size: 12px; font-weight: 500; line-height: 1.4; letter-spacing: 0.05em; }
```

---

## Tarefa 2 — Componentes base reutilizáveis

Criar em `components/ui/` (ou `components/vetora/` para os custom):

### `SectionWrapper`
```tsx
// components/vetora/SectionWrapper.tsx
// Wrapper padrão de seção com padding consistente e max-width
// Props: dark (boolean), id (string)
// dark=true → bg azul-vetor, dark=false → bg branco-gelo
```

### `Eyebrow`
```tsx
// components/vetora/Eyebrow.tsx
// Texto pré-título em Ciano uppercase com tracking
// Props: children, className
```

### `SectionHeading`
```tsx
// components/vetora/SectionHeading.tsx
// Eyebrow + h2 + subtítulo opcional em um bloco
// Props: eyebrow, heading, subheading, align ('left' | 'center')
```

### `VetoraButton`
```tsx
// components/vetora/VetoraButton.tsx
// Variantes: primary (fundo ciano), secondary (ghost borda branca), dark (fundo azul-vetor)
// Props: variant, size ('sm' | 'md' | 'lg'), href, onClick
// Sem border-radius exagerado — sutil (4px)
```

---

## Tarefa 3 — Navbar

**Arquivo:** `components/vetora/Navbar.tsx`

**Comportamento:**
- Transparente no topo
- Ao scroll > 60px: `background: rgba(11, 31, 59, 0.95)`, `backdrop-filter: blur(12px)`, transição 300ms
- Logo: variação 2 (negativa — branca sobre escuro) — `public/logo/logo-negativa.png`
- Links de navegação: Inter 400, 14px, Branco Gelo, hover Ciano com transição 200ms
- CTA "Agendar diagnóstico": botão Ciano pequeno, cantos sutis
- Mobile: hamburger menu → drawer lateral com os mesmos links

**Animação de entrada:**
- Fade-in + translateY(-8px → 0) ao carregar a página, delay 600ms após hero

**Links:**
```
Método (âncora #metodo)
Serviços (âncora #servicos)
Cases (âncora #cases)
Sobre (âncora #sobre)
[CTA] Agendar diagnóstico
```

---

## Tarefa 4 — Footer

**Arquivo:** `components/vetora/Footer.tsx`

**Fundo:** Grafite Técnico `#1E252B`

**Layout 3 colunas (desktop), empilhado (mobile):**

Coluna 1 — Identidade:
- Logo horizontal negativa (pequena, ~120px)
- Tagline: "Estratégia, marca e tecnologia na direção certa."
- Copyright: "© 2026 VETORA. Todos os direitos reservados."

Coluna 2 — Navegação:
- Título: "Navegação" (Inter 500, 12px, Prata Digital)
- Links: Método · Serviços · Cases · Sobre · Agendar diagnóstico

Coluna 3 — Contato:
- Título: "Contato" (Inter 500, 12px, Prata Digital)
- Email: fernandohbranco@gmail.com
- LinkedIn → ícone linear + link
- Instagram → ícone linear + link

Linha divisória superior: 1px `#D9DEE3` com opacidade 15%.

---

## Tarefa 5 — Layout raiz e metadata

**`app/layout.tsx`** — metadata completa:
```ts
export const metadata: Metadata = {
  title: 'VETORA — Estratégia, marca e tecnologia na direção certa.',
  description: 'Estúdio estratégico de branding, sites e IA. Transformamos negócios reais em ativos digitais de valor.',
  openGraph: {
    title: 'VETORA',
    description: 'Estratégia, marca e tecnologia na direção certa.',
    url: 'https://vetora.com.br',
    siteName: 'VETORA',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VETORA',
    description: 'Estratégia, marca e tecnologia na direção certa.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}
```

---

## Tarefa 6 — Configuração do Framer Motion

Instalar e configurar para uso com App Router:

```bash
npm install framer-motion
```

Criar `components/vetora/MotionWrapper.tsx` — client component que envolve o Framer Motion `motion` para evitar problemas com SSR.

Criar `lib/animations.ts` com variants reutilizáveis:
```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}
```

Todos os componentes com animação usam `whileInView` + `once: true` (não reanima ao scroll de volta).

---

## Tarefa 7 — `app/page.tsx` vazia estruturada

Substituir o boilerplate do Next.js por:
```tsx
export default function Home() {
  return (
    <main>
      {/* Seções adicionadas nas sprints 03-05 */}
    </main>
  )
}
```

---

## Estrutura de pastas ao final desta sprint

```
site/vetora-site/
├── app/
│   ├── layout.tsx         ← fontes + metadata + navbar + footer
│   ├── page.tsx           ← vazio estruturado
│   └── globals.css        ← tokens de cor + escala tipográfica
├── components/
│   └── vetora/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── SectionWrapper.tsx
│       ├── Eyebrow.tsx
│       ├── SectionHeading.tsx
│       ├── VetoraButton.tsx
│       └── MotionWrapper.tsx
├── lib/
│   ├── utils.ts
│   └── animations.ts
└── public/
    └── logo/
        ├── logo-negativa.png     ← variação 2 (copiar de identidade/logo-vetora/)
        └── logo-colorida.png     ← variação 1
```

---

## Checklist de conclusão

- [ ] `npm run dev` sobe sem erro
- [ ] `npm run build` sem erro de TypeScript
- [ ] Navbar aparece com fundo transparente no topo e escuro ao scroll
- [ ] Footer renderiza corretamente com 3 colunas no desktop
- [ ] Fontes Sora + Inter carregadas (verificar no DevTools → Network → fontes)
- [ ] Cores do design guide aplicadas como tokens
- [ ] Framer Motion importado sem erro de SSR
- [ ] Logo negativa visível no navbar sobre fundo escuro
- [ ] Mobile: navbar responsive com hamburger menu
