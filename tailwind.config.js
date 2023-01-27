/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gtra': '#ffffff5c',
        'dark': 'rgb(24,24,24)',
        'brand': 'rgb(255,30,94)'
      },
      textColor: {
        'brand': 'rgb(255,30,94)'
      }
    },
  },
  plugins: [],
}