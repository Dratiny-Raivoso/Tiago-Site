"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import logo from "@/public/images/logo.jpg";

export function Navbar() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-surface-line bg-white/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-content flex h-16 items-center justify-between sm:h-20" aria-label="Principal">
        <a href="#inicio" className="focus-ring flex items-center rounded-md" aria-label={`${siteConfig.name} — início`}>
          <Image
            src={logo}
            alt="Tiago A. G. Fonseca"
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Navegação — desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring rounded-md text-sm font-medium text-body transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="#contactos">Contactar</ButtonLink>
        </div>

        {/* Botão do menu — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu — mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-surface-line bg-white lg:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="focus-ring block rounded-lg px-3 py-2.5 text-base font-medium text-body transition-colors hover:bg-surface-muted hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-3">
                <ButtonLink href="#contactos" onClick={close} className="w-full">
                  Contactar
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}