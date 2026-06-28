"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const tensions = [
  "Minha entrega é excelente, mas minha presença digital é genérica.",
  "Já tentei agência. Recebo arte bonita, não estratégia.",
  "Cada peça parece diferente. Não tenho identidade consolidada.",
];

export default function Problem() {
  return (
    <section id="problema" className="py-28 px-6 bg-vetora-branco-gelo">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vetora-ciano mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          O Especialista Invisível
        </motion.p>

        <motion.h2
          className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-vetora-azul-vetor mb-8 max-w-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Você entrega muito.
          <br />
          O mercado percebe pouco.
        </motion.h2>

        <motion.div
          className="text-[16px] leading-[1.75] text-vetora-grafite max-w-2xl mb-14 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
        >
          <p>
            Boa parte dos profissionais mais competentes que conheço tem o mesmo problema:
            sua reputação existe — mas não aparece.
          </p>
          <p>
            Seu site não te representa. Sua marca não comunica o nível do que você entrega.
            E quando um cliente em potencial pesquisa seu nome, o que ele encontra não passa
            metade do que você é de verdade.
          </p>
          <p>Isso não é problema de esforço. É problema de percepção.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tensions.map((text, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white border border-vetora-borda rounded-md"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + 3}
            >
              <p className="text-[15px] leading-[1.7] text-vetora-azul-vetor">
                &ldquo;{text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
