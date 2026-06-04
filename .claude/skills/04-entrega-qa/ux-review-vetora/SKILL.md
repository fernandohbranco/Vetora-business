---
name: ux-review-vetora
description: |
  Revisão de UX/UI de qualquer material visual web — site, landing page, carrossel ou
  apresentação — com o padrão VETORA de qualidade premium. Avalia 9 dimensões de UX e
  entrega um relatório com pontuação e ajustes priorizados.
  Fase 4 do Método VETORA. Use ao final da Fase 3 (Construção) antes de entregar ao cliente.
  Use quando o usuário disser "revisar o UX", "como ficou visualmente", "avalia o design",
  "UX do site", "/ux-review-vetora".
---

# /ux-review-vetora — Revisão de UX VETORA

Auditoria visual e de experiência do usuário com o padrão de qualidade premium VETORA. Avalia em 9 dimensões e entrega um relatório acionável.

## Quando ativar

- Ao final de qualquer criação visual (site, LP, carrossel, apresentação)
- Quando o usuário quiser saber se o design está bom antes de entregar
- Quando o `vetora-qa-checklist` indicar revisão de UX necessária
- Quando o usuário disser "revisar o design", "como ficou visualmente", "avalia o UX"

## O que faz

Avalia o material em 9 dimensões de UX/UI (hierarquia visual, legibilidade, consistência, conversão, mobile, velocidade percebida, identidade, acessibilidade visual, confiança). Entrega nota por dimensão e lista de ajustes priorizados.

## O que NÃO faz

- Não cria nada novo — revisa o que foi criado
- Não faz auditoria técnica — isso é `web-qa-technical-vetora`
- Não valida copy ou estratégia — isso é `vetora-qa-checklist` e `vetora-brand-os`

## Contexto VETORA obrigatório

Antes de revisar, consultar:
- `vetora-design-system` — padrão visual de referência
- `vetora-brand-os` — identidade de marca para validar consistência

## As 9 Dimensões de UX VETORA

O padrão de avaliação é: "Seria aprovado em um projeto de $10.000?"

### 1. Hierarquia Visual
O olhar do usuário percorre a página na ordem certa? (hero → benefício → prova → CTA)
- O elemento mais importante é o mais destacado?
- A progressão visual guia até o CTA?

### 2. Legibilidade
O texto é fácil de ler em todas as condições?
- Contraste adequado (WCAG AA: 4.5:1 para texto normal)?
- Tamanho de fonte mínimo 16px para corpo?
- Line-height adequado (1.5-1.7 para corpo)?
- Largura de linha confortável (máx. 70-75 caracteres)?

### 3. Consistência
A identidade visual é consistente do início ao fim?
- Paleta de cores respeitada em todas as seções?
- Tipografia consistente (Sora para títulos, Inter para corpo)?
- Espaçamentos e ritmo visual harmônicos?

### 4. Conversão
O material guia o usuário até a ação desejada?
- CTA principal visível above the fold?
- CTA repetido em pontos estratégicos (início, meio, fim)?
- Friccção mínima entre intenção e ação?

### 5. Mobile
Funciona bem em telas pequenas (375px-390px)?
- Texto legível sem zoom?
- Botões grandes o suficiente para toque (mín. 44px)?
- Nenhum elemento cortado ou sobreposto?

### 6. Velocidade Percebida
O design transmite agilidade e profissionalismo?
- Sem elementos desnecessários que "pesam" visualmente?
- Espaço em branco usado estrategicamente?
- Carregamento percebido como rápido (primeiros elementos visíveis)?

### 7. Identidade de Marca
O material é reconhecivelmente VETORA (ou do cliente, se for projeto de cliente)?
- Logo presente e correto?
- Tom visual premium e consultivo — não de agência genérica?
- Cores, fontes e estilo coerentes com o design guide?

### 8. Acessibilidade Visual
O design inclui usuários com limitações visuais?
- Não depende apenas de cor para transmitir informação?
- Ícones com label ou alt text?
- Contraste suficiente para daltonismo?

### 9. Confiança
O design transmite credibilidade e autoridade?
- Prova social (logo de clientes, depoimentos, números)?
- Fotos ou ilustrações profissionais — nada de banco de imagens genérico?
- Nenhum elemento que "parece amador" (clichê de agência, clipart, gradiente kitsch)?

---

## Processo

### Passo 1 — Receber o material

Pedir ao usuário o arquivo a revisar:
- HTML (para sites e LPs)
- URL pública
- PNG ou PDF (para carrosséis e apresentações)
- Link Figma ou Canva

### Passo 2 — Avaliar as 9 dimensões

Para cada dimensão, atribuir:
- ✅ Aprovado (sem ajustes)
- ⚠️ Atenção (pequeno ajuste recomendado)
- 🔴 Crítico (necessário antes de entregar)

### Passo 3 — Listar ajustes

Para cada item não aprovado:
- Descrição específica do problema
- Ajuste sugerido (concreto, não vago)
- Prioridade (bloqueante / importante / desejável)

### Passo 4 — Dar o veredicto

- **Pontuação geral:** X/9 dimensões aprovadas
- **Veredicto:** ✅ Aprovado / ⚠️ Aprovado com ressalvas / 🔴 Ajustes necessários

## Critérios de aceite

- [ ] Todas as 9 dimensões foram avaliadas
- [ ] Ajustes descritos com especificidade (não "melhore o contraste" — "o texto cinza #999 sobre branco tem contraste 2.8:1, abaixo do mínimo WCAG AA de 4.5:1")
- [ ] Veredicto claro dado ao usuário
- [ ] Tom construtivo — apontar o problema e a solução, não só criticar

## Output padrão

Relatório inline com: tabela das 9 dimensões (status + nota), lista de ajustes priorizados, veredicto final com pontuação.

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial, baseada em ui-ux-pro-max (como reviewr, não gerador)
