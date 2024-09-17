import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#979AA5', 
        secondaryColor: '#444854', 
        patriciaGreen:'#006156',
        patriciaLightGreen:'#C8E2DE',
        patriciaTextGreen:'#63BDAF',
        patricialineGreen:'#388379'
      },
    },
  },
  plugins: [],
};
export default config;
