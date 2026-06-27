# VetoraOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do VetoraOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Para descobrir qual skill usar, consultar `.claude/skills/AGENTS.md`
— o mapa completo de todas as skills, o que cada uma faz e como se
relacionam. Se o usuário não souber por onde começar ou precisar
encadear múltiplas skills, a skill `/ops` atua como orquestrador e
roteia para o caminho certo.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Marca: VETORA vs cliente

Regra de marca que vale para **toda** skill que gera material:

| Tipo de material | Marca a aplicar | Fonte |
|---|---|---|
| Entregável que a VETORA **entrega** a este cliente (relatório, proposta, análise) | Marca **VETORA** | container (`.vetora-container` na árvore acima) |
| Conteúdo que o cliente **publica** (post, site, carrossel, página) | Identidade do **próprio cliente** | `identidade/` deste repo |

As skills sobem a árvore de pastas a partir do diretório de trabalho até
encontrar o marcador `.vetora-container` — esse é o container VETORA, fonte
da marca dos entregáveis. Se este repo for clonado **fora** do container,
o resolver cai num fallback genérico e avisa, sem quebrar.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Criar `outputs.md` junto com o `SKILL.md` documentando o que a skill produz
6. Registrar a skill nova em `.claude/skills/AGENTS.md`
7. Seguir o fluxo da skill-creator nativa do Claude Code

> As skills operacionais deste repo são **canônicas do container VETORA** e
> chegam aqui via `/sync-skills`. Editar uma skill operacional direto neste
> cliente será sobrescrito no próximo sync — corrija na fonte
> (`templates/skills-cliente/` do container). Skills criadas só para este
> cliente são preservadas (o sync é aditivo, nunca destrutivo).

---

## Arquitetura de agentes

O VetoraOS opera como uma rede de agentes organizados em 3 camadas.
Consultar `.claude/skills/AGENTS.md` para o mapa completo.

**Camada 1 — Contexto:** `abrir`, `atualizar`, `instalar`, `salvar`
Leem e escrevem o estado do negócio. Nunca criam conteúdo final.

**Camada 2 — Especialistas:** `ux`, `ui-ux-pro-max`, `carrossel`, `seo`,
`anuncio-google`, `relatorio-ads`, `copywriting`, `analytics`, `ab-teste`,
`email-profissional`, `responder-avaliacoes`, `analisar-dados`
Cada um domina uma única área. Podem ser chamados diretamente ou por
skills de Camada 3.

**Camada 3 — Orquestradores:** `pagina-de-vendas`, `publicar-tema`,
`aprovar-post`, `mapear-rotinas`, `novo-projeto`, `ops`
Coordenam múltiplos especialistas para entregar workflows compostos.
Nunca replicam a lógica de um especialista — apenas o chamam.

**Regra ao criar skill nova:** identificar se ela é Camada 2 (faz uma
coisa só) ou Camada 3 (coordena outras). Skills de Camada 3 chamam
skills de Camada 2 explicitamente, sem replicar a lógica delas.

---

## Grafo de dependências simplificado

```
/seo → outputs em marketing/seo/
  ├─ lido por /anuncio-google
  └─ lido por /publicar-tema

/ui-ux-pro-max → identidade/design-system/MASTER.md
  ├─ lido por /carrossel
  ├─ lido por /pagina-de-vendas
  └─ lido por /ux

/carrossel → marketing/conteudo/<tema>/
  ├─ chama /ux (revisão inline)
  └─ lido por /aprovar-post

/pagina-de-vendas → chama /ui-ux-pro-max (se necessário) + /ux
/publicar-tema → chama /carrossel
/ops → Workflow Engine: planeja fases, persiste estado em _estado/, executa qualquer skill
```

Para o grafo completo e atualizado, ver `.claude/skills/AGENTS.md`.
