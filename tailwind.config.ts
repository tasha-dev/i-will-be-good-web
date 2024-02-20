// Codes by mahdi tasha 
// Importing type of tailwindCSS configss
import type { Config } from "tailwindcss";

// Defining configs of tailwind
const config: Config = {
  content: [
    './app/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './chunk/*.{ts,tsx,js,jsx}',
    './chunk/**/*.{ts,tsx,js,jsx}',
    './component/*.{ts,tsx,js,jsx}',
    './component/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        themeBlue: '#6699CC',
        themeBlueDark: '#5580AB',
        themeGreen: '#66CC99',
        themeGreenDark: '#57AD82'
      },
    },
  },
  plugins: [],
};

// Exporting the configs
export default config;
