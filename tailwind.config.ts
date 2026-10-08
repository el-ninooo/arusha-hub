import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f8f5",
          100: "#dfeee6",
          200: "#bddfc9",
          300: "#8ec7a4",
          400: "#5bab7b",
          500: "#3d8c60",
          600: "#2d6f49",
          700: "#25593d",
          800: "#1d4733",
          900: "#173e2b"
        },
        sand: "#f8f5f1",
        ink: "#1a1d1a",
        accent: "#f5be4e"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(20, 36, 30, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
