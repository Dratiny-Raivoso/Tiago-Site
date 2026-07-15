"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { socialLinks } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-content py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-wide">
              {siteConfig.shortName}
            </p>
            <p className="mt-2 text-sm text-white/60">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:ring-offset-ink"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col items-start justify-between gap-4 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.shortName}. Todos os direitos reservados.</p>
          <a
            href="#inicio"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md transition-colors hover:text-white focus-visible:ring-offset-ink"
          >
            Voltar ao topo
            <ArrowUp className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
