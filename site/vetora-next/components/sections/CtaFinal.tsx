"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function CtaFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-navy section relative overflow-hidden grain" ref={ref}>
      {/* Luz de fundo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,166,166,0.1) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative z-10 text-center max-w-[600px] mx-auto">
        <motion.p
          className="text-eyebrow mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Próximo passo
        </motion.p>

        <motion.h2
          className="text-h2 text-white mb-5"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
        >
          Sua marca deveria trabalhar por você.
        </motion.h2>

        <motion.p
          className="text-lead text-silver/50 mb-10"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
        >
          Começa com uma conversa. Sem compromisso —
          só queremos entender onde está o desalinhamento.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.34 }}
        >
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan text-deep text-[14px] font-semibold rounded-card hover:bg-cyan/90 hover:shadow-[0_0_32px_rgba(0,166,166,0.4)] transition-all duration-200"
          >
            Falar com a VETORA
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/12 text-silver/70 text-[14px] font-medium rounded-card hover:border-white/25 hover:text-white transition-all duration-200"
          >
            Ver serviços e preços
          </Link>
        </motion.div>

        {/* Garantia sutil */}
        <motion.p
          className="mt-8 text-[12px] text-silver/25"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
        >
          Resposta em até 24h úteis · Sem burocracia
        </motion.p>
      </div>
    </section>
  );
}
