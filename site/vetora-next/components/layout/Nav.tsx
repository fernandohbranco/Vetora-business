"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/metodo",    label: "Método"   },
  { href: "/servicos",  label: "Serviços" },
  { href: "/cases",     label: "Cases"    },
  { href: "/blog",      label: "Blog"     },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setScrolled(v > 0.01));
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-deep/85 backdrop-blur-[20px] border-b border-white/5 shadow-[0_1px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between h-[68px]">
          <Link href="/" aria-label="VETORA — página inicial">
            <Image
              src="/logo-negativa.png"
              alt="VETORA"
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[13px] tracking-wide font-sans text-silver/70 hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contato"
              className="text-[13px] font-medium text-white border border-white/15 hover:border-cyan/50 hover:text-cyan px-5 py-2 rounded-card transition-all duration-200 hover:bg-cyan/5"
            >
              Falar com a VETORA
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden md:hidden bg-deep/95 backdrop-blur-[20px] border-t border-white/5"
        >
          <nav className="wrap flex flex-col gap-0 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[15px] text-silver/80 hover:text-white border-b border-white/5 last:border-0 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center text-[13px] font-medium text-white border border-cyan/40 py-3 rounded-card hover:bg-cyan/10 transition-colors"
            >
              Falar com a VETORA
            </Link>
          </nav>
        </motion.div>
      </header>
    </>
  );
}
