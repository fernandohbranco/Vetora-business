import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { Problema }   from "@/components/sections/Problema";
import { Servicos }   from "@/components/sections/Servicos";
import { Metodo }     from "@/components/sections/Metodo";
import { ParaQuem }   from "@/components/sections/ParaQuem";
import { Cases }      from "@/components/sections/Cases";
import { CtaFinal }   from "@/components/sections/CtaFinal";

// Rota interna de comparação — não aparece na navegação
export default function DemoCanvasVetorial() {
  return (
    <>
      <HeroCanvas />
      <Problema />
      <Servicos />
      <Metodo />
      <ParaQuem />
      <Cases />
      <CtaFinal />
    </>
  );
}
