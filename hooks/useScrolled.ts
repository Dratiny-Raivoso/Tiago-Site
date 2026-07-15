"use client";

import { useEffect, useState } from "react";

/**
 * Devolve `true` quando a página é deslocada além do limite indicado.
 * Usado pela navbar fixa para aplicar o efeito ao fazer scroll.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
