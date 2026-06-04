---
name: mapear-rotinas
description: >
  Mapeia tarefas repetitivas que o usuário faz no dia a dia e gera skills personalizadas pra
  automatizá-las. Faz uma entrevista curta sobre o que o usuário repete toda semana, propõe
  skills concretas e cria as aprovadas em `.claude/skills/`. Use quando o usuário pedir
  "/mapear-rotinas", "criar skills personalizadas", "automatizar minhas tarefas" ou "o que dá pra automatizar".
---

# /mapear-rotinas — Mapeamento de tarefas repetitivas em skills

Skill de descoberta + criação. O objetivo é transformar o que o usuário repete em automações ativas.

## Workflow

### Passo 1 — Entrevista de descoberta

Fazer 3 perguntas, uma por vez:

1. "Quais 3 tarefas você repete toda semana e gostaria de não ter que pensar mais? (ex: 'criar carrossel', 'mandar relatório pro cliente', 'fazer briefing')"
2. "Pra cada uma delas, qual o input típico? (ex: 'um link de notícia', 'um arquivo de planilha', 'um nome de cliente')"
3. "E o que você espera de output? (ex: '5 slides em PNG', 'um email pronto pra enviar', 'um PDF resumindo')"

### Passo 2 — Conferir skills existentes

Verificar em duas fontes antes de propor uma skill nova:

1. Ler `.claude/skills/AGENTS.md` pra ver se a tarefa já é coberta por uma skill ativa no VetoraOS
2. Ler `templates/skills/catalogo.md` pra ver skills nativas do Claude Code ou validadas

Se a tarefa já tiver cobertura, sugerir a skill existente:

> "A tarefa X já é resolvida pela skill `/<nome>`. Quer usar ela em vez de criar uma nova?"

### Passo 3 — Proposta de skills

Pra cada tarefa que NÃO tem cobertura existente, propor uma skill no formato:

```
### /<nome-da-skill>
**O que faz:** [uma frase]
**Input:** [o que recebe]
**Output:** [o que entrega]
**Dependências:** [arquivos do _memoria/, identidade/, ou ferramentas externas]
```

Mostrar todas as propostas juntas e perguntar:
> "Quais skills dessa lista você quer que eu crie agora? (pode escolher todas, algumas, ou nenhuma — também pode pedir ajustes)"

### Passo 4 — Criação das skills aprovadas

Pra cada skill aprovada:

1. Criar pasta `.claude/skills/<nome>/`
2. Criar `SKILL.md` com:
   - Frontmatter: `name`, `description` (descreve quando deve ser invocada — inclui frases de gatilho)
   - Contexto automático via `!`command`` para injetar `_memoria/empresa.md` e `preferencias.md`
   - Workflow estruturado em fases ou passos numerados
   - Regras claras (o que sempre fazer, o que nunca fazer)
   - Seção "Skills relacionadas" listando quais skills essa interage
3. Criar `outputs.md` documentando o que a skill produz:
   - Diretório de saída (ou "inline" se só gerar texto no chat)
   - Arquivos gerados e quem os consome
4. Se a skill precisar de templates ou exemplos, criar dentro da pasta da skill
5. Calibrar o tom e regras conforme `_memoria/preferencias.md` e `_memoria/empresa.md`
6. Registrar a nova skill em `.claude/skills/AGENTS.md`:
   - Adicionar linha na tabela da camada correta (C1, C2 ou C3)
   - Adicionar no grafo de dependências se chamar ou for chamada por outra skill

### Passo 5 — Resumo

```
Criei [N] skills:
✓ /<nome1> — em .claude/skills/<nome1>/SKILL.md
✓ /<nome2> — em .claude/skills/<nome2>/SKILL.md
...

Pra usar: digita / e o nome da skill em qualquer sessão.
Pra ajustar uma skill depois: edita o SKILL.md correspondente.
```

## Regras

- Não criar skill pra tarefa que aconteceu uma vez só. Tem que ser repetível
- Não criar mais de 5 skills por sessão de mapeamento (se o usuário pedir mais, dividir em rodadas)
- Cada skill criada precisa ter um trigger claro (`description` precisa indicar quando invocar) — sem isso a skill nunca é encontrada
- Se a skill depender de uma ferramenta que o usuário não tem (ex: API do Notion sem MCP configurado), avisar antes de criar e oferecer a versão simplificada
