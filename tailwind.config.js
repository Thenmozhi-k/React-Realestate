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
    // container: {
    //   padding: {
    //     DEFAULT: '10%',
    //   },
    // },
    screens: {
      // sm: '640px',
      // md: '768px',
      // lg: '960px',
      // xl: '1200px',
      
      sm: '375px',   // Mobile devices
      md: '768px',   // Tablets
      lg: '960px',   // Laptops
      xl: '1200px',  // Desktops
      xxl: '1440px' ,

      
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC700',
          hover: '#FFF455',
        },
        secondary: {
          DEFAULT: '#1e1e1e',
          hover: '#343e4a',
        },
        tertiary: '#4d5053',
       
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },

      utilities: {
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* Chrome, Safari, and Opera */
          }
        }
      },
    },
  },
  plugins: [],
}

