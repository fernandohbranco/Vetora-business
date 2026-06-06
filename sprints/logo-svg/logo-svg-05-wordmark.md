# Sprint logo-svg-05 — Wordmark isolado

**Fase:** Identidade SVG | **Esforço:** 0.5h | **Prioridade:** 5 de 6

---

## Contexto

O wordmark isolado ("VETORA" sem o símbolo) é usado em contextos onde o símbolo já aparece em outro lugar da peça, ou quando é necessário o texto da marca sem o ícone — como em rodapés secundários, co-branding sutil ou elementos textuais de fundo.

É a sprint mais simples: apenas texto tipografado corretamente.

---

## Objetivo

Ao final dessa sprint, existe 1 SVG do wordmark em `identidade/logo-vetora/svg/`:

1. `10-wordmark-azul.svg` — "VETORA" em Sora Bold 700, cor `#0B1F3B`, fundo transparente

---

## Pré-requisitos

- Sprint logo-svg-03 concluída (configuração de fonte já definida e validada)
- Ler o PNG de referência: `identidade/logo-vetora/10-Wordmark isolado azul-semfundo.png`

---

## Tarefas

### Análise da tipografia
- [ ] Ler o PNG `10-Wordmark isolado azul-semfundo.png` e observar:
  - Peso visual das letras (confirmar Bold/700)
  - Espaçamento entre letras (ligeiramente reduzido — confirmar tracking ~−0.02em)
  - Proporção geral: texto é significativamente mais largo que alto
- [ ] Confirmar que não há nenhum elemento gráfico além do texto puro

### Construção do SVG
- [ ] Criar o SVG com `<text>VETORA</text>`:
  - `font-family="Sora, Space Grotesk, sans-serif"`
  - `font-weight="700"`
  - `font-size` adequado ao viewBox (ex: `72` para viewBox 600×120)
  - `letter-spacing="-0.02em"` (tracking reduzido conforme design guide)
  - `fill="#0B1F3B"`
  - `dominant-baseline="central"` + `text-anchor="middle"` para centralizar no viewBox
- [ ] Definir o viewBox com proporção equivalente ao PNG de referência (aproximadamente 5:1 largura:altura)
- [ ] Incluir margem adequada no viewBox para respeitar a área de proteção

### Verificação
- [ ] Abrir no Chrome — verificar que a fonte Sora carrega corretamente (pode precisar de `@import` da Google Fonts dentro do SVG se o ambiente não tiver a fonte instalada)
- [ ] Comparar visualmente com o PNG de referência
- [ ] Verificar peso e espaçamento das letras
- [ ] Escalar para 500px e 100px de largura — sem distorção

### Tarefa opcional — Converter texto em paths
- [ ] Se a fidelidade com a Sora for crítica (uso em contextos sem internet/fonte), usar Inkscape CLI para converter: `inkscape --export-plain-svg --actions="select-all;object-to-path;export-plain-svg" 10-wordmark-azul.svg`
- [ ] Salvar a versão com paths como `10-wordmark-azul-outlined.svg`

---

## Arquivos envolvidos

**Leitura (referência):**
- `identidade/logo-vetora/10-Wordmark isolado azul-semfundo.png`
- `identidade/design-guide.md`

**Criação (saída):**
- `identidade/logo-vetora/svg/10-wordmark-azul.svg`
- `identidade/logo-vetora/svg/10-wordmark-azul-outlined.svg` (opcional — texto como paths)

---

## Critério de conclusão

- [ ] SVG criado em `identidade/logo-vetora/svg/`
- [ ] Fonte Sora Bold 700 com tracking −0.02em aplicado
- [ ] Peso visual equivalente ao PNG de referência
- [ ] ViewBox proporcional (~5:1) sem cortes nas bordas das letras
- [ ] Renderiza corretamente no Chrome

---

## Notas e referências

- Cor: Azul Vetor `#0B1F3B`
- Fonte: Sora Bold 700 · tracking −0.02em (−0.01em a −0.03em conforme design guide)
- Para incluir a fonte no SVG sem depender de instalação externa, adicionar no início do SVG:
  ```xml
  <defs>
    <style>@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700');</style>
  </defs>
  ```
- Alternativa sem internet: usar `font-face` com base64 da Sora embutida no SVG
- A versão outlined é mais robusta para exportação em PDFs e impressão
