---
name: relatorio
description: >
  Gera um relatório profissional com a marca VETORA em PDF — capa, paleta, tipografia e
  rodapé "Produzido por VETORA" em todas as páginas. Serve qualquer tipo: performance, ads,
  auditoria, estratégia, diagnóstico, prestação de contas. Pega os dados/insumos, escreve o
  documento com tom consultivo e exporta MD → HTML → PDF.
  Use quando o usuário disser "gerar relatório", "monta um relatório pro cliente", "relatório
  de auditoria", "relatório de estratégia", "relatório em PDF", "PDF profissional", ou /relatorio.
  Para o relatório semanal específico de Google/Meta Ads a partir de CSVs, use /relatorio-ads
  (que reaproveita o motor de marca e export desta skill).
---

# /relatorio — Relatório profissional com marca VETORA (PDF)

Transforma dados e insumos em um entregável que **parece consultoria, não export genérico**.
Esta é a skill canônica de entregáveis: aplica a marca **VETORA** (não a marca do cliente) e
exporta em PDF de nível premium.

> **Regra de marca (importante):** um relatório vai PARA o cliente → carrega a marca **VETORA**.
> Conteúdo que o cliente PUBLICA (post, carrossel, site) → usa o `identidade/` do próprio repo.
> Nunca aplicar a marca do cliente num relatório que a VETORA entrega.

## Dependências

- **Tom de voz:** `_memoria/preferencias.md` (consultivo, claro, sem buzzwords)
- **Contexto:** `_memoria/empresa.md`, `_memoria/estrategia.md`
- **Marca VETORA:** resolvida do container (ver Passo 1) — **não** vem do `identidade/` do cliente
- **Motor de export:** `<container>/scripts/render-report-pdf.js` + `report-template.html` (Playwright)

---

## Passo 1 — Resolver a marca VETORA (ponte de container)

O repo de cliente está aninhado sob o container VETORA. A marca para entregáveis vive **no
container**, não no `identidade/` do cliente. Para encontrá-la:

1. A partir do diretório de trabalho, **subir na árvore de pastas** até achar o arquivo
   marcador `.vetora-container`. O diretório que o contém é o **`$CONTAINER`**.

   ```bash
   dir="$PWD"; while [ "$dir" != "/" ]; do \
     [ -f "$dir/.vetora-container" ] && echo "$dir" && break; dir="$(dirname "$dir")"; done
   ```

2. Com o container achado, os assets de marca são:
   - Logo (capa, fundo escuro): `$CONTAINER/identidade/logo-vetora/4-Logo horizontal monocromática branca-semfundo.png`
   - Paleta/tipografia: já embutidas no template (navy `#0B1F3B`, cyan `#00A6A6`, ice `#F5F7FA`, Sora + Inter)
   - Motor: `$CONTAINER/scripts/render-report-pdf.js` e `$CONTAINER/scripts/report-template.html`
   - Rodapé: campo `rodape` do `.vetora-container` (`Produzido por VETORA · vetora.com.br`)

3. **Fallback gracioso** — se o marcador NÃO for encontrado (repo clonado fora do container):
   > "⚠️ Este repo está fora do container VETORA — não encontrei `.vetora-container` na árvore.
   > Vou gerar o relatório com branding genérico (sem logo VETORA). Para a marca completa, rode
   > de dentro do container."

   Seguir mesmo assim: usar o template sem logo e com rodapé neutro. **Nunca quebrar.**

---

## Passo 2 — Entrada

Perguntar (ou inferir do pedido):

- **Tipo:** performance · ads · auditoria · estratégia · diagnóstico · prestação de contas
- **Cliente:** nome visível (default: ler de `_memoria/empresa.md`)
- **Período:** ex. "12/05 a 18/05 de 2026" (ou data única / "—" se não se aplica)
- **Insumos:** CSVs, prints, números, anotações, links — ou o conteúdo já redigido

Se faltar insumo crítico, perguntar antes de escrever. **Nunca inventar números.**

---

## Passo 3 — Escrever o relatório (markdown)

Estrutura padrão (adaptar ao tipo):

```markdown
## Resumo executivo
Uma página, leitura de 2 minutos. O que mais importa primeiro.

## [Seções específicas do tipo]
Performance → KPIs + variação · Auditoria → gaps priorizados ·
Estratégia → direção + plano · Diagnóstico → achados + impacto.

## Recomendações
Lista curta (3–5) de ações concretas, com responsável/prazo quando fizer sentido.
```

**Tom:** consultivo e direto (ver `preferencias.md`). Sem buzzwords. Número solto não diz nada
sem comparativo. Quando houver perda/risco, nomear sem amenizar.

Salvar o markdown em:
```
saidas/relatorios/<YYYY-MM-DD>-<tipo>-<slug>.md
```
com frontmatter (`tipo`, `cliente`, `periodo_inicio`, `periodo_fim`, `emitido_em`).

---

## Passo 4 — Montar o HTML de marca

1. Ler o template: `$CONTAINER/scripts/report-template.html`.
2. Converter o corpo markdown (Passo 3) em HTML e substituir os placeholders:
   - `{{TIPO}}` → eyebrow (ex: "Relatório de performance")
   - `{{TITULO}}` → título do relatório
   - `{{CLIENTE}}` → nome do cliente
   - `{{PERIODO}}` → período
   - `{{DATA}}` → data de emissão (DD/MM/AAAA)
   - `{{LOGO}}` → `file://` ABSOLUTO da logo branca do container (vazio no fallback)
   - `{{CONTEUDO}}` → HTML do corpo
3. Recursos visuais disponíveis no template (usar quando agregar):
   - **KPIs:** `<div class="kpis"><div class="kpi"><span class="rotulo">CPA</span><span class="valor">R$ 12</span><span class="delta down">▼ 18%</span></div>…</div>`
   - **Alertas:** `<div class="alerta vermelho"><span class="rotulo">Queima de orçamento</span> texto…</div>` · `.amarelo` · `.verde` (o marcador colorido é CSS — **nunca usar emoji**, o design-guide proíbe em material institucional)
   - **Tabelas, blockquote, código** já estilizados — usar markdown→HTML normal.
4. Gravar o HTML montado em `saidas/relatorios/.build/<nome>.html` (pasta de trabalho).

---

## Passo 5 — Exportar PDF

```bash
node "$CONTAINER/scripts/render-report-pdf.js" \
  "saidas/relatorios/.build/<nome>.html" \
  "saidas/relatorios/<YYYY-MM-DD>-<tipo>-<slug>.pdf"
```

O motor injeta o rodapé "Produzido por VETORA · vetora.com.br" + numeração em **todas** as
páginas e renderiza em A4 com a paleta e as fontes VETORA.

Se o Playwright não estiver instalado, o motor avisa o comando de setup
(`npm install playwright && npx playwright install chromium`) — guiar o usuário.

---

## Passo 6 — Entrega

Mostrar o resumo executivo no chat e apontar os arquivos:

> "Relatório pronto: `saidas/relatorios/<nome>.pdf` (marca VETORA, <N> páginas).
> Markdown-fonte em `saidas/relatorios/<nome>.md`. Quer que eu envie por email pro cliente?"

Se sim, chamar `/email-profissional` com o resumo + anexo.

---

## Regras

- **Marca VETORA, nunca a do cliente.** Entregável = VETORA. Conteúdo publicado = cliente.
- **Nunca inventar números.** Dado truncado → "dados incompletos" e seguir com o que há.
- **Comparação é o que importa.** Todo número-chave com seu comparativo/contexto.
- **Premium de verdade.** Capa, hierarquia tipográfica, respiro. Referência: McKinsey/Palantir/Linear.
- **Fallback nunca quebra.** Sem container → branding genérico + aviso, mas gera o PDF.
- **Uma fonte de marca.** Não duplicar paleta/rodapé na skill — vêm do template e do `.vetora-container`.
