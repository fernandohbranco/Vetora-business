# Sprint logo-svg-02 — Favicon simplificado

**Fase:** Identidade SVG | **Esforço:** 1h | **Prioridade:** 2 de 6

---

## Contexto

O favicon da VETORA não é o mesmo SVG do símbolo em escala menor — é uma versão com proporções ajustadas para legibilidade em tamanhos pequenos (16px, 32px, 64px). Os traços são proporcionalmente mais espessos e o espaçamento entre o V externo e interno é menor, compensando a perda de detalhe em tamanhos reduzidos.

Esta sprint também cria as versões monocromáticas do favicon, que são as únicas variações de logo que têm fundo (necessário em formato `.ico` e contextos de sistema operacional).

---

## Objetivo

Ao final dessa sprint, existem 3 SVGs de favicon em `identidade/logo-vetora/svg/`:

1. `12-favicon-colorido.svg` — V azul marinho + seta ciano, fundo transparente
2. `13-favicon-mono-claro.svg` — V azul marinho + fundo `#F5F7FA` (branco gelo)
3. `14-favicon-mono-escuro.svg` — V branco + fundo `#0B1F3B` (azul vetor)

---

## Pré-requisitos

- Sprint logo-svg-01 concluída (geometria-base do símbolo definida)
- Ler os PNGs de referência: `identidade/logo-vetora/12-*.png`, `13-*.png`, `14-*.png`
- Comparar com `7-Símbolo isolado colorido-semfundo.png` para identificar as diferenças de proporção

---

## Tarefas

### Análise das diferenças de proporção (favicon vs. símbolo)
- [ ] Comparar PNG 12 (favicon) com PNG 7 (símbolo) para identificar visualmente as diferenças
- [ ] Confirmar: strokes do V favicon são ~16% da altura total (vs. ~13% no símbolo padrão)
- [ ] Confirmar: espaçamento entre V externo e interno é ~7% (vs. ~9% no símbolo padrão)
- [ ] Confirmar: seta é proporcionalmente maior (~30% do V) e ângulo ligeiramente mais íngreme (~50°)

### Construção do SVG base do favicon
- [ ] Adaptar a geometria da sprint 01 com as proporções ajustadas do favicon
- [ ] Usar o mesmo `fill-rule="evenodd"` para o V vazado
- [ ] `viewBox="0 0 100 100"` — formato quadrado (1:1), favorável para favicon
- [ ] Manter a seta ciano proporcional ao tamanho ajustado

### Criação dos 3 arquivos SVG
- [ ] **`12-favicon-colorido.svg`**: V em `#0B1F3B`, seta em `#00A6A6`, fundo transparente (sem `<rect>`)
- [ ] **`13-favicon-mono-claro.svg`**: V em `#0B1F3B`, adicionar `<rect width="100" height="100" fill="#F5F7FA"/>` antes do símbolo (fundo branco gelo)
- [ ] **`14-favicon-mono-escuro.svg`**: V em `#FFFFFF`, adicionar `<rect width="100" height="100" fill="#0B1F3B"/>` antes do símbolo (fundo azul)

### Verificação
- [ ] Abrir os 3 SVGs no Chrome
- [ ] Testar em 16px, 32px e 64px — verificar legibilidade em cada tamanho
- [ ] Comparar com os PNGs de referência lado a lado
- [ ] Verificar que os fundos das versões mono não ultrapassam o viewBox

---

## Arquivos envolvidos

**Leitura (referência):**
- `identidade/logo-vetora/12-Favicon simplificado colorido-semfundo.png`
- `identidade/logo-vetora/13-Favicon simplificado monocromátic - fundo claro-semfundo.png`
- `identidade/logo-vetora/14-Favicon simplificado monocromátic - fundo escuro-semfundo.png`
- `identidade/logo-vetora/7-Símbolo isolado colorido-semfundo.png` (comparação)
- `identidade/design-guide.md`

**Criação (saída):**
- `identidade/logo-vetora/svg/12-favicon-colorido.svg`
- `identidade/logo-vetora/svg/13-favicon-mono-claro.svg`
- `identidade/logo-vetora/svg/14-favicon-mono-escuro.svg`

---

## Critério de conclusão

- [ ] 3 SVGs criados em `identidade/logo-vetora/svg/`
- [ ] Favicon colorido visível e limpo a 16px
- [ ] Favicon mono claro com fundo `#F5F7FA` correto
- [ ] Favicon mono escuro com fundo `#0B1F3B` correto
- [ ] Versão escura legível sobre qualquer fundo (o branco do V contrasta bem)
- [ ] Comparação visual aprovada contra os PNGs de referência

---

## Notas e referências

- Cores: Azul Vetor `#0B1F3B` · Ciano `#00A6A6` · Branco Gelo `#F5F7FA` · Branco puro `#FFFFFF`
- O favicon não é o símbolo em miniatura — as proporções são diferentes por design
- Para uso real como favicon `.ico`, exportar este SVG em 16×16, 32×32 e 64×64 via Inkscape ou ferramenta equivalente
- As versões com fundo são as únicas exceções à regra de "sempre sem fundo" da identidade SVG
