"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import heroPhoto from "@/public/images/tiago.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-surface-muted to-white pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Elementos decorativos discretos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-6rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-brand-soft/70 blur-2xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[22rem] w-[22rem] rounded-full border border-surface-line/70" />
      </div>

      <div className="container-content relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        {/* Coluna de texto */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            {siteConfig.role} · Sócio Psinove
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            Tiago A. G.<br />Fonseca
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl font-medium text-ink-800"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-body"
          >
            Valoriza a colaboração ativa em psicoterapia, sendo responsivo e atento
            perante as necessidades psicológicas e processos emocionais de cada pessoa,
            essenciais ao seu processo de mudança.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="#curriculo" variant="dark" size="lg">
              Ver Currículo
            </ButtonLink>
            <ButtonLink href="#contactos" variant="outline" size="lg">
              Contactar
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* Coluna da fotografia */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0"
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-photo ring-1 ring-surface-line/60">
            <Image
              src={heroPhoto}
              alt="Retrato de Tiago A. G. Fonseca"
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 24rem, 24rem"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
