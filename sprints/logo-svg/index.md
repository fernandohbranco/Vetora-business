# Logo SVG — Quadro de Sprints

**Status geral:** Em andamento | **Total de arquivos SVG:** 14 | **Total de sprints:** 6

---

## Board

| Sprint | Nome | SVGs | Status | Esforço |
|---|---|---|---|---|
| [logo-svg-01](logo-svg-01-simbolo.md) | Símbolo isolado | 3 | `[ ] Pendente` | 1-2h |
| [logo-svg-02](logo-svg-02-favicon.md) | Favicon simplificado | 3 | `[ ] Pendente` | 1h |
| [logo-svg-03](logo-svg-03-horizontal.md) | Logo horizontal | 4 | `[ ] Pendente` | 1-2h |
| [logo-svg-04](logo-svg-04-vertical.md) | Logo vertical | 2 | `[ ] Pendente` | 0.5-1h |
| [logo-svg-05](logo-svg-05-wordmark.md) | Wordmark isolado | 1 | `[ ] Pendente` | 0.5h |
| [logo-svg-06](logo-svg-06-assinatura.md) | Logo com assinatura | 1 | `[ ] Pendente` | 0.5h |

**Total estimado:** 4.5–7.5h

---

## Sequência recomendada

```
01-simbolo  ──►  02-favicon
     │
     └──►  03-horizontal  ──►  04-vertical
                │
                └──►  05-wordmark  ──►  06-assinatura
```

Sprint 01 define a geometria-base. Todas as outras reutilizam ou adaptam essa geometria.

---

## Saída dos SVGs

Todos os arquivos SVG são salvos em:
```
identidade/logo-vetora/svg/
```

Nomenclatura espelha os PNGs originais:
```
7-simbolo-colorido.svg
8-simbolo-azul.svg
9-simbolo-branco.svg
12-favicon-colorido.svg
13-favicon-mono-claro.svg
14-favicon-mono-escuro.svg
1-logo-horizontal-colorida.svg
2-logo-horizontal-negativa.svg
3-logo-horizontal-mono-azul.svg
4-logo-horizontal-mono-branca.svg
5-logo-vertical-colorida.svg
6-logo-vertical-negativa.svg
10-wordmark-azul.svg
11-logo-assinatura.svg
```

---

## Verificação global (após todas as sprints)

- [ ] Abrir cada SVG diretamente no Chrome e no Safari
- [ ] Escalar de 16px a 1000px — sem pixelização
- [ ] Comparar lado a lado com o PNG equivalente
- [ ] Testar versões negativas sobre fundo escuro real (`#0B1F3B`)
- [ ] Verificar que `viewBox` não corta nenhuma borda

---

## Referências

- Design guide: `identidade/design-guide.md`
- PNGs originais: `identidade/logo-vetora/`
- Cores: Azul Vetor `#0B1F3B` · Ciano `#00A6A6` · Branco Gelo `#F5F7FA` · Grafite `#1E252B`
- Fonte: Sora Bold 700 (títulos/wordmark) · Inter 400 (tagline)
