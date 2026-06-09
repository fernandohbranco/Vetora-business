"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { VideoScrub } from "@/components/animations/VideoScrub";
import { cloudinaryVideo, cloudinaryPoster } from "@/lib/cloudinary";

// Public ID do vídeo no Cloudinary — substituir após upload
const VIDEO_PUBLIC_ID = "vetora/animations/animacao-fundo";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: EASE, delay: d },
  }),
};

const clipReveal = {
  hidden:  { clipPath: "inset(0 0 100% 0)" },
  visible: (d = 0) => ({
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.95, ease: EASE, delay: d },
  }),
};

export function HeroVideo() {
  const { scrollYProgress } = useScroll();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-deep"
      aria-label="Hero"
    >
      {/* Camada 0 — vídeo controlado pelo scroll */}
      <VideoScrub
        src={cloudinaryVideo(VIDEO_PUBLIC_ID)}
        poster={cloudinaryPoster(VIDEO_PUBLIC_ID)}
        scrollProgress={scrollYProgress}
        className="object-cover"
      />

      {/* Camada 1 — overlay para garantir legibilidade do texto (WCAG AA) */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(6,20,38,0.72)" }}
        aria-hidden="true"
      />

      {/* Camada 2 — conteúdo */}
      <div className="wrap relative z-10 pt-28 pb-16">

        <motion.p
          className="text-eyebrow mb-7"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
        >
          Estúdio estratégico de branding
        </motion.p>

        <h1 className="max-w-[700px] mb-7">
          <motion.span
            className="block text-h1 text-white"
            variants={clipReveal} initial="hidden" animate="visible" custom={0.2}
          >
            Você entrega mais
          </motion.span>
          <motion.span
            className="block text-h1"
            variants={clipReveal} initial="hidden" animate="visible" custom={0.38}
          >
            <span className="text-silver/45">do que o mercado</span>{" "}
            <span className="text-cyan">percebe.</span>
          </motion.span>
        </h1>

        <motion.p
          className="text-lead text-silver/60 max-w-[480px] mb-10"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
        >
          A VETORA conecta o que você faz ao que o mercado consegue ver —
          com estratégia, branding e tecnologia.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 items-start"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.68}
        >
          <MagneticButton href="/contato" primary>
            Conversar sobre seu projeto
          </MagneticButton>
          <MagneticButton href="/metodo">
            Ver o Método VETORA
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-white/8 flex flex-wrap gap-10"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.82}
        >
          {[
            { value: "3 anos",  label: "de método refinado" },
            { value: "R$10k+",  label: "ticket médio atendido" },
            { value: "100%",    label: "projetos entregues" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-display font-bold text-[26px] leading-none text-white">{s.value}</span>
              <span className="text-[11px] uppercase tracking-widest text-silver/35">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-silver/50">scroll</span>
        <motion.div
          className="w-px h-7 bg-silver/40"
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

/* ─── Botão magnético ────────────────────────────────────────────────── */
function MagneticButton({
  href, children, primary = false,
}: {
  href: string; children: React.ReactNode; primary?: boolean;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const R = 70, S = 0.32;
    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      if (Math.sqrt(dx * dx + dy * dy) < R) {
        btn.style.transform = `translate(${dx * S}px, ${dy * S}px)`;
      }
    };
    const reset = () => {
      btn.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
      btn.style.transform = "";
    };
    const start = () => { btn.style.transition = "transform 0.08s linear"; };
    document.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", reset);
    btn.addEventListener("mouseenter", start);
    return () => {
      document.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", reset);
      btn.removeEventListener("mouseenter", start);
    };
  }, []);

  return (
    <Link
      ref={btnRef}
      href={href}
      style={{ willChange: "transform" }}
      className={`
        inline-flex items-center gap-2 px-5 py-2.5 rounded-card text-[13px] font-medium transition-all duration-200
        ${primary
          ? "bg-cyan text-deep hover:bg-cyan/90 hover:shadow-[0_0_24px_rgba(0,166,166,0.35)]"
          : "border border-white/12 text-silver/70 hover:border-white/25 hover:text-white hover:bg-white/4"
        }
      `}
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
