# Sprint logo-svg-03 — Logo horizontal

**Fase:** Identidade SVG | **Esforço:** 1-2h | **Prioridade:** 3 de 6

---

## Contexto

A logo horizontal (símbolo + wordmark lado a lado) é a versão padrão da identidade VETORA — usada em headers, propostas, slides e qualquer contexto com espaço horizontal. É a variação mais utilizada no dia a dia.

Esta sprint cria as 4 variações de cor da logo horizontal. Todas compartilham o mesmo layout — apenas o esquema cromático muda.

---

## Objetivo

Ao final dessa sprint, existem 4 SVGs da logo horizontal em `identidade/logo-vetora/svg/`:

1. `1-logo-horizontal-colorida.svg` — símbolo colorido + wordmark azul, fundo transparente
2. `2-logo-horizontal-negativa.svg` — símbolo e wordmark brancos, fundo `#0B1F3B`
3. `3-logo-horizontal-mono-azul.svg` — tudo azul marinho (sem ciano), fundo transparente
4. `4-logo-horizontal-mono-branca.svg` — tudo branco, fundo transparente

---

## Pré-requisitos

- Sprint logo-svg-01 concluída (geometria do símbolo disponível)
- Ler os PNGs de referência: `identidade/logo-vetora/1-*.png` a `4-*.png`
- Confirmar que a fonte Sora está referenciada corretamente (não precisa estar instalada para o SVG ser criado)

---

## Tarefas

### Análise do layout
- [ ] Ler o PNG `1-Logo horizontal colorida — fundo claro-semfundo.png` e medir proporções
- [ ] Confirmar: o símbolo ocupa aproximadamente 20-25% da largura total do lockup
- [ ] Confirmar: espaçamento entre símbolo e início do wordmark (área de respiro)
- [ ] Confirmar: o símbolo e o wordmark estão alinhados verticalmente ao centro
- [ ] Definir o viewBox: aproximadamente `0 0 400 100` (proporção ~4:1)

### Construção do layout base
- [ ] Posicionar o símbolo (geometria da sprint 01) no lado esquerdo do viewBox
- [ ] Posicionar o texto "VETORA" à direita do símbolo com `font-family="Sora, Space Grotesk, sans-serif"`, `font-weight="700"`, `letter-spacing="-0.02em"`
- [ ] Centralizar verticalmente símbolo e texto no eixo Y do viewBox
- [ ] Ajustar o viewBox até que símbolo e wordmark caibam com margens equilibradas

### Criação dos 4 arquivos SVG
- [ ] **`1-logo-horizontal-colorida.svg`**: símbolo com V `#0B1F3B` + seta `#00A6A6` · wordmark `#0B1F3B` · fundo transparente
- [ ] **`2-logo-horizontal-negativa.svg`**: símbolo com V `#FFFFFF` + seta `#00A6A6` (ou `#FFFFFF` se ficar melhor) · wordmark `#FFFFFF` · adicionar `<rect>` de fundo `#0B1F3B`
- [ ] **`3-logo-horizontal-mono-azul.svg`**: símbolo todo `#0B1F3B` (seta também `#0B1F3B`) · wordmark `#0B1F3B` · fundo transparente
- [ ] **`4-logo-horizontal-mono-branca.svg`**: tudo `#FFFFFF` · fundo transparente

### Nota sobre a versão negativa (arquivo 2)
- [ ] Verificar nos PNGs se a seta da versão negativa é branca ou mantém o ciano — comparar `2-Logo horizontal negativa — fundo escuro-semfundo.png` com atenção à cor da seta

### Verificação
- [ ] Abrir os 4 SVGs no Chrome
- [ ] Comparar cada um com o PNG equivalente lado a lado
- [ ] Testar versão negativa (`2`) sobre fundo `#0B1F3B` — verificar legibilidade
- [ ] Testar versão branca (`4`) sobre fundo `#0B1F3B` — verificar legibilidade
- [ ] Redimensionar para 200px e 1000px de largura — verificar que as proporções se mantêm

---

## Arquivos envolvidos

**Leitura (referência):**
- `identidade/logo-vetora/1-Logo horizontal colorida — fundo claro-semfundo.png`
- `identidade/logo-vetora/2-Logo horizontal negativa — fundo escuro-semfundo.png`
- `identidade/logo-vetora/3-Logo horizontal monocromática azul-semfundo.png`
- `identidade/logo-vetora/4-Logo horizontal monocromática branca-semfundo.png`
- `identidade/design-guide.md`

**Criação (saída):**
- `identidade/logo-vetora/svg/1-logo-horizontal-colorida.svg`
- `identidade/logo-vetora/svg/2-logo-horizontal-negativa.svg`
- `identidade/logo-vetora/svg/3-logo-horizontal-mono-azul.svg`
- `identidade/logo-vetora/svg/4-logo-horizontal-mono-branca.svg`

---

## Critério de conclusão

- [ ] 4 SVGs criados em `identidade/logo-vetora/svg/`
- [ ] Símbolo e wordmark alinhados verticalmente ao centro em todos os arquivos
- [ ] Proporções do lockup equivalentes ao PNG original
- [ ] Versão negativa com fundo `#0B1F3B` completo (sem corte)
- [ ] Legibilidade verificada em 120px (mínimo de uso no site) e 800px
- [ ] Cor da seta na versão negativa confirmada contra o PNG de referência

---

## Notas e referências

- Cores: Azul Vetor `#0B1F3B` · Ciano `#00A6A6` · Branco Gelo `#F5F7FA` · Branco `#FFFFFF`
- Fonte wordmark: `font-family="Sora, Space Grotesk, sans-serif"` · `font-weight="700"` · `letter-spacing="-0.02em"`
- Tamanho de uso recomendado pelo design guide: 120–200px em HTMLs
- Se a Sora não estiver instalada no ambiente de renderização, o texto vai sofrer fallback para Space Grotesk ou sans-serif genérica — tarefa opcional futura: converter texto em paths
- `text-anchor="middle"` ou `text-anchor="start"` conforme o posicionamento escolhido — preferir `start` para alinhamento com o símbolo
- Área de proteção: espaço equivalente à altura da letra V em todos os lados (mínimo de margem no viewBox)
