import { cases, type Case } from "@/lib/data/cases";

function CaseCard({ setor, nome, situacao, resultado, tags }: Case) {
  return (
    <article className="flex flex-col rounded-md overflow-hidden border border-vetora-borda bg-white transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(11,31,59,0.08)]">
      <div className="flex items-center justify-center h-[180px] flex-shrink-0 bg-vetora-azul-vetor">
        <span className="text-xs font-medium tracking-[0.12em] uppercase text-vetora-prata">
          {nome.split(" ")[0]}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-vetora-ciano">
          {setor}
        </p>

        <h3 className="text-xl font-semibold leading-snug text-vetora-azul-vetor">
          {nome}
        </h3>

        <p className="text-sm italic leading-relaxed text-vetora-grafite">
          &ldquo;{situacao}&rdquo;
        </p>

        <span className="text-sm font-medium text-vetora-ciano" aria-hidden>
          →
        </span>

        <p className="text-[15px] leading-relaxed flex-1 text-vetora-azul-vetor">
          {resultado}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium uppercase tracking-[0.06em] px-2.5 py-1 rounded bg-vetora-ciano/8 border border-vetora-ciano/20 text-vetora-ciano"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="py-24 px-6 bg-vetora-branco-gelo">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] mb-4 text-vetora-ciano">
            CASES
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-vetora-azul-vetor">
            Negócios reais.
            <br />
            Percepção transformada.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <CaseCard key={c.slug} {...c} />
          ))}
        </div>

        <div className="mt-12 pt-8 flex items-center gap-3 border-t border-vetora-borda">
          <span className="text-[15px] text-vetora-grafite">
            Quer ver o processo completo de algum desses cases?
          </span>
          <a
            href="#contato"
            className="text-[15px] font-medium text-vetora-ciano transition-opacity hover:opacity-70"
          >
            Falar com Fernando →
          </a>
        </div>
      </div>
    </section>
  );
}
