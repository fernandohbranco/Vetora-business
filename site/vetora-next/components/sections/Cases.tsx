"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cases = [
  {
    cliente: "Autec",
    segmento: "Automação Industrial · B2B",
    entrega: "Branding + Site institucional",
    resultado: "Presença digital que reflete o nível técnico da operação",
    cor: "#0B1F3B",
  },
  {
    cliente: "Rancho 517",
    segmento: "Eventos · Hospitalidade",
    entrega: "Identidade visual + Landing page",
    resultado: "Marca afetiva com posicionamento premium no segmento local",
    cor: "#1E252B",
  },
  {
    cliente: "FRBranco",
    segmento: "Papelaria · Presentes personalizados",
    entrega: "Branding autoral + Presença digital",
    resultado: "Identidade que comunica cuidado e diferenciação artesanal",
    cor: "#0B1F3B",
  },
];

export function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-ice pt-[96px] pb-[64px]" ref={ref}>
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              className="text-eyebrow text-navy/50 mb-4"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Cases
            </motion.p>
            <motion.h2
              className="text-h2 text-navy max-w-[400px]"
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              O resultado fala por si.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          >
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-[13px] text-silver hover:text-navy border-b border-silver/30 hover:border-navy/40 pb-0.5 transition-all"
            >
              Ver todos os cases
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <CaseCard key={c.cliente} item={c} inView={inView} delay={0.22 + i * 0.1} />
          ))}
        </div>

        {/* Nota discreta */}
        <motion.p
          className="text-center mt-10 text-[12px] text-silver/35"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
        >
          Cases com materiais visuais completos em breve.
        </motion.p>
      </div>
    </section>
  );
}

function CaseCard({ item, inView, delay }: { item: typeof cases[0]; inView: boolean; delay: number }) {
  return (
    <motion.div
      className="group relative rounded-card overflow-hidden border border-navy/8 hover:border-cyan/20 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(11,31,59,0.1)]"
      initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {/* Visual placeholder */}
      <div
        className="h-44 relative overflow-hidden"
        style={{ backgroundColor: item.cor }}
      >
        {/* Grid sutil de fundo */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(rgba(184,194,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,194,204,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Nome do cliente em overlay grande */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-[40px] text-white/8 tracking-tight select-none">
            {item.cliente}
          </span>
        </div>
        {/* Badge de segmento */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
            {item.segmento}
          </span>
        </div>
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-cyan/0 group-hover:bg-cyan/5 transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="p-5 bg-white">
        <h3 className="text-[15px] font-display font-semibold text-navy mb-1">{item.cliente}</h3>
        <p className="text-[12px] text-silver/60 mb-3">{item.entrega}</p>
        <p className="text-[13px] text-graphite/60 leading-relaxed">{item.resultado}</p>
      </div>
    </motion.div>
  );
}
