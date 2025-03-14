/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#090D15',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/Hero.g')",
      }
    },
  },
  plugins: [],
}

