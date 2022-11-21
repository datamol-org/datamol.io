const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
      keyframes: {
        dance: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translateY(3px)' },
          '100%': { transform: 'translate(0)' }
        }
      },
      animation: {
        'dance-slow': 'dance 2.5s ease-in-out infinite'
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
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
