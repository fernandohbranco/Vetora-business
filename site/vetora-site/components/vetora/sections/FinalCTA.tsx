"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section id="contato" className="py-28 px-6 bg-vetora-branco-gelo">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          Próximo Passo
        </motion.p>

        <motion.h2
          className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-vetora-azul-vetor mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Pronto para o mercado perceber
          o que você realmente entrega?
        </motion.h2>

        <motion.p
          className="text-[18px] leading-[1.65] text-vetora-grafite mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
        >
          O diagnóstico é gratuito e dura 30 minutos.
          Saímos com clareza sobre o gap entre sua entrega e sua percepção de mercado
          — e o que fazer a respeito.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={3}
        >
          <a
            href="mailto:fernandohbranco@gmail.com?subject=Diagnóstico gratuito — VETORA"
            className="inline-flex items-center px-9 py-4 rounded text-[15px] font-semibold bg-vetora-ciano text-white hover:bg-[#009595] transition-colors duration-200 tracking-[0.02em]"
          >
            Agendar diagnóstico gratuito
          </a>

          <p className="text-[13px] leading-[1.65] text-vetora-grafite/55 max-w-sm">
            Sem compromisso. Sem pitch de vendas imediato.
            <br />
            Diagnóstico honesto — mesmo que a resposta seja &ldquo;não precisa de nós agora&rdquo;.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
