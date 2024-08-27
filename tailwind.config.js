/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        creepster: ['Creepster', 'system-ui'],
        encodeSans: ['Encode Sans', 'sans-serif'],
      },
      colors: {
        lightBlue: 'hsla(187, 100%, 40%, 1)',
        slimyGreen: 'hsla(75, 73%, 51%, 1)',
      },
    },
  },
  plugins: [],
};
