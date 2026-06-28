const cases = [
  {
    slug: "frbranco",
    setor: "Papelaria Afetiva · DTC · Autoridade Criativa",
    nome: "FRBranco Personalizados",
    situacao: "Marca afetiva sem identidade estruturada.",
    resultado:
      "Identidade verbal + visual + presença digital alinhada ao produto e ao público.",
    tags: ["Branding", "Identidade Visual", "Copy"],
  },
  {
    slug: "rancho517",
    setor: "Eventos Premium · Local",
    nome: "Rancho 517",
    situacao: "Reputação local consolidada mas identidade visual sem coerência.",
    resultado:
      "Posicionamento + identidade visual + site que justifica o posicionamento premium.",
    tags: ["Branding", "Identidade Visual"],
  },
  {
    slug: "prezaro",
    setor: "Barbearia Premium · Assinatura · Local",
    nome: "Prezaro Barbearia",
    situacao:
      "Maior clube de barbearia de Joinville com 700+ membros — mas conteúdo digital sem estratégia para comunicar o nível do serviço.",
    resultado:
      "Estratégia de conteúdo + presença digital construída para comunicar a experiência premium do clube de assinatura.",
    tags: ["Conteúdo", "Estratégia Digital", "Analytics"],
  },
  {
    slug: "cantinho",
    setor: "Plantas e Decoração Verde · B2C · Local",
    nome: "Cantinho das Raízes",
    situacao:
      "Negócio com identidade genuína mas sem estrutura visual ou presença digital.",
    resultado:
      "Branding completo + sistema de identidade visual + site com galeria de produtos.",
    tags: ["Branding", "Identidade Visual", "Site"],
  },
];

function CaseCard({
  setor,
  nome,
  situacao,
  resultado,
  tags,
}: (typeof cases)[number]) {
  return (
    <article
      className="flex flex-col rounded-[8px] overflow-hidden border transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(11,31,59,0.08)] bg-white"
      style={{ borderColor: "var(--vetora-borda)" }}
    >
      {/* Topo — placeholder de logo/mockup */}
      <div
        className="flex items-center justify-center h-[180px] flex-shrink-0"
        style={{ backgroundColor: "var(--vetora-azul-vetor)" }}
      >
        <span
          className="text-xs font-medium tracking-[0.12em] uppercase"
          style={{ color: "var(--vetora-prata)", fontFamily: "var(--font-inter)" }}
        >
          {nome.split(" ")[0]}
        </span>
      </div>

      {/* Corpo */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Setor */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.08em]"
          style={{ color: "var(--vetora-ciano)", fontFamily: "var(--font-inter)" }}
        >
          {setor}
        </p>

        {/* Nome */}
        <h3
          className="text-[20px] font-semibold leading-snug"
          style={{
            color: "var(--vetora-azul-vetor)",
            fontFamily: "var(--font-sora)",
          }}
        >
          {nome}
        </h3>

        {/* Situação */}
        <p
          className="text-[14px] italic leading-relaxed"
          style={{
            color: "var(--vetora-grafite)",
            fontFamily: "var(--font-inter)",
          }}
        >
          &ldquo;{situacao}&rdquo;
        </p>

        {/* Separador */}
        <span
          className="text-[14px] font-medium"
          style={{ color: "var(--vetora-ciano)" }}
          aria-hidden
        >
          →
        </span>

        {/* Resultado */}
        <p
          className="text-[15px] leading-relaxed flex-1"
          style={{
            color: "var(--vetora-azul-vetor)",
            fontFamily: "var(--font-inter)",
          }}
        >
          {resultado}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium uppercase tracking-[0.06em] px-[10px] py-1 rounded-[4px]"
              style={{
                color: "var(--vetora-ciano)",
                backgroundColor: "rgba(0, 166, 166, 0.08)",
                border: "1px solid rgba(0, 166, 166, 0.2)",
                fontFamily: "var(--font-inter)",
              }}
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
    <section
      id="cases"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--vetora-branco-gelo)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.18em] mb-4"
            style={{
              color: "var(--vetora-ciano)",
              fontFamily: "var(--font-inter)",
            }}
          >
            CASES
          </p>
          <h2
            className="text-[36px] font-semibold leading-tight"
            style={{
              color: "var(--vetora-azul-vetor)",
              fontFamily: "var(--font-sora)",
            }}
          >
            Negócios reais.
            <br />
            Percepção transformada.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <CaseCard key={c.slug} {...c} />
          ))}
        </div>

        {/* CTA de seção */}
        <div
          className="mt-12 pt-8 flex items-center gap-3"
          style={{ borderTop: "1px solid var(--vetora-borda)" }}
        >
          <span
            className="text-[15px]"
            style={{ color: "var(--vetora-grafite)", fontFamily: "var(--font-inter)" }}
          >
            Quer ver o processo completo de algum desses cases?
          </span>
          <a
            href="#contato"
            className="text-[15px] font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--vetora-ciano)", fontFamily: "var(--font-inter)" }}
          >
            Falar com Fernando →
          </a>
        </div>
      </div>
    </section>
  );
}
