/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'customShadow': '0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)',
    },
    screens: {
       /*-- General Break Points --*/
        'xs': '480px', // Extra small devices (phones)
        'sm': '640px', // Small devices (large phones)
        'md': '780px', // Medium devices (tablets)
        'lg': '1024px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices (large desktops)
        '2xl': '1536px', // 2x large devices (extra large desktops)

        /*-- App Break points --*/
        'proud-xs':'358px',
        'product-md':'868px',
        'feature-lg':'969px'
      
    },
    fontFamily: {
      'sans': ['Sarala']
    },
    extend: {
      height: {
        screen: "100dvh"
      },
      colors: {
        primary: '#7b7624',
        primaryLight: '#D6CE57',
        primaryTransparent: '#B0A62280',
        primaryDark: '#5F5B25',
        darkGray: '#4A471C',
        lightGray: '#818589',
      },
      maxWidth: {
        'customLg':'90rem',
        'customMd': '80rem',
        'customSm':'60rem'
      },
      height:{
        '113':'30rem'
      },
    },
  },
  
  plugins: [],
}
