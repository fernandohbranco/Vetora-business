"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    body: "Mapeamos o gap entre o que você entrega e o que o mercado percebe. Não começamos sem entender o problema real.",
  },
  {
    num: "02",
    title: "Direção",
    body: "Definimos posicionamento, arquétipo e estratégia visual antes de criar qualquer peça. A estratégia sempre antes da estética.",
  },
  {
    num: "03",
    title: "Construção",
    body: "Desenvolvemos os ativos com precisão: copy, visual, código, identidade. Cada elemento tem propósito definido na etapa anterior.",
  },
  {
    num: "04",
    title: "Entrega",
    body: "Revisão técnica, checklist de qualidade, validação UX. Nada vai ao ar antes de estar pronto de verdade.",
  },
  {
    num: "05",
    title: "Evolução",
    body: "Acompanhamos, ajustamos e evoluímos o que foi construído. Um ativo digital precisa crescer com o negócio.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="py-28 px-6 bg-vetora-branco-gelo">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          Método VETORA
        </motion.p>

        <motion.h2
          className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-vetora-azul-vetor mb-5 max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Construa sua marca com a mesma
          precisão de um projeto de engenharia.
        </motion.h2>

        <motion.p
          className="text-[18px] leading-[1.6] text-vetora-grafite max-w-xl mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
        >
          Cada entrega segue cinco etapas. Na sequência certa.
          Sem pular diagnóstico. Sem entregar antes de entender.
        </motion.p>

        {/* Steps grid */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="absolute top-[22px] left-[22px] right-[22px] h-px bg-vetora-borda hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex flex-col gap-5"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i + 3}
              >
                {/* Step dot */}
                <div className="relative z-10 w-11 h-11 rounded-full border-2 border-vetora-ciano bg-vetora-branco-gelo flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-semibold text-vetora-ciano tracking-[0.05em]">
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-vetora-azul-vetor mb-2 tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-vetora-grafite">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
