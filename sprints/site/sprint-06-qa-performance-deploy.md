# Sprint 06 — QA, Performance e Deploy

> Sprint final antes de ir ao ar. Não há conteúdo novo — apenas garantir que o que existe está excelente.
> Critério: Lighthouse ≥ 90 em todas as categorias, zero bugs visuais, deploy estável.

**Depende de:** Sprint 05 (site completo localmente)  
**Resultado:** Site publicado em vetora.com.br via Vercel.

---

## Parte 1 — QA Visual e Funcional

### 1.1 Checklist de revisão por seção

Percorrer o site do topo ao rodapé em cada dispositivo/resolução abaixo.

**Resoluções a testar:**

| Dispositivo | Largura | Prioritário |
|---|---|---|
| iPhone SE | 375px | Sim |
| iPhone 14 | 390px | Sim |
| iPad | 768px | Sim |
| Desktop | 1280px | Sim |
| Desktop wide | 1440px | Sim |
| 4K | 1920px | Não (verificar se não quebra) |

**Checklist por seção:**

**Navbar:**
- [ ] Logo visível sobre hero escuro
- [ ] Fundo transparente no topo, azul ao scroll — transição suave
- [ ] Links não quebram em linha no mobile
- [ ] Hamburger menu abre e fecha corretamente
- [ ] CTA "Agendar diagnóstico" visível e clicável no mobile
- [ ] Navbar não oculta conteúdo ao navegar por âncoras (offset correto: `scroll-margin-top`)

**Hero:**
- [ ] Headline cabe em 375px sem overflow
- [ ] Grid técnico de fundo visível mas não dominante
- [ ] Animação de entrada completa sem travar (testar em CPU 4x slow no DevTools)
- [ ] Botões alinhados e sem quebra de linha no mobile
- [ ] Scroll indicator visível

**O Problema:**
- [ ] 3 cards em linha no desktop, 1 por linha no mobile
- [ ] Sem overflow horizontal nos cards

**O Que Fazemos:**
- [ ] Grid 2×2 no desktop, 1×4 no mobile
- [ ] Hover nos cards funcionando
- [ ] Número "01"–"04" legível

**Método:**
- [ ] Linha progressiva desktop: conector horizontal anima ao entrar na viewport
- [ ] Mobile: linha vertical à esquerda, etapas empilhadas
- [ ] Texto de cada etapa legível em 375px

**Diferenciais:**
- [ ] Borda esquerda Ciano visível nos 3 cards
- [ ] Grid 3 colunas desktop → 1 coluna mobile

**Cases:**
- [ ] Topo de cada card (área mockup) renderiza corretamente
- [ ] Tags de serviço não quebram em linha
- [ ] Hover: shadow e translateY funcionando

**Fundador:**
- [ ] Foto ou placeholder renderizando
- [ ] Layout 2 colunas desktop → 1 coluna mobile (foto no topo)
- [ ] Borda offset Ciano na foto sem quebrar layout

**CTA Final:**
- [ ] Botão centralizado em todos os dispositivos
- [ ] Nota de credibilidade abaixo do botão legível

**Footer:**
- [ ] 3 colunas desktop → 1 coluna mobile
- [ ] Links de navegação funcionam (âncoras corretas)
- [ ] Email e links sociais clicáveis

---

### 1.2 Checklist de conteúdo

- [ ] Nenhum placeholder de texto esquecido ("Lorem ipsum", "TODO", "em construção")
- [ ] Nenhum link quebrado (404) — testar todos os links de âncora e externos
- [ ] Email de contato correto: `fernandohbranco@gmail.com`
- [ ] URL do CTA "Agendar diagnóstico" configurada (Calendly ou formulário)
- [ ] Links do LinkedIn e Instagram apontando para os perfis corretos
- [ ] Copyright com ano correto: "© 2026 VETORA"

---

### 1.3 Checklist de identidade visual

- [ ] Nunca dois fundos escuros consecutivos — conferir toda a sequência
- [ ] Ícones, se houver, são todos lineares (não preenchidos)
- [ ] Nenhum emoji em nenhum texto do site
- [ ] Cores usadas apenas da paleta do `design-guide.md`
- [ ] Fontes: apenas Sora (títulos) e Inter (corpo) — JetBrains Mono apenas em metadados
- [ ] Logo variação 2 (negativa) no navbar e footer escuro
- [ ] Imagens, se houver, com tons frios e sem filtro quente

---

## Parte 2 — Performance

### 2.1 Lighthouse audit

Rodar no Chrome DevTools → Lighthouse, modo **Mobile** e **Desktop**, aba incognita.

**Metas:**

| Categoria | Meta | Crítico |
|---|---|---|
| Performance | ≥ 90 | Sim |
| Accessibility | ≥ 95 | Sim |
| Best Practices | ≥ 95 | Não |
| SEO | ≥ 95 | Sim |

### 2.2 Problemas comuns e soluções

**Imagens não otimizadas:**
→ Usar `next/image` em todas as imagens. Formato WebP, `priority` na logo do navbar e foto hero.

**Fonts causando CLS:**
→ `next/font` já resolve. Confirmar que as variáveis CSS estão aplicadas no `body`.

**Framer Motion pesado no bundle:**
→ Verificar que `LazyMotion` + `domMax` estão configurados para code splitting:
```tsx
// app/layout.tsx ou MotionWrapper.tsx
import { LazyMotion, domAnimation } from 'framer-motion'
// Usar domAnimation (menor) em vez de domMax se não usar gestos complexos
```

**LCP lento (hero):**
→ Hero não depende de imagens externas. Se houver foto: `priority` no `next/image`. Grid técnico via CSS (não imagem) — sem custo de LCP.

**Acessibilidade:**
→ Todos os botões com `aria-label`. Links com texto descritivo. Imagens com `alt` preenchido. Contraste WCAG AA em todos os textos (verificar no DevTools → Accessibility).

---

## Parte 3 — SEO On-Page

### 3.1 Metadata (já definida na Sprint 02 — verificar)

```ts
title: 'VETORA — Estratégia, marca e tecnologia na direção certa.'
description: 'Estúdio estratégico de branding, sites e IA. Transformamos negócios reais em ativos digitais de valor.'
```

- [ ] `<title>` com keyword primária: "branding estratégico" ou "estúdio de branding"
- [ ] `<meta description>` entre 120–160 caracteres
- [ ] OG image (1200×630px) criada e testada em [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] `canonical` URL configurada para `https://vetora.com.br`

### 3.2 Estrutura semântica

- [ ] Um único `<h1>` na página (headline do hero)
- [ ] Hierarquia h1 → h2 → h3 respeitada (sem pular níveis)
- [ ] `<main>`, `<section>`, `<nav>`, `<footer>` corretos
- [ ] `<a>` externos com `rel="noopener noreferrer"`

### 3.3 Arquivos técnicos

Criar `app/sitemap.ts`:
```ts
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://vetora.com.br', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ]
}
```

Criar `app/robots.ts`:
```ts
import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://vetora.com.br/sitemap.xml',
  }
}
```

---

## Parte 4 — Deploy no Vercel

### 4.1 Pré-deploy

- [ ] `npm run build` sem erro local
- [ ] `npm run lint` sem error (warnings aceitáveis)
- [ ] Variáveis de ambiente verificadas (se houver — este site não usa APIs no MVP)
- [ ] `.gitignore` inclui `node_modules`, `.env.local`, `.next`

### 4.2 Deploy

```bash
# Se já tem projeto na Vercel:
vercel --prod

# Se for o primeiro deploy:
vercel
# → Linkar ao projeto vetora-site
# → Framework: Next.js (detecta automaticamente)
# → Build command: npm run build
# → Output directory: .next
```

Ou via /vercel:deploy (skill Vercel disponível).

### 4.3 Domínio vetora.com.br

No painel Vercel → Project → Settings → Domains:
1. Adicionar `vetora.com.br` e `www.vetora.com.br`
2. Vercel gera registros DNS a configurar no registrador
3. Adicionar registro A ou CNAME conforme instrução
4. Aguardar propagação (minutos a 48h)
5. SSL: automático via Let's Encrypt — verificar que ativo

### 4.4 Pós-deploy

- [ ] Abrir `https://vetora.com.br` e confirmar site carregando
- [ ] Rodar Lighthouse na URL de produção (não localhost)
- [ ] Testar link do CTA "Agendar diagnóstico" em produção
- [ ] Verificar que OG image aparece ao colar URL no WhatsApp/LinkedIn
- [ ] Confirmar que `https://vetora.com.br/sitemap.xml` responde

---

## Parte 5 — Analytics (opcional mas recomendado)

Adicionar **Vercel Analytics** (zero config, privacy-first):

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

// dentro do <body>:
<Analytics />
```

```bash
npm install @vercel/analytics
```

Alternativa: Google Analytics 4 via `next/script`, mas Vercel Analytics é mais simples e integrado ao painel.

---

## Critério de "ir ao ar"

O site só vai ao ar quando:
- [ ] Lighthouse Performance ≥ 90 em mobile
- [ ] Nenhum bug visual em 375px e 1280px
- [ ] Nenhum link quebrado
- [ ] CTA principal funcional (abre calendário ou formulário real)
- [ ] Domínio vetora.com.br apontando para o deploy
- [ ] SSL ativo (https funcionando)

---

## Nota estratégica

O site institucional não precisa ser perfeito antes de ir ao ar — precisa ser **honesto e representativo**. Um site que representa bem a VETORA, com copy estratégica e design correto, já converte melhor do que 99% dos sites de consultores no Brasil.

Se alguma seção não estiver 100% (ex: foto do fundador), usar o placeholder e publicar. Evolução é contínua.
