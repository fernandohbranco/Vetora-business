import Navbar from "@/components/vetora/sections/Navbar";
import Hero from "@/components/vetora/sections/Hero";
import Problem from "@/components/vetora/sections/Problem";
import Services from "@/components/vetora/sections/Services";
import Method from "@/components/vetora/sections/Method";
import Differentials from "@/components/vetora/sections/Differentials";
import Cases from "@/components/vetora/sections/Cases";
import Founder from "@/components/vetora/sections/Founder";
import FinalCTA from "@/components/vetora/sections/FinalCTA";
import Footer from "@/components/vetora/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Method />
        <Differentials />
        <Cases />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
