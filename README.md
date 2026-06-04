# VetoraOS

> O sistema operacional do negócio VETORA, rodando dentro do Claude Code.

VetoraOS é uma instância customizada do MazyOS — estruturado especificamente para o estúdio de branding, sites e IA da VETORA. Memória, identidade e skills calibradas para o contexto do negócio.

---

## Estrutura do sistema

```
_memoria/       cérebro do negócio (empresa, preferências, estratégia)
identidade/     identidade visual (design-guide, logo, fontes)
site/           landing pages e páginas web publicáveis
marketing/      saídas persistentes (conteúdo, SEO, campanhas, módulos)
dados/          drop zone de entrada (CSVs, PDFs, planilhas — temporário)
saidas/         saídas pontuais (análises, emails, relatórios avulsos)
scripts/        utilitários Node.js/Python chamados pelas skills
templates/      templates de skills e catálogo de skills externas
```

---

## Skills ativas

**Operação**
`/abrir` · `/salvar` · `/atualizar` · `/novo-projeto` · `/mapear-rotinas` · `/instalar`

**Conteúdo e SEO**
`/carrossel` · `/seo` · `/copywriting` · `/pagina-de-vendas` · `/responder-avaliacoes` · `/aprovar-post`

**Anúncios**
`/anuncio-google` · `/relatorio-ads`

**Design**
`/ui-ux-pro-max` · `/ux`

**Análise e produção**
`/analisar-dados` · `/email-profissional` · `/ab-teste` · `/analytics`

**QA e ops**
`/qa-expert` · `/ops`

---

## Produto principal

**Kit VETORA** — infoproduto de 8 módulos para marcas e negócios que querem posicionamento estratégico.

- Módulos em `marketing/kit-vetora/modulos/`
- Landing page em `site/kit-vetora/`

---

## Repositório

`https://github.com/fernandohbranco/Vetora-business.git` (branch `main`)
