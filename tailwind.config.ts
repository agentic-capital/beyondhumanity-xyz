import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030a14",
          900: "#060e1c",
          800: "#0a1628",
          700: "#0f2040",
        },
        gold: { 400: "#f5c842", 300: "#f7d465" },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
