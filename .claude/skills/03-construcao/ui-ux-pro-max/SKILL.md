---
name: ui-ux-pro-max
description: >
  Design intelligence layer para web e mobile — gera design systems completos, recomenda estilos,
  paletas de cores, tipografia e diretrizes UX com base no produto e na identidade da marca.
  Contém 50+ estilos, 161 paletas de cores, 57 font pairings, 99 diretrizes UX e guias por stack.
  Chamada no INÍCIO de workflows visuais (antes de criar); /ux é chamada no FIM (para revisar).
  Use quando o usuário disser "gerar design system", "recomendar estilo", "que cores usar",
  "que fonte combina", "criar sistema visual", "/ui-ux-pro-max", ou quando /carrossel e
  /pagina-de-vendas precisarem de recomendação de design antes de criar.
---

# /ui-ux-pro-max — Design Intelligence

Consultor de design estratégico do VetoraOS. Gera design systems completos baseados no tipo de produto, público e identidade da marca. É chamado **antes** da criação visual — enquanto `/ux` avalia **depois**.

**Papel na cadeia:**
- `/ui-ux-pro-max` → gera design system → salvo em `identidade/design-system/MASTER.md`
- `/carrossel`, `/pagina-de-vendas` → leem MASTER.md → criam conteúdo → `/ux` revisa qualidade

---

## Contexto — sempre ler antes de agir

```
1. identidade/design-guide.md             → identidade visual atual (paleta, tipografia, logo, restrições)
2. _memoria/empresa.md                    → negócio, produto, público, mercado
3. _memoria/preferencias.md              → tom, estilo, o que evitar
4. identidade/design-system/MASTER.md    → design system persistido (se existir — NÃO sobrescrever sem pedir)
```

Se `design-guide.md` existir mas estiver vago → usar como base e complementar com recomendações.
Se `design-guide.md` não existir → perguntar: paleta atual (HEX), tipografia, tom visual em 3 adjetivos.

---

## Modos de operação

| Modo | Trigger | O que faz |
|------|---------|-----------|
| `recomendar` | "que estilo usar", "recomende um design system" | Analisa produto/marca → retorna sistema completo |
| `persistir` | "salvar o design system", `--persist` | Salva em `identidade/design-system/MASTER.md` |
| `página` | "design system para a landing page", `--page <nome>` | Gera override em `identidade/design-system/pages/<nome>.md` |
| `revisar` | "esse design segue o sistema?" | Verifica alinhamento do output com o design system definido |
| `buscar` | "paletas para fintech", "fontes elegantes", "estilo minimalismo" | Retorna recomendações específicas da base de referência |

Se não especificado, inferir pelo contexto. Em caso de dúvida, perguntar.

---

## Como gerar um design system (modo recomendar)

Ao ser invocado para recomendar, seguir este raciocínio:

### 1. Analisar produto e público
- Tipo de produto: ferramenta, entretenimento, produtividade, serviço, e-commerce, SaaS, portfólio...
- Público: faixa etária, contexto de uso (trabalho, lazer, mobilidade), nível de sofisticação
- Tom: palavras-chave que descrevem a vibe (ex: premium + técnico, quente + humano, clean + editorial)

### 2. Selecionar padrão visual (ver Referência de Estilos abaixo)
Cruzar tipo de produto × tom × público para selecionar o estilo base. Justificar a escolha.

### 3. Selecionar paleta de cores (ver Referência de Paletas abaixo)
- Máx 5 cores no sistema (1 primária + 1-2 secundárias + neutros + superfícies)
- Verificar contraste 4.5:1 para texto normal (WCAG AA)
- Para dark mode: definir variantes separadas

### 4. Selecionar tipografia (ver Referência de Tipografia abaixo)
- Dupla: fonte de display/heading + fonte de corpo
- Escala: definir tamanhos para display, h1, h2, h3, body, small, eyebrow
- Regra crítica: títulos grandes com kerning apertado (-0.03 a -0.04em), eyebrows com kerning aberto (0.15 a 0.25em)

### 5. Definir efeitos e componentes
- Sombras, blur, border-radius, gradientes alinhados ao estilo escolhido
- Estados de interação (hover, pressed, disabled, focus)
- Ícones: definir família e estilo (stroke/filled, peso)

### Output do design system (formato padrão):

```
DESIGN SYSTEM — [Nome do projeto/produto]

PADRÃO VISUAL
  Estilo base: [nome do estilo] — [razão da escolha em 1 linha]
  Anti-padrões a evitar: [2-3 itens]

PALETA DE CORES
  Primária:   #XXXXXX — [uso: CTAs, destaques, links]
  Secundária: #XXXXXX — [uso: eyebrows, ícones, bordas de destaque]
  Neutra:     #XXXXXX — [uso: texto principal]
  Superfície: #XXXXXX — [uso: fundos de cards, seções alternadas]
  Fundo:      #XXXXXX — [uso: fundo principal da página]
  Erro:       #XXXXXX — [uso: validações, alertas]
  [Dark mode: variantes se necessário]

TIPOGRAFIA
  Display:  [Família] [peso] [tamanho range] letter-spacing: [valor]
  Heading:  [Família] [peso] [tamanho range] letter-spacing: [valor]
  Body:     [Família] [peso] 16-18px line-height: 1.6
  Small:    [Família] [peso] 13-14px
  Eyebrow:  [Família] [peso] 11-13px UPPERCASE letter-spacing: 0.18-0.25em

EFEITOS
  Sombras: [nível 1 / nível 2 / nível 3]
  Radius: [cards: Xpx / botões: Xpx / inputs: Xpx]
  Blur: [backdrop-filter se glassmorphism]

STACK (se especificado)
  [Recomendações específicas de implementação]

ANTI-PADRÕES — nunca usar neste projeto
  [Lista de 3-5 erros comuns a evitar]
```

---

## Persistir design system

Quando o usuário aprovar o design system e pedir para salvar (ou usar `--persist`):

**Design system global:**
Salvar em `identidade/design-system/MASTER.md` com o output completo + data de criação no topo.

**Override por página** (quando `--page <nome>`):
Salvar em `identidade/design-system/pages/<nome>.md` contendo **apenas** as diferenças do MASTER.

**Regra de hierarquia (para quem usa o design system):**
1. Verificar se existe `identidade/design-system/pages/<nome-da-página>.md`
2. Se sim: aplicar suas regras sobrescrevendo o MASTER
3. Se não: usar `identidade/design-system/MASTER.md` exclusivamente

---

## Referência: Categorias de Regras por Prioridade

| Prioridade | Categoria | Impacto | Verificações obrigatórias | Anti-padrões |
|------------|-----------|---------|---------------------------|--------------|
| 1 | Acessibilidade | CRÍTICO | Contraste 4.5:1, Alt text, Nav teclado, Aria-labels | Remover focus rings, botões ícone sem label |
| 2 | Touch & Interação | CRÍTICO | Mín 44×44px, espaço 8px+, feedback de loading | Depender só de hover, mudanças de estado instantâneas |
| 3 | Performance | ALTO | WebP/AVIF, lazy loading, reservar espaço (CLS <0.1) | Layout thrashing, Cumulative Layout Shift |
| 4 | Seleção de Estilo | ALTO | Combinar com tipo de produto, consistência, ícones SVG | Misturar flat e skeuomórfico, emojis como ícones |
| 5 | Layout & Responsivo | ALTO | Mobile-first, viewport meta, sem scroll horizontal | Scroll horizontal, larguras fixas em px, desabilitar zoom |
| 6 | Tipografia & Cores | MÉDIO | Base 16px, line-height 1.5, tokens semânticos de cor | Texto <12px, cinza sobre cinza, hex cru em componentes |
| 7 | Animação | MÉDIO | Duração 150-300ms, movimento com significado, continuidade | Animação só decorativa, animar width/height, ignorar reduced-motion |
| 8 | Formulários & Feedback | MÉDIO | Labels visíveis, erro perto do campo, helper text | Label só via placeholder, erros só no topo, sobrecarregar upfront |
| 9 | Padrões de Navegação | ALTO | Back previsível, bottom nav ≤5, deep linking | Nav sobrecarregado, back quebrado, sem deep links |
| 10 | Gráficos & Dados | BAIXO | Legendas, tooltips, cores acessíveis | Depender só de cor para transmitir significado |

---

## Referência: Diretrizes UX (Quick Reference)

### 1. Acessibilidade (CRÍTICO)
- `contraste-cor` — Mínimo 4.5:1 para texto normal; 3:1 para texto grande
- `estados-focus` — Rings de foco visíveis em elementos interativos (2-4px)
- `alt-text` — Alt descritivo para imagens com significado
- `aria-labels` — aria-label para botões somente-ícone
- `nav-teclado` — Ordem de tab coincide com ordem visual
- `labels-form` — Usar label com atributo for
- `hierarquia-heading` — h1→h6 sequencial, sem pular nível
- `cor-nao-unica` — Não comunicar informação só por cor (adicionar ícone/texto)
- `reduced-motion` — Respeitar prefers-reduced-motion
- `rotas-saida` — Fornecer cancelar/voltar em modais e fluxos multi-step

### 2. Touch & Interação (CRÍTICO)
- `tamanho-touch` — Mín 44×44pt (Apple) / 48×48dp (Material)
- `espaço-touch` — Mínimo 8px entre alvos touch
- `hover-vs-tap` — Usar click/tap para interações primárias
- `loading-botões` — Desabilitar botão durante ops async + mostrar spinner
- `feedback-erro` — Mensagens claras perto do problema
- `cursor-pointer` — Adicionar cursor-pointer a elementos clicáveis (Web)
- `feedback-press` — Feedback visual no press (ripple/highlight)
- `sem-precisão-pixel` — Evitar exigir taps pixel-perfeitos

### 3. Performance (ALTO)
- `otimizar-imagem` — WebP/AVIF, imagens responsivas (srcset/sizes), lazy load
- `dimensão-imagem` — Declarar width/height ou aspect-ratio para evitar layout shift
- `carregamento-font` — font-display: swap para evitar texto invisível
- `css-crítico` — Priorizar CSS above-the-fold
- `lazy-loading` — Componentes não-críticos via import dinâmico
- `bundle-splitting` — Dividir código por rota/feature
- `virtualizar-listas` — Virtualizar listas com 50+ itens
- `skeleton-loading` — Skeleton screens para operações >1s

### 4. Seleção de Estilo (ALTO)
- `estilo-produto` — Combinar estilo ao tipo de produto (ver estilos abaixo)
- `consistência` — Mesmo estilo em todas as páginas
- `sem-emoji-ícones` — Usar SVG (Heroicons, Lucide), nunca emojis
- `efeitos-alinhados` — Sombras, blur, radius alinhados ao estilo escolhido
- `elevação-consistente` — Escala de elevação/sombra consistente: cards, sheets, modais
- `dark-mode-par` — Projetar variantes light/dark juntas
- `ação-primária` — Uma CTA primária por tela; ações secundárias visualmente subordinadas

### 5. Layout & Responsivo (ALTO)
- `viewport-meta` — width=device-width initial-scale=1 (nunca desabilitar zoom)
- `mobile-first` — Projetar mobile-first, escalar para tablet/desktop
- `breakpoints-consistentes` — Sistema de breakpoints (375 / 768 / 1024 / 1440)
- `tamanho-legível` — Mínimo 16px body em mobile
- `comprimento-linha` — Mobile 35-60 chars por linha; desktop 60-75
- `sem-scroll-horizontal` — Nenhum scroll horizontal em mobile
- `escala-espaçamento` — Sistema 4pt/8dp incremental
- `largura-container` — max-width consistente (max-w-6xl / 7xl em desktop)
- `z-index-gerenciado` — Escala de z-index definida (0/10/20/40/100/1000)
- `hierarquia-visual` — Hierarquia via tamanho, espaçamento, contraste — não só cor

### 6. Tipografia & Cores (MÉDIO)
- `line-height` — 1.5-1.75 para texto corpo
- `comprimento-linha` — Limite 65-75 chars por linha
- `par-fontes` — Combinar personalidades de heading/body (ver Referência Tipografia)
- `escala-tipo` — Escala consistente (ex: 12 14 16 18 24 32)
- `cor-semântica` — Tokens semânticos (primária, erro, superfície, sobre-superfície)
- `cor-dark-mode` — Dark mode usa variantes dessaturadas/mais claras, não invertidas
- `truncamento` — Preferir quebra de linha a truncamento
- `whitespace-intencional` — Usar espaço em branco para agrupar relacionados, separar seções

### 7. Animação (MÉDIO)
- `duração-timing` — 150-300ms para micro-interações; transições complexas ≤400ms
- `transform-performance` — Usar só transform/opacity; evitar animar width/height/top/left
- `estados-loading` — Skeleton ou indicador quando loading >300ms
- `easing` — ease-out para entrar, ease-in para sair; nunca linear em UI
- `movimento-significativo` — Toda animação deve expressar causa-efeito, não ser decorativa
- `continuidade` — Transições de tela devem manter continuidade espacial
- `animações-interrompíveis` — Animações devem ser interrompíveis pelo usuário
- `sem-bloquear-input` — Nunca bloquear input durante animação

### 8. Formulários & Feedback (MÉDIO)
- `labels-input` — Label visível por input (não só placeholder)
- `posição-erro` — Erro abaixo do campo relacionado
- `feedback-submit` — Estado loading depois sucesso/erro no submit
- `indicadores-obrigatório` — Marcar campos obrigatórios (asterisco)
- `estados-vazios` — Mensagem e ação úteis quando sem conteúdo
- `toast-dismiss` — Auto-dismiss toasts em 3-5s
- `confirmação-destrutivo` — Confirmar antes de ações destrutivas
- `validação-inline` — Validar no blur (não ao digitar)
- `tipo-input-teclado` — Usar input types semânticos (email, tel, number)

### 9. Padrões de Navegação (ALTO)
- `limite-bottom-nav` — Bottom nav máx 5 itens com labels
- `comportamento-back` — Navegação back previsível e consistente
- `deep-linking` — Telas principais acessíveis via deep link
- `escape-modal` — Modais com affordance de fechar; swipe-down em mobile
- `preservação-estado` — Voltar deve restaurar scroll, filtros e input anteriores
- `nav-consistente` — Posição de navegação igual em todas as páginas
- `ações-destrutivas-separadas` — Ações perigosas visualmente separadas do nav normal

### 10. Gráficos & Dados (BAIXO)
- `tipo-gráfico` — Combinar tipo ao dado (tendência → linha, comparação → barra, proporção → pizza)
- `legenda-visível` — Sempre mostrar legenda; posicionar perto do gráfico
- `tooltip-interação` — Tooltips/labels em hover (Web) ou tap (mobile) com valores exatos
- `labels-eixo` — Eixos com unidades e escala legível
- `estado-vazio-dado` — Estado vazio significativo quando sem dados
- `sem-overuse-pizza` — Evitar pizza/donut para >5 categorias; usar barra

---

## Referência: Estilos Visuais

Ao recomendar estilo, cruzar tipo de produto × tom × público:

| Estilo | Melhor para | Tom | Evitar quando |
|--------|-------------|-----|---------------|
| **Minimalismo** | SaaS, ferramentas, portfólio, fintech | Clean, técnico, foco no conteúdo | Produto aspiracional, público jovem que busca vibração |
| **Editorial/Dark-Luxury** | Moda, beauty, serviços premium, agências | Sofisticado, contido, premium | Produto para crianças, público casual/informal |
| **Glassmorphism** | Apps crypto, tech, dashboards futuristas | Tech-forward, translúcido, moderno | Documentos sérios, acessibilidade como prioridade |
| **Claymorphism** | Apps de consumidor, saúde, educação | Quente, acessível, amigável | Produtos B2B sérios, financeiro conservador |
| **Bento Grid** | Portfólios, apresentações, dashboards | Organizado, visual, contemporâneo | Conteúdo linear longo, leitura sequencial |
| **Neumorphism** | Apps de utilidade, smart home | Suave, tátil, físico-digital | Telas pequenas, usuários com baixa visão |
| **Brutalism** | Agências criativas, portfolios ousados | Intencionalmente cru, anti-design | Produtos conservadores, público corporativo tradicional |
| **Dark Mode nativo** | Dev tools, apps de produtividade, streaming | Foco, imersão, olho confortável | Sites institucionais, e-commerce de moda claro |
| **Flat Design** | Apps corporativos, governamental, saúde | Funcional, neutro, universal | Produto que precisa de personalidade forte |
| **Skeuomorfismo** | Apps de instrumento, jogos, apps especializados | Familiar, tátil, analógico | Interfaces modernas, clean |

**Regras de combinação:**
- Nunca misturar flat e skeuomórfico no mesmo nível de hierarquia
- Glassmorphism exige fundo com gradiente/imagem — não funciona sobre branco sólido
- Brutalism exige tipo de letra grotesca pesada — não combina com fontes orgânicas
- Dark luxury funciona melhor com paleta de no máximo 3 cores

---

## Referência: Paletas de Cores por Segmento

### SaaS / Tech / Produtividade
- **Azul profissional:** Primária `#0062FF`, Secundária `#00D4FF`, Neutros slate, Fundo `#F8FAFC`
- **Índigo premium:** Primária `#4F46E5`, Secundária `#7C3AED`, Neutros zinc, Fundo `#FAFAFA`
- **Verde tech:** Primária `#059669`, Secundária `#0EA5E9`, Neutros gray, Fundo `#F9FAFB`

### Fintech / Financeiro
- **Azul confiança:** Primária `#1B4FD8`, Secundária `#0F9D91`, Neutros slate, Fundo `#EEF2FF`
- **Escuro premium:** Primária `#0B1F3B`, Secundária `#00A6A6`, Neutros gray, Fundo `#F5F7FA`
- **Verde segurança:** Primária `#166534`, Secundária `#1D4ED8`, Neutros neutral, Fundo `#F0FDF4`

### E-commerce / Moda / Lifestyle
- **Neutros premium:** Primária `#1A1A1A`, Secundária `#C9A96E` (dourado), Neutros zinc, Fundo `#FAFAF7`
- **Coral vibrante:** Primária `#E84560`, Secundária `#FF8C61`, Neutros warm gray, Fundo `#FFF5F5`
- **Terracota earthy:** Primária `#C44B37`, Secundária `#E8A87C`, Neutros warm, Fundo `#FDF6F0`

### Saúde / Bem-estar
- **Verde calmo:** Primária `#15803D`, Secundária `#0EA5E9`, Neutros gray, Fundo `#F0FDF4`
- **Azul sereno:** Primária `#1E40AF`, Secundária `#7C3AED`, Neutros slate, Fundo `#EFF6FF`
- **Lavanda suave:** Primária `#7C3AED`, Secundária `#EC4899`, Neutros purple-gray, Fundo `#FAF5FF`

### Agência / Criativo / Portfolio
- **Preto editorial:** Primária `#000000`, Secundária `#FF3B3B`, Neutros zinc, Fundo `#FAFAFA`
- **Dark luxury:** Primária `#0E1116`, Secundária `#C9A96E`, Texto `#FAFAF7`, Fundo `#0E1116`
- **Neon escuro:** Primária `#10002B`, Secundária `#7B2FBE`, Acento `#E0AAFF`, Fundo `#10002B`

### Educação / Comunidade
- **Azul aprendizado:** Primária `#1E40AF`, Secundária `#D97706`, Neutros gray, Fundo `#EFF6FF`
- **Laranja energia:** Primária `#EA580C`, Secundária `#3B82F6`, Neutros warm, Fundo `#FFF7ED`

**Regras universais de cor:**
- Máx 3 cores por seção/componente
- Uma cor de destaque dominante (não duas brigando)
- Sempre verificar contraste: text/background ≥ 4.5:1 (AA)
- Dark mode: desaturar e clarear variantes — nunca inverter simplesmente

---

## Referência: Pares Tipográficos

### Premium / Editorial
| Heading | Body | Quando usar |
|---------|------|-------------|
| Playfair Display (700) | Inter (400/500) | Moda, beauty, editorial, luxury |
| Fraunces (700-900) | DM Sans (400) | Organic premium, wellness, boutique |
| Cormorant Garamond (700) | Mulish (400) | Jurídico premium, livros, cultural |

### Técnico / SaaS / Fintech
| Heading | Body | Quando usar |
|---------|------|-------------|
| Sora (700) | Inter (400) | SaaS, fintech, produtos digitais sérios |
| Space Grotesk (700) | Inter (400) | Tech, crypto, dashboards |
| Geist (700) | Geist (400) | Dev tools, CLI, produtos de desenvolvedor |
| DM Sans (700) | DM Sans (400) | Apps de produtividade, utilitários |

### Moderno / Contemporâneo
| Heading | Body | Quando usar |
|---------|------|-------------|
| Outfit (800) | Outfit (400) | Startups, apps de consumidor, D2C |
| Plus Jakarta Sans (800) | Plus Jakarta Sans (400) | Agências, portfólios, apresentações |
| Bricolage Grotesque (800) | Inter (400) | Criativo, editorial moderno |

### Acolhedor / Humano
| Heading | Body | Quando usar |
|---------|------|-------------|
| Nunito (800) | Nunito (400) | Educação infantil, apps de bem-estar, saúde |
| Poppins (700) | Poppins (400) | E-commerce casual, social apps |
| Quicksand (700) | Quicksand (400) | Apps de estilo de vida leve |

### Escalas tipográficas recomendadas:
```
Display hero:  clamp(48px, 7vw, 80px)  / weight 800-900 / letter-spacing: -0.04em
H1 página:     clamp(36px, 5vw, 56px)  / weight 700-800 / letter-spacing: -0.03em
H2 seção:      clamp(26px, 4vw, 40px)  / weight 600-700 / letter-spacing: -0.02em
H3 subtítulo:  clamp(20px, 3vw, 28px)  / weight 600     / letter-spacing: -0.01em
Eyebrow:       12-14px                 / weight 600-700  / UPPERCASE / letter-spacing: 0.18-0.25em
Lead/body:     16-18px                 / weight 400      / line-height: 1.6
Body small:    13-14px                 / weight 400      / line-height: 1.5
```

---

## Checklist pré-entrega

Antes de confirmar qualquer design system ou output visual, verificar:

**Qualidade visual:**
- [ ] Nenhum emoji usado como ícone (SVG sempre)
- [ ] Todos ícones da mesma família e estilo
- [ ] Tokens semânticos de cor usados (não hex cru por componente)
- [ ] Pressed/hover states definidos e visualmente distintos

**Acessibilidade:**
- [ ] Contraste texto/fundo ≥4.5:1 em ambos light e dark
- [ ] Alvos touch ≥44pt iOS / ≥48dp Android
- [ ] Elementos interativos com aria-labels descritivos
- [ ] reduced-motion considerado nas animações

**Layout:**
- [ ] Mobile-first com breakpoints definidos (375/768/1024/1440)
- [ ] Conteúdo visível sem scroll horizontal em mobile
- [ ] Scroll preservado atrás de barras fixas (header, bottom nav)
- [ ] Ritmo de espaçamento 4/8dp mantido

---

## Integração com outras skills

**Chamada por:**
- `/carrossel` — no início, quando `identidade/design-system/MASTER.md` não existe
- `/pagina-de-vendas` — no início, para alinhar estilo antes do briefing de conteúdo

**Alimenta:**
- `/ux` — via `identidade/design-system/MASTER.md` (critério adicional de avaliação de consistência)

**Não substituir /ux:** esta skill define o sistema; `/ux` valida que o output final segue o sistema e os padrões de qualidade visual.

---

## Regras

- Sempre ler `identidade/design-guide.md` antes de qualquer recomendação — a identidade existente tem prioridade sobre defaults genéricos
- Nunca inventar contexto do negócio — ler `_memoria/empresa.md` ou perguntar antes de assumir
- Nunca sobrescrever `identidade/design-system/MASTER.md` sem confirmar com o usuário
- Ao persistir: mostrar o que vai ser salvo antes de salvar
- Se MASTER.md já existir: perguntar se quer atualizar, criar versão para nova campanha, ou gerar override de página
- Recomendações devem ser justificadas: explicar POR QUE o estilo/cor/fonte combina com o produto
- Nunca recomendar emojis como elementos visuais em qualquer contexto
- O critério final é: "um designer sênior olharia e diria que faz sentido para esse produto/público?"
