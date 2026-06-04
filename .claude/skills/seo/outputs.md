# Outputs — /seo

## Diretório de saída

`marketing/seo/`

## Arquivos gerados

| Arquivo | Conteúdo | Consumido por |
|---------|----------|---------------|
| `01-pesquisa-demanda.md` | Volume, dificuldade e intenção de busca das palavras-chave principais | `/anuncio-google`, `/publicar-tema` |
| `02-analise-concorrencia.md` | Sites concorrentes, gaps de conteúdo, oportunidades | `/publicar-tema` |
| `03-gmb.md` | Checklist e textos otimizados para Google Meu Negócio | — |
| `04-otimizacao-on-page.md` | Títulos, meta descriptions, H1/H2 recomendados | — |
| `05-estrategia-conteudo.md` | Calendário editorial e temas priorizados por volume e conversão | `/publicar-tema` |
| `06-google-ads.md` | Recomendações de campanha, grupos de anúncio, lances | `/anuncio-google` |
| `07-monitoramento.md` | KPIs, alertas e cadência de revisão | `/relatorio-ads` |
| `08-geo-otimizacao-ia.md` | Estratégia para aparecer em respostas de IAs (ChatGPT, Gemini, Perplexity) | — |

## Como consumir em outra skill

```markdown
Verificar se `marketing/seo/01-pesquisa-demanda.md` existe e ler antes de montar a campanha.
Verificar se `marketing/seo/05-estrategia-conteudo.md` existe e alinhar os temas com o calendário.
```

## Notas

- Os arquivos são gerados em etapas: o usuário pode rodar `/seo` parcialmente e retomar depois.
- Se os arquivos já existirem de uma sessão anterior, `/seo` pergunta se deve atualizar ou usar o existente.
- `/anuncio-google` funciona sem o output do `/seo`, mas com qualidade inferior (sem pesquisa de palavras-chave base).
