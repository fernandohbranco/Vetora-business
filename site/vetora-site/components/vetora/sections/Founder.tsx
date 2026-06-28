"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Founder() {
  return (
    <section id="fundador" className="py-28 px-6 bg-vetora-azul-profundo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo placeholder */}
          <motion.div
            className="order-2 lg:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <div className="relative aspect-[4/5] max-w-[360px] mx-auto lg:mx-0 rounded-md overflow-hidden border border-white/[0.07]">
              <Image
                src="/foto-fundador.png"
                alt="Fernando Branco — Fundador da VETORA"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 360px, 360px"
                priority
              />
              <div className="absolute top-5 left-5 w-7 h-7 border-t border-l border-vetora-ciano/40 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-7 h-7 border-b border-r border-vetora-ciano/40 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
            >
              Quem Está Por Trás
            </motion.p>

            <motion.h2
              className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
            >
              Fernando Branco
            </motion.h2>

            <motion.p
              className="text-[16px] leading-[1.55] text-vetora-prata"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
            >
              Engenheiro Mecânico · Coordenador de Engenharia Industrial
              <br />
              Especialista em IA aplicada a branding e presença digital
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 text-[16px] leading-[1.8] text-vetora-prata/80"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
            >
              <p>
                Durante anos projetei sistemas industriais onde cada decisão tem impacto real —
                tolerâncias, falhas, custo. Aprendi que rigor técnico não é opcional.
              </p>
              <p>
                Trouxe esse mesmo rigor para o branding e a presença digital.
                Na VETORA, nenhuma decisão visual ou estratégica é tomada sem diagnóstico.
                Nenhuma entrega vai ao ar sem checklist.
              </p>
              <p>
                Hoje, combino engenharia com inteligência artificial para construir ativos digitais
                que representam negócios reais com a precisão que eles merecem.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={4}
            >
              <a
                href="https://linkedin.com/in/fernandohbranco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-vetora-ciano hover:opacity-70 transition-opacity"
              >
                LinkedIn →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
