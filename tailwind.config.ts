import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'white': '#ffffff',
      'red': '#FC4747',
      'darkBlue': '#10141E',
      'lightBlue': '#5A698F',
      'semiDarkBlue': '#161D2F',
    },
    extend: {
      fontFamily: {
        'heading-l': ['Inter', 'sans-serif'],
        'heading-m': ['Inter', 'sans-serif'],
        'heading-s': ['Inter', 'sans-serif'],
        'heading-xs': ['Inter', 'sans-serif'],
        'body-m': ['Inter', 'sans-serif'],
        'body-s': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-l': '32px',
        'heading-m': '24px',
        'heading-s': '24px',
        'heading-xs': '18px',
        'body-m': '15px',
        'body-s': '13px',
      },
      fontWeight: {
        'heading-l': '300',
        'heading-m': '300',
        'heading-s': '400',
        'heading-xs': '400',
        'body-m': '400',
        'body-s': '400',
      },
      lineHeight: {
        'heading-l': 'normal',
        'heading-m': 'normal',
        'heading-s': 'normal',
        'heading-xs': 'normal',
        'body-m': 'normal',
        'body-s': 'normal',
      },
      letterSpacing: {
        'heading-l': '-0.5px',
      },
    },
  },
  plugins: [],
};
export default config;
