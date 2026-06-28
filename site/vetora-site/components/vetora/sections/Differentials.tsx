"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const diffs = [
  {
    title: "Diagnóstico antes de proposta",
    body: "Nunca enviamos orçamento sem entender o problema. A maioria das agências entrega arte sem estratégia. Nós entregamos estratégia com execução.",
  },
  {
    title: "Engenharia aplicada a negócio",
    body: "Fernando é engenheiro industrial com domínio de IA aplicada. Rigor técnico de projeto industrial + visão de negócio + execução com inteligência artificial. Combinação rara no mercado de branding.",
  },
  {
    title: "Sistema, não amontoado de arquivos",
    body: "Cada entrega é um ativo coerente — não uma pasta com logos e PDFs soltos. Você sai com identidade consolidada, método documentado e presença digital que te representa.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-28 px-6 bg-vetora-azul-vetor">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          Por Que a VETORA
        </motion.p>

        <motion.h2
          className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white mb-14 max-w-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Estratégia antes de estética.
          <br />
          Sempre.
        </motion.h2>

        <div className="flex flex-col gap-4">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              className="px-7 py-6 bg-vetora-azul-profundo border-l-2 border-vetora-ciano"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + 2}
            >
              <h3 className="text-[16px] font-semibold text-white mb-3 tracking-[-0.01em]">
                {d.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-vetora-prata">
                {d.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
