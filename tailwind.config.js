/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,8%,59%)',
        brightRedLight: 'hsl(12,88%,69%)'
      }
    },
  },
  plugins: [],
};

