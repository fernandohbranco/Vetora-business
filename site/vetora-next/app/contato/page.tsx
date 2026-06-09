"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function ContatoPage() {
  return (
    <section className="bg-deep min-h-screen flex items-center section grain relative overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,166,166,0.07) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative z-10 max-w-[640px] mx-auto text-center">
        <motion.p className="text-eyebrow mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: EASE }}>
          Contato
        </motion.p>

        <motion.h1 className="text-h1 text-white mb-5" {...fadeUp(0.1)}>
          Começa com uma conversa.
        </motion.h1>

        <motion.p className="text-lead text-silver/55 mb-12 max-w-[480px] mx-auto" {...fadeUp(0.2)}>
          Sem formulário complexo, sem burocracia. Nos conte o que está
          acontecendo com sua marca — e descobrimos juntos se faz sentido
          trabalhar juntos.
        </motion.p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12" {...fadeUp(0.3)}>
          <a
            href="mailto:contato@vetora.com.br"
            className="group p-6 border-tech rounded-card bg-white/2 hover:bg-white/4 hover:border-cyan/20 transition-all text-left"
          >
            <p className="text-[11px] font-mono text-cyan/50 tracking-widest uppercase mb-2">E-mail</p>
            <p className="text-[15px] text-white group-hover:text-cyan transition-colors">
              contato@vetora.com.br
            </p>
          </a>

          <a
            href="https://www.linkedin.com/company/vetora"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border-tech rounded-card bg-white/2 hover:bg-white/4 hover:border-cyan/20 transition-all text-left"
          >
            <p className="text-[11px] font-mono text-cyan/50 tracking-widest uppercase mb-2">LinkedIn</p>
            <p className="text-[15px] text-white group-hover:text-cyan transition-colors">
              VETORA
            </p>
          </a>
        </motion.div>

        <motion.p className="text-[13px] text-silver/35" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}>
          Resposta em até 24h úteis · Sem compromisso
        </motion.p>
      </div>
    </section>
  );
}
