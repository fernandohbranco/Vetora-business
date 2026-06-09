"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const passos = [
  {
    num: "01",
    label: "Diagnóstico",
    headline: "Entendemos o que o mercado não está conseguindo ver.",
    desc: "Mapeamos onde está o desalinhamento entre o que você entrega e o que o mercado percebe. Analisamos presença digital, posicionamento atual, concorrência e como o cliente ideal te encontra — ou não te encontra.",
    entregavel: "Diagnóstico de posicionamento + mapa de gaps",
  },
  {
    num: "02",
    label: "Direção",
    headline: "Definimos quem você é e como quer ser reconhecido.",
    desc: "Construímos o posicionamento estratégico, arquétipo de marca, tom de voz e identidade verbal. Essa etapa é o alicerce — tudo que vem depois deriva daqui.",
    entregavel: "Brand strategy + plataforma de posicionamento",
  },
  {
    num: "03",
    label: "Construção",
    headline: "Produzimos os ativos com padrão de referência.",
    desc: "Site, identidade visual, copy, apresentação comercial ou conteúdo de redes — desenvolvido com o rigor técnico e visual que o posicionamento exige. Nada entregue por achismo.",
    entregavel: "Ativos de marca prontos para operar",
  },
  {
    num: "04",
    label: "Entrega",
    headline: "Você recebe tudo funcionando, sem depender de nós para operar.",
    desc: "Revisamos, ajustamos e publicamos. Entregamos com documentação, guias de uso e treinamento quando necessário. O objetivo é autonomia — não dependência.",
    entregavel: "Entrega final + guia de uso da marca",
  },
  {
    num: "05",
    label: "Evolução",
    headline: "A marca cresce junto com o negócio.",
    desc: "Acompanhamos os resultados, identificamos o que pode melhorar e iteramos. Posicionamento não é estático — e o nosso trabalho não termina na entrega.",
    entregavel: "Ciclos de revisão + evolução contínua",
  },
];

export default function MetodoPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Hero da página */}
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
            Método VETORA
          </motion.p>
          <motion.h1
            className="text-h1 text-white max-w-[680px] mb-6"
            initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            Um processo que entrega resultado,{" "}
            <span className="text-silver/40">não apenas entregáveis.</span>
          </motion.h1>
          <motion.p
            className="text-lead text-silver/50 max-w-[520px]"
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            Cinco etapas estruturadas. Cada projeto começa no diagnóstico e só
            avança quando há clareza na etapa anterior. Sem atalhos — sem retrabalho.
          </motion.p>
        </div>
      </section>

      {/* Passos expandidos */}
      <section className="bg-graphite section">
        <div className="wrap">
          <div className="space-y-0 max-w-[760px] mx-auto">
            {passos.map((p, i) => (
              <PassoCard key={p.num} passo={p} index={i} />
            ))}
          </div>
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
          <h2 className="text-h3 text-white mb-4">Pronto para começar pelo diagnóstico?</h2>
          <p className="text-[15px] text-silver/50 mb-8">
            A primeira conversa é gratuita e sem compromisso. Entendemos onde está
            o desalinhamento antes de qualquer proposta.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-deep text-[14px] font-semibold rounded-card hover:bg-cyan/90 hover:shadow-[0_0_32px_rgba(0,166,166,0.4)] transition-all duration-200"
          >
            Falar com a VETORA
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function PassoCard({ passo, index }: { passo: typeof passos[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-8 pb-12 last:pb-0 border-b border-white/5 last:border-0 mb-12 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: 0.1 + index * 0.06 }}
    >
      {/* Número */}
      <div className="flex-shrink-0 pt-1">
        <span className="text-[13px] font-mono text-cyan/40 tracking-widest">{passo.num}</span>
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <p className="text-[10px] font-mono text-cyan/50 tracking-widest uppercase mb-2">{passo.label}</p>
        <h3 className="text-h3 text-white mb-3">{passo.headline}</h3>
        <p className="text-[15px] text-silver/50 leading-relaxed mb-5">{passo.desc}</p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-cyan/15 rounded-card bg-cyan/5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan/60 flex-shrink-0" />
          <span className="text-[12px] text-silver/50 font-mono">{passo.entregavel}</span>
        </div>
      </div>
    </motion.div>
  );
}
