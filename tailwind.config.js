/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'morabba_light': 'morabba_light',
          'morabba_medium': 'morabba_medium',
          'morabba_bold': 'morabba_bold',
          'dana_light': 'morabba_light',
        }
    },
  },
  plugins: [],
}

