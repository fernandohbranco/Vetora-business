# Sprint 01 — Landing Premium

**Fase:** Pré-lançamento | **Esforço:** 8-12h | **Prioridade:** 1 de 9

---

## Contexto

O Kit VETORA vende branding. O argumento central é que a sua marca pode comunicar melhor o que você entrega. Mas a landing page atual — tecnicamente correta, WCAG AA, mobile-first — não gera desejo. Quem chega nela não para o scroll. Não sente que quer aquilo para o próprio negócio.

Além disso, o copy dos módulos descreve o que está incluído (features), não o que o comprador conquista depois de aplicar (outcomes). Para o ICP técnico que pensa em ROI, isso é uma objeção implícita.

Se a landing não impressiona, o produto de branding perde credibilidade antes da primeira leitura.

---

## Objetivo

Ao final desse sprint, a landing page deve:

1. Fazer quem chega pensar "quero que o meu negócio tenha essa presença" — antes de qualquer botão de compra
2. Comunicar o resultado de cada módulo, não apenas o seu conteúdo
3. Usar animações, hierarquia visual e composição que demonstram sofisticação técnica — sem exagero

---

## Pré-requisitos

- Foto profissional de Fernando disponível (400×500px, tons frios — se não tiver, usar placeholder até o Sprint 07)
- Arquivo `site/kit-vetora/index.html` lido e entendido antes de editar
- Identidade visual consultada: `identidade/design-guide.md`
- Copy atual consultada: `site/kit-vetora/copy.md`

---

## Tarefas

### Hero (seção 1)
- [ ] Aumentar tamanho da headline principal — deve dominar o viewport sem scroll
- [ ] Adicionar subtexto de outcome logo abaixo da headline (o que o visitante ganha, não o que o produto tem)
- [ ] Criar composição visual de fundo — gradiente ou textura sutil que não compete com o texto
- [ ] Adicionar animação de entrada no Hero: fade-in + translate-up suave (300-400ms)

### Cards dos módulos (seção 5)
- [ ] Adicionar hover com elevação (box-shadow aumenta) + borda colorida no acento
- [ ] Reescrever a descrição de cada módulo com outcome em vez de feature — exemplo:
  - Antes: "Checklist de 30 perguntas em 6 blocos"
  - Depois: "Em 2-4h, você sabe exatamente onde sua marca perde percepção de valor — e por onde corrigir"
- [ ] Adicionar ícone visual mais trabalhado a cada card (ou número grande como elemento gráfico)

### Seções intermediárias
- [ ] Adicionar animações de scroll reveal em todas as seções abaixo do fold (fade + translate, threshold 0.15)
- [ ] Usar separadores de seção com gradiente em vez de divisores rígidos
- [ ] Revisar espaçamento entre seções — garantir ritmo visual (não tudo grudado, não tudo espaçado demais)

### Seção Autoridade (seção 8)
- [ ] Integrar foto de Fernando ao design — não como img solta, mas como elemento composto (foto + fundo colorido + texto sobreposto ou ao lado)
- [ ] Adicionar linha de credencial visual (ícones de empresa + Docol, projetos)
- [ ] Reescrever os 3 cases com ao menos 1 frase de resultado qualitativo cada (alimentar com dados do Sprint 02)

### Seção "Antes e Depois" (nova)
- [ ] Criar uma seção simples entre Método e Autoridade mostrando o contraste: marca genérica vs. marca com método
- [ ] Pode ser visual (dois cards lado a lado) ou textual (dois estados descritos em contraste)
- [ ] Não precisa de case real — é conceitual

### Seção Oferta (seção 9)
- [ ] Ajustar countdown — remover lógica de localStorage por enquanto (deixar campo sem countdown até o Sprint 06 definir a data real)
- [ ] Garantir que o pricing card comunica o valor antes do preço (âncora correta)

### Geral
- [ ] Rodar Lighthouse após edições (meta: >90 em Performance, Accessibility, Best Practices, SEO)
- [ ] Testar em mobile 375px — verificar que todas as animações funcionam sem travar
- [ ] Verificar contraste WCAG AA em todos os textos novos

---

## Arquivos envolvidos

- `site/kit-vetora/index.html` — arquivo principal a editar
- `site/kit-vetora/copy.md` — referência de copy (não editar, só ler)
- `identidade/design-guide.md` — referência de identidade visual

---

## Critério de conclusão

- [ ] Hero domina o viewport com impacto visual imediato
- [ ] Todos os módulos têm descrição de outcome, não apenas de feature
- [ ] Animações de entrada funcionam em desktop e mobile sem janking
- [ ] Hover nos cards funciona corretamente
- [ ] Seção "Antes e Depois" criada
- [ ] Foto de Fernando integrada ao design (ou placeholder marcado claramente)
- [ ] Countdown de localStorage removido (aguarda Sprint 06)
- [ ] Lighthouse >90 em todas as métricas
- [ ] Revisão visual em 375px, 768px e 1280px

---

## Notas e referências

- Paleta de cores da VETORA: Azul Vetor `#0B1F3B`, Ciano `#00A6A6`, Branco Gelo `#F5F7FA`, Grafite `#1E252B`, Verde `#00A86B`
- Fontes: Sora (títulos) + Inter (corpo)
- Ícones: sempre lineares, nunca preenchidos com gradiente
- Animações: prefira `opacity` + `transform` — são aceleradas por GPU e não causam reflow
- Referência de nível visual a buscar: landing pages de produtos como Linear, Framer, Resend — sofisticação sem ruído
- Copy dos outcomes deve manter o tom consultivo — sem promessas mágicas, sem "resultado garantido"
