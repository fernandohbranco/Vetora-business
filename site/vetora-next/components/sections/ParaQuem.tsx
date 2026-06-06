"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const perfis = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="#00A6A6" strokeWidth="1.5"/>
        <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#00A6A6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tipo: "Profissional Liberal",
    exemplos: "Médico · Advogado · Consultor · Arquiteto",
    dor: "Você tem uma reputação sólida por indicação, mas a presença digital não reflete o nível do seu trabalho — e clientes novos não conseguem perceber o valor antes de contratar.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="6" width="14" height="11" rx="1.5" stroke="#00A6A6" strokeWidth="1.5"/>
        <path d="M7 6V4.5A1.5 1.5 0 018.5 3h3A1.5 1.5 0 0113 4.5V6" stroke="#00A6A6" strokeWidth="1.5"/>
        <path d="M3 10h14" stroke="#00A6A6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tipo: "Empresa Técnica",
    exemplos: "Engenharia · Automação · B2B · Indústria",
    dor: "Sua empresa entrega projetos de excelência, mas o site parece de 2012 e as apresentações não passam a solidez que você tem. O mercado não percebe o nível técnico que existe por trás.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l2 4.5H17l-4 3 1.5 5L10 13l-4.5 2.5L7 10.5 3 7.5h5L10 3z" stroke="#00A6A6" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    tipo: "Marca em Construção",
    exemplos: "Solopreneur · Especialista · Negócio novo",
    dor: "Você está começando ou pivotando, e precisa que a marca nasça certa desde o início — com identidade que cresce junto com o negócio, sem precisar refazer daqui a dois anos.",
  },
];

export function ParaQuem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white section" ref={ref}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.p
            className="text-eyebrow text-navy/50 mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Para quem é a VETORA
          </motion.p>
          <motion.h2
            className="text-h2 text-navy max-w-[500px] mx-auto"
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Trabalhamos com quem já entrega bem — e precisa aparecer assim.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perfis.map((p, i) => (
            <motion.div
              key={p.tipo}
              className="p-7 border border-navy/8 rounded-card hover:border-cyan/25 hover:shadow-[0_4px_24px_rgba(11,31,59,0.06)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-card bg-navy/4 border border-navy/8 flex items-center justify-center mb-5 group-hover:border-cyan/30 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-[16px] font-display font-semibold text-navy mb-1">{p.tipo}</h3>
              <p className="text-[12px] text-silver/60 mb-4 font-mono tracking-wide">{p.exemplos}</p>
              <p className="text-[14px] text-graphite/55 leading-relaxed">{p.dor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
