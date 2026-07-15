"use client";

import { motion } from "framer-motion";
import { competences } from "@/lib/content";
import { fadeUp, staggerContainer, revealOnScroll } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Competences() {
  return (
    <section id="competencias" className="bg-surface-muted py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Competências" title="Áreas de competência" />

        <motion.ul
          variants={staggerContainer}
          {...revealOnScroll}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {competences.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-surface-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body-muted">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
