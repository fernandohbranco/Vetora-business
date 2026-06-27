---
name: relatorio-ads
description: >
  Gera relatório semanal de performance de anúncios pagos (Google Ads + Meta Ads). Lê CSVs
  exportados das plataformas (ou prints) e devolve análise executiva com KPIs, top criativos,
  alertas (queima de orçamento, CTR baixo, conversões caindo) e recomendações práticas pra
  semana seguinte.
  Use quando o usuário pedir "relatório de ads", "relatório de campanha", "como foram os ads",
  "performance da semana", "relatorio meta", "relatorio google ads", ou /relatorio-ads.
---

# /relatorio-ads — Relatório semanal de Google Ads + Meta Ads

Skill que transforma exports brutos das plataformas em relatório executivo que o dono entende sem precisar abrir a interface do Google ou da Meta.

Especialização de `/relatorio`: foca a análise de ads (Passos 1–6) e **reaproveita o resolver de
marca VETORA e o motor de export** dessa skill para a capa, o rodapé e o PDF (Passos 7–8). Não
duplica lógica de branding/export — a fonte é uma só.

> **Regra de marca:** o relatório vai PARA o cliente → carrega a marca **VETORA** (resolvida do
> container), não o `identidade/` do cliente.

## Dependências

- **Contexto:** `_memoria/empresa.md`, `_memoria/estrategia.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Inputs:** CSVs do Google Ads e/ou Meta Ads Manager. Print também aceito (transcrever)
- **Histórico:** `marketing/campanhas/relatorios/` (criar se não existir)
- **Marca + export:** resolver e motor de `/relatorio` (`<container>/scripts/render-report-pdf.js` + `report-template.html`)

---

## Como rodar

Usuário roda o comando e cola/aponta os arquivos:

```
/relatorio-ads
dados/google-ads-2026-05-12.csv
dados/meta-ads-2026-05-12.csv
```

Ou simplesmente:

```
/relatorio-ads
```

Aí a skill pergunta onde estão os exports da semana.

## Workflow

### Passo 1 — Ler os exports

**Google Ads:** colunas mínimas esperadas — Campanha, Grupo, Impressões, Cliques, CTR, CPC médio, Custo, Conversões, CPA, Conv. rate.

**Meta Ads:** colunas mínimas esperadas — Campanha, Conjunto, Impressões, Alcance, Cliques no link, CTR, CPM, Frequência, Custo, Resultados, Custo por resultado.

Se faltar coluna crítica (Conversões / Resultados), avisar e seguir só com tráfego.

### Passo 2 — Comparar com a semana anterior

Buscar em `marketing/campanhas/relatorios/` o relatório anterior. Se existir, calcular variação semana vs semana:

- Investimento total
- Cliques / Impressões
- CTR (clique / impressão)
- CPC / CPM
- Conversões totais (Google + Meta)
- CPA (custo / conversão)
- Custo por canal

Se não existir, é a primeira leitura — sinalizar como baseline.

### Passo 3 — Resumo executivo (topo do relatório)

Uma página, leitura de 2 minutos. Estrutura:

```markdown
# Relatório de Ads — semana <DD/MM> a <DD/MM>

## Resumo executivo

**Investimento:** R$ X.XXX (▼/▲ Y% vs semana anterior)
**Conversões:** N (▼/▲ Y%)
**CPA médio:** R$ X.XX (▼/▲ Y%)

**Canais:**
- Google Ads: R$ X.XXX → N conversões (CPA R$ X.XX)
- Meta Ads:   R$ X.XXX → N conversões (CPA R$ X.XX)

**Headline da semana:** 1 frase do que mais importa (campanha que estourou, criativo que matou,
alerta de orçamento, queda inesperada).
```

### Passo 4 — Detalhamento por canal

Pra cada canal, listar:

**Top 3 campanhas/grupos por performance** (menor CPA, maior conv. rate)
**Bottom 3** (maior CPA, menor conv. rate) — sinalizar pra pausar ou ajustar
**Top criativos** (Meta): impressões + CTR + custo por resultado
**Bottom criativos** (Meta): pra trocar ou pausar
**Palavras-chave com mais custo e zero conversão** (Google) — virar negativas

### Passo 5 — Alertas automáticos

Varrer os dados e gerar alertas em vermelho/amarelo:

| Alerta | Critério |
|---|---|
| 🔴 Queima de orçamento | Campanha gastou >R$X com 0 conversões |
| 🔴 CTR despencou | CTR caiu >30% vs semana anterior |
| 🟡 Frequência alta (Meta) | Conjunto com freq > 3.0 — público saturado |
| 🟡 Conv. rate baixa | <1% em campanha Search |
| 🟡 CPC subindo | CPC médio +20% vs semana anterior |
| 🟢 Oportunidade | Campanha com CTR/conv acima da média + orçamento limitado → considerar aumentar |

### Passo 6 — Recomendações pra semana

Lista curta (3-5 itens) de ações concretas:

```markdown
## Pra fazer na próxima semana

1. **Pausar** Grupo "X" — gastou R$ 230 sem conversão em 7 dias
2. **Adicionar negativas:** [lista de termos que apareceram nos search terms e não convertem]
3. **Trocar criativo Meta** do conjunto "Y" — frequência 4.2, performance caindo
4. **Aumentar orçamento** da campanha "Z" — CPA R$ 12, abaixo do alvo
5. **Testar** novo RSA com headline "<sugestão baseada em concorrência atual>"
```

### Passo 7 — Salvar o markdown-fonte

```
marketing/campanhas/relatorios/<YYYY-MM-DD>-relatorio.md
```

Frontmatter com:
```yaml
---
periodo_inicio: YYYY-MM-DD
periodo_fim: YYYY-MM-DD
investimento_total: 0000.00
conversoes_total: 0
cpa_medio: 00.00
canais: [google-ads, meta-ads]
---
```

Esse frontmatter facilita comparações futuras com scripts e a leitura de longo prazo.

### Passo 8 — Exportar PDF de marca VETORA (motor compartilhado)

Reaproveitar o resolver e o motor de `/relatorio` — **não** reimplementar capa/rodapé/export aqui:

1. **Resolver o container** (subir na árvore até achar `.vetora-container`) → `$CONTAINER`.
   Fallback gracioso se não achar (branding genérico + aviso, sem quebrar). Ver `/relatorio` Passo 1.
2. **Montar o HTML** a partir de `$CONTAINER/scripts/report-template.html`:
   - `{{TIPO}}` = "Relatório de performance · Ads"
   - `{{TITULO}}` = "Performance de mídia paga — semana DD/MM a DD/MM"
   - `{{CLIENTE}}`, `{{PERIODO}}`, `{{DATA}}`, `{{LOGO}}` (logo branca do container)
   - `{{CONTEUDO}}` = corpo (Passos 3–6) convertido em HTML
   - Mapear os blocos de ads para os componentes do template:
     - KPIs do resumo (Investimento, Conversões, CPA) → `<div class="kpis">…<span class="delta up/down">…`
     - Tabela de alertas (Passo 5) → `<div class="alerta vermelho/amarelo/verde">…`
   - Gravar em `marketing/campanhas/relatorios/.build/<data>-relatorio.html`
3. **Renderizar:**
   ```bash
   node "$CONTAINER/scripts/render-report-pdf.js" \
     "marketing/campanhas/relatorios/.build/<data>-relatorio.html" \
     "marketing/campanhas/relatorios/<YYYY-MM-DD>-relatorio.pdf"
   ```
   Rodapé "Produzido por VETORA · vetora.com.br" + numeração entram em todas as páginas.

### Passo 9 — Entrega

Mostrar o resumo executivo direto no chat (Passos 3 + 5 + 6) e apontar pros arquivos:

> "Relatório em PDF (marca VETORA): `marketing/campanhas/relatorios/<data>-relatorio.pdf`.
> Markdown-fonte em `marketing/campanhas/relatorios/<data>-relatorio.md`.
> Quer que eu envie por email pro cliente?"

Se sim, chamar `/email-profissional` com o resumo executivo + anexo.

---

## Regras

- **Nunca inventar números.** Se o export tá truncado ou ilegível, dizer "dados incompletos" e seguir só com o que dá.
- **Comparação é o que importa.** Número solto ("R$ 1.200 essa semana") não significa nada sem o comparativo.
- **Alertas em ordem.** Vermelho primeiro, amarelo depois, verde por último.
- **Recomendações concretas.** "Pausar Grupo X" > "Otimizar campanhas". Nome da campanha, valor, motivo.
- **Linguagem do dono.** Seguir `_memoria/preferencias.md`. CPM, CTR, CPA são OK se o dono já entende; se não, traduzir ("custo por mil pessoas que viram", "% de quem clicou", "quanto custou cada cliente").
- **Frequência boa pra Meta:** 1.5–3.0. Acima de 3.0 já satura. Acima de 4.0 vira ruído.
- **Quando reportar perda:** não amenizar. "A campanha X queimou R$ 200 sem trazer venda" é mais útil que "a campanha X teve performance abaixo do esperado".
