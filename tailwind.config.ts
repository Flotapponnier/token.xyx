import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1C1C1D",
        border: {
          DEFAULT: "#E5E5E5",
          medium: "#D4D4D4",
        },
        gray: {
          1400: "#1C1C1D",
        },
        text: {
          low: "#71717A",
          medium: "#52525B",
          high: "#27272A",
          "extra-high": "#18181B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
