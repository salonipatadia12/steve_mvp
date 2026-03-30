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
        wps: {
          navy: '#003057',
          teal: '#00566B',
          red: '#C8102E',
          lightgray: '#F5F5F5',
          medgray: '#E0E0E0',
        },
        ai: {
          gold: '#D4922A',
          goldHover: '#F0A832',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
