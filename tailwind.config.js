/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          950: '#0A1929',
          900: '#0F2942',
          800: '#144166',
          700: '#1A5285',
          600: '#2165A5',
          500: '#2978C5',
          400: '#4290D9',
          300: '#64A6E1',
          200: '#90C2EA',
          100: '#C5E0F5',
        },
        teal: {
          500: '#14B8A6',
          400: '#2DD4BF',
          300: '#5EEAD4',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};