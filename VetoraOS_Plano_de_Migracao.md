# VetoraOS — Plano de Migração da Arquitetura de Skills

**Objetivo:** migrar a estrutura atual (23 skills genéricas) para a arquitetura VETORA (16 skills alinhadas ao método Diagnóstico → Direção → Construção → Entrega → Evolução), sem perder o que já funciona.

**Princípio operacional:** migração **não destrutiva e em ondas**. Nada é deletado de imediato. Skills aposentadas vão para `.claude/skills/_archived/` por 60 dias antes de remoção definitiva.

---

## 1. Diagnóstico da Estrutura Atual

### 1.1 O que está correto e permanece

| Pasta / Arquivo | Função | Decisão |
|---|---|---|
| `CLAUDE.md` | Instruções centrais do projeto | Manter, atualizar com referência ao método VETORA |
| `_memoria/empresa.md` | Contexto do negócio | Manter |
| `_memoria/estrategia.md` | Estratégia operacional | Manter |
| `_memoria/preferencias.md` | Preferências do founder | Manter |
| `identidade/` | Design guide + logos | Manter |
| `site/kit-vetora/` | Landing page institucional | Manter (é output) |
| `marketing/kit-vetora/` | 8 módulos de conteúdo | Manter (é output/produto) |
| `dados/`, `saidas/`, `scripts/` | Drop zone e utilitários | Manter |
| `templates/` | Catálogos e exemplos | Manter, atualizar catálogo de skills |
| `.claude/settings.json` | Config do Claude Code | Manter |
| `.claude/AGENTS.md` | Documentação dos agentes | Manter, atualizar com novo conjunto |

### 1.2 O que precisa de atenção

- A pasta `.claude/skills/` virou **uma gaveta de utilitários genéricos**. Skills sem identidade VETORA entregam resultado mediano porque não carregam paleta verbal, restrições visuais, frases-marca, método operacional.
- Existe confusão estrutural entre **kit-vetora como produto** (8 módulos institucionais) e **skills internas** (operação). Resolveremos com nota no `CLAUDE.md`.
- **8 das 23 skills são comandos**, não procedimentos: `abrir`, `salvar`, `atualizar`, `instalar`, `publicar-tema`, `ops`, `aprovar-post`, `mapear-rotinas`. Skills devem ser procedimentos com gatilho de ativação claro, não verbos.

---

## 2. Tabela de Migração das 23 Skills Atuais

Legenda dos destinos:
- **MANTER**: skill permanece com o nome atual, função clara.
- **RENOMEAR**: skill recebe nome novo alinhado ao método VETORA e ganha contexto da marca.
- **FUNDIR**: skill é incorporada como módulo dentro de outra skill VETORA.
- **ARQUIVAR**: vai para `.claude/skills/_archived/` por 60 dias. Pode voltar se demanda real aparecer.
- **APOSENTAR**: comando, não procedimento. Sai da pasta de skills.

| # | Skill Atual | Análise | Destino | Nova Localização / Nome |
|---|---|---|---|---|
| 1 | `ab-teste` | Específica de growth, fora do escopo imediato | ARQUIVAR | `_archived/ab-teste` |
| 2 | `abrir` | Verbo, não skill | APOSENTAR | — |
| 3 | `analisar-dados` | Genérica, sem método VETORA | ARQUIVAR | `_archived/analisar-dados` |
| 4 | `analytics` | Genérica | FUNDIR | Vira módulo de `digital-presence-audit` |
| 5 | `anuncio-google` | Específica de mídia paga, fora do escopo atual | ARQUIVAR | `_archived/anuncio-google` |
| 6 | `aprovar-post` | Workflow, não procedimento técnico | APOSENTAR | — |
| 7 | `atualizar` | Verbo | APOSENTAR | — |
| 8 | `carrossel` | Útil e recorrente, mas genérica | RENOMEAR | `social-carousel-builder` (com contexto VETORA) |
| 9 | `copywriting` | Útil mas sem identidade verbal VETORA | RENOMEAR | `vetora-copywriter` |
| 10 | `email-profissional` | Útil pontualmente | FUNDIR | Vira módulo de `vetora-copywriter` |
| 11 | `instalar` | Verbo | APOSENTAR | — |
| 12 | `mapear-rotinas` | Pontual, sem recorrência clara | ARQUIVAR | `_archived/mapear-rotinas` |
| 13 | `novo-projeto` | Útil, vira parte do onboarding | FUNDIR | Vira módulo de `client-diagnosis` |
| 14 | `ops` | Vago demais | APOSENTAR | — |
| 15 | `pagina-de-vendas` | Útil e recorrente | RENOMEAR | `landing-page-cro-vetora` |
| 16 | `publicar-tema` | Comando técnico de deploy | APOSENTAR | (vira parte de `claude-code-handoff`) |
| 17 | `qa-expert` | Skill do usuário, útil como base técnica | MANTER + FUNDIR | Vira base do `web-qa-technical-vetora` |
| 18 | `relatorio-ads` | Fora do escopo atual | ARQUIVAR | `_archived/relatorio-ads` |
| 19 | `responder-avaliacoes` | Útil para clientes locais (Rancho 517) | ARQUIVAR | `_archived/responder-avaliacoes` (volta se demanda real) |
| 20 | `salvar` | Verbo | APOSENTAR | — |
| 21 | `seo` | Genérica | FUNDIR | Vira módulo de `web-qa-technical-vetora` e `site-architecture-vetora` |
| 22 | `ui-ux-pro-max` | Skill do usuário, útil como referência | MANTER + FUNDIR | Vira base do `vetora-design-system` |
| 23 | `ux` | Genérica | FUNDIR | Vira módulo de `ux-review-vetora` |

**Resumo numérico:** 3 mantidas como base, 3 renomeadas com contexto VETORA, 6 fundidas em skills novas, 5 arquivadas, 6 aposentadas.

---

## 3. Estrutura Final Proposta — VetoraOS v2

```
vetora/
│
├── CLAUDE.md                          ← atualizar com referência ao método VETORA
├── README.md
│
├── _memoria/                          ← (sem mudanças)
│   ├── empresa.md
│   ├── estrategia.md
│   └── preferencias.md
│
├── identidade/                        ← (sem mudanças)
│   ├── design-guide.md
│   ├── VETORA_Paleta_Tipografia.html
│   └── logo-vetora/
│
├── site/kit-vetora/                   ← (sem mudanças, é output)
├── marketing/kit-vetora/              ← (sem mudanças, é output)
├── dados/                             ← (sem mudanças)
├── saidas/                            ← (sem mudanças)
├── scripts/                           ← (sem mudanças)
│
├── templates/
│   ├── ferramentas/catalogo.md
│   ├── identidade/exemplos/
│   ├── perfis/
│   └── skills/catalogo.md             ← atualizar com as 16 skills VETORA
│
└── .claude/
    ├── settings.json
    ├── AGENTS.md                      ← atualizar
    ├── skills/                        ← 16 skills VETORA
    │   │
    │   ├── _archived/                 ← skills antigas em quarentena
    │   │   ├── ab-teste/
    │   │   ├── analisar-dados/
    │   │   ├── anuncio-google/
    │   │   ├── mapear-rotinas/
    │   │   ├── relatorio-ads/
    │   │   └── responder-avaliacoes/
    │   │
    │   ├── 00-nucleo/                 ← núcleo identitário
    │   │   ├── vetora-brand-os/
    │   │   ├── vetora-method/
    │   │   └── vetora-design-system/
    │   │
    │   ├── 01-diagnostico/
    │   │   ├── client-diagnosis/
    │   │   └── digital-presence-audit/
    │   │
    │   ├── 02-direcao/
    │   │   ├── brand-positioning-architect/
    │   │   ├── site-architecture-vetora/
    │   │   └── landing-page-cro-vetora/
    │   │
    │   ├── 03-construcao/
    │   │   ├── vetora-copywriter/
    │   │   ├── claude-code-handoff/
    │   │   └── social-carousel-builder/
    │   │
    │   ├── 04-entrega-qa/
    │   │   ├── vetora-qa-checklist/
    │   │   ├── web-qa-technical-vetora/
    │   │   └── ux-review-vetora/
    │   │
    │   └── 05-comercial/
    │       ├── proposal-builder-vetora/
    │       └── linkedin-fhb-authority/
```

**Observação importante sobre subpastas com prefixo numérico:** dependendo de como seu `.claude/skills/` reconhece skills (varia conforme versão do Claude Code), pode ser necessário manter todas as skills no primeiro nível e usar apenas prefixo no nome (`00-vetora-brand-os`, `01-client-diagnosis`...) em vez de subpastas. Verificar comportamento antes de mover em massa.

---

## 4. Plano de Execução em 5 Ondas

### Onda 1 — Limpeza e Arquivamento (1 hora)

```bash
cd vetora/.claude/skills

# Criar pasta de arquivamento
mkdir -p _archived

# Arquivar skills que vão para quarentena
mv ab-teste _archived/
mv analisar-dados _archived/
mv anuncio-google _archived/
mv mapear-rotinas _archived/
mv relatorio-ads _archived/
mv responder-avaliacoes _archived/

# Remover skills que são comandos, não procedimentos
# (recomendado: mover para _archived antes de deletar)
mkdir -p _archived/_comandos
mv abrir _archived/_comandos/
mv aprovar-post _archived/_comandos/
mv atualizar _archived/_comandos/
mv instalar _archived/_comandos/
mv ops _archived/_comandos/
mv publicar-tema _archived/_comandos/
mv salvar _archived/_comandos/
```

**Resultado:** sobram 10 skills ativas + pasta `_archived` com 13 skills arquivadas.

### Onda 2 — Renomeação e Fusão (1 hora)

Skills que sobreviveram precisam ganhar identidade VETORA. Aqui o processo é:
1. Renomear pasta.
2. Atualizar campo `name:` no frontmatter do SKILL.md.
3. Atualizar campo `description:` com gatilhos VETORA.
4. Adicionar referência obrigatória ao `vetora-brand-os` (que ainda vamos criar).

```bash
# Renomeações principais
mv carrossel social-carousel-builder
mv copywriting vetora-copywriter
mv pagina-de-vendas landing-page-cro-vetora

# Fusões: mover conteúdo útil antes de aposentar
# (exemplo conceitual — fazer caso a caso)
cat email-profissional/SKILL.md >> vetora-copywriter/_notas-fusao.md
mv email-profissional _archived/_fundidas/

cat novo-projeto/SKILL.md >> _archived/_fundidas/novo-projeto.md
mv novo-projeto _archived/_fundidas/

cat seo/SKILL.md >> _archived/_fundidas/seo.md
mv seo _archived/_fundidas/

cat ux/SKILL.md >> _archived/_fundidas/ux.md
mv ux _archived/_fundidas/

cat analytics/SKILL.md >> _archived/_fundidas/analytics.md
mv analytics _archived/_fundidas/

# qa-expert e ui-ux-pro-max permanecem como referência técnica
# (não renomear ainda — vão virar base das novas skills VETORA)
```

**Resultado:** restam 3 skills renomeadas (`social-carousel-builder`, `vetora-copywriter`, `landing-page-cro-vetora`) + 2 mantidas como referência (`qa-expert`, `ui-ux-pro-max`) + pasta `_archived` com tudo preservado.

### Onda 3 — Fundação (Semana 1-2 com qualidade)

Criar as **3 skills do núcleo identitário** com cuidado especial. Estas são consultadas por todas as outras.

| Ordem | Skill | Prazo sugerido |
|---|---|---|
| 1 | `vetora-brand-os` | Semana 1 |
| 2 | `vetora-method` | Semana 1 |
| 3 | `vetora-design-system` | Semana 2 |

Cada uma deve seguir o **template padrão de SKILL.md VETORA** (seção 5 deste documento).

### Onda 4 — Construção (Semanas 3-8)

Criar as 11 skills restantes na ordem do plano:

| Semana | Skills a criar |
|---|---|
| 3 | `client-diagnosis`, `site-architecture-vetora` |
| 4 | `vetora-copywriter` (refinar a renomeada), `claude-code-handoff` |
| 5 | `landing-page-cro-vetora` (refinar a renomeada), `web-qa-technical-vetora` |
| 6 | `social-carousel-builder` (refinar a renomeada), `linkedin-fhb-authority` |
| 7 | `digital-presence-audit`, `proposal-builder-vetora` |
| 8 | `ux-review-vetora`, `brand-positioning-architect`, `vetora-qa-checklist` |

### Onda 5 — Refinamento (Semana 9 em diante)

- Atualizar `templates/skills/catalogo.md` com as 16 skills ativas.
- Atualizar `CLAUDE.md` com referência ao método VETORA e à hierarquia de skills.
- Atualizar `.claude/AGENTS.md` com mapa das skills por fase do método.
- Após 60 dias, decidir o que fazer com `_archived/` (deletar definitivamente ou reativar).

---

## 5. Template Padrão de SKILL.md VETORA

Toda nova skill segue esta estrutura:

```markdown
---
name: nome-da-skill
description: |
  [Frase começando com gatilho claro de ativação. 
  Use quando o usuário precisar X, Y ou Z. 
  Esta skill carrega o método VETORA aplicado a essa tarefa.]
---

# [Nome da Skill]

## Quando ativar
- [Gatilho 1, em primeira pessoa do usuário]
- [Gatilho 2]
- [Gatilho 3]

## O que faz
[1 parágrafo: o que essa skill entrega.]

## O que NÃO faz
- [Limite 1]
- [Limite 2]

## Contexto VETORA obrigatório
Antes de produzir qualquer coisa, consultar:
- `vetora-brand-os` para padrão de marca
- `vetora-method` para fase do projeto
- [Outras skills VETORA dependentes, se houver]

## Processo (passo a passo)
1. **[Passo 1]** — [descrição com critério de saída]
2. **[Passo 2]** — [...]
3. **[Passo 3]** — [...]

## Templates / referências
- [Link ou trecho de template aplicável]

## Critérios de aceite
- [ ] [Critério 1, objetivo]
- [ ] [Critério 2]
- [ ] [Critério 3]
- [ ] Está alinhado ao tom VETORA (consultivo, claro, elegante)
- [ ] Evita palavras a usar com cuidado (do `vetora-brand-os`)

## Output padrão
[Descrição do formato final esperado: estrutura, tom, extensão típica.]

## Histórico de evolução
- v1 — [data] — [autor] — versão inicial
```

Sete blocos. Cabe em 1-2 páginas. Pode crescer com uso, mas a estrutura permanece estável.

---

## 6. Atualizações no CLAUDE.md

Recomendo adicionar ao `CLAUDE.md` uma seção esclarecedora:

```markdown
## Arquitetura Operacional VETORA

O VetoraOS opera sob o Método VETORA: Diagnóstico → Direção → Construção → Entrega → Evolução.

As skills em `.claude/skills/` estão organizadas por fase do método:

- **00-nucleo/** — identidade da marca, método operacional, sistema de design.
- **01-diagnostico/** — análise de cliente, presença digital, oportunidades.
- **02-direcao/** — posicionamento, arquitetura de site, framework de LP.
- **03-construcao/** — copy, dev handoff, conteúdo de redes.
- **04-entrega-qa/** — checklists de qualidade, revisões técnicas e de UX.
- **05-comercial/** — propostas, conteúdo de autoridade.

**Distinção importante:**
- `site/kit-vetora/` e `marketing/kit-vetora/` são **outputs/produtos**.
- `.claude/skills/` são **procedimentos internos** que produzem ou apoiam a criação desses outputs.
- Não misturar os dois conceitos.

Toda skill consulta `vetora-brand-os` antes de produzir qualquer coisa.
```

---

## 7. Checklist de Verificação Pós-Migração

Após executar as 5 ondas, validar:

- [ ] Pasta `_archived/` existe e contém 13+ skills antigas preservadas
- [ ] Pasta `.claude/skills/` contém exatamente 16 skills VETORA ativas
- [ ] `vetora-brand-os` está completa e é referenciada por todas as outras
- [ ] `CLAUDE.md` foi atualizado com a seção de arquitetura operacional
- [ ] `templates/skills/catalogo.md` reflete o conjunto atual
- [ ] `.claude/AGENTS.md` documenta as 16 skills por fase
- [ ] Cada skill nova tem critérios de aceite objetivos
- [ ] Cada skill nova foi testada em pelo menos 1 caso real (Autec, Rancho 517 ou FRBranco)
- [ ] Nenhuma skill ativa tem nome genérico tipo "abrir", "salvar", "ops"

---

## 8. O que Esperar nos Próximos 90 Dias

| Marco | Quando | Resultado esperado |
|---|---|---|
| Limpeza completa | Semana 1 | 23 → 5 skills ativas + base arquivada |
| Núcleo identitário pronto | Semana 2 | 3 skills do núcleo operacionais |
| Ciclo de cliente operacional | Semana 4 | Possível rodar projeto inteiro do diagnóstico ao código |
| Ciclo de conversão operacional | Semana 6 | Landing pages, carrosséis e LinkedIn em produção |
| Operação completa | Semana 8 | 16 skills VETORA ativas |
| Primeira revisão geral | Semana 12 | Refinar com base em uso real, decidir sobre `_archived/` |

---

## 9. Próximo Passo Imediato

Antes de mexer em qualquer pasta, **fazer commit do estado atual no git**:

```bash
cd vetora
git add .
git commit -m "checkpoint: estrutura pré-migração VetoraOS v2"
git tag pre-migracao-v2
```

Isso garante que você pode voltar ao estado atual a qualquer momento. Depois, iniciar Onda 1 com segurança.

Em seguida, partir para a criação do `vetora-brand-os` — a skill que muda o nível de todas as outras.

---

**Documento gerado por:** Claude (Consultor Sênior VETORA)
**Data:** 03 de junho de 2026
**Versão:** 1.0
