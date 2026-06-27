# Outputs — /relatorio

| O que produz | Onde |
|---|---|
| Relatório-fonte (markdown, com frontmatter) | `saidas/relatorios/<YYYY-MM-DD>-<tipo>-<slug>.md` |
| PDF de marca VETORA (capa + paleta + rodapé em todas as páginas) | `saidas/relatorios/<YYYY-MM-DD>-<tipo>-<slug>.pdf` |
| HTML intermediário (montado a partir do template) | `saidas/relatorios/.build/<nome>.html` |
| Resumo executivo | inline no chat |

## Depende do container (marca VETORA)

A marca é resolvida do container via marcador `.vetora-container` (sobe na árvore de pastas):

- Logo: `<container>/identidade/logo-vetora/4-Logo horizontal monocromática branca-semfundo.png`
- Motor: `<container>/scripts/render-report-pdf.js`
- Template: `<container>/scripts/report-template.html`
- Rodapé: campo `rodape` do `.vetora-container`

**Fallback:** sem container na árvore → branding genérico (sem logo) + aviso, mas gera o PDF.

## Marca: VETORA, não cliente

Relatório é entregável que vai PARA o cliente → marca VETORA. Não confundir com `identidade/`
do repo (marca do cliente, usada só em conteúdo que o cliente PUBLICA).

## Relação com outras skills

- `/relatorio-ads` reaproveita o resolver de marca e o motor de export desta skill.
- `/email-profissional` pode ser chamada na entrega para enviar o PDF ao cliente.
