import { aboutParagraphs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="container-content grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
        {/* Título */}
        <Reveal>
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Um percurso construído com rigor, ética e dedicação
          </h2>
        </Reveal>

        {/* Parágrafos em duas colunas */}
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {aboutParagraphs.map((column, colIndex) => (
            <Reveal
              key={colIndex}
              delay={colIndex * 0.1}
              className="space-y-6"
            >
              {column.map((paragraph, i) => (
                <p key={i} className="text-[0.95rem] leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
