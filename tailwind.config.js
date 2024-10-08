/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1000px'},
      'md-2': {'max': '950px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '400px'},
    }
  },
  plugins: [],
}

