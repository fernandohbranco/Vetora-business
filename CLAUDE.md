# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Arquitetura do sistema

O VetoraOS é um sistema operacional de negócio baseado em arquivos. Não tem código de aplicação — é composto por memória, identidade, skills e outputs.

```
_memoria/       cérebro do negócio (empresa, preferências, estratégia)
identidade/     identidade visual (design-guide.md, logo, fontes)
dados/          drop zone de entrada (CSVs, PDFs, planilhas — input temporário)
marketing/      saídas persistentes de marketing (conteúdo, SEO, campanhas, anúncios)
site/           landing pages e páginas web do projeto
saidas/         saídas pontuais (análises, emails, relatórios avulsos)
scripts/        utilitários Node.js/Python que skills chamam (render, publicação social)
templates/      templates de skills e catálogo de skills externas disponíveis
```

Skills locais ficam em `.claude/skills/` (específicas do projeto). Skills globais ficam em `~/.claude/skills/` (disponíveis em qualquer projeto).

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar `identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se chama X"). Só perguntar quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill nova, mudança de foco, processo novo, ferramenta instalada, estrutura alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
   - Skills visuais (UX, design, carrossel, landing page) ficam **sempre locais** — dependem do `identidade/design-guide.md` de cada projeto
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos), criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

O catálogo de skills externas prontas pra instalar está em `templates/skills/catalogo.md`.

---

## Scripts e integrações

Scripts externos ficam em `scripts/`. A pasta começa vazia — cada skill que precisa de script guia o setup.

Pré-requisitos para as skills que geram imagem ou publicam em redes sociais:
- **Node.js 20+**
- **Playwright** (`npm install playwright && npx playwright install chromium`) — para renderizar carrosséis em PNG
- **`.env` na raiz** com as chaves:
  - `OPENAI_API_KEY` — geração de imagem via DALL-E 3
  - `META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID` — publicação no Instagram/Facebook
  - `SITE_URL` — URL do site para o `/aprovar-post`

Quando uma skill precisar de script ausente, detectar a falta, perguntar se quer configurar agora, guiar o setup e criar o script.
