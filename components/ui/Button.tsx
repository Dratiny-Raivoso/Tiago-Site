"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "dark" | "outline";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-ring select-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover shadow-sm",
  dark: "bg-ink text-white hover:bg-ink-800 shadow-sm",
  outline: "border border-surface-line bg-white text-ink hover:bg-surface-muted",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.95rem]",
};

/** Classes de estilo partilhadas por botões e links com aparência de botão. */
export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

/** Interação de hover/tap partilhada (discreta e profissional). */
export const buttonMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      {...buttonMotion}
      className={buttonStyles(variant, size, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

export interface ButtonLinkProps extends HTMLMotionProps<"a"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/** Ligação (âncora) com a aparência e a micro-interação de um botão. */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink({ variant = "primary", size = "md", className, children, ...props }, ref) {
    return (
      <motion.a
        ref={ref}
        {...buttonMotion}
        className={buttonStyles(variant, size, className)}
        {...props}
      >
        {children}
      </motion.a>
    );
  },
);
