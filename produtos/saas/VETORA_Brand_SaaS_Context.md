# VETORA Brand — Contexto Estratégico Completo do SaaS
> Documento de referência para uso no Claude Code. Contém todo o contexto estratégico, produto, features, modelo de negócio e plano de execução.

---

## 1. Quem Sou Eu

**Nome:** Fernando Henrique Branco  
**Perfil:** Engenheiro mecânico, Coordenador de Engenharia Industrial na Docol (Joinville/SC)  
**Experiência:** Manufatura, engenharia de processos, automação, projetos industriais, WCM, Lean, Six Sigma, Teoria das Restrições, produtividade, NR-12, gestão de equipes técnicas e melhoria contínua.

**Atuação paralela:** Desenvolvimento de projetos digitais com uso intensivo de IA — sites, landing pages, funis de vendas, identidades visuais, logos, manifestos de marca, apresentações comerciais, prompts avançados e estruturas estratégicas para negócios reais.

**Marca guarda-chuva:** VETORA — *Estratégia, marca e tecnologia na direção certa.*

**Framework de trabalho:** VetoraOS — sistema proprietário de trabalho no Claude Code que guarda memórias, aplica skills adequadas organicamente, gerencia contexto de projetos e fica progressivamente mais inteligente.

---

## 2. O Produto — VETORA Brand

### Nome
**VETORA Brand** (ou Brand by VETORA)  
Produto SaaS sob o guarda-chuva da marca VETORA.

### Tagline
> *"Sua marca completa em minutos. Branding, identidade e criativos — gerados com IA e alinhados ao seu negócio."*

### Posicionamento
Plataforma completa de identidade de marca para pequenos negócios, MEIs, freelancers e empreendedores — do conceito estratégico ao criativo publicável. Não é um gerador genérico de logo. É um consultor de branding com IA que conhece o negócio do usuário antes de gerar qualquer ativo visual.

### Proposta de Valor Central
A diferença competitiva não está na tecnologia — está no **método**. O fluxo de onboarding inteligente (baseado na VetoraOS) garante que cada geração de logo, criativo ou mockup tenha contexto real: arquétipo, paleta, tipografia, posicionamento e personalidade já definidos. Isso é o que agências premium fazem antes de abrir qualquer software. Aqui, o usuário tem isso em minutos.

---

## 3. O Problema de Mercado

### Gap Identificado
- Consultoria de branding custa entre R$ 5.000 e R$ 50.000 — inacessível para o segmento
- Freelancers entregam sem método, estratégia ou consistência garantida
- Canva oferece ferramenta visual, não estratégia — o usuário continua sem posicionamento
- Looka, Brandmark e similares geram logo sem contexto — o input é genérico, o output é previsível

**Entre a necessidade real de uma marca forte e as soluções acessíveis disponíveis, existe um gap estratégico enorme. O VETORA Brand atua nesse espaço.**

### Tamanho do Mercado
- Mais de 15 milhões de MEIs ativos no Brasil
- Dezenas de milhões de pequenas empresas sem branding estruturado
- Crescimento acelerado de marcas pessoais, criadores e negócios digitais
- Demanda global por ferramentas de identidade self-service em alta

---

## 4. Arquitetura do Produto — 4 Níveis

```
NÍVEL 1 — IDENTIDADE (Feature Core — F1)
  Branding Book completo gerado por IA
  Missão · Visão · Valores · Posicionamento · Arquétipo
  Tom de voz · Paleta de cores · Tipografia · Design Guide

NÍVEL 2 — MARCA VISUAL (Feature Premium — F3)
  Logo criada com contexto de branding
  Conceitos → Refinamento → Entrega em múltiplos formatos
  Versões: horizontal, vertical, símbolo, favicon

NÍVEL 3 — APLICAÇÃO (Feature Premium — F4)
  Mockups de vestuário, papelaria, brindes, embalagem
  Relatório técnico de produção exportável
  Especificações: CMYK, Pantone, HEX, dimensões, técnica de impressão

NÍVEL 4 — CONTEÚDO (Feature Premium — F2)
  Criativos para tráfego pago
  Posts para redes sociais
  Foto de produto com tratamento de marca
  Banners de oferta e promoção
```

---

## 5. Features Detalhadas

### F1 — Branding Book com IA (CORE)
**O que entrega:**
- Missão, Visão e Valores
- Posicionamento e Proposta de Valor
- Arquétipo de marca e Personalidade
- Tom de Voz e Estilo de Comunicação
- Paleta de Cores (primária, secundária, neutras — HEX, RGB, CMYK)
- Tipografia (display, corpo, suporte — com justificativa)
- Frases de marca (3 opções)
- Guia de Identidade Visual exportável (PDF + link)
- Design Guide completo

**Diferencial:** O onboarding não é um formulário. É uma conversa estratégica guiada por IA. O app lê as respostas, interpreta o contexto, sugere caminhos e decide nos pontos onde o usuário não tem clareza — como um consultor real faria.

**Fluxo de Onboarding — 3 Profundidades:**
- Express: 5 minutos, 5 perguntas, resultado básico
- Completo: 15 minutos, 13 perguntas, resultado completo
- Avançado: 30 minutos, 20+ perguntas, resultado profundo com nuances

**Estrutura do Fluxo (Completo — 13 perguntas):**

*Bloco A — Sobre o Negócio (5 perguntas)*
1. Qual é o nome da sua marca ou negócio?
2. Em uma frase, o que você faz ou vende?
3. Quem é o seu cliente ideal? (perfil, faixa etária, contexto)
4. Qual é o maior diferencial do seu negócio em relação à concorrência?
5. Em que estágio está a sua marca? (nova / existe mas sem identidade / reposicionamento)

*Bloco B — Sobre a Personalidade (5 perguntas)*
6. Se sua marca fosse uma pessoa, como ela seria? (3 adjetivos)
7. Qual tom você quer transmitir? (opções: profissional/sério, acolhedor/próximo, inovador/moderno, artesanal/autêntico, luxo/sofisticado, divertido/descontraído)
8. Escolha 3 marcas que você admira visualmente (de qualquer setor)
9. O que sua marca definitivamente NÃO deve parecer?
10. Onde você vai usar mais a marca? (digital, físico, uniforme, embalagem, redes sociais)

*Bloco C — Sobre o Contexto (3 perguntas)*
11. Quais canais você usa ou pretende usar? (Instagram, WhatsApp, site, loja física, etc.)
12. Você tem alguma cor ou elemento visual que já usa ou quer manter?
13. O que você quer que as pessoas sintam ao ver sua marca?

**Prompt Mestre (estrutura):**
O prompt que vai para a Claude API deve receber todas as 13 respostas e retornar um JSON estruturado com todos os campos do Branding Book. Esse prompt é o ativo mais valioso do produto.

---

### F3 — Logo com Contexto de Branding (PREMIUM)
**Por que é diferente do mercado:**
A logo não é criada no vácuo. Ela é derivada do Branding Book já construído — com arquétipo, paleta, tipografia e personalidade definidos. Isso é o que agências como a Quartel fazem nas primeiras semanas antes de abrir o Illustrator.

**Fluxo:**
1. Direção Criativa: IA gera 4 a 6 conceitos visuais baseados no Branding Book
2. Refinamento: usuário vota, ajusta proporção, cor e tipografia
3. Entrega: PNG transparente em alta resolução
4. Formatos: horizontal, vertical, símbolo isolado, favicon
5. Relatório técnico: especificações para vetorização profissional

**Nota técnica:** Geração via DALL-E 3 / Nano Banana. Vetorização automática via Vectorizer.ai API. Para logo de produção final, oferecer revisão humana como serviço premium (R$ 197).

---

### F4 — Mockup & Production Studio (PREMIUM)
**Duas camadas de valor:**

*Camada 1 — Mockup para conteúdo digital:*
Camiseta, caneca, sacola, cartão, embalagem, papel timbrado — com a marca aplicada. Uso: redes sociais, site, apresentações, catálogo.

*Camada 2 — Relatório técnico para produção real:*
Especificações de cor (Pantone, CMYK, RGB, HEX), dimensões de aplicação, área de segurança, restrições, orientações de bordado vs. serigrafia vs. sublimação. Uso: enviar para fornecedor e produzir.

**Categorias:**
- Vestuário: camiseta, moletom, boné, avental, uniforme
- Papelaria: cartão de visita, envelope, papel timbrado, pasta
- Embalagem: caixa, sacola, tag, adesivo, rótulo
- Brindes: caneca, squeeze, caderno, ecobag
- Digital: capa de perfil, banner, assinatura de e-mail

**Diferencial único:** O relatório técnico de produção é uma competência de engenheiro — não de designer digital. Nenhum concorrente tem isso.

---

### F2 — Geração de Criativos (PREMIUM)
**O que resolve:**
A inconsistência visual mata marcas pequenas. Foto do produto que não combina com a cor da marca. Criativo do anúncio que parece diferente do perfil. O app resolve usando o Branding Book como trilho.

**Killer feature:** Usuário envia foto do produto → app transforma em criativo de tráfego pago, post ou banner — tudo no estilo da marca, com paleta correta e tipografia alinhada.

**Tipos de criativo:**
- Criativo para tráfego pago (Meta Ads, Google Ads)
- Post para redes sociais (feed, stories, reels cover)
- Foto de produto com tratamento de marca
- Banner de oferta e promoção
- Foto de perfil profissional

---

## 6. Modelo de Negócio

### Lógica do Modelo
- **Branding Book:** produto âncora, incluído em todos os planos, não consome créditos
- **Créditos:** exclusivos para geração de imagens, logos e mockups (custo variável de API)
- **Recorrência:** mensal ou anual (desconto de 20% no anual)

### Tabela de Planos

| Plano | Branding Books | Créditos/mês | Logos | Preço |
|---|---|---|---|---|
| Starter | 1 | 30 gerações | 2 conceitos | R$ 49/mês |
| Pro | 3 | 100 gerações | 5 conceitos | R$ 127/mês |
| Agency | Ilimitado | 300 gerações | Ilimitado + Revisão | R$ 297/mês |

*Valores a calibrar após levantamento de custo de API. Margem target: 60 a 70% sobre custo de API.*

### Receita Adicional
- **Créditos avulsos:** pacotes de 50, 100 e 200 gerações
- **Revisão humana de logo:** R$ 197 por logo (vetorização + refinamento por especialista)
- **White label Agency:** planos corporativos para agências
- **API para desenvolvedores:** acesso programático às features (fase futura)

---

## 7. Diferencial Competitivo

### Comparativo

| Solução | Branding Estratégico | Logo Contextual | Mockup + Técnico | Criativos Alinhados | Preço Acessível |
|---|---|---|---|---|---|
| VETORA Brand | ✓ | ✓ | ✓ | ✓ | ✓ |
| Looka / Brandmark | ✗ | ✓ | ✗ | ✗ | ✓ |
| Canva | ✗ | Básico | ✓ | ✗ | ✓ |
| Agência premium | ✓ | ✓ | ✓ | ✓ | ✗ |

### O Moat Real — Vantagens Difíceis de Replicar
1. **O Método VetoraOS:** sistema intelectual de branding construído com projetos reais (Autec, Rancho 517, FRBranco). O fluxo de perguntas é genuinamente mais inteligente que qualquer concorrente que apenas conectou uma API.
2. **Amplitude de mercado:** experiência com B2B técnico industrial, eventos e marca afetiva premium — trilhas especializadas por tipo de negócio.
3. **Engenharia como diferencial de produto:** relatório técnico de produção é uma competência única — nenhum concorrente focado em design digital tem isso.
4. **VETORA como marca:** não é um produto anônimo. É extensão de um método com casos reais documentados.

---

## 8. Stack Tecnológica

### APIs e Serviços
| Função | Tecnologia |
|---|---|
| LLM / Branding Book | Anthropic Claude API (claude-sonnet-4-6) |
| Geração de imagem | DALL-E 3 API e/ou Nano Banana |
| Vetorização de logo | Vectorizer.ai API |
| E-mail transacional | Resend |
| Pagamento / Recorrência | Stripe |
| Autenticação | Supabase Auth |
| Banco de dados | Supabase (PostgreSQL) |
| Storage (imagens/PDFs) | Supabase Storage |

### Frontend / Backend
| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Estilização | Tailwind CSS |
| Animações | Framer Motion |
| Export PDF | @react-pdf/renderer |
| Deploy | Vercel |
| Gerenciamento de estado | Context API (MVP) → Zustand (escala) |

---

## 9. MVP — O Que Construir

### Escopo do MVP (30 dias)
**Incluir:**
- Tela de onboarding com fluxo de 13 perguntas (progressivo, uma por vez)
- Geração do Branding Book via Claude API
- Exibição do resultado em tela organizada e bonita
- Export do Branding Book em PDF
- Geração de 2 conceitos de logo via DALL-E 3
- Captura de e-mail para entrega do resultado

**Excluir do MVP (fase 2):**
- Sistema de login e conta de usuário
- Pagamento e planos
- Mockups de produtos (F4)
- Gerador de criativos completo (F2)
- Dashboard de histórico
- Mobile app nativo

**Lógica:** o usuário não precisa de conta para validar o valor. Ele faz o fluxo, recebe o Branding Book, vê a logo. Se quiser salvar e gerar mais — essa é a prova de que vale construir o sistema completo.

### Estrutura de Páginas do MVP
```
/                → Landing page com CTA para iniciar
/onboarding      → Fluxo de perguntas (13 steps, barra de progresso)
/resultado       → Exibição do Branding Book gerado
/logo            → Exibição dos 2 conceitos de logo
```

### Output da Claude API — JSON do Branding Book
```json
{
  "missao": "string",
  "visao": "string",
  "valores": ["string", "string", "string"],
  "posicionamento": "string",
  "proposta_valor": "string",
  "arquetipo": {
    "nome": "string",
    "descricao": "string"
  },
  "personalidade": ["adjetivo1", "adjetivo2", "adjetivo3"],
  "tom_voz": {
    "descricao": "string",
    "exemplos": ["string", "string"],
    "evitar": ["string", "string"]
  },
  "paleta_cores": [
    { "nome": "string", "hex": "#000000", "rgb": "0,0,0", "cmyk": "0,0,0,0", "uso": "string" }
  ],
  "tipografia": {
    "display": { "nome": "string", "motivo": "string" },
    "corpo": { "nome": "string", "motivo": "string" },
    "suporte": { "nome": "string", "motivo": "string" }
  },
  "frases_marca": ["string", "string", "string"],
  "restricoes_visuais": ["string", "string"]
}
```

---

## 10. Plano de Execução — 30 Dias

### Semana 1 — Produto e Método (Dias 1 a 5)
| Dia | Ação |
|---|---|
| 1-2 | Product Brief + Mapeamento do fluxo de onboarding + Prompt Mestre |
| 3-4 | Naming, copy e landing page de validação (captura de e-mail) |
| 5 | Teste manual do fluxo com 3 pessoas reais (sem código) |

### Semana 2 — Construção com Claude Code (Dias 6 a 12)
| Dia | Ação |
|---|---|
| 6-7 | Estrutura Next.js + componentes de onboarding + fluxo de steps |
| 8-9 | Integração Claude API (Branding Book) + DALL-E 3 (logo) |
| 10 | Export PDF + captura de e-mail + Resend |
| 11-12 | Testes internos — rodar o fluxo 10 vezes com perfis diferentes |

### Semana 3 — Validação com Usuários Reais (Dias 13 a 21)
| Dia | Ação |
|---|---|
| 13-14 | Recrutar 10 usuários beta (perfil detalhado abaixo) |
| 15-19 | Sessões de teste — observar, coletar feedback |
| 20-21 | Consolidar dados e identificar os 3 principais problemas |

### Semana 4 — Ajuste e Decisão (Dias 22 a 30)
| Dia | Ação |
|---|---|
| 22-25 | Corrigir fluxo, refinar prompt mestre, polir UX |
| 26 | Re-testar com 3 novos usuários |
| 27 | Ativar landing page + post no LinkedIn |
| 28-30 | Análise de dados → Decisão: Escalar / Pivotar / Pausar |

---

## 11. Critérios de Validação

### Perfil dos 10 Usuários Beta
- 2 a 3 donos de pequenos negócios locais sem branding (restaurante, estética, serviço)
- 2 freelancers ou profissionais autônomos que precisam de marca pessoal
- 1 a 2 empreendedores em early stage com produto novo
- 1 colega da Docol com negócio paralelo
- 1 contato próximo com feedback honesto (ex: Luis Carlos do Rancho 517)
- 1 a 2 pessoas fora da rede, sem viés de amizade

### Métricas de Decisão

**Siga em frente (Escalar) se:**
- 7 de 10 usuários completam o fluxo sem abandonar
- 5 de 10 dizem que pagariam R$ 49/mês
- Pelo menos 3 pedem para usar de novo ou indicam alguém

**Pause e ajuste (Pivotar) se:**
- Mais de 3 usuários abandonam no meio do fluxo
- O Branding Book gerado parece genérico para a maioria
- Ninguém menciona querer pagar

**As 3 perguntas de feedback que realmente importam:**
1. O resultado refletiu bem o seu negócio? O que ficou errado ou genérico?
2. Se custasse R$ 49/mês com geração ilimitada de criativos, você pagaria?
3. O que faria você compartilhar esse produto com alguém?

---

## 12. Custos Estimados do MVP

| Item | Custo estimado |
|---|---|
| Claude API (testes + beta) | R$ 50 a 150 |
| DALL-E 3 API (testes + beta) | R$ 30 a 80 |
| Resend (e-mail) | Grátis até 3.000 e-mails |
| Vercel (deploy) | Grátis no plano hobby |
| Domínio | ~R$ 40 |
| **Total estimado** | **~R$ 120 a 270** |

---

## 13. Próximos Passos Imediatos

| # | Ação | Prioridade |
|---|---|---|
| 01 | Definir nome final e posicionamento do produto | ALTA |
| 02 | Mapear fluxo completo de onboarding (13 perguntas com opções) | ALTA |
| 03 | Construir e testar o Prompt Mestre do Branding Book | ALTA |
| 04 | Construir landing page de validação (captura de e-mail) | ALTA |
| 05 | Calcular custo de API por tipo de geração e definir margem | MÉDIA |
| 06 | Integrar APIs: Claude + DALL-E 3 + Vectorizer.ai | MÉDIA |
| 07 | Criar identidade visual do produto (logo, paleta, UI kit) | MÉDIA |

---

## 14. Referências e Contexto da VETORA

### Projetos Ativos da VETORA (para referência de método)
- **Autec Automação Técnica:** reposicionamento B2B industrial, Joinville/SC
- **Rancho 517:** espaço de eventos, rústico premium, Joinville/SC
- **FRBranco Personalizados:** marca afetiva feminina, papelaria criativa

### Identidade Visual VETORA
- **Cor primária:** Azul marinho `#0D1F4E`
- **Cor accent:** Ciano `#00B4D8`
- **Tipografia:** geométrica, clean, sem serifa
- **Tom:** estratégico, consultivo, direto, profissional
- **Tagline:** *Estratégia, marca e tecnologia na direção certa.*

---

*Documento gerado em Junho 2026 | VETORA — Fernando Henrique Branco*  
*Versão 1.0 — Para uso no Claude Code como contexto estratégico do projeto VETORA Brand SaaS*
