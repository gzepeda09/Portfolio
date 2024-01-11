/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx}",],
  theme: {

    extend: {
      transitionDuration: {
              '2000': '2000ms',
      },
      fontFamily: {
              'Raleway':['Raleway', 'sans-serif'],
      },
    },

  },
  plugins: [],
}

