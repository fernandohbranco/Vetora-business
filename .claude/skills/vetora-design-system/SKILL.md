---
name: vetora-design-system
description: |
  Sistema de design visual da VETORA — paleta de cores, tipografia, logo, componentes e
  restrições visuais. Fornece o contexto de identidade visual completo para qualquer skill
  de criação de conteúdo visual (carrosséis, landing pages, apresentações).
  Consulte esta skill antes de criar qualquer peça visual para garantir coerência com a
  identidade VETORA. Fonte de verdade: identidade/design-guide.md.
  Ativar com "/vetora-design-system".
---

# /vetora-design-system — Sistema de Design VETORA

A referência visual canônica da VETORA. Consultada por todas as skills que produzem conteúdo visual.

## Quando ativar

- Quando qualquer skill visual precisar do padrão de design antes de criar
- Quando o usuário perguntar "quais são as cores da VETORA?", "que fonte usa?", "qual logo usar?"
- Quando precisar verificar se um visual está alinhado à identidade
- Quando uma skill nova precisar conhecer as restrições visuais antes de produzir

## O que faz

Carrega e expõe o sistema visual completo da VETORA: paleta de cores (com códigos HEX e usos), tipografia (famílias, pesos, escala), regras de logo, componentes e restrições visuais. Serve como contexto de design para qualquer skill criativa.

## O que NÃO faz

- Não cria nenhum visual — fornece o contexto para outras skills criarem
- Não substitui o `ui-ux-pro-max` quando o projeto precisar de um design system completo gerado do zero
- Não define estratégia de conteúdo — apenas garante consistência visual

## Contexto VETORA obrigatório

Fonte primária de dados: `identidade/design-guide.md` (sempre ler a versão mais recente)

---

## Paleta de Cores

### Paleta Principal

| Token | Hex | Uso |
|---|---|---|
| Azul Vetor | `#0B1F3B` | Fundo escuro, títulos, cabeçalhos, autoridade |
| Ciano Inteligente | `#00A6A6` | Detalhes, ícones, CTAs — sempre como acento, nunca como fundo |
| Branco Gelo | `#F5F7FA` | Fundos claros, áreas de respiro — preferir ao branco puro |
| Grafite Técnico | `#1E252B` | Textos, blocos escuros, contraste |
| Verde Direção | `#00A86B` | Indicadores, dados positivos — máx. 10% da peça |

### Paleta Secundária

| Token | Hex | Uso |
|---|---|---|
| Cinza Neutro | `#D9DEE3` | Divisórias, cards, linhas |
| Azul Profundo | `#061426` | Versões premium, rodapés sofisticados |
| Prata Digital | `#B8C2CC` | Linhas técnicas, texto auxiliar em fundos escuros |

### Combinações Canônicas

- **Padrão:** `#0B1F3B` + `#00A6A6` + `#F5F7FA` — institucional, autoridade
- **Clara:** `#F5F7FA` + `#0B1F3B` + `#00A6A6` — seções de conteúdo, método
- **Premium:** `#061426` + `#00A6A6` + `#B8C2CC` — versões premium, eventos executivos

### Regras de Cor

- Nunca mais de **3 cores** em uma mesma peça
- Ciano nunca como fundo de grande área
- Verde Direção: máx. **10%** da peça
- Azul Profundo: reservado para versões premium
- Nunca dois fundos escuros consecutivos

---

## Tipografia

### Famílias

| Família | Uso | Pesos |
|---|---|---|
| **Sora** | Títulos, destaques, hero | Bold (700), SemiBold (600) |
| **Inter** | Corpo, subtítulos, botões, UI | Regular (400), máx. Medium (500) |
| **JetBrains Mono** | Código, tokens, labels técnicos | Regular (400), Medium (500) |

**Combinação canônica:** Sora + Inter

### Escala Tipográfica

| Token | Especificação | Uso |
|---|---|---|
| `display` | Sora 700 · 64px · lh 1.05 · tracking −0.03em | Hero principal |
| `h1` | Sora 700 · 48px · lh 1.1 · tracking −0.02em | Título de página |
| `h2` | Sora 600 · 36px · lh 1.15 · tracking −0.01em | Título de seção |
| `h3` | Sora 600 · 24px · lh 1.2 | Subtítulo |
| `h4` | Sora 600 · 18px · lh 1.3 | Título de card |
| `eyebrow` | Sora 600 · 12px · tracking 0.18em · UPPERCASE | Pré-título em Ciano |
| `lead` | Inter 400 · 18px · lh 1.6 | Abertura de seção |
| `body` | Inter 400 · 16px · lh 1.6 | Corpo padrão |
| `small` | Inter 400 · 14px · lh 1.5 | Captions |
| `caption` | Inter 500 · 12px · lh 1.4 · tracking 0.05em | Metadados, rótulos |

### Regras Tipográficas

- Nunca mais de **2 pesos** por peça
- Nunca mais de **2 famílias** por material
- Títulos: sempre Sora Bold ou SemiBold
- Corpo: sempre Inter Regular (máx. Medium)
- Nunca fontes serifadas
- Nunca sombra, contorno, gradiente ou itálico decorativo em títulos

---

## Logo

**Conceito:** "V" geométrico com seta/vetor de direção em Ciano apontando para cima e à direita.

### Versões Principais

| Uso | Arquivo |
|---|---|
| Versão padrão (fundo claro) | `identidade/logo-vetora/1-Logo horizontal colorida — fundo claro-semfundo.png` |
| Fundo escuro | `identidade/logo-vetora/2-Logo horizontal negativa — fundo escuro-semfundo.png` |
| Slide final / propostas (com assinatura) | `identidade/logo-vetora/11-Logo com assinatura oficial-semfundo.png` |
| Símbolo isolado | `identidade/logo-vetora/7-Símbolo isolado colorido-semfundo.png` |
| Favicon | `identidade/logo-vetora/12-Favicon simplificado colorido-semfundo.png` |

**Regras de logo:**
- Sempre usar versão `-semfundo.png` em peças digitais
- Tamanho mínimo: 120px de largura
- Área de proteção: espaço = altura da letra V em todos os lados
- Proibido: quebrar proporção, adicionar efeitos, sombras ou gradientes externos

---

## Estilo Geral

**Referências:** McKinsey, Palantir, Linear — strategic precision, not startup energy.

**Elementos recomendados:**
- Linhas vetoriais · Grids sutis · Cards limpos · Setas minimalistas
- Pontos conectados · Interfaces clean · Mockups de sites · Ícones lineares
- Blocos com contraste escuro/claro

**Restrições:**
- Ícones: sempre lineares — nunca preenchidos com gradiente
- Fotografia: tons frios, contraste moderado, nunca filtro quente ou amarelado
- Sem emojis em materiais institucionais
- Sem clichês: foguete, cérebro de IA, robô, raio

---

## Processo (quando ativado explicitamente)

1. **Verificar design-guide** — Ler `identidade/design-guide.md` para versão mais recente dos tokens
2. **Expor contexto visual** — Apresentar paleta, tipografia e regras relevantes para o pedido
3. **Validar visual existente** — Se trouxer um HTML ou imagem, checar contra as regras e apontar o que ajustar

## Critérios de aceite

- [ ] Paleta respeitada (máx. 3 cores por peça)
- [ ] Tipografia correta (Sora para títulos, Inter para corpo)
- [ ] Logo na versão correta para o contexto
- [ ] Nenhuma restrição visual violada
- [ ] Visual soa premium e consultivo — não de agência genérica

## Output padrão

Bloco de contexto visual (para uso interno de outras skills) ou relatório de revisão visual (quando ativado explicitamente) com marcações do que ajustar e por quê.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial, criada durante migração para VetoraOS v2
