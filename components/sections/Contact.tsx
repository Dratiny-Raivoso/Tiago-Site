import { contactChannels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contactos" className="bg-white py-20 sm:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Informação de contacto */}
        <Reveal>
          <p className="eyebrow">Contactos</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Vamos conversar
          </h2>

          <ul className="mt-8 space-y-5">
            {contactChannels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="focus-ring group flex items-center gap-4 rounded-lg"
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="sr-only">{label}: </span>
                    <span className="text-[0.95rem] text-body transition-colors group-hover:text-ink">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Formulário */}
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
