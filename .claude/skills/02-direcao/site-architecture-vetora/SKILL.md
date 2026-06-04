---
name: site-architecture-vetora
description: |
  Define a arquitetura do site de um cliente — estrutura de páginas, hierarquia de navegação,
  mapa de conteúdo por página e estratégia de SEO básico. Entrega o blueprint aprovado que
  guia a construção do site antes de qualquer linha de código ou copy.
  Fase 2 do Método VETORA. Requer posicionamento aprovado como entrada.
  Use quando o usuário disser "arquitetura do site", "estrutura do site", "quais páginas criar",
  "mapa do site", "blueprint", "/site-architecture-vetora".
---

# /site-architecture-vetora — Arquitetura de Site VETORA

Define o blueprint completo do site antes de construir. Estrutura, navegação, hierarquia de conteúdo e SEO básico — aprovados antes de qualquer execução.

## Quando ativar

- Após `brand-positioning-architect` aprovado (ou quando o posicionamento já está claro)
- Quando o cliente precisa de um site novo ou reestruturação do existente
- Quando o copy e o design estão sendo produzidos sem estrutura clara
- Quando o usuário disser "arquitetura de site", "mapa de site", "quais páginas criar"

## O que faz

Define: quais páginas o site precisa, qual é a hierarquia de navegação, o que cada página precisa comunicar, o objetivo de conversão de cada página, e a estratégia de SEO básico (palavras-chave por página). Entrega um blueprint aprovado.

## O que NÃO faz

- Não cria o copy — isso é `vetora-copywriter` e `landing-page-cro-vetora`
- Não faz auditoria técnica — isso é `web-qa-technical-vetora`
- Não decide a identidade visual — isso é `vetora-design-system`
- Não define o CMS ou stack técnico — isso é `claude-code-handoff`

## Contexto VETORA obrigatório

Antes de iniciar, consultar:
- `vetora-brand-os` — posicionamento e tom de voz
- `vetora-method` — confirmar Fase 2
- `_memoria/clientes/<nome>/posicionamento.md` — documento de posicionamento aprovado
- `_memoria/clientes/<nome>/diagnostico.md` — contexto de negócio e público

## Processo

### Passo 1 — Coletar contexto

Perguntar ao usuário:
1. "O site é institucional (apresentar a empresa) ou de conversão (vender, capturar leads)?"
2. "Qual é a ação principal que o visitante deve tomar?"
3. "Tem blog ou seção de conteúdo prevista?"
4. "Precisa integrar sistema de agendamento, e-commerce, portfólio?"
5. "Tem referências de sites que admira no setor?"

### Passo 2 — Definir as páginas

Com base no tipo e objetivo, definir o conjunto mínimo de páginas:

**Site institucional padrão (5-7 páginas):**
- Home — apresentação e CTA principal
- Sobre — história, método, equipe, arquétipos
- Serviços — o que entrega, como funciona, preços (se cabível)
- Cases/Portfólio — evidências sociais e resultados
- Contato — formulário + canais + localização (se local)
- Blog (opcional) — conteúdo de autoridade

**Site de conversão (2-4 páginas):**
- Landing page principal — hero, proposta, benefícios, prova social, CTA
- Obrigado — confirmação + próximo passo
- Política de privacidade — obrigatório para formulários/ads

### Passo 3 — Mapear cada página

Para cada página, definir:

| Campo | Conteúdo |
|---|---|
| **Objetivo** | O que o visitante deve sentir/fazer ao sair desta página |
| **Público** | Quem chegará a esta página (busca orgânica, ads, indicação) |
| **Palavra-chave primária** | Termo principal para SEO básico |
| **Hierarquia de conteúdo** | Seções em ordem (hero → problema → solução → prova → CTA) |
| **CTA** | Qual é a ação principal desta página |
| **Links internos** | Para onde esta página deve conectar |

### Passo 4 — Definir hierarquia de navegação

Criar o menu de navegação principal:
- Desktop: quais itens aparecem no header?
- Mobile: o menu faz sentido em tela pequena?
- Footer: quais links secundários vão aqui?

### Passo 5 — SEO básico por página

Para cada página principal:
- Palavra-chave primária (busca intencional)
- Título da página (title tag, máx. 60 chars)
- Meta description (máx. 155 chars)
- URL slug limpa (ex: `/servicos/branding-estrategico`)

### Passo 6 — Checkpoint de aprovação

Apresentar o blueprint ao usuário:

> "Aqui está a arquitetura do site. Antes de partir para o copy e o desenvolvimento, você aprova esta estrutura? Alguma página faltando, sobrando ou que precisa mudar?"

### Passo 7 — Salvar

Criar `_memoria/clientes/<nome>/arquitetura-site.md` com o blueprint final.

## Critérios de aceite

- [ ] Tipo de site definido (institucional vs. conversão)
- [ ] Lista de páginas com justificativa para cada uma
- [ ] Mapa de conteúdo por página (objetivo, público, hierarquia, CTA)
- [ ] Hierarquia de navegação validada
- [ ] SEO básico definido para páginas principais
- [ ] Blueprint aprovado pelo usuário antes de avançar
- [ ] Documento salvo em `_memoria/clientes/<nome>/arquitetura-site.md`

## Output padrão

Arquivo `_memoria/clientes/<nome>/arquitetura-site.md` com blueprint completo. Inline: lista de páginas + objetivo de cada uma + próximos passos (qual skill ativar para produzir cada parte).

## Histórico de evolução

- v1 — 2026-06-03 — VetoraOS — versão inicial
