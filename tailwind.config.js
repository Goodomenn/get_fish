/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: {
          950: '#040d16',
          900: '#071421',
          850: '#0b1d2e',
          800: '#0f263c',
          750: '#14304c',
          700: '#1a3c5e',
          600: '#25517c',
        },
        gold: {
          50: '#faf6ee',
          100: '#f3e9d2',
          200: '#e7d3a7',
          300: '#d9b977',
          400: '#cca251',
          500: '#c5a059',
          600: '#a7813a',
          700: '#83612c',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'marble-radial': 'radial-gradient(circle at 75% 35%, rgba(18, 52, 82, 0.45) 0%, rgba(7, 20, 33, 0.95) 75%, #050d16 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f3e9d2 0%, #dfb76c 50%, #b88b39 100%)',
      }
    },
  },
  plugins: [],
}
