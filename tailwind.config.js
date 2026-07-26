/**
 * Tailwind konfiguratsiyasi — loyihaning "Design System" markazi.
 * Barcha ranglar, shrift o'lchamlari va animatsiyalar shu yerdan boshqariladi (DRY).
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Koinot fon ranglari
        space: {
          950: "#04040F",
          900: "#080818",
          800: "#0E0E26",
          700: "#151538",
        },
        // Asosiy urg'u — binafsha
        nebula: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        // Energiya — neon ko'k
        plasma: {
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
        },
        // Diqqat — yorqin sariq
        solar: {
          300: "#FDE68A",
          400: "#FACC15",
          500: "#EAB308",
        },
        // Yumshoq pastel urg'ular
        mint: "#6EE7B7",
        coral: "#FB7185",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.07) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,.35) 0%, rgba(6,182,212,.12) 45%, transparent 75%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(2, 6, 23, 0.45)",
        glow: "0 0 40px -8px rgba(139, 92, 246, 0.65)",
        "glow-cyan": "0 0 40px -8px rgba(34, 211, 238, 0.65)",
        neo: "8px 8px 24px rgba(2,6,23,.6), -6px -6px 20px rgba(76,29,149,.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(.2,.7,.4,1) infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
      },
    },
  },
  plugins: [],
};
