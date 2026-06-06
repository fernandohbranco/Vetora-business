import { Hero }     from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Servicos } from "@/components/sections/Servicos";
import { Metodo }   from "@/components/sections/Metodo";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Cases }    from "@/components/sections/Cases";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problema />
      <Servicos />
      <Metodo />
      <ParaQuem />
      <Cases />
      <CtaFinal />
    </>
  );
}
