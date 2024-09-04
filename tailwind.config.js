/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    extract
  ],
  theme: {
    extend: {
      screens: {
        "desktop": "1281px"
      },
      spacing: {
        container: "76.4%",
        paddingcontainer: "165px",
        header: "113px"
      },
      fontFamily: {
        custom1: ["Custom-1", "sans-serif"],
        Inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [fluid],
}

