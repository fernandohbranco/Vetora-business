"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cases = [
  {
    cliente: "Autec",
    segmento: "Automação Industrial · B2B",
    entrega: ["Branding Estratégico", "Site institucional"],
    contexto:
      "A Autec entregava projetos de automação industrial de alta complexidade, mas a presença digital não transmitia o nível técnico da operação. Clientes novos não conseguiam perceber a solidez da empresa antes do primeiro contato.",
    resultado:
      "Novo posicionamento de marca + site que reflete o nível técnico e gera confiança antes da primeira reunião.",
    cor: "#0B1F3B",
  },
  {
    cliente: "Rancho 517",
    segmento: "Eventos · Hospitalidade",
    entrega: ["Identidade Visual", "Landing page"],
    contexto:
      "Espaço para eventos com experiência afetiva e posicionamento premium no mercado local, mas sem identidade visual que comunicasse esse diferencial.",
    resultado:
      "Identidade com presença afetiva e posicionamento premium que se destaca no segmento de eventos locais.",
    cor: "#1E252B",
  },
  {
    cliente: "FRBranco",
    segmento: "Papelaria · Presentes personalizados",
    entrega: ["Branding Autoral", "Presença digital"],
    contexto:
      "Marca de papelaria artesanal com cuidado excepcional na produção, mas sem identidade que traduzisse esse diferencial visualmente.",
    resultado:
      "Identidade visual autoral que comunica cuidado e artesanalidade — diferenciando de produção em massa.",
    cor: "#0B1F3B",
  },
];

export default function CasesPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Header */}
      <section className="bg-deep section grain relative overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,166,166,0.07) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative z-10 pt-20" ref={headerRef}>
          <motion.p
            className="text-eyebrow mb-6"
            initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Cases
          </motion.p>
          <motion.h1
            className="text-h1 text-white max-w-[560px] mb-6"
            initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            O resultado fala por si.
          </motion.h1>
          <motion.p
            className="text-lead text-silver/50 max-w-[480px]"
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            Cada projeto começa com um diagnóstico real e termina com
            uma marca que trabalha pelo cliente — mesmo quando ele não está presente.
          </motion.p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-ice section">
        <div className="wrap space-y-6">
          {cases.map((c, i) => (
            <CaseCard key={c.cliente} item={c} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-sm relative overflow-hidden grain">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,166,166,0.08) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative z-10 text-center max-w-[480px] mx-auto">
          <h2 className="text-h3 text-white mb-4">Seu projeto pode ser o próximo.</h2>
          <p className="text-[15px] text-silver/50 mb-8">
            Atendemos profissionais e empresas que já entregam bem — e precisam
            aparecer assim.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-deep text-[14px] font-semibold rounded-card hover:bg-cyan/90 hover:shadow-[0_0_32px_rgba(0,166,166,0.4)] transition-all duration-200"
          >
            Conversar sobre seu projeto
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function CaseCard({ item, index }: { item: typeof cases[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="border border-navy/8 rounded-card overflow-hidden hover:border-navy/15 hover:shadow-[0_8px_40px_rgba(11,31,59,0.08)] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: 0.1 + index * 0.08 }}
    >
      {/* Visual placeholder */}
      <div className="h-[180px] relative overflow-hidden" style={{ backgroundColor: item.cor }}>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(184,194,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,194,204,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-[52px] text-white/6 tracking-tight select-none">
            {item.cliente}
          </span>
        </div>
        <div className="absolute top-5 left-5">
          <span className="text-[10px] font-mono tracking-widest text-white/25 uppercase">{item.segmento}</span>
        </div>
        <div className="absolute bottom-5 left-5 flex gap-2">
          {item.entrega.map((e) => (
            <span key={e} className="text-[10px] font-mono px-2.5 py-1 rounded border border-white/10 text-white/30">
              {e}
            </span>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-7 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-[18px] font-display font-semibold text-navy mb-3">{item.cliente}</h3>
          <p className="text-[14px] text-graphite/60 leading-relaxed">{item.contexto}</p>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-navy/6 pt-4 md:pt-0 md:pl-6">
          <p className="text-[10px] font-mono text-cyan/60 tracking-widest uppercase mb-2">Resultado</p>
          <p className="text-[14px] text-graphite/70 leading-relaxed">{item.resultado}</p>
        </div>
      </div>
    </motion.div>
  );
}
