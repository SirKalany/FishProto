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
        primary: {
          DEFAULT: '#232425',
          dark: '#0f1010',
          light: '#3a3b3d',
        },
        secondary: {
          DEFAULT: '#B7B789',
          light: '#cccda5',
          dark: '#9a9b70',
        },
      },
    },
  },
  plugins: [],
};
export default config;