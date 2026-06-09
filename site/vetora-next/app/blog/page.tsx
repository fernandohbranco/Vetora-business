import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — VETORA",
  description:
    "Artigos sobre branding, posicionamento, sites e IA para profissionais que entregam mais do que o mercado percebe.",
};

const temas = [
  "Posicionamento de marca",
  "Branding para profissionais liberais",
  "Sites que convertem",
  "IA aplicada à comunicação",
  "Identidade visual estratégica",
];

export default function BlogPage() {
  return (
    <section className="bg-deep min-h-screen flex items-center section grain relative overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,166,166,0.06) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative z-10 max-w-[560px] mx-auto text-center">
        <p className="text-eyebrow mb-6">Blog</p>

        <h1 className="text-h2 text-white mb-5">
          Conteúdo sobre posicionamento,{" "}
          <span className="text-silver/40">branding e IA aplicada.</span>
        </h1>

        <p className="text-lead text-silver/50 mb-12">
          Estamos preparando os primeiros artigos. Em breve aqui.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {temas.map((t) => (
            <span
              key={t}
              className="text-[12px] font-mono px-3 py-1.5 border border-white/8 rounded-card text-silver/40"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-cyan/70 hover:text-cyan border-b border-cyan/20 hover:border-cyan/50 pb-0.5 transition-all"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M11 6.5H2M5 10L2 6.5 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
