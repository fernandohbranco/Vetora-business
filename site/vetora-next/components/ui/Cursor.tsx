"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;
    let isPointer = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      isPointer = !!(t.closest("a") || t.closest("button") || t.closest("[role='button']"));
    };

    const tick = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) { raf = requestAnimationFrame(tick); return; }

      // Dot segue instantaneamente
      dot.style.transform  = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      // Ring com lerp suave
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      const size = isPointer ? 44 : 28;
      const offset = size / 2;
      ring.style.transform = `translate(${ringX - offset}px, ${ringY - offset}px)`;
      ring.style.width  = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.borderColor = isPointer ? "#00A6A6" : "rgba(184,194,204,0.5)";

      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Ponto central */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999] w-2 h-2 rounded-full bg-cyan"
        style={{ willChange: "transform" }}
      />
      {/* Anel externo */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[998] rounded-full border transition-[width,height,border-color] duration-150"
        style={{ willChange: "transform", borderWidth: "1px" }}
      />
    </>
  );
}
