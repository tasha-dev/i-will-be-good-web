// Codes by mahdi tasha
// Importing type of config of tailwindCSS
import type { Config } from "tailwindcss";

// Defining configs of tailwindCSS
const config: Config = {
  content: [
      './app/*.{ts,tsx,js,jsx}',
      './app/**/*.{ts,tsx,js,jsx}',
      './app/**/**/*.{ts,tsx,js,jsx}',
      './component/*.{ts,tsx,js,jsx}',
      './component/**/*.{ts,tsx,js,jsx}',
      './component/**/**/*.{ts,tsx,js,jsx}',
      './chunk/*.{ts,tsx,js,jsx}',
      './chunk/**/*.{ts,tsx,js,jsx}',
      './chunk/**/**/*.{ts,tsx,js,jsx}',
      "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        themeGreen: '#66CC99',
        darkThemeGreen: '#56a980',
        themeBlue: '#6699CC',
        darkThemeBlue: '#537ba2'
      }
    }
  },
  plugins: [],
};

// Exporting the configs
export default config;