"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const services = [
  {
    title: "Branding Estratégico",
    body: "Posicionamento, arquétipo, tom de voz, identidade verbal.\nAntes de qualquer logo.",
  },
  {
    title: "Sites e Landing Pages",
    body: "Copy + UX/UI + estrutura de conversão.\nNão decoração — resultado.",
  },
  {
    title: "Apresentações Comerciais",
    body: "Narrativa executiva, pitch deck, proposta visual.\nO deck que fecha negócio.",
  },
  {
    title: "IA Aplicada ao Negócio",
    body: "Prompts, automações e sistemas leves.\nTecnologia com estratégia — não tecnologia por tecnologia.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 px-6 bg-vetora-azul-vetor">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          O Que a VETORA Faz
        </motion.p>

        <motion.h2
          className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white mb-5 max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Transformamos o que você entrega
          em algo que o mercado consegue perceber.
        </motion.h2>

        <motion.p
          className="text-[18px] leading-[1.6] text-vetora-prata max-w-2xl mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
        >
          Não somos uma agência de arte. Somos um estúdio estratégico.
          Cada decisão — de copy, visual ou tecnologia — começa com diagnóstico
          e termina com posicionamento claro.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-vetora-ciano/15 rounded-md overflow-hidden border border-vetora-ciano/15">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="p-7 bg-vetora-azul-profundo flex flex-col gap-3 hover:bg-[#071a30] transition-colors duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + 3}
            >
              <h3 className="text-[17px] font-semibold text-white leading-snug tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-vetora-prata whitespace-pre-line">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
