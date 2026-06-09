import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/5">
      <div className="wrap section-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/logo-negativa.png"
              alt="VETORA"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-[13px] text-silver/50 leading-relaxed max-w-[200px]">
              Estratégia, marca e tecnologia na direção certa.
            </p>
          </div>

          <div>
            <p className="text-eyebrow text-silver/30 mb-5">Navegação</p>
            <ul className="space-y-2.5">
              {[
                { href: "/metodo",   label: "Método"   },
                { href: "/servicos", label: "Serviços" },
                { href: "/cases",    label: "Cases"    },
                { href: "/blog",     label: "Blog"     },
                { href: "/contato",  label: "Contato"  },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-silver/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-silver/30 mb-5">Contato</p>
            <a
              href="https://www.linkedin.com/company/vetora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-silver/50 hover:text-white transition-colors block mb-3"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contato@vetora.com.br"
              className="text-[13px] text-silver/50 hover:text-white transition-colors block"
            >
              contato@vetora.com.br
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-silver/25">
            © {new Date().getFullYear()} VETORA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
