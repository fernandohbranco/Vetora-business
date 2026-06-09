"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const servicos = [
  {
    num: "01",
    titulo: "Branding Estratégico",
    desc: "Posicionamento, arquétipo, tom de voz e identidade verbal que criam diferenciação real no mercado.",
    destaque: true,
    wide: true,
  },
  {
    num: "02",
    titulo: "Sites & Landing Pages",
    desc: "Copy, UX/UI e desenvolvimento que convertem visitantes em clientes.",
    destaque: false,
    wide: false,
  },
  {
    num: "03",
    titulo: "Identidade Visual",
    desc: "Direção criativa, paleta, logo e sistema visual que comunica autoridade.",
    destaque: false,
    wide: false,
  },
  {
    num: "04",
    titulo: "Apresentações Comerciais",
    desc: "Narrativa executiva e pitch deck que vendem antes de você abrir a boca.",
    destaque: false,
    wide: false,
  },
  {
    num: "05",
    titulo: "Conteúdo & Presença Digital",
    desc: "LinkedIn, Instagram e carrosséis com método — não com achismo.",
    destaque: false,
    wide: false,
  },
  {
    num: "06",
    titulo: "IA Aplicada",
    desc: "Prompts, automações e sistemas leves que escalam sem escalar a equipe.",
    destaque: true,
    wide: true,
  },
];

export function Servicos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicos" className="bg-ice section" ref={ref}>
      <div className="wrap">
        <div className="mb-14">
          <motion.p
            className="text-eyebrow-dark mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            O que fazemos
          </motion.p>
          <motion.h2
            className="text-h2 text-navy max-w-[340px]"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Seis frentes. Um método.
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Linha 1: card grande (2 cols) + card pequeno */}
          <BentoCard item={servicos[0]} inView={inView} delay={0.18} span="md:col-span-2" />
          <BentoCard item={servicos[1]} inView={inView} delay={0.26} />

          {/* Linha 2: dois cards pequenos + card grande (2 cols) */}
          <BentoCard item={servicos[2]} inView={inView} delay={0.34} />
          <BentoCard item={servicos[3]} inView={inView} delay={0.42} />
          <BentoCard item={servicos[4]} inView={inView} delay={0.50} />

          {/* Linha 3: card grande full width */}
          <BentoCard item={servicos[5]} inView={inView} delay={0.58} span="md:col-span-3" horizontal />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  item, inView, delay, span = "", horizontal = false,
}: {
  item: typeof servicos[0];
  inView: boolean;
  delay: number;
  span?: string;
  horizontal?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rx = (y - cy) / cy * 4;
    const ry = (x - cx) / cx * -4;
    card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "";
      cardRef.current.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        ${span} group relative rounded-card border border-navy/8 bg-white p-6
        hover:border-navy/15 hover:shadow-[0_8px_32px_rgba(11,31,59,0.08)]
        transition-[border-color,box-shadow] duration-300
        ${horizontal ? "flex flex-col md:flex-row items-start md:items-center gap-6" : ""}
      `}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Número */}
      <span className="text-[11px] font-mono text-silver/50 tracking-widest block mb-3 group-hover:text-cyan/60 transition-colors">
        {item.num}
      </span>

      <div className={horizontal ? "flex-1" : ""}>
        {/* Linha decorativa ciano */}
        <div className="w-6 h-px bg-cyan/50 mb-4 group-hover:w-10 transition-all duration-300" />
        <h3 className="text-[17px] font-display font-semibold text-navy mb-2 leading-snug">
          {item.titulo}
        </h3>
        <p className="text-[14px] text-graphite/60 leading-relaxed">{item.desc}</p>
      </div>

      {horizontal && (
        <div className="flex-shrink-0 self-start md:self-center">
          <span className="inline-flex items-center gap-1.5 text-[12px] text-silver/40 group-hover:text-cyan transition-colors">
            Saiba mais
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      )}
    </motion.div>
  );
}
