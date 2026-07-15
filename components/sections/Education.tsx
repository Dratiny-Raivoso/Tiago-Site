"use client";

import { motion } from "framer-motion";
import { education, complementaryTraining } from "@/lib/content";
import { fadeUp, staggerContainer, revealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="formacao" className="bg-surface-muted py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Formação" title="Estudos e certificações" />

        {/* Cartões principais */}
        <motion.div
          variants={staggerContainer}
          {...revealOnScroll}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {education.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="rounded-2xl border border-surface-line bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <p className="text-sm font-semibold text-brand">{item.period}</p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body-muted">{item.place}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Formação complementar */}
        <Reveal
          as="article"
          className="mt-6 rounded-2xl border border-surface-line bg-white p-8 shadow-card sm:p-10"
        >
          <h3 className="font-display text-base font-semibold text-ink">
            Formação complementar
          </h3>
          <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {complementaryTraining.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[0.95rem] leading-relaxed text-body"
              >
                <span aria-hidden className="mt-[0.55rem] h-1 w-1 flex-none rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
