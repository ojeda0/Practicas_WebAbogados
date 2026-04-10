/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F2D25F',
          500: '#E6C147',
          600: '#D4AF37', // Color principal dorado "Premium"
          700: '#B8972D',
        },
        dark: {
          800: '#1F1F1F',
          900: '#121212', // Fondo oscuro "Premium"
          950: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
