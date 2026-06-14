# Sprint 05 — Prova Social, Fundador e CTA Final

> As seções que fecham a venda. Cases constroem confiança, fundador constrói credibilidade, CTA converte.
> Sem essas três, o visitante pode admirar o site mas não entrar em contato.

**Depende de:** Sprint 04 (corpo do site construído)  
**Resultado:** Site completo com todas as seções, pronto para QA na Sprint 06.

---

## Seção 6 — Cases

**Arquivo:** `components/vetora/sections/Cases.tsx`  
**Fundo:** Branco Gelo `#F5F7FA` (claro)  
**ID:** `#cases`

### Layout

```
[ SectionHeading — alinhado à esquerda ]
eyebrow: CASES
heading: Negócios reais.
         Percepção transformada.

[ Grid de 3 cards de case — desktop: 3 colunas, mobile: 1 coluna ]

[ CTA de seção ]
```

### Case Cards

**Especificação visual:**
```css
background: #FFFFFF;
border: 1px solid #D9DEE3;
border-radius: 8px;
overflow: hidden;
transition: box-shadow 300ms, transform 300ms;
hover: box-shadow 0 8px 32px rgba(11, 31, 59, 0.08); transform translateY(-3px);
```

**Estrutura interna de cada card:**

```
[ Topo — área de imagem/mockup, fundo Azul Vetor, altura 180px ]
  → Placeholder: logotipo do cliente em Prata Digital centralizado
  → Ou: mockup do site em perspectiva (se disponível)

[ Corpo do card — padding 24px ]
  Setor (eyebrow pequeno, Ciano, 11px)
  Nome do cliente (Sora 600, 20px, Azul Vetor)
  Situação (Inter 400, 14px, Grafite Técnico, itálico)
  Arrow separator (→, 1px, Ciano)
  Resultado (Inter 400, 15px, Azul Vetor)
  Tags na base [ Branding ] [ Site ] [ etc. ]
```

**Conteúdo dos cases:**

```
Case 1 — Autec
Setor: Automação Industrial · B2B
Situação: "Empresa técnica com reputação consolidada mas presença digital genérica."
→ Branding estratégico + site institucional que comunica autoridade técnica no setor industrial.
Tags: [Branding] [Site]

Case 2 — Rancho 517
Setor: Eventos Premium · Local
Situação: "Reputação local consolidada mas identidade visual sem coerência."
→ Posicionamento + identidade visual + site que justifica o posicionamento premium.
Tags: [Branding] [Identidade Visual]

Case 3 — FRBranco Personalizados
Setor: Papelaria Afetiva · DTC
Situação: "Marca afetiva sem identidade estruturada."
→ Identidade verbal + visual + presença digital alinhada ao produto e ao público.
Tags: [Branding] [Identidade Visual] [Copy]
```

**Tags de serviço:**
```css
background: rgba(0, 166, 166, 0.08);
border: 1px solid rgba(0, 166, 166, 0.2);
color: #00A6A6;
font: Inter 500, 11px;
letter-spacing: 0.06em;
text-transform: uppercase;
padding: 4px 10px;
border-radius: 4px;
```

### CTA de seção

Após os cards, linha separadora `#D9DEE3` + link:
```
→ Quer ver o processo completo de algum desses cases?
  [Falar com Fernando]   (link em Ciano)
```

---

## Seção 7 — O Fundador

**Arquivo:** `components/vetora/sections/Founder.tsx`  
**Fundo:** Azul Profundo `#061426` (premium escuro)  
**ID:** `#sobre`

### Layout

```
[ Grid 2 colunas: foto (esquerda) + texto (direita) ]
  → Desktop: 45% foto / 55% texto
  → Mobile: foto no topo, texto abaixo
```

### Coluna da foto

Foto de Fernando em tratamento frio, profissional. Composição recomendada: retrato 3/4, fundo neutro escuro ou industrial/técnico.

```css
/* Container da foto */
border-radius: 4px;
overflow: hidden;
position: relative;

/* Borda decorativa Ciano — offset externo */
::after {
  content: '';
  position: absolute;
  inset: -8px;
  border: 1px solid rgba(0, 166, 166, 0.3);
  border-radius: 6px;
}
```

Se a foto não estiver disponível ainda: placeholder com fundo `#0B1F3B` + monograma "FB" em Sora 600 32px Ciano.

### Coluna de texto

**Eyebrow** (Ciano):
```
QUEM ESTÁ POR TRÁS
```

**Nome** (Sora 700, 36px, Branco):
```
Fernando Branco
```

**Credencial** (Inter 400, 16px, Prata Digital `#B8C2CC`):
```
Engenheiro Mecânico · Coordenador de Engenharia Industrial
Especialista em IA aplicada a branding e presença digital
```

**Linha separadora:** 40px, 1px, Ciano.

**Corpo** (Inter 400, 16px, Prata Digital, lh 1.7):
```
Durante anos projetei sistemas industriais onde cada decisão tem impacto real —
tolerâncias, falhas, custo. Aprendi que rigor técnico não é opcional.

Trouxe esse mesmo rigor para o branding e a presença digital.
Na VETORA, nenhuma decisão visual ou estratégica é tomada sem diagnóstico.
Nenhuma entrega vai ao ar sem checklist. Nenhum posicionamento é definido
sem entender a fundo o que o cliente realmente entrega.

Hoje, combino engenharia com inteligência artificial para construir ativos digitais
que representam negócios reais com a precisão que eles merecem.
```

**Credenciais em linha** (abaixo do corpo):
```css
/* 3 items em linha com separador · */
Inter 500, 14px, Prata Digital
```
```
Engenharia Industrial · IA Aplicada · Branding Estratégico
```

**Link LinkedIn** (opcional, abaixo das credenciais):
```
→ Ver perfil no LinkedIn   [ícone linear + texto, Ciano, hover underline]
```

### Animação

Foto: `fadeIn` + `x: -20 → 0`, 700ms.  
Texto: `fadeInUp`, delay 200ms após foto.

---

## Seção 8 — CTA Final

**Arquivo:** `components/vetora/sections/FinalCTA.tsx`  
**Fundo:** Branco Gelo `#F5F7FA` (claro)  
**ID:** `#contato`

### Layout — centralizado, padding generoso

```
[ Eyebrow — centralizado ]
PRÓXIMO PASSO

[ Headline h2 — centralizado ]
Pronto para o mercado perceber
o que você realmente entrega?

[ Subtítulo — centralizado, max 55ch ]
O diagnóstico é gratuito e dura 30 minutos.
Saímos com clareza sobre o gap entre sua entrega
e sua percepção de mercado — e o que fazer a respeito.

[ CTA — centralizado, botão grande ]
[  Agendar diagnóstico gratuito  ]

[ Nota de credibilidade — centralizada, 14px, Grafite Técnico ]
Sem compromisso. Sem pitch de vendas imediato.
Diagnóstico honesto — mesmo que a resposta seja "não precisa de nós agora".
```

### Elemento visual de fundo

Versão discreta do grid técnico — mesmas linhas do hero mas em Azul Vetor `#0B1F3B` com opacidade 3%. Quase invisível mas dá textura ao fundo claro.

### Botão CTA principal

```css
background: #0B1F3B;       /* Azul Vetor — não Ciano nessa posição */
color: #F5F7FA;
padding: 18px 40px;
font: Sora 600, 16px;
letter-spacing: 0.01em;
border-radius: 4px;
transition: background 200ms, transform 100ms;
hover: background #061426; transform scale(1.02);
```

O botão final usa Azul Vetor (não Ciano) porque aparece sobre fundo claro — o contraste é mais elegante e consultivo do que o Ciano.

### Animação

Tudo em `fadeInUp` com stagger leve. Headline primeiro, sub depois, botão depois.

---

## `app/page.tsx` — versão final

```tsx
import Hero from '@/components/vetora/sections/Hero'
import Problem from '@/components/vetora/sections/Problem'
import Services from '@/components/vetora/sections/Services'
import Method from '@/components/vetora/sections/Method'
import Differentials from '@/components/vetora/sections/Differentials'
import Cases from '@/components/vetora/sections/Cases'
import Founder from '@/components/vetora/sections/Founder'
import FinalCTA from '@/components/vetora/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <Method />
      <Differentials />
      <Cases />
      <Founder />
      <FinalCTA />
    </main>
  )
}
```

---

## Checklist de conclusão

- [ ] Case cards com hover funcionando (shadow + translateY)
- [ ] Tags de serviço com visual correto (borda Ciano sutil)
- [ ] Grid de cases: 3 colunas desktop → 1 coluna mobile
- [ ] Foto do fundador com borda offset Ciano
- [ ] Placeholder de foto implementado (caso foto não disponível)
- [ ] Credencial do fundador legível (contraste Prata Digital sobre Azul Profundo: ✓)
- [ ] CTA final: botão Azul Vetor sobre fundo claro (não Ciano)
- [ ] Nota de credibilidade abaixo do botão (sem compromisso, diagnóstico honesto)
- [ ] Sequência completa de seções testada do topo ao footer sem erro
- [ ] Alternância de fundos mantida até o final: claro → escuro → claro → escuro → claro
- [ ] Nenhuma quebra de layout entre seções (checar no DevTools)
- [ ] Link do CTA aponta para formulário ou Calendly (configurar URL real)
