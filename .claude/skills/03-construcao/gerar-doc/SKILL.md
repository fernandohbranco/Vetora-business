---
name: gerar-doc
description: |
  Gera documentos estratégicos VETORA em PDF premium — relatórios de reunião, naming,
  posicionamento, proposta, branding book, carta de abertura ou qualquer entregável formal.
  Usa scripts/doc-template.html + scripts/render-doc-pdf.js (Playwright A4).
  Use quando o usuário disser "gera o PDF", "transforma isso em documento", "quero entregar
  pra cliente", "monta o relatório", "/gerar-doc".
---

# /gerar-doc — Gerador de Documentos Estratégicos VETORA

Transforma conteúdo (Markdown, notas de reunião, dados estruturados) em PDF premium com identidade VETORA completa: capa, tipografia, componentes visuais e paginação automática.

## Quando ativar

- Pós-reunião de discovery: transformar o relatório em PDF entregável
- Pós-naming: gerar o documento de opções de nome
- Proposta comercial que precisa ir além do Markdown
- Qualquer entregável formal para cliente que precise de PDF de qualidade

## O que NÃO faz

- Não inventa o conteúdo — recebe o material já produzido por outras skills
- Não define a estratégia — só formaliza o que já existe
- Não publica o PDF online — só gera o arquivo local

## Ferramentas necessárias

- Node.js disponível: `node --version`
- Playwright instalado: `node -e "require('playwright')"` (se falhar: `npm install playwright && npx playwright install chromium` na raiz do container)

## Processo

### Passo 1 — Coletar metadados da capa

Perguntar ao usuário (ou inferir do contexto):

1. **Tipo do documento** — eyebrow da capa. Exemplos:
   - "Relatório de Reunião"
   - "Escolha do Nome do Studio"
   - "Proposta Comercial"
   - "Relatório de Posicionamento de Marca"
   - "Branding Book"

2. **Título principal** — título grande da capa (ex: "Descoberta de Marca · Studio Pés de Seda")

3. **Cliente** — nome da pessoa/empresa (ex: "Studio Pés de Seda")

4. **Data de emissão** — data formatada (ex: "28 de junho de 2026")

5. **Campos de meta da capa** — lista de rótulo + valor. Exemplos típicos:
   - Data / Formato / Participantes (reuniões)
   - Para / Data / Elaborado por (propostas, naming)
   - Cliente / Referência / Versão (documentos técnicos)

6. **Confidencial?** — sim/não. Se sim, exibe badge "Documento Confidencial" na capa.

7. **Referência interna** (opcional) — ex: "STD-PES-001 · v1.0" — aparece no rodapé da capa.

### Passo 2 — Estruturar o conteúdo em HTML

Converter o conteúdo do documento para HTML usando os componentes do template.

**Referência de componentes:**

#### Cabeçalho de seção numerada
```html
<div class="secao-header">
  <span class="secao-eyebrow">— 01</span>
  <h2>Resumo Executivo</h2>
</div>
```

#### Caixa de destaque (fundo navy)
```html
<div class="destaque">
  <p>A reunião confirmou e aprofundou o diagnóstico inicial...</p>
</div>
```

#### Grade de cards (2, 3 ou 4 colunas)
```html
<div class="cards-grid cols-2">
  <div class="card-item">
    <div class="card-num">01</div>
    <span class="card-titulo">Origem Genuína</span>
    <p class="card-desc">Priscila foi a própria primeira cliente.</p>
  </div>
  <div class="card-item dark">
    <div class="card-num">02</div>
    <span class="card-titulo">Momento WOW</span>
    <p class="card-desc">A cliente não vê a transformação acontecer.</p>
  </div>
</div>
```

#### Lista de passos numerados
```html
<div class="passo-lista">
  <div class="passo">
    <span class="passo-num">01</span>
    <div class="passo-conteudo">
      <strong class="passo-titulo">Higienização dos pés</strong>
      <p class="passo-desc">Preparação inicial da área de atendimento.</p>
    </div>
  </div>
  <div class="passo">
    <span class="passo-num">02</span>
    <div class="passo-conteudo">
      <strong class="passo-titulo">Aplicação do Hidracalo</strong>
      <p class="passo-desc">Produto específico para remoção de calosidade.</p>
    </div>
  </div>
</div>
```

#### Citação simples
```html
<div class="citacao">
  <p>"Quando elas olham de novo, mudou completamente o pé."</p>
  <cite>— Priscila</cite>
</div>
```

#### Grade de citações 2×2 (fundo navy)
```html
<div class="citacoes-grid">
  <div class="citacao-item">
    <span class="citacao-aspas">"</span>
    <p class="citacao-texto">Meu Deus do céu, meu pé tá mais leve.</p>
    <span class="citacao-autor">— Cliente (durante revelação final)</span>
  </div>
  <div class="citacao-item">
    <span class="citacao-aspas">"</span>
    <p class="citacao-texto">O talzinho parece o pezinho de neném.</p>
    <span class="citacao-autor">— Cliente (a metáfora mais poderosa)</span>
  </div>
</div>
```

#### Callout / Insight
```html
<div class="callout">
  <span class="callout-label">INSIGHT ESTRATÉGICO DE MARCA</span>
  <p>Esta origem é ouro. Não é uma empreendedora que viu uma oportunidade de mercado.</p>
</div>
```

#### Grade duas colunas
```html
<div class="dois-colunas">
  <div class="col-item">
    <span class="col-titulo">Tom de Voz Confirmado</span>
    <p class="col-desc">Quente, pausado, seguro. Sem euforia, sem hipérboles.</p>
  </div>
  <div class="col-item">
    <span class="col-titulo">O Que Ela Não Quer Ser</span>
    <p class="col-desc">"Não quero que pareça fraude."</p>
  </div>
</div>
```

#### Grupo badge (naming / opções)
```html
<div class="grupo-badge">
  <span class="grupo-titulo">Grupo A · Renovação e Cuidado</span>
  <p class="grupo-desc">Nomes que falam do que acontece com a cliente quando ela vai até você.</p>
</div>
```

#### Card de opção numerada (naming)
```html
<div class="opcao-card">
  <div class="opcao-num">01</div>
  <div class="opcao-conteudo">
    <h3 class="opcao-nome">Studio Renovar</h3>
    <span class="opcao-handle">@studiorenovar</span>
    <div class="opcao-secao">
      <span class="opcao-secao-label">O QUE COMUNICA</span>
      <p>Um espaço onde você vai e sai diferente — não só com os pés.</p>
    </div>
    <div class="opcao-secao">
      <span class="opcao-secao-label">POR QUE ESTÁ AQUI</span>
      <p>O que você faz na maca não é só limpar caloso. Renovar é essa palavra.</p>
    </div>
  </div>
</div>
```

#### Jornada emocional
```html
<div class="jornada">
  <div class="jornada-passo">
    <span class="jornada-num">01</span>
    <div class="jornada-conteudo">
      <strong class="jornada-titulo">Vergonha</strong>
      <p class="jornada-desc">A cliente carrega há anos um problema que tentou resolver.</p>
    </div>
  </div>
  <div class="jornada-passo ativo">
    <span class="jornada-num">02</span>
    <div class="jornada-conteudo">
      <strong class="jornada-titulo">Descoberta</strong>
      <p class="jornada-desc">Ela encontra o Studio — e percebe que existe uma solução diferente.</p>
    </div>
  </div>
</div>
```

#### Tabela com badges de status
```html
<table>
  <thead>
    <tr><th>#</th><th>Pendência</th><th>Como Resolver</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Aprovação do nome da marca</td>
      <td>Apresentar 3 opções com contexto estratégico</td>
      <td><span class="badge-status pendente">A Fazer</span></td>
    </tr>
    <tr>
      <td>02</td>
      <td>Google Meu Negócio</td>
      <td>Pode ser feito imediatamente</td>
      <td><span class="badge-status imediato">Imediato</span></td>
    </tr>
  </tbody>
</table>
```
Variantes de badge: `.ok` · `.pendente` · `.imediato` · `.fase` · `.concluido`

#### Forçar nova página
```html
<div class="nova-pagina"></div>
```

### Passo 3 — Montar o HTML completo

Ler `scripts/doc-template.html` e substituir todos os placeholders:

| Placeholder       | O que colocar |
|---|---|
| `{{LOGO}}`        | Caminho absoluto file:// da logo negativa |
| `{{TIPO}}`        | Eyebrow coletado no Passo 1 |
| `{{TITULO}}`      | Título coletado no Passo 1 |
| `{{CONFIDENCIAL}}`| `<div class="capa__confidencial">Documento Confidencial</div>` ou `""` |
| `{{META_CAMPOS}}` | HTML dos .capa__meta-item (ver abaixo) |
| `{{CAPA_RODAPE}}` | HTML do .capa__rodape ou `""` |
| `{{CONTEUDO}}`    | HTML completo do corpo |

**Formato de META_CAMPOS:**
```html
<div class="capa__meta-item">
  <span class="capa__meta-rotulo">Data</span>
  <span class="capa__meta-valor">28 de junho de 2026</span>
</div>
<div class="capa__meta-item">
  <span class="capa__meta-rotulo">Participantes</span>
  <span class="capa__meta-valor">Fernando Branco &amp; Priscila</span>
</div>
```

**Formato de CAPA_RODAPE (quando houver referência):**
```html
<div class="capa__rodape">
  <span>VETORA — Documento Estratégico Interno · STD-PES-001 · v1.0</span>
  <span>Projeto: Studio Pés de Seda · Fase: Discovery &amp; Branding</span>
</div>
```

**Logo a usar:**
```
<container>/identidade/logo-vetora/2-Logo horizontal negativa — fundo escuro-semfundo.png
```
Converter para caminho file://: `file:///caminho/absoluto/para/logo.png`

### Passo 4 — Salvar HTML e renderizar PDF

```bash
# Salvar HTML montado (substituir [SLUG] e [DATA] pelos valores reais)
# Ex: /tmp/studio-pes-seda-discovery-2026-06-28.html

node scripts/render-doc-pdf.js \
  /tmp/[SLUG]-[DATA].html \
  saidas/documentos/[SLUG]-[DATA].pdf \
  "[TITULO]" \
  "[DATA_CURTA]" \
  "[CLIENTE]"
```

Onde:
- `[SLUG]` = nome do cliente em kebab-case (ex: `studio-pes-seda`)
- `[DATA]` = data no formato `YYYY-MM-DD`
- `[DATA_CURTA]` = data abreviada para o header (ex: `28/06/2026`)

### Passo 5 — Confirmar ao usuário

```
✓ PDF gerado em saidas/documentos/[nome].pdf

Título: [TITULO]
Cliente: [CLIENTE]
Páginas: [X] (verificar no arquivo)
```

## Critérios de aceite

- [ ] Capa full-bleed navy sem faixa branca no topo
- [ ] Header "VETORA · Cliente — Título · Data" em todas as páginas internas
- [ ] Footer "Produzido por VETORA · vetora.com.br" com paginação em todas as páginas
- [ ] Nenhum card, citação ou tabela quebrado no meio de uma página
- [ ] Tipografia Sora (títulos) + Inter (corpo) renderizada corretamente
- [ ] Cores: navy `#0B1F3B` e cyan `#00A6A6` corretas (não lavadas)
- [ ] PDF salvo em `saidas/documentos/`

## Histórico

- v1 — 2026-06-28 — VetoraOS — versão inicial
