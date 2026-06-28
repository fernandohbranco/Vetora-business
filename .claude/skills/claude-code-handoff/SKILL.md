---
name: claude-code-handoff
description: |
  Prepara o pacote técnico completo para handoff a um desenvolvedor ou para execução
  em Claude Code — especificações de stack, estrutura de arquivos, componentes, dependências,
  scripts de deploy e instruções de implementação. Transforma aprovações de design/copy em
  um brief técnico executável.
  Fase 3 do Método VETORA. Requer arquitetura de site ou LP aprovada como entrada.
  Use quando o usuário disser "handoff pro dev", "brief técnico", "como deployar", "implementar o site",
  "preparar pra desenvolvimento", "/claude-code-handoff".
---

# /claude-code-handoff — Handoff Técnico VETORA

Transforma o que foi aprovado em estratégia (Fases 1-2) e copy/design (Fase 3) em um pacote técnico executável por um desenvolvedor ou pelo próprio Claude Code.

## Quando ativar

- Quando o copy, design e estrutura de site/LP foram aprovados e é hora de implementar
- Quando o usuário quiser deployar um site ou LP criada nas fases anteriores
- Quando precisar criar um `CLAUDE.md` para um projeto de desenvolvimento
- Quando o usuário disser "handoff pro dev", "implementar", "como deployar", "brief técnico"

## O que faz

Gera um pacote técnico completo: stack recomendado, estrutura de pastas, componentes necessários, dependências, variáveis de ambiente, scripts de build/deploy e um `CLAUDE.md` de contexto para o projeto de desenvolvimento. Tudo em formato executável.

## O que NÃO faz

- Não faz o desenvolvimento — prepara o brief para quem vai desenvolver
- Não faz auditoria do código desenvolvido — isso é `web-qa-technical-vetora`
- Não decide o copy ou design — esses já devem estar aprovados

## Contexto VETORA obrigatório

Antes de iniciar, consultar:
- `vetora-brand-os` — para o CLAUDE.md do projeto incluir o tom correto
- `vetora-design-system` — para os tokens de design do projeto
- `_memoria/clientes/<nome>/arquitetura-site.md` — blueprint aprovado

## Processo

### Passo 1 — Levantar o escopo técnico

Perguntar ao usuário:
1. "Qual é o tipo de projeto? (site institucional, landing page, e-commerce, SaaS, blog)"
2. "Tem preferência de stack? (Astro, Next.js, Nuxt, Hugo, HTML puro)"
3. "Onde vai ser deployado? (Vercel, Netlify, GitHub Pages, VPS)"
4. "Precisa de CMS? (Sanity, Contentful, Notion, arquivos markdown)"
5. "Tem domínio configurado? Qual?"

### Passo 2 — Recomendar stack

Com base no escopo, recomendar:

**Landing page / site simples:**
→ HTML + Tailwind + Alpine.js · Deploy: Netlify ou Vercel

**Site institucional com blog:**
→ Astro + Tailwind + Markdown · Deploy: Vercel

**Site com CMS:**
→ Astro + Sanity/Contentful + Tailwind · Deploy: Vercel

**E-commerce:**
→ Next.js + Shopify Storefront API · Deploy: Vercel

Justificar a recomendação e obter aprovação.

### Passo 3 — Criar estrutura de pastas

Para o stack aprovado, definir a estrutura de arquivos:

```
projeto/
├── CLAUDE.md              ← contexto do projeto para Claude Code
├── README.md
├── src/
│   ├── pages/             ← páginas do site
│   ├── components/        ← componentes reutilizáveis
│   ├── layouts/           ← layouts base
│   ├── assets/            ← imagens, fontes, ícones
│   └── styles/            ← CSS global, tokens
├── public/                ← assets estáticos (logo, favicon)
├── .env.example           ← variáveis necessárias
└── package.json
```

### Passo 4 — Definir tokens de design

Traduzir o `vetora-design-system` (ou o design do cliente) para variáveis CSS/Tailwind:

```css
:root {
  --color-primary: #0B1F3B;
  --color-accent: #00A6A6;
  --color-bg-light: #F5F7FA;
  --color-text: #1E252B;
  --font-display: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Passo 5 — Listar componentes necessários

Com base na arquitetura aprovada, listar componentes a criar:
- Header (logo + nav + CTA)
- Hero (headline + subheadline + CTA + imagem/visual)
- Seções de conteúdo (benefícios, método, cases, etc.)
- Footer (logo + links + contato)
- Formulário de contato (campos, validação, integração)

### Passo 6 — Definir integrações e variáveis de ambiente

Listar todas as integrações necessárias e criar `.env.example`:
```
SITE_URL=https://exemplo.com.br
# Formulário
RESEND_API_KEY=
CONTACT_EMAIL=
# Analytics
GA4_MEASUREMENT_ID=
# Meta (se necessário)
META_PAGE_ACCESS_TOKEN=
```

### Passo 7 — Criar CLAUDE.md do projeto

Criar `CLAUDE.md` para o projeto de desenvolvimento com:
- Contexto do negócio
- Stack e arquitetura
- Referências de design
- Regras de desenvolvimento específicas
- Scripts úteis

### Passo 8 — Criar checklist de deploy

Lista de verificação antes do go-live:
- [ ] Domínio apontando corretamente
- [ ] SSL ativo
- [ ] Variáveis de ambiente configuradas no Vercel/Netlify
- [ ] Google Analytics instalado
- [ ] Formulários testados
- [ ] Meta description + OG tags configuradas
- [ ] Favicon e logo corretos
- [ ] `robots.txt` e `sitemap.xml` gerados

## Critérios de aceite

- [ ] Stack justificado e aprovado
- [ ] Estrutura de pastas definida
- [ ] Tokens de design traduzidos para código
- [ ] Lista de componentes completa
- [ ] `.env.example` com todas as variáveis necessárias
- [ ] `CLAUDE.md` do projeto criado com contexto completo
- [ ] Checklist de deploy preenchido
- [ ] Handoff claro o suficiente para um dev implementar sem reunião adicional

## Output padrão

Pacote de arquivos: `CLAUDE.md` do projeto + estrutura de pastas + `tokens.css` + `.env.example` + checklist de deploy. Tudo salvo em `saidas/<nome-projeto>/handoff/`.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
