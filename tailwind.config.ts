import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem'
      },
      colors: {
        'background': '#FFFFFF',
        'backgroundDark': '#23272F',

        'text': '#3E4148',
        'textDark': '#F6F7F9',

        'textHeader': '#23272F',
        'textHeaderDark': '#F6F7F9',

        'accent': '#087EA4',

        'card': '#F6F7F9',
        'cardDark': '#343A46',
      }
    },
  },
  plugins: [],
};
export default config;
