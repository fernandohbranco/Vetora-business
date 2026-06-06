"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const sintomas = [
  "Clientes que demoram para tomar a decisão — ou somem sem explicação",
  "Precificar alto fica difícil porque a percepção não acompanha a entrega",
  "A concorrência menos qualificada parece mais profissional na vitrine",
  "O site ou o Instagram não refletem o nível do trabalho que você faz",
  "Você depende de indicação porque sua presença digital não trabalha por você",
];

export function Problema() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-navy section relative overflow-hidden grain" ref={ref}>
      {/* Luz de fundo sutil */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #00A6A6 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.p
            className="text-eyebrow mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            O diagnóstico
          </motion.p>

          {/* Headline de impacto — a copy do "manifesto" fica aqui */}
          <motion.h2
            className="text-h2 text-white mb-5"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          >
            Profissionais bons raramente perdem para{" "}
            <span className="text-silver/40">incompetência</span>.
            <br />Perdem para{" "}
            <span className="text-cyan">invisibilidade</span>.
          </motion.h2>

          <motion.p
            className="text-lead text-silver/55 mb-14"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
          >
            O problema não está no seu trabalho — está no desalinhamento entre
            o que você entrega e o que o mercado consegue perceber.
          </motion.p>
        </div>

        {/* Lista de sintomas */}
        <div className="max-w-[600px] mx-auto space-y-4">
          {sintomas.map((s, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 border-tech rounded-card bg-white/2 hover:bg-white/4 transition-colors"
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 + i * 0.08 }}
            >
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-cyan/40 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              </span>
              <p className="text-[15px] text-silver/70 leading-relaxed">{s}</p>
            </motion.div>
          ))}
        </div>

        {/* Fecho */}
        <motion.p
          className="text-center mt-12 text-[15px] text-silver/40 max-w-[400px] mx-auto leading-relaxed"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
        >
          Se algum desses ressoa com você,
          o problema é de posicionamento — e tem solução.
        </motion.p>
      </div>
    </section>
  );
}
