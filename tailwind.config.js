/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx}",],
  theme: {
    fontFamily: {
            'Raleway':['Raleway', 'sans-serif'],
          },
    extend: {
      transitionDuration: {
              '2000': '2000ms',
      }
    },

  },
  plugins: [],
}

