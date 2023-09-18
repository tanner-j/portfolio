const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: ['2.5xl', '10xl']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    /*   fontSize: {
         'xs': '.75rem',
         'sm': '.875rem',
         'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
         '2.5xl': '1.62rem',
         '3xl': '1.875rem',
         '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
         '7xl': '5rem',
         '10xl': '11rem'
       }, */
    extend: {
      fontSize: {
        '2.5xl': '1.62rem',
        '3.5xl': '2rem',
        '10xl': '11rem'
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        'space-grotesk': ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'xl': '0 23px 28px -2px rgba(0, 0, 0, 0.1), 0 13px 13px -2px rgba(0, 0, 0, 0.04)',
        '2xl': '0 30px 60px -12px rgba(0, 0, 0, 0.55)',
      },
      colors: {
        'bg-color': '#FBFDFE',
        'color-primary': '#1654BF',
        'color-primary-light': '#E5F1FB',
        'color-primary-dark': '#114092',
        'color-font-default': '#04080F',
        'navy-blue': '#123859',
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        gray: colors.gray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightblue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
        'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
        'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
        'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
        'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
        'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
        'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'fadeInUp': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out'
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}

