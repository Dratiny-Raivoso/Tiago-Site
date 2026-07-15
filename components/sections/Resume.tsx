import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function Resume() {
  return (
    <section id="curriculo" className="bg-white py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Currículo</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Consulte o percurso completo
          </h2>
          <p className="mt-4 text-base text-body-muted">
            Descarregue o currículo detalhado em formato PDF.
          </p>

          <div className="mt-9 flex justify-center">
            <ButtonLink
              href={siteConfig.cvUrl}
              download
              size="lg"
              aria-label="Descarregar currículo em PDF"
            >
              <Download className="h-[18px] w-[18px]" aria-hidden />
              Descarregar Currículo
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
