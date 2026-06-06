# Sprint logo-svg-04 — Logo vertical

**Fase:** Identidade SVG | **Esforço:** 0.5-1h | **Prioridade:** 4 de 6

---

## Contexto

A logo vertical (símbolo acima, wordmark abaixo, ambos centralizados) é usada em contextos quadrados — thumbnails, posts, perfis e situações onde não há espaço horizontal suficiente para a versão lockup. É a segunda versão mais usada da identidade.

Esta sprint é rápida: reutiliza toda a geometria das sprints anteriores e apenas ajusta o layout para empilhamento vertical.

---

## Objetivo

Ao final dessa sprint, existem 2 SVGs da logo vertical em `identidade/logo-vetora/svg/`:

1. `5-logo-vertical-colorida.svg` — símbolo colorido + wordmark azul, fundo transparente
2. `6-logo-vertical-negativa.svg` — símbolo e wordmark brancos, fundo `#0B1F3B`

---

## Pré-requisitos

- Sprint logo-svg-01 concluída (geometria do símbolo)
- Sprint logo-svg-03 concluída (configuração de fonte do wordmark já definida)
- Ler os PNGs de referência: `identidade/logo-vetora/5-*.png` e `6-*.png`

---

## Tarefas

### Análise do layout vertical
- [ ] Ler o PNG `5-Logo vertical colorida-semfundo.png` e medir proporções
- [ ] Confirmar: símbolo ocupa ~42% da altura total do lockup
- [ ] Confirmar: espaçamento vertical entre símbolo e wordmark (~15% da altura do símbolo)
- [ ] Confirmar: wordmark centralizado horizontalmente com o símbolo
- [ ] Definir o viewBox: aproximadamente `0 0 300 350` ou similar (proporção ~0.85:1, quase quadrado)

### Construção do layout empilhado
- [ ] Posicionar o símbolo (geometria da sprint 01) centralizado na parte superior do viewBox
- [ ] Posicionar o wordmark "VETORA" centralizado abaixo do símbolo com `text-anchor="middle"`
- [ ] Definir `font-family="Sora, Space Grotesk, sans-serif"`, `font-weight="700"`, `letter-spacing="-0.02em"`
- [ ] Ajustar a escala do símbolo e tamanho do texto até as proporções ficarem equivalentes ao PNG
- [ ] Certificar que o viewBox tem margem equilibrada em todos os 4 lados

### Criação dos 2 arquivos SVG
- [ ] **`5-logo-vertical-colorida.svg`**: símbolo com V `#0B1F3B` + seta `#00A6A6` · wordmark `#0B1F3B` · fundo transparente
- [ ] **`6-logo-vertical-negativa.svg`**: símbolo com V `#FFFFFF` + seta (verificar cor nos PNGs) · wordmark `#FFFFFF` · `<rect>` de fundo `#0B1F3B`

### Verificação
- [ ] Abrir os 2 SVGs no Chrome
- [ ] Comparar com os PNGs equivalentes — verificar que o empilhamento e proporções batem
- [ ] Testar a 300×300px e a 100×100px — verificar legibilidade do wordmark em formato menor
- [ ] Verificar que símbolo e wordmark estão no mesmo eixo X (centralizados)

---

## Arquivos envolvidos

**Leitura (referência):**
- `identidade/logo-vetora/5-Logo vertical colorida-semfundo.png`
- `identidade/logo-vetora/6-Logo vertical negativa-semfundo.png`
- `identidade/design-guide.md`

**Criação (saída):**
- `identidade/logo-vetora/svg/5-logo-vertical-colorida.svg`
- `identidade/logo-vetora/svg/6-logo-vertical-negativa.svg`

---

## Critério de conclusão

- [ ] 2 SVGs criados em `identidade/logo-vetora/svg/`
- [ ] Símbolo e wordmark centralizados no mesmo eixo X
- [ ] Espaçamento vertical entre símbolo e wordmark equilibrado (não grudado, não excessivo)
- [ ] Versão negativa com fundo `#0B1F3B` cobrindo todo o viewBox
- [ ] Legibilidade do wordmark verificada a 100px de largura

---

## Notas e referências

- Cores: Azul Vetor `#0B1F3B` · Ciano `#00A6A6` · Branco `#FFFFFF`
- Fonte: `Sora` Bold 700 · tracking −0.02em
- `text-anchor="middle"` com `x` no centro do viewBox garante centralização automática
- Uso típico: thumbnails quadrados (1080×1080px), posts de redes sociais, perfil
- Diferença da horizontal: o símbolo é maior em relação ao wordmark na vertical (mais destaque ao símbolo)
