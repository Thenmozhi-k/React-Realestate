/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['DM Serif Display', 'serif'],
      secondary: ['Jost', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '10%',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC700',
          hover: '#FFF455',
        },
        secondary: {
          DEFAULT: '#000000',
          hover: '#343e4a',
        },
        tertiary: '#4d5053',
       
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [],
}

