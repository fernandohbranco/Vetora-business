import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:     "#0B1F3B",
        deep:     "#061426",
        cyan:     "#00A6A6",
        ice:      "#F5F7FA",
        graphite: "#1E252B",
        gray:     "#D9DEE3",
        silver:   "#B8C2CC",
        green:    "#00A86B",
      },
      fontFamily: {
        sans:    ["var(--font-inter)",    "Inter",         "system-ui", "sans-serif"],
        display: ["var(--font-sora)",     "Sora",          "sans-serif"],
        mono:    ["JetBrains Mono",       "monospace"],
      },
      spacing: {
        "section":    "96px",
        "section-sm": "64px",
        "wrap-px":    "24px",
      },
      maxWidth: {
        wrap: "1100px",
      },
      borderRadius: {
        card: "6px",
      },
      keyframes: {
        "orb-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%":       { transform: "translate(40px, -30px) scale(1.05)" },
          "66%":       { transform: "translate(-25px, 20px) scale(0.97)" },
        },
        "orb-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "40%":       { transform: "translate(-35px, 25px) scale(1.08)" },
          "70%":       { transform: "translate(30px, -20px) scale(0.95)" },
        },
      },
      animation: {
        "orb-a": "orb-a 8s ease-in-out infinite",
        "orb-b": "orb-b 11s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
