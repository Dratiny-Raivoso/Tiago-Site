import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta extraída do design (Tailwind slate + blue-600)
        brand: {
          DEFAULT: "#2563eb", // azul principal (botões, ícones, eyebrows)
          hover: "#1d4ed8",
          soft: "#eff4ff",
        },
        ink: {
          DEFAULT: "#0f172a", // navy escuro (títulos, botão escuro, footer)
          800: "#1e293b",
        },
        body: {
          DEFAULT: "#475569", // texto corrente (slate-600)
          muted: "#64748b", // texto secundário (slate-500)
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc", // fundo de secção alternada (slate-50)
          line: "#e2e8f0", // bordas (slate-200)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem", // 1152px — largura máxima do conteúdo
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 4px 12px rgba(15, 23, 42, 0.08), 0 16px 40px rgba(15, 23, 42, 0.10)",
        photo: "0 24px 60px rgba(15, 23, 42, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
