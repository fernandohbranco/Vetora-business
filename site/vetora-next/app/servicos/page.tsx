"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const servicos = [
  {
    num: "01",
    titulo: "Branding Estratégico",
    descricao:
      "O alicerce de tudo. Definimos posicionamento, arquétipo, tom de voz e identidade verbal que criam diferenciação real — não estética vazia.",
    inclui: [
      "Diagnóstico de posicionamento",
      "Plataforma de marca (propósito, valores, promessa)",
      "Arquétipo e tom de voz",
      "Guia de identidade verbal",
    ],
    paraQuem: "Para quem precisa saber quem é antes de aparecer.",
    destaque: true,
  },
  {
    num: "02",
    titulo: "Identidade Visual",
    descricao:
      "Direção criativa, paleta, logo, tipografia e sistema de design que comunica autoridade e é consistente em todos os pontos de contato.",
    inclui: [
      "Logo e variações",
      "Paleta de cores e tipografia",
      "Sistema de ícones e elementos visuais",
      "Manual de identidade visual",
    ],
    paraQuem: "Para quem precisa de uma marca que pareça o que é.",
    destaque: false,
  },
  {
    num: "03",
    titulo: "Sites & Landing Pages",
    descricao:
      "Copy, UX/UI e desenvolvimento em Next.js com padrão visual de referência. Sites que convertem porque comunicam antes de tentar convencer.",
    inclui: [
      "Arquitetura de informação e UX",
      "Copy estratégica orientada a conversão",
      "Design e desenvolvimento (Next.js + Tailwind)",
      "Publicação e configuração de domínio",
    ],
    paraQuem: "Para quem quer uma presença digital que trabalha 24h.",
    destaque: false,
  },
  {
    num: "04",
    titulo: "Apresentações Comerciais",
    descricao:
      "Pitch deck, proposta executiva ou apresentação institucional com narrativa que vende antes de você abrir a boca.",
    inclui: [
      "Estrutura narrativa (problema → solução → prova)",
      "Design executivo consistente com a marca",
      "Versão para envio digital e para apresentação ao vivo",
    ],
    paraQuem: "Para quem fecha negócios em reunião.",
    destaque: false,
  },
  {
    num: "05",
    titulo: "Conteúdo & Presença Digital",
    descricao:
      "LinkedIn, Instagram e carrosséis com método — estratégia de conteúdo que posiciona e carrosséis que educam e convertem.",
    inclui: [
      "Estratégia de conteúdo por canal",
      "Carrosséis com design sistematizado",
      "Calendário editorial e templates",
      "Linha editorial alinhada ao posicionamento",
    ],
    paraQuem: "Para quem quer autoridade digital sem achismo.",
    destaque: false,
  },
  {
    num: "06",
    titulo: "IA Aplicada",
    descricao:
      "Prompts, automações e sistemas leves que escalam o trabalho sem escalar a equipe. Aplicado à comunicação, processos e entrega.",
    inclui: [
      "Auditoria de processos para automação",
      "Prompts de marca (tom de voz + contexto)",
      "Fluxos de trabalho automatizados",
      "Integração com ferramentas existentes",
    ],
    paraQuem: "Para quem quer fazer mais com o mesmo time.",
    destaque: true,
  },
];

export default function ServicosPage() {
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
            O que fazemos
          </motion.p>
          <motion.h1
            className="text-h1 text-white max-w-[620px] mb-6"
            initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            Seis frentes.{" "}
            <span className="text-silver/40">Um método.</span>
          </motion.h1>
          <motion.p
            className="text-lead text-silver/50 max-w-[480px]"
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            Todos os serviços seguem o Método VETORA — diagnóstico antes de
            execução. Não produzimos sem entender o contexto.
          </motion.p>
        </div>
      </section>

      {/* Lista de serviços */}
      <section className="bg-ice section">
        <div className="wrap">
          <div className="space-y-4">
            {servicos.map((s, i) => (
              <ServicoCard key={s.num} servico={s} index={i} />
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
        <div className="wrap relative z-10 text-center max-w-[500px] mx-auto">
          <h2 className="text-h3 text-white mb-4">
            Não sabe por onde começar?
          </h2>
          <p className="text-[15px] text-silver/50 mb-8">
            A primeira conversa é gratuita. Entendemos o contexto e indicamos
            qual frente faz mais sentido para o momento do seu negócio.
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

function ServicoCard({ servico, index }: { servico: typeof servicos[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`p-7 border rounded-card transition-all duration-300 ${
        servico.destaque
          ? "bg-navy border-navy/20 hover:border-cyan/20"
          : "bg-white border-navy/8 hover:border-navy/15 hover:shadow-[0_4px_24px_rgba(11,31,59,0.06)]"
      }`}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.05 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Cabeçalho */}
        <div className="md:w-[300px] flex-shrink-0">
          <span className={`text-[11px] font-mono tracking-widest block mb-2 ${servico.destaque ? "text-cyan/50" : "text-silver/40"}`}>
            {servico.num}
          </span>
          <h2 className={`text-[20px] font-display font-semibold mb-3 leading-snug ${servico.destaque ? "text-white" : "text-navy"}`}>
            {servico.titulo}
          </h2>
          <p className={`text-[14px] leading-relaxed ${servico.destaque ? "text-silver/50" : "text-graphite/60"}`}>
            {servico.descricao}
          </p>
        </div>

        {/* Inclui + Para quem */}
        <div className="flex-1 space-y-5">
          <div>
            <p className={`text-[10px] font-mono tracking-widest uppercase mb-3 ${servico.destaque ? "text-cyan/40" : "text-silver/40"}`}>
              O que inclui
            </p>
            <ul className="space-y-2">
              {servico.inclui.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className={`mt-1.5 flex-shrink-0 w-1 h-1 rounded-full ${servico.destaque ? "bg-cyan/50" : "bg-cyan/60"}`} />
                  <span className={`text-[13px] ${servico.destaque ? "text-silver/60" : "text-graphite/60"}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className={`text-[12px] italic ${servico.destaque ? "text-cyan/40" : "text-silver/40"}`}>
            {servico.paraQuem}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
