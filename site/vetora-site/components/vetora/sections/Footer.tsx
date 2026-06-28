import Image from "next/image";

const NAV_LINKS = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#fundador" },
  { label: "Diagnóstico", href: "#contato" },
];

const CONTACT_LINKS = [
  { label: "fernandohbranco@gmail.com", href: "mailto:fernandohbranco@gmail.com" },
  { label: "LinkedIn →", href: "https://linkedin.com/in/fernandohbranco" },
  { label: "Instagram →", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-vetora-grafite border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-negativa.png"
              alt="VETORA"
              width={140}
              height={36}
              className="h-7 w-auto"
            />
            <p className="text-[14px] leading-[1.6] text-vetora-prata/50 max-w-[210px]">
              Estratégia, marca e tecnologia na direção certa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-vetora-prata/35 mb-1">
              Navegação
            </p>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[14px] text-vetora-prata/55 hover:text-vetora-prata transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-vetora-prata/35 mb-1">
              Contato
            </p>
            {CONTACT_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[14px] text-vetora-prata/55 hover:text-vetora-prata transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06]">
          <p className="text-[12px] text-vetora-prata/25">
            © {year} VETORA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
