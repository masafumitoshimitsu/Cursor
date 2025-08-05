/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-beige': '#F5F1EB',
        'cafe-brown': '#8B4513',
        'cafe-dark-brown': '#654321',
        'cafe-light-brown': '#D2B48C',
        'cafe-cream': '#FFF8DC',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}