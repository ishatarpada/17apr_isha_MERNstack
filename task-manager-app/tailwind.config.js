/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      extend: {
        colors: {
          'regal-blue': '#243c5a',
        },
        gridColumn: {
          'span-16': 'span 16 / span 16',
        },
        flex: {
          '2': '2 2 0%'
        }
      },
    },
   
  },
  plugins: [],
}

