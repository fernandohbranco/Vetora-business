"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import type { MotionValue } from "framer-motion";

/* ─── Parâmetros do campo ───────────────────────────────────────────── */
const SPACING     = 36;          // distância entre vetores (px)
const SPACING_MOB = 54;          // distância em mobile (menos densidade)
const SCALE       = 160;         // escala do noise (região de fluxo)
const SPEED       = 0.00022;     // deriva temporal por frame
const LENGTH      = 20;          // comprimento base de cada seta (px)
const LINE_WIDTH  = 0.65;        // espessura da linha
const BASE_OPACITY = 0.11;       // opacidade base
const ARROW_SIZE  = 4;           // tamanho das asas da seta
const ARROW_ANGLE = 0.45;        // ângulo das asas (~26°)
const MOUSE_RADIUS = 120;        // raio do efeito de mouse (px)
// Diagonal para cima e à direita — mesma direção do vetor na logo VETORA
const TARGET_ANGLE = -Math.PI * 0.38;

interface VectorFieldProps {
  scrollProgress: MotionValue<number>;
  className?: string;
}

export function VectorField({ scrollProgress, className }: VectorFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise2D = createNoise2D();
    let w = 0, h = 0;
    let time = 0;
    let raf: number;
    let paused = false;

    const mouse   = { x: -9999, y: -9999 };
    const scrollRef = { value: 0 };

    const spacing = typeof window !== "undefined" && window.innerWidth < 768
      ? SPACING_MOB
      : SPACING;

    // Subscreve scroll sem causar re-renders (lê via ref no loop rAF)
    const unsubScroll = scrollProgress.on("change", (v) => {
      scrollRef.value = v;
    });

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width  = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const onMouseMove  = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    const draw = () => {
      if (paused) return;
      ctx.clearRect(0, 0, w, h);
      time += 1;

      // Easing do scroll: resposta mais suave no início, mais decisiva no final
      const eased = Math.pow(scrollRef.value, 1.6);

      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      const ox   = (w % spacing) / 2;
      const oy   = (h % spacing) / 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = ox + col * spacing;
          const y = oy + row * spacing;

          // Ângulo baseado em Perlin noise — cria o campo orgânico
          const noiseAngle = noise2D(x / SCALE, y / SCALE + time * SPEED) * Math.PI * 2;

          // Proximidade do mouse
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mBonus = dist < MOUSE_RADIUS ? (1 - dist / MOUSE_RADIUS) : 0;

          // Blend entre noise caótico e ângulo alvo conforme scroll avança
          const angle = lerp(noiseAngle, TARGET_ANGLE, eased);

          const len     = LENGTH + mBonus * 8;
          const opacity = BASE_OPACITY + eased * 0.09 + mBonus * 0.22;
          const aw      = ARROW_SIZE + mBonus * 2;

          const tx = x + Math.cos(angle) * len;
          const ty = y + Math.sin(angle) * len;

          // Linha principal
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = `rgba(0,166,166,${opacity})`;
          ctx.lineWidth = LINE_WIDTH;
          ctx.stroke();

          // Ponta da seta (duas asas)
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(
            tx + Math.cos(angle + Math.PI - ARROW_ANGLE) * aw,
            ty + Math.sin(angle + Math.PI - ARROW_ANGLE) * aw,
          );
          ctx.moveTo(tx, ty);
          ctx.lineTo(
            tx + Math.cos(angle + Math.PI + ARROW_ANGLE) * aw,
            ty + Math.sin(angle + Math.PI + ARROW_ANGLE) * aw,
          );
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    // Pausa o loop quando o canvas não está visível — economiza CPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          paused = false;
          raf = requestAnimationFrame(draw);
        } else {
          paused = true;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      unsubScroll();
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
