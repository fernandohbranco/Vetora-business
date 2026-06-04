# Outputs — /carrossel

## Diretório de saída

`marketing/conteudo/<tipo>-<tema>-<YYYY-MM-DD>/`

Onde `<tipo>` é: `carrossel`, `post`, `stories` conforme o formato escolhido.

## Arquivos gerados

| Arquivo | Conteúdo | Consumido por |
|---------|----------|---------------|
| `slide-01.html` … `slide-N.html` | HTML de cada slide (1080×1350 px) | Playwright (renderiza para PNG) |
| `instagram/slide-01.png` … `slide-N.png` | PNGs renderizados prontos para Instagram | `/aprovar-post` |
| `legenda.md` | Legenda + hashtags para Instagram e Facebook | `/aprovar-post` |
| `legenda-linkedin.md` | Versão adaptada para LinkedIn (tom mais formal, sem hashtags em excesso) | — |

## Como consumir em outra skill

```markdown
# Em /aprovar-post:
Ler `marketing/conteudo/<slug>/instagram/slide-*.png` → copiar para `site/public/img/posts/<slug>/`
Ler `marketing/conteudo/<slug>/legenda.md` → usar como caption no post do Instagram/Facebook
```

## Notas

- PNGs são gerados via Playwright (`scripts/render.js`). Se o Playwright não estiver instalado, `/carrossel` entrega apenas os HTMLs e instrui o usuário a renderizar manualmente.
- A pasta de destino é criada automaticamente pelo `/carrossel`.
- `/publicar-tema` chama `/carrossel` internamente e usa este output para montar o pacote completo de conteúdo.
