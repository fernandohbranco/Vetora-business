# Outputs — /ui-ux-pro-max

## Diretório de saída

`identidade/design-system/`

## Arquivos gerados

| Arquivo | Conteúdo | Consumido por |
|---------|----------|---------------|
| `MASTER.md` | Sistema visual completo: estilo, 5 cores primárias, tipografia (escala), componentes (botões, cards, inputs), dark mode, espaçamento, motion | `/carrossel`, `/pagina-de-vendas`, `/ux` |
| `pages/<nome>.md` | Override de estilo para página específica (ex: `pages/landing-page.md`, `pages/blog.md`) | `/pagina-de-vendas` |

## Como consumir em outra skill

```markdown
# Em /carrossel e /pagina-de-vendas:
Verificar se `identidade/design-system/MASTER.md` existe.
  Se sim  → usar cores, tipografia e componentes definidos lá.
  Se não  → derivar estilo diretamente de `identidade/design-guide.md`.

# Em /ux:
Ler `identidade/design-system/MASTER.md` para avaliar aderência ao sistema visual definido.
```

## Notas

- `MASTER.md` é **opcional**. O sistema funciona sem ele, mas `/carrossel` e `/pagina-de-vendas` produzem resultados com maior precisão visual quando ele existe.
- Recomendado rodar `/ui-ux-pro-max` **antes** de criar conteúdo visual pela primeira vez.
- O arquivo `MASTER.md` é gerado com base em 50+ estilos, 161 paletas de cores e 57 font pairings catalogados na skill.
