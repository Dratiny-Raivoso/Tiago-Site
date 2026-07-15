import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Competences } from "@/components/sections/Competences";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Competences />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
