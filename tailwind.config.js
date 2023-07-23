/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      keyframes: {
        moveUpBig: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveUpSmall: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'move-up-big': 'moveUpBig 20s ease-in-out infinite',
        'move-up-small': 'moveUpSmall 10s ease-in-out infinite',
        'move-up-small2': 'moveUpSmall 15s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

