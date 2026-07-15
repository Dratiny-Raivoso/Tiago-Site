/** Junta classes condicionais de forma segura (sem dependências externas). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
