const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fkgrotesk', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          DEFAULT: '#f2994a',
          50: '#fefaf6',
          100: '#fef5ed',
          200: '#fce6d2',
          300: '#fad6b7',
          400: '#f6b880',
          500: '#f2994a',
          600: '#da8a43',
          700: '#b67338',
          800: '#915c2c',
          900: '#774b24'
        }
      }
    }
  },
  plugins: []
};
