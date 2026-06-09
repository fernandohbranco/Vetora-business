"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const passos = [
  {
    num: "01",
    label: "Diagnóstico",
    desc: "Mapeamos onde está o desalinhamento entre o que você entrega e o que o mercado percebe.",
  },
  {
    num: "02",
    label: "Direção",
    desc: "Definimos posicionamento, arquétipo e identidade — a estratégia que orienta tudo.",
  },
  {
    num: "03",
    label: "Construção",
    desc: "Produzimos os ativos: site, visual, copy, apresentação ou conteúdo com padrão de referência.",
  },
  {
    num: "04",
    label: "Entrega",
    desc: "Revisamos, ajustamos e publicamos. Você recebe tudo pronto para operar.",
  },
  {
    num: "05",
    label: "Evolução",
    desc: "Acompanhamos os resultados e iteramos. A marca cresce com o negócio.",
  },
];

export function Metodo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const progressRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: progressRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="metodo" className="bg-graphite section" ref={ref}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Lado esquerdo — texto */}
          <div>
            <motion.p
              className="text-eyebrow mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Método VETORA
            </motion.p>
            <motion.h2
              className="text-h2 text-white mb-5"
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            >
              Um processo que entrega resultado, não apenas entregáveis.
            </motion.h2>
            <motion.p
              className="text-lead text-silver/50 mb-8 max-w-[420px]"
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
            >
              Cada projeto segue as mesmas 5 etapas. Isso garante
              consistência, clareza e previsibilidade — do diagnóstico à evolução.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.34 }}
            >
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-cyan/80 hover:text-cyan border-b border-cyan/20 hover:border-cyan/60 pb-0.5 transition-all"
              >
                Ver o método completo
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Lado direito — timeline */}
          <div ref={progressRef} className="relative">
            {/* Linha de progresso */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/6">
              <motion.div
                className="w-full bg-cyan origin-top"
                style={{ height: lineH }}
              />
            </div>

            <div className="space-y-0">
              {passos.map((p, i) => (
                <motion.div
                  key={p.num}
                  className="flex gap-6 pb-10 last:pb-0"
                  initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-10 flex justify-center">
                    <div className="w-[9px] h-[9px] mt-1.5 rounded-full bg-cyan/40 border border-cyan/60 ring-4 ring-graphite" />
                  </div>

                  {/* Conteúdo */}
                  <div className="pb-2">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="text-[10px] font-mono text-cyan/50 tracking-widest">{p.num}</span>
                      <h3 className="text-[16px] font-display font-semibold text-white">{p.label}</h3>
                    </div>
                    <p className="text-[14px] text-silver/45 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
