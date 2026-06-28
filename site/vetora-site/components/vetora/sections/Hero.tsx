"use client";

import { motion } from "framer-motion";
import { fadeUpAt as fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-vetora-azul-vetor"
      style={{
        backgroundImage: `
          linear-gradient(rgba(184,194,204,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(184,194,204,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Diagonal accent lines in Ciano */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="1440" y1="650" x2="680" y2="0" stroke="#00A6A6" strokeWidth="1.5" strokeOpacity="0.16" />
          <line x1="1440" y1="780" x2="860" y2="0" stroke="#00A6A6" strokeWidth="0.5" strokeOpacity="0.06" />
        </svg>
      </div>

      {/* Subtle radial glow at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(0,166,166,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano mb-7"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          Estúdio Estratégico de Branding, Sites e IA
        </motion.p>

        <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-3xl mb-7">
          <motion.span className="block" variants={fadeUp(0.22)} initial="hidden" animate="visible">
            Sua entrega precisa ser
          </motion.span>
          <motion.span className="block" variants={fadeUp(0.34)} initial="hidden" animate="visible">
            percebida antes da
          </motion.span>
          <motion.span className="block" variants={fadeUp(0.46)} initial="hidden" animate="visible">
            primeira conversa.
          </motion.span>
        </h1>

        <motion.p
          className="text-[18px] leading-[1.65] text-vetora-prata max-w-2xl mb-11"
          variants={fadeUp(0.62)}
          initial="hidden"
          animate="visible"
        >
          A VETORA transforma negócios reais em ativos digitais de valor —
          corrigindo o desalinhamento entre o que você entrega e o que o
          mercado consegue perceber.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp(0.74)}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#contato"
            className="inline-flex items-center px-7 py-3.5 rounded text-[14px] font-semibold bg-vetora-ciano text-white hover:bg-[#009595] transition-colors duration-200 tracking-[0.02em]"
          >
            Agendar diagnóstico gratuito
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center px-7 py-3.5 rounded text-[14px] font-semibold border border-white/25 text-white/80 hover:border-white/50 hover:text-white transition-all duration-200 tracking-[0.02em]"
          >
            Ver como funciona
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none" aria-hidden>
        <span className="text-[10px] text-vetora-prata/35 uppercase tracking-[0.15em]">scroll</span>
        <div className="relative w-px h-10 overflow-hidden">
          <div
            className="absolute inset-0 bg-vetora-ciano/55"
            style={{ animation: "scrollDrip 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
