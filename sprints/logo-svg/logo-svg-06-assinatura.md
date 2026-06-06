# Sprint logo-svg-06 — Logo com assinatura

**Fase:** Identidade SVG | **Esforço:** 0.5h | **Prioridade:** 6 de 6

---

## Contexto

A logo com assinatura é a versão mais completa da identidade — símbolo + wordmark + tagline. É usada no slide final de carrosséis (CTA), em propostas comerciais e em documentos institucionais onde a marca precisa se apresentar com a mensagem completa.

Esta sprint é a mais simples em termos de engenharia: estende o layout da logo horizontal (sprint 03) com uma linha de texto adicional abaixo do wordmark.

---

## Objetivo

Ao final dessa sprint, existe 1 SVG da logo com assinatura em `identidade/logo-vetora/svg/`:

1. `11-logo-assinatura.svg` — símbolo colorido + "VETORA" + tagline, fundo transparente

---

## Pré-requisitos

- Sprint logo-svg-01 concluída (geometria do símbolo)
- Sprint logo-svg-03 concluída (layout horizontal já funcionando)
- Ler o PNG de referência: `identidade/logo-vetora/11-Logo com assinatura oficial-semfundo.png`

---

## Tarefas

### Análise do layout com tagline
- [ ] Ler o PNG `11-Logo com assinatura oficial-semfundo.png` e observar:
  - Posição da tagline em relação ao wordmark (abaixo, alinhada à esquerda ou centralizada?)
  - Tamanho da fonte da tagline em relação ao wordmark (~35% do tamanho)
  - Fonte da tagline: verificar se é Sora Regular/Light ou Inter Regular
  - Espaçamento vertical entre wordmark e tagline
  - Cor da tagline (provavelmente `#1E252B` ou `#0B1F3B` com opacidade, não o azul escuro puro)

### Construção do layout
- [ ] Partir do layout horizontal (sprint 03) como base
- [ ] Adicionar linha de texto abaixo do wordmark com a tagline: `Estratégia, marca e tecnologia na direção certa.`
- [ ] Configurar a tagline:
  - `font-family="Sora, sans-serif"` ou `"Inter, sans-serif"` (verificar nos PNGs qual família é usada)
  - `font-weight="400"` (Regular)
  - Tamanho: ~35% do tamanho do wordmark
  - Cor: `#1E252B` (Grafite Técnico) ou `#0B1F3B` com opacidade reduzida
- [ ] Ajustar o viewBox verticalmente para acomodar a tagline (proporção ~3.5:1 largura:altura)
- [ ] Certificar que o símbolo, wordmark e tagline ficam alinhados de forma equilibrada

### Verificação
- [ ] Abrir no Chrome — verificar que símbolo, wordmark e tagline ficam alinhados corretamente
- [ ] Comparar com o PNG de referência
- [ ] Testar a 400px de largura (uso típico em documentos)
- [ ] Verificar que a tagline é legível a esse tamanho
- [ ] Verificar que o espaçamento entre wordmark e tagline não está nem muito apertado nem muito solto

---

## Arquivos envolvidos

**Leitura (referência):**
- `identidade/logo-vetora/11-Logo com assinatura oficial-semfundo.png`
- `identidade/design-guide.md`

**Criação (saída):**
- `identidade/logo-vetora/svg/11-logo-assinatura.svg`

---

## Critério de conclusão

- [ ] SVG criado em `identidade/logo-vetora/svg/`
- [ ] Tagline "Estratégia, marca e tecnologia na direção certa." presente e legível
- [ ] Alinhamento entre símbolo, wordmark e tagline equivalente ao PNG de referência
- [ ] Proporções do viewBox adequadas (sem cortes, sem excesso de espaço vazio)
- [ ] Renderiza corretamente no Chrome

---

## Notas e referências

- Tagline: `Estratégia, marca e tecnologia na direção certa.`
- Cor da tagline: checar o PNG — provavelmente `#1E252B` (Grafite Técnico) ou `#0B1F3B` com `opacity="0.7"`
- Fonte da tagline: Inter 400 é o candidato mais provável (corpo de texto no design guide), mas verificar contra o PNG
- Uso típico: slide final de carrossel, rodapé de proposta, documentos institucionais
- Esta é a versão "completa" da marca — usar com moderação. Em contextos compactos, preferir a horizontal sem tagline
