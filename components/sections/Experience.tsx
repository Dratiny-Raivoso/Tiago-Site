import { experiences } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experiencia" className="bg-white py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Experiência Profissional"
          title="Percurso profissional"
        />

        <ol className="relative mx-auto mt-16 max-w-2xl space-y-12">
          {/* Linha vertical da timeline */}
          <span
            aria-hidden
            className="absolute left-[9px] top-2 bottom-2 w-px bg-surface-line"
          />

          {experiences.map((item, index) => (
            <Reveal as="li" key={`${item.role}-${index}`} delay={index * 0.08} className="relative pl-10">
              {/* Marcador */}
              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 border-brand bg-white"
              >
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-body-muted">{item.place}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
