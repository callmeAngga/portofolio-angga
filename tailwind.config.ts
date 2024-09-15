import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
      width: {
        '150': '40rem'
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontSize: {
        '4xl': ['2.25rem', '1.5'],
        '5xl': ['3rem', '1.5'],
        '6xl': ['3.75rem', '1.5'],
        '7xl': ['4.5rem', '1.5'],
        '8xl': ['6rem', '1.5'],
      },
      maxWidth: {
        '8xl': '90rem', // 1440 px
        '9xl': '100rem', // 1600 px
        '10xl': '110rem' // 1760 px
      },
      screens: {
        'xs': '30rem', //480 px
        'sm': '40rem', //
        'md': '60rem',
        'lg': '85rem',
        'xl': '97rem',
      },
      colors: {
        // Light Theme
        'background': '#ECFCD5',
        'secBackground': '#E5F4A5',
        'normalText': '#3E4148',
        'textHeader': '#23272F',
        'card': '#F6F7F9',

        // Dark Theme
        'backgroundDark': '#23272F',
        'normalTextDark': '#F6F7F9',
        'textHeaderDark': '#F6F7F9',
        'cardDark': '#343A46',

        // Netral
        'accent': '#087EA4',

      }
    },
  },
  plugins: [],
};
export default config;
