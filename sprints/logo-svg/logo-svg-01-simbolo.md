# Sprint logo-svg-01 — Símbolo isolado

**Fase:** Identidade SVG | **Esforço:** 1-2h | **Prioridade:** 1 de 6

---

## Contexto

O símbolo da VETORA (o "V duplo com seta") é a unidade visual mais reutilizável da marca — aparece como avatar, watermark, ícone de app e elemento decorativo em peças. Ele é 100% geométrico (linhas retas, sem curvas), o que permite recriação SVG com fidelidade total.

Esta sprint define a **geometria-base** que será reutilizada em todas as sprints seguintes (03 a 06). Executar primeiro.

---

## Objetivo

Ao final dessa sprint, existem 3 SVGs do símbolo isolado em `identidade/logo-vetora/svg/`:

1. `7-simbolo-colorido.svg` — V duplo azul marinho + seta ciano, fundo transparente
2. `8-simbolo-azul.svg` — tudo azul marinho (sem ciano), fundo transparente
3. `9-simbolo-branco.svg` — tudo branco, fundo transparente

Todos os 3 compartilham a mesma geometria. Apenas o `fill` muda.

---

## Pré-requisitos

- Ler o PNG de referência: `identidade/logo-vetora/7-Símbolo isolado colorido-semfundo.png`
- Ler o design guide: `identidade/design-guide.md`
- Criar a pasta de saída se não existir: `identidade/logo-vetora/svg/`

---

## Tarefas

### Análise da geometria
- [ ] Ler e inspecionar o PNG `7-Símbolo isolado colorido-semfundo.png` para mapear as proporções do símbolo
- [ ] Identificar: largura dos traços do V externo, espessura do espaçamento entre V externo e V interno, posição e ângulo da seta ciano
- [ ] Definir o sistema de coordenadas base: `viewBox="0 0 100 100"`, símbolo centralizado com margem mínima de 5 unidades em todos os lados

### Construção do SVG base (geometria do símbolo)
- [ ] Construir o **V externo**: polígono com dois braços diagonais grossos (stroke width ~13 unidades) que convergem no vértice inferior central
- [ ] Construir o **V interno** (efeito duplo-V): polígono paralelo ao externo, com espaçamento de ~9 unidades entre eles, criando o interior vazado
- [ ] O efeito "V duplo" pode ser construído como um único path com `fill-rule="evenodd"` (V externo como contorno + V interno como "buraco") — preferir essa abordagem sobre dois polygons separados
- [ ] Construir a **seta ciano**: triângulo + pequeno retângulo (ou trapézio) no canto superior direito, onde termina o braço direito do V externo, apontando ~45° para cima-direita
- [ ] Encapsular toda a geometria em `<defs>` como `<g id="vetora-symbol">` para reutilização

### Criação dos 3 arquivos SVG
- [ ] **`7-simbolo-colorido.svg`**: usar `vetora-symbol` com V em `#0B1F3B` e seta em `#00A6A6`. `xmlns`, `viewBox`, `fill="none"` no root. Sem fundo.
- [ ] **`8-simbolo-azul.svg`**: mesma geometria, seta também em `#0B1F3B` (tudo monocromático azul)
- [ ] **`9-simbolo-branco.svg`**: mesma geometria, tudo em `#FFFFFF`

### Verificação
- [ ] Abrir os 3 SVGs no Chrome — verificar que o símbolo é visualmente idêntico ao PNG de referência
- [ ] Testar `9-simbolo-branco.svg` sobre fundo `#0B1F3B` — deve aparecer claramente
- [ ] Escalar para 500px e 32px — verificar limpeza nas duas extremidades
- [ ] Confirmar que não há bordas cortadas (ajustar margem do viewBox se necessário)

---

## Arquivos envolvidos

**Leitura (referência):**
- `identidade/logo-vetora/7-Símbolo isolado colorido-semfundo.png`
- `identidade/logo-vetora/8-Símbolo isolado azul-semfundo.png`
- `identidade/logo-vetora/9-Símbolo isolado branco-semfundo.png`
- `identidade/design-guide.md`

**Criação (saída):**
- `identidade/logo-vetora/svg/7-simbolo-colorido.svg`
- `identidade/logo-vetora/svg/8-simbolo-azul.svg`
- `identidade/logo-vetora/svg/9-simbolo-branco.svg`

---

## Critério de conclusão

- [ ] 3 SVGs criados em `identidade/logo-vetora/svg/`
- [ ] Cada SVG abre sem erro no Chrome e no Safari
- [ ] Visualmente equivalente ao PNG de referência (sem distorções, proporções corretas)
- [ ] Versão branca visível sobre fundo escuro
- [ ] Escala limpa de 32px a 500px
- [ ] Pasta `identidade/logo-vetora/svg/` criada

---

## Notas e referências

- Cores: Azul Vetor `#0B1F3B` · Ciano Inteligente `#00A6A6` · Branco puro `#FFFFFF`
- `fill-rule="evenodd"` é a abordagem mais limpa para o efeito de V vazado — evita problemas com sobreposição de paths
- O símbolo é sempre proporcional — nunca distorcer com width/height diferentes
- A seta ciano é o único elemento de cor de destaque — nunca omitir na versão colorida
- Esta sprint fornece a geometria-base para as sprints 03, 04 e 06
