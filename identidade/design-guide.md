# Identidade visual

> Como a marca VETORA aparece em tudo que o VetoraOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.

---

## Cores

### Paleta principal

- **Azul Vetor `#0B1F3B`** · RGB 11, 31, 59 · HSL 217°, 69%, 14% · CMYK 92, 73, 28, 67 — fundo escuro, títulos fortes, cabeçalhos, autoridade. Comunica: estratégia, confiança, profundidade, tecnologia, maturidade.
- **Ciano Inteligente `#00A6A6`** · RGB 0, 166, 166 · HSL 180°, 100%, 33% · CMYK 83, 12, 41, 0 — detalhes, ícones, linhas, elementos de destaque, CTAs. Sempre como acento, nunca como base. Comunica: IA, precisão, modernidade, transformação.
- **Branco Gelo `#F5F7FA`** · RGB 245, 247, 250 · HSL 216°, 29%, 97% · CMYK 2, 1, 0, 2 — fundos claros, áreas de respiro, seções limpas. Preferível ao branco puro em interfaces. Comunica: clareza, organização, profissionalismo.
- **Grafite Técnico `#1E252B`** · RGB 30, 37, 43 · HSL 208°, 18%, 14% · CMYK 30, 14, 0, 83 — textos, blocos escuros, rodapé, contraste. Substituto sóbrio do preto puro. Comunica: robustez, técnica, sobriedade.
- **Verde Direção `#00A86B`** · RGB 0, 168, 107 · HSL 158°, 100%, 33% · CMYK 100, 0, 36, 34 — uso moderado (máx. 10% da peça). Indicadores, destaques, dados positivos. Comunica: crescimento, performance.

### Paleta secundária

- **Cinza Neutro `#D9DEE3`** · RGB 217, 222, 227 · HSL 210°, 14%, 87% — divisórias, cards, linhas, fundos técnicos
- **Azul Profundo `#061426`** · RGB 6, 20, 38 · HSL 214°, 73%, 9% — exclusivo para versões premium, eventos executivos, rodapés sofisticados
- **Prata Digital `#B8C2CC`** · RGB 184, 194, 204 · HSL 210°, 14%, 76% — elementos finos, linhas técnicas, mockups, texto auxiliar em fundos escuros

### Combinações canônicas

- **Padrão:** `#0B1F3B` + `#00A6A6` + `#FFFFFF` — institucional, CTAs, peças de autoridade
- **Clara:** `#F5F7FA` + `#0B1F3B` + `#00A6A6` — seções de conteúdo, método, card sections
- **Premium:** `#061426` + `#00A6A6` + `#B8C2CC` — versões premium, eventos executivos

### Contraste WCAG 2.1

| Combinação | Razão | Nível |
|---|---|---|
| Azul Vetor sobre Branco Gelo | 14,8 : 1 | AAA |
| Grafite Técnico sobre Branco | 14,4 : 1 | AAA |
| Branco sobre Azul Vetor | 14,8 : 1 | AAA |
| Prata Digital sobre Azul Vetor | 7,6 : 1 | AAA |
| Ciano Inteligente sobre Azul Vetor | 4,8 : 1 | AA |
| Ciano Inteligente sobre Branco | 3,1 : 1 | AA Large (≥24px) |
| Verde Direção sobre Branco | 3,0 : 1 | AA Large (≥24px apenas) |

Verificar contraste WCAG AA antes de publicar qualquer peça.

### Restrições de cor

- Nunca mais de **3 cores** da paleta em uma mesma peça
- Ciano Inteligente **nunca** como cor de fundo em grandes áreas
- Verde Direção: máximo **10%** da peça visual
- Azul Profundo: reservado para versões premium — não usar no material padrão
- Background alternado entre Azul Vetor (escuro) e Branco Gelo (claro) — **nunca dois fundos escuros consecutivos**
- Títulos em Azul Vetor sobre fundo claro têm prioridade sobre Grafite Técnico

---

## Tipografia

- **Títulos e destaques:** Sora — Bold (700) ou SemiBold (600). Pesos disponíveis: 100–800. Alternativas: Space Grotesk, Manrope.
- **Corpo, subtítulos e botões:** Inter — Regular (400). Máximo Medium (500) para ênfases pontuais. Pesos disponíveis: 100–900. Alternativas: Lato, Open Sans.
- **Código e meta-informação:** JetBrains Mono — Regular (400) ou Medium (500). Usar em tokens, labels técnicos, valores de cor e metadados.
- **Combinação recomendada:** Sora + Inter (Sora dá personalidade e tecnologia; Inter dá clareza e usabilidade)
- **Tracking em títulos:** levemente **reduzido** (−0.01em a −0.03em) para elegância — nunca aumentado
- **Line-height:** 1.05–1.2 em títulos · 1.5–1.7 em corpo

### Escala tipográfica

| Token | Especificação | Uso |
|---|---|---|
| `display` | Sora 700 · 64px · lh 1.05 · tracking −0.03em | Hero principal |
| `h1` | Sora 700 · 48px · lh 1.1 · tracking −0.02em | Título de página |
| `h2` | Sora 600 · 36px · lh 1.15 · tracking −0.01em | Título de seção |
| `h3` | Sora 600 · 24px · lh 1.2 | Subtítulo de seção |
| `h4` | Sora 600 · 18px · lh 1.3 | Título de card |
| `eyebrow` | Sora 600 · 12px · tracking 0.18em · UPPERCASE | Pré-título em Ciano |
| `lead` | Inter 400 · 18px · lh 1.6 | Abertura de seção |
| `body` | Inter 400 · 16px · lh 1.6 | Corpo de texto padrão |
| `small` | Inter 400 · 14px · lh 1.5 | Captions e legendas |
| `caption` | Inter 500 · 12px · lh 1.4 · tracking 0.05em | Metadados e rótulos |

### Restrições tipográficas

- Nunca mais de **2 pesos** tipográficos na mesma peça
- Nunca misturar mais de **2 famílias** tipográficas em um material
- Títulos: sempre Sora Bold ou Sora SemiBold
- Corpo: sempre Inter Regular (máx. Inter Medium para ênfases)
- **Nunca usar fontes serifadas** na identidade VETORA
- Sora nunca em corpo de texto longo — comprometeria legibilidade
- Inter nunca em títulos hero — não carrega personalidade suficiente
- Nunca sombra, contorno, gradiente ou itálico decorativo em títulos

---

## Estilo geral

Consultoria digital premium com base técnica e inteligência aplicada.

**Elementos visuais recomendados:**
- Linhas vetoriais · Grids sutis · Cards limpos · Setas minimalistas
- Pontos conectados · Diagonais discretas · Mapas de direção
- Interfaces clean · Mockups de sites · Telas de dashboard
- Blocos com contraste escuro/claro · Ícones lineares
- Movimento visual com deslocamento e progressão

**Restrições visuais:**
- Ícones sempre lineares — nunca preenchidos com gradiente
- Fotografia: tons frios, contraste moderado, iluminação limpa, composição minimalista, uso pontual de ciano ou azul
- Nunca filtro quente ou tom amarelado em fotos
- Nunca excesso de ilustrações ou templates genéricos de agência
- Sem emojis em materiais institucionais e apresentações

---

## Elementos-chave

- Bordas: minimalistas, técnicas
- Border-radius dos cards: sutil (não arredondado demais)
- Botões: cor de destaque Ciano `#00A6A6` ou Azul Vetor `#0B1F3B`
- Sombras: discretas ou ausentes — preferir contraste a sombra
- Ícones: sempre lineares

---

## O que NUNCA fazer

- Usar mais de 3 cores numa peça
- Ciano como fundo de grande área
- Dois fundos escuros consecutivos
- Fontes serifadas
- Mais de 2 famílias tipográficas
- Emojis em materiais institucionais
- Gradientes, efeitos 3D ou elementos decorativos na logo
- Imagens genéricas de "sucesso" ou fotos com fundo quente
- Clichês visuais: foguete, cérebro de IA, robô, raio

---

## Logo

**Conceito:** "V" geométrico com seta/vetor de direção em Ciano apontando para cima e à direita.

Todas as variações existem em dois arquivos: com fundo (para visualização) e sem fundo `-semfundo.png` (para uso real em peças).

**Catálogo completo — `identidade/logo-vetora/`:**

| # | Variação | Arquivo sem fundo | Uso |
|---|---|---|---|
| 1 | Horizontal colorida — fundo claro | `1-Logo horizontal colorida — fundo claro-semfundo.png` | Versão padrão — header, propostas, slides |
| 2 | Horizontal negativa — fundo escuro | `2-Logo horizontal negativa — fundo escuro-semfundo.png` | Peças escuras, carrossel, site header dark |
| 3 | Horizontal monocromática azul | `3-Logo horizontal monocromática azul-semfundo.png` | Impressão, documentos monocromáticos |
| 4 | Horizontal monocromática branca | `4-Logo horizontal monocromática branca-semfundo.png` | Sobre fundos escuros sem ciano |
| 5 | Vertical colorida | `5-Logo vertical colorida-semfundo.png` | Quadrados, thumbnails, posts quadrados |
| 6 | Vertical negativa | `6-Logo vertical negativa-semfundo.png` | Vertical sobre fundos escuros |
| 7 | Símbolo isolado colorido | `7-Símbolo isolado colorido-semfundo.png` | Ícone de app, avatar, watermark |
| 8 | Símbolo isolado azul | `8-Símbolo isolado azul-semfundo.png` | Símbolo monocromático |
| 9 | Símbolo isolado branco | `9-Símbolo isolado branco-semfundo.png` | Símbolo sobre fundo escuro |
| 10 | Wordmark isolado azul | `10-Wordmark isolado azul-semfundo.png` | Só o texto "VETORA" |
| 11 | Logo com assinatura oficial | `11-Logo com assinatura oficial-semfundo.png` | Slide final carrossel (CTA), propostas |
| 12 | Favicon colorido | `12-Favicon simplificado colorido-semfundo.png` | Aba do navegador, app icon |
| 13 | Favicon monocromático claro | `13-Favicon simplificado monocromátic - fundo claro-semfundo.png` | Favicon em contexto claro |
| 14 | Favicon monocromático escuro | `14-Favicon simplificado monocromátic - fundo escuro-semfundo.png` | Favicon em contexto escuro |

**Regras de uso:**
- Sempre usar a versão `-semfundo.png` em peças digitais (HTMLs, carrosséis, posts)
- Versão padrão: `1` (horizontal colorida) — sobre fundos claros
- Versão fundo escuro: `2` (horizontal negativa)
- Tamanho sugerido: largura 120–200px em HTMLs
- Área de proteção: espaço equivalente à altura da letra V em todos os lados
- **Proibido:** redimensionar quebrando proporção · adicionar efeitos, sombras, gradientes ou contornos externos

---

## Fotos do fundador

`identidade/fotos-fernando/` — 5 fotos geradas via GPT Image 2.0 com referência de fotos reais (2026-06-28). Alta aderência facial, estilo fotográfico realista.

| Arquivo | Tipo | Uso principal |
|---|---|---|
| `1-Fernando.png` | Perfil institucional — fundo grafite escuro, camisa navy | Site (seção Fundador), LinkedIn, proposta |
| `2-Fernando.png` | Apresentando — blazer navy, sala com monitor ao fundo | LinkedIn, artigos, conteúdo de autoridade |
| `3-Fernando.png` | Em análise — laptop aberto, home office, luz de janela | Posts de bastidores, carrosséis de processo |
| `4-Fernando.png` | Contexto industrial — CNC ao fundo, braços cruzados | Conteúdo engenharia + branding, diferencial |
| `5-Fernando.png` | Casual-premium — cafeteria, camisa linho, sorriso natural | LinkedIn pessoal, humanização, stories |

**Regras de uso:**
- `1-Fernando.png` é a foto canônica para contextos institucionais e o site
- Sempre usar em tons frios — não adicionar filtros quentes
- Arquivos `.jpeg` na mesma pasta são as fotos reais de referência — não usar diretamente em peças
- Foto do site em `site/vetora-site/public/foto-fundador.png` (cópia da `1-Fernando.png`)

---

## Observações adicionais

Referências de estilo: McKinsey, Palantir, Linear — strategic precision, not startup energy.
A marca deve soar mais madura, mais precisa e mais consultiva do que uma agência genérica de social media.
