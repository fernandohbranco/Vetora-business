# Sprint Animação B — Video Scrubbing com Kling AI + Cloudinary

**Tipo:** Experimento visual independente | **Esforço estimado:** 3–5h (2h produção de vídeo + 1–3h dev) | **Stack:** Kling AI + Cloudinary + React + Framer Motion
**Status:** Aguardando execução — comparar com Sprint A antes de adotar como oficial

---

## Contexto

Este sprint explora uma técnica diferente para o fundo do site: em vez de uma animação gerada em código, o fundo é um **vídeo de IA** controlado pelo scroll.

O usuário rola a página → o vídeo avança quadro a quadro, como se a narrativa visual fosse controlada pela leitura. É a mesma técnica que a Apple usa nas páginas de produto do iPhone (scroll → vídeo pré-renderizado scruba frame a frame).

A diferença aqui é que o vídeo é gerado por IA (Kling AI, a partir de uma imagem base criada com ChatGPT/DALL-E), hospedado e otimizado via Cloudinary, e scrubado via JavaScript com Framer Motion.

O resultado potencial é uma qualidade visual que seria impossível replicar em canvas no mesmo tempo — com a troca de que a animação não é paramétrica, não adapta a cor, e o "scroll response" é uma ilusão (o vídeo é fixo, o tempo de reprodução é que varia).

---

## Objetivo

Ao final deste sprint, existirá:

1. Um vídeo de fundo produzido com IA, hospedado no Cloudinary e otimizado
2. Componente `VideoScrub.tsx` — controla `video.currentTime` via scroll
3. Hero alternativo `HeroVideo.tsx` — o Hero atual com `VideoScrub` no fundo
4. Página de demo `/demo/video-scroll` — site completo com esse Hero, para comparação
5. Fallback gracioso: imagem estática no mobile e quando o vídeo não carregou

---

## Pré-requisitos

### Contas e acessos necessários
- [ ] **ChatGPT Plus** (GPT-4o com DALL-E) ou **Midjourney** — para gerar a imagem base
- [ ] **Kling AI** — conta em `klingai.com` (plano Standard mínimo para Image to Video)
  - Verificar se tem créditos suficientes: 1 vídeo de 5s custa ~10 créditos
- [ ] **Cloudinary** — conta gratuita em `cloudinary.com` (Free tier: 25GB storage, 25GB bandwidth/mês)
  - Anotar: Cloud Name (aparece no dashboard após login)
- [ ] **ffmpeg** instalado localmente — necessário para verificar o vídeo antes do upload
  - Mac: `brew install ffmpeg`

### Dependências do projeto
- [ ] Framer Motion já instalado (confirmar em `package.json`)
- [ ] Next.js 14 rodando — `cd site/vetora-next && npm run dev`

### Leitura obrigatória antes de começar
- [ ] `identidade/design-guide.md` — confirmar paleta: `#061426`, `#00A6A6`
- [ ] `site/vetora-next/components/sections/Hero.tsx` — entender o layout atual
- [ ] `site/vetora-next/tailwind.config.ts` — confirmar tokens disponíveis

---

## Estágio 1 — Gerar a imagem base no ChatGPT / DALL-E

Este é o ponto de partida. A imagem define tudo que o Kling vai animar.

### Prompt exato para o DALL-E (copiar e colar)

```
A scientific visualization of a vector field or electromagnetic field lines. 
Deep navy background, almost black, hex #061426. 
Fine glowing teal lines flowing diagonally across the frame, hex #00A6A6, 
varying opacity from barely visible hairlines (opacity 8%) to slightly 
brighter paths (opacity 35%). The lines follow curved, organic paths — 
like a physics simulation of fluid flow or magnetic field lines. 
No text. No geometric shapes. No grid. No particles.
Mathematical precision aesthetic, not decorative. 
Ultra-high resolution, flat digital art.
The composition should be horizontal (16:9 ratio).
```

### O que esperar da imagem

- Fundo quase preto com tonalidade azul profunda
- Linhas finas curvas em ciano que traversam o frame em diagonal (baixo-esquerda → cima-direita)
- Variação de espessura e opacidade nas linhas — algumas quase invisíveis, outras levemente brilhantes
- Aspecto de visualização científica, não de wallpaper genérico

### Se não sair certo na primeira tentativa

Ajustes no prompt:
- Se as linhas ficarem grossas demais: adicionar `"ultra-thin lines, hairline strokes"`
- Se parecer muito colorido: adicionar `"monochromatic teal only, no other colors"`
- Se parecer decorativo/artístico demais: adicionar `"not decorative, not artistic, pure scientific visualization"`
- Se o fundo não estiver escuro o suficiente: adicionar `"background must be #061426 deep navy, almost black"`

### Salvar a imagem

Salvar como: `identidade/animacao-fundo-base.png`
Resolução mínima: 1920 × 1080px
Formato: PNG (preserva qualidade para o Kling)

---

## Estágio 2 — Animar no Kling AI

### Acessar o Kling AI
URL: `klingai.com` → fazer login → aba "Image to Video"

### Configurações exatas

| Parâmetro | Valor | Motivo |
|---|---|---|
| **Mode** | Image to Video | Ponto de partida é a imagem gerada |
| **Duration** | 5 seconds | Suficiente para scrubbing suave (~150 frames a 30fps) |
| **Aspect Ratio** | 16:9 | Padrão desktop — será escalado no CSS |
| **Motion Intensity** | 2 de 10 (mínimo ou quase) | CRÍTICO: alta intensidade = scrubbing nauseante |
| **Camera Movement** | None / Static | CRÍTICO: qualquer zoom ou pan quebra o scrubbing |
| **Creative Mode** | Standard | Pro não é necessário aqui |
| **Seed** | Qualquer | Anotar o seed do resultado aprovado para repetir se necessário |

### Prompt de texto no Kling (Motion Prompt)

```
The vector field lines pulse very slowly and gently flow, 
as if responding to a distant invisible force. 
Extremely subtle motion. Hypnotic. No sudden changes. 
The lines drift in the direction they are pointing.
Seamless loop.
```

### Critérios para aprovar o vídeo gerado

- [ ] Movimento é quase imperceptível no primeiro segundo de visualização
- [ ] Nenhuma mudança brusca ou flash em qualquer frame
- [ ] As linhas "fluem" na direção em que apontam (diagonal cima-direita)
- [ ] O início e o final do vídeo são visualmente compatíveis (importante para loop)
- [ ] Nenhum objeto estranho, artefato ou distorção óbvia

**Se o vídeo não aprovar:** regenerar com Motion Intensity ainda mais baixa (1/10). O Kling às vezes adiciona movimento excessivo mesmo em configuração baixa. Priorizar sutileza sobre dramaturgia.

### Exportar o vídeo

- Formato: MP4 (H.264)
- Resolução: 1280×720 mínimo, 1920×1080 ideal
- Salvar como: `dados/animacao-fundo-kling.mp4` (temporário — antes de ir para Cloudinary)

---

## Estágio 3 — Verificar o vídeo localmente com ffmpeg

Antes de subir no Cloudinary, verificar tecnicamente:

```bash
# Informações do vídeo
ffprobe -v quiet -print_format json -show_streams dados/animacao-fundo-kling.mp4

# Verificar se tem codec correto e duração esperada
# Esperar: codec h264, duração ~5s, 30fps
```

Se o codec for HEVC (h265) em vez de H.264:
```bash
ffmpeg -i dados/animacao-fundo-kling.mp4 -c:v libx264 -crf 23 -preset slow dados/animacao-fundo-h264.mp4
```

O Cloudinary suporta H.265, mas H.264 tem compatibilidade universal (incluindo Safari mobile).

---

## Estágio 4 — Upload e configuração no Cloudinary

### Upload

1. Acessar `cloudinary.com` → fazer login → Media Library
2. Upload → selecionar `dados/animacao-fundo-kling.mp4`
3. Pasta sugerida: `vetora/animations/`
4. Public ID resultante: `vetora/animations/animacao-fundo` (anotar)

### URLs de transformação a usar no código

O Cloudinary processa o vídeo em tempo real via URL. As URLs abaixo são construídas com transformações:

**URL do vídeo otimizado (desktop):**
```
https://res.cloudinary.com/{CLOUD_NAME}/video/upload/q_auto:good,f_auto,w_1920,c_limit/vetora/animations/animacao-fundo.mp4
```

**URL do vídeo para mobile (menor, mais leve):**
```
https://res.cloudinary.com/{CLOUD_NAME}/video/upload/q_auto:eco,f_auto,w_768,c_limit/vetora/animations/animacao-fundo.mp4
```

**URL do poster (frame estático — snapshot no segundo 0):**
```
https://res.cloudinary.com/{CLOUD_NAME}/video/upload/so_0,q_auto,f_auto,w_1920/vetora/animations/animacao-fundo.jpg
```
O `so_0` extrai o frame do offset 0 segundos como imagem.

**Explicação dos parâmetros de URL:**
- `q_auto:good` — qualidade automática (boa, não máxima)
- `f_auto` — formato automático: WebM para Chrome/Firefox, MP4 para Safari
- `w_1920,c_limit` — largura máxima 1920px, não aumentar se for menor
- `so_0` — snapshot offset 0s (para o poster)

### Configurar variável de ambiente

No arquivo `.env.local` do projeto Next.js:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu_cloud_name_aqui
```

O Cloud Name aparece em `cloudinary.com/console` na seção "Product Environment Credentials".

---

## Estágio 5 — Desenvolvimento do componente

### 5.1 — `site/vetora-next/lib/cloudinary.ts`

Helper que constrói as URLs de transformação.

```typescript
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

export function cloudinaryVideo(publicId: string, width = 1920) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto:good,f_auto,w_${width},c_limit/${publicId}.mp4`
}

export function cloudinaryPoster(publicId: string, width = 1920) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,q_auto,f_auto,w_${width}/${publicId}.jpg`
}
```

### 5.2 — `site/vetora-next/components/animations/VideoScrub.tsx`

Este é o componente central. Ele recebe o `scrollProgress` (MotionValue 0-1) e controla `video.currentTime`.

**Props:**
```typescript
interface VideoScrubProps {
  src: string                    // URL do vídeo (Cloudinary)
  poster?: string                // URL da imagem de fallback (Cloudinary snapshot)
  scrollProgress: MotionValue<number>
  className?: string
  fallbackOnMobile?: boolean     // Se true, não carrega vídeo em touch devices
}
```

**Lógica de scrubbing:**
```typescript
useEffect(() => {
  const video = videoRef.current
  if (!video) return

  // Subscrever ao scrollProgress via Framer Motion
  const unsubscribe = scrollProgress.on('change', (v) => {
    // Só scruba se o vídeo tiver dados suficientes carregados
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      video.currentTime = v * video.duration
    }
  })

  return unsubscribe
}, [scrollProgress])
```

**Por que `readyState >= HAVE_CURRENT_DATA` (2)?**
- `HAVE_NOTHING` (0): nenhum dado — `currentTime` ignorado
- `HAVE_METADATA` (1): só metadados — `duration` disponível, mas frames não
- `HAVE_CURRENT_DATA` (2): dados para frame atual — mínimo para scrubbing
- `HAVE_FUTURE_DATA` (3): dados para frente — scrubbing suave
- `HAVE_ENOUGH_DATA` (4): buffer cheio — scrubbing perfeito

Definir `currentTime` antes do `HAVE_CURRENT_DATA` não causa erro mas é silenciosamente ignorado pelo browser.

**Atributos do elemento `<video>`:**
```typescript
<video
  ref={videoRef}
  src={src}
  poster={poster}
  preload="auto"           // Carrega o vídeo inteiro no background
  muted                    // OBRIGATÓRIO — browser bloqueia vídeo com áudio sem interação
  playsInline              // OBRIGATÓRIO em iOS — sem isso não roda
  loop                     // Para segurança — se currentTime chegar ao final
  style={{ playbackRate: 0 }} // Impede autoplay concorrente ao scrubbing
  className="..."
/>
```

**Nota sobre `preload="auto"`:**
Isso instrui o browser a carregar o vídeo inteiro antes de precisar. Para um vídeo de 5s bem comprimido pelo Cloudinary (~800KB–2MB), é aceitável. Considerar `preload="metadata"` se quiser economizar banda em conexões lentas — mas o scrubbing só fica suave com `auto`.

**Detecção de mobile para fallback:**
```typescript
const isTouchDevice = typeof window !== 'undefined'
  && window.matchMedia('(pointer: coarse)').matches

if (isTouchDevice && fallbackOnMobile) {
  // Renderizar apenas a imagem poster como fundo estático
  return <img src={poster} className={className} aria-hidden="true" />
}
```

Touch devices (`pointer: coarse`) incluem smartphones e tablets — são onde o scrubbing de vídeo tem mais chance de ser choppy.

**Por que scrubbing pode ser choppy no mobile?**
Browsers mobile pausam a decodificação de vídeo em background e priorizam outros processos. Definir `video.currentTime` requer decodificação de um frame específico (seek), que é operação de I/O + CPU. Em 60fps de scroll, isso pode causar frames dropados visíveis. A solução mais robusta é usar a imagem poster no mobile.

### 5.3 — `site/vetora-next/components/sections/HeroVideo.tsx`

Cópia do `Hero.tsx` atual com estas modificações:
- Importa `VideoScrub` em vez de `DotGrid`
- Importa `cloudinaryVideo` e `cloudinaryPoster` de `lib/cloudinary.ts`
- Usa `usePageScrollProgress()` (mesmo hook do Sprint A)
- Passa `scrollProgress` para o `VideoScrub`
- Fundo da seção: `bg-[#061426]` (o vídeo cobre, mas o fundo precisa estar definido para o tempo de carregamento)
- Não há orbs de luz (o vídeo substitui)

**Layout:**
```
<section className="relative min-h-screen ...">
  {/* Camada 0 — vídeo de fundo */}
  <VideoScrub
    src={cloudinaryVideo('vetora/animations/animacao-fundo')}
    poster={cloudinaryPoster('vetora/animations/animacao-fundo')}
    scrollProgress={scrollProgress}
    className="absolute inset-0 w-full h-full object-cover"
    fallbackOnMobile
  />

  {/* Camada 1 — overlay escurecedor para garantir leitura do texto */}
  <div
    className="absolute inset-0"
    style={{ background: 'rgba(6, 20, 38, 0.72)' }}
    aria-hidden="true"
  />

  {/* Camada 2 — conteúdo textual (idêntico ao Hero original) */}
  <div className="wrap relative z-10 ...">
    {/* eyebrow, headline, sub, CTAs, stats */}
  </div>
</section>
```

**O overlay escurecedor é crítico.** O vídeo gerado por IA pode ter variações de brilho que comprometem o contraste com o texto branco. O overlay `rgba(6,20,38,0.72)` (Azul Profundo com 72% de opacidade) garante que o texto sempre passa WCAG AA, independentemente do frame do vídeo.

### 5.4 — `site/vetora-next/app/demo/video-scroll/page.tsx`

Mesma estrutura da página de demo do Sprint A, mas usando `HeroVideo`.

**Rota:** `localhost:3000/demo/video-scroll`

---

## Sequência de execução

### Fase A — Produção do vídeo (sem código)
1. [ ] Gerar imagem base no DALL-E com o prompt exato deste documento
2. [ ] Avaliar a imagem — se aprovada, salvar em `dados/animacao-fundo-base.png`
3. [ ] Upload da imagem no Kling AI (Image to Video)
4. [ ] Configurar parâmetros exatos (Motion Intensity 2/10, Camera Static, 5s)
5. [ ] Gerar — avaliar o vídeo com os critérios definidos
6. [ ] Se não aprovado: regenerar ajustando o Motion Intensity para 1/10
7. [ ] Exportar como MP4, salvar em `dados/animacao-fundo-kling.mp4`
8. [ ] Verificar com `ffprobe` (codec H.264, duração ~5s)
9. [ ] Upload no Cloudinary, anotar Public ID
10. [ ] Anotar Cloud Name, configurar em `.env.local`

### Fase B — Desenvolvimento
1. [ ] Criar `site/vetora-next/lib/cloudinary.ts`
2. [ ] Criar `site/vetora-next/hooks/useScrollProgress.ts` (se Sprint A não o criou antes)
3. [ ] Criar `site/vetora-next/components/animations/VideoScrub.tsx`
4. [ ] Criar `site/vetora-next/components/sections/HeroVideo.tsx`
5. [ ] Criar `site/vetora-next/app/demo/video-scroll/page.tsx`
6. [ ] Testar em desktop: scrubbing deve ser suave e responsivo
7. [ ] Testar em mobile: fallback estático deve ser exibido
8. [ ] Ajustar opacidade do overlay para garantir legibilidade do texto

---

## Checklist de performance

- [ ] Vídeo comprimido pelo Cloudinary pesa menos de 2MB (verificar DevTools > Network)
- [ ] Poster (JPG) carrega instantaneamente — fundo visível antes do vídeo
- [ ] Scrubbing suave em desktop: sem saltos visíveis entre frames
- [ ] Mobile mostra imagem estática (fallback) sem tentar carregar o vídeo
- [ ] `preload="auto"` não bloqueia renderização do HTML — verificar LCP no Lighthouse
- [ ] `video.readyState` checado antes de setar `currentTime` — sem erros no console

---

## Checklist de qualidade visual

- [ ] Vídeo de fundo não compete com o texto (overlay garante contraste)
- [ ] Texto branco passa WCAG AA em qualquer frame do vídeo
- [ ] A animação do vídeo tem relação com o scroll — avançar na página avança o vídeo
- [ ] Em frames iniciais (scroll no topo), o fundo está adequado para primeira impressão
- [ ] Não há artefatos, flickers ou distorções óbvias no vídeo
- [ ] O poster (frame 0) é uma boa imagem estática por si só
- [ ] Visual final tem nível "produto premium" — não parece wallpaper de agência genérica

---

## Critério de conclusão

- [ ] Vídeo gerado, verificado e hospedado no Cloudinary
- [ ] `.env.local` com `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` configurado
- [ ] `cloudinary.ts` criado com helpers de URL
- [ ] `VideoScrub.tsx` criado e sem erros TypeScript
- [ ] `HeroVideo.tsx` criado com overlay de contraste
- [ ] `Hero.tsx` original **intacto** — não modificado
- [ ] Rota `/demo/video-scroll` acessível e renderizando o site completo
- [ ] Scrubbing funcional em desktop: vídeo avança com o scroll
- [ ] Fallback estático no mobile
- [ ] Nenhum erro no console do browser

---

## Notas e armadilhas

**Sobre Motion Intensity no Kling:**
Este é o parâmetro mais crítico do pipeline inteiro. Motion Intensity alta (5+) cria movimento dramático que fica sensacional em loop autônomo mas é completamente inadequado para scrubbing — o usuário veria flashes e distorções ao rolar a página. Começar sempre com 1 ou 2.

**Sobre `video.playbackRate = 0`:**
Não é um atributo HTML padrão — precisa ser setado via JavaScript. No `useEffect`, após o elemento existir:
```typescript
if (videoRef.current) videoRef.current.playbackRate = 0
```
Isso impede o vídeo de rodar sozinho em paralelo ao scrubbing. Sem isso, o vídeo pode começar a tocar automaticamente em browsers que permitem autoplay muted.

**Sobre o overlay de contraste:**
O valor `rgba(6,20,38,0.72)` foi calculado para garantir WCAG AA com texto branco na maioria dos frames. Se o vídeo tiver frames muito claros, pode ser necessário aumentar para 0.80. Verificar com a extensão axe ou a aba Accessibility do Chrome DevTools.

**Sobre `f_auto` no Cloudinary:**
O parâmetro `f_auto` serve WebM para Chrome/Firefox e MP4 para Safari automaticamente. Isso é importante porque WebM é ~30% menor que H.264 MP4. O Cloudinary detecta o browser via `Accept` header e serve o formato certo.

**Sobre CORS:**
Se o Next.js jogar erros de CORS ao carregar o vídeo do Cloudinary, adicionar no `next.config.js`:
```javascript
async headers() {
  return [{ source: '/(.*)', headers: [{ key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' }] }]
}
```
Mas Cloudinary normalmente não requer isso — o vídeo é carregado como recurso de mídia, não como fetch.

**Sobre a experiência em conexão lenta:**
Com `preload="auto"`, o browser tenta baixar o vídeo inteiro imediatamente. Em conexão lenta (3G), isso pode demorar. Estratégia: mostrar o poster como fundo até o vídeo estar pronto (`video.readyState >= 3`), transicionando com `opacity` quando completo.

**Sobre o loop:**
O vídeo tem `loop` habilitado por segurança, mas em scrubbing normal o `currentTime` nunca chegará ao fim — o scroll da página vai de 0 a 100%, o vídeo vai de 0 a `duration`. O loop só entraria se `scrollYProgress` chegar exatamente a 1.0, o que acontece ao final da página.

**Sobre privacidade do vídeo no Cloudinary:**
Por padrão, os assets no Cloudinary são públicos por URL. Se quiser restringir, configurar "Signed URLs" — mas para este caso (background de site público), URL pública é o comportamento correto.

---

## O que fazer depois que estiver pronto

1. Acessar `/demo/canvas-vetorial` e `/demo/video-scroll` lado a lado (Sprint A)
2. Avaliar os dois em desktop e mobile
3. Decidir qual adotar como oficial
4. Se este for escolhido: substituir `Hero.tsx` pelo `HeroVideo.tsx`, deletar o demo, mover o vídeo de `dados/` para `identidade/`
5. Se o Sprint A for escolhido: mover este arquivo para `sprints/_archived/`, deletar o asset do Cloudinary se quiser economizar banda
