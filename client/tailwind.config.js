/** @type {import('tailwindcss').content} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Styrene", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'main-pattern': "url('/img/model14.jfif')"
      }
    },
  },
  plugins: [],
}