"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, revealOnScroll } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  /** Atraso adicional em segundos. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Envolve conteúdo com uma animação de fade-in ao entrar no viewport.
 * Reutilizável em qualquer secção para manter consistência.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...revealOnScroll}
    >
      {children}
    </MotionTag>
  );
}
