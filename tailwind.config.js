/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        Varela :['Varela Round', 'sans-serif'],
      },
      colors: {
        'darkblue': {
          1:'#0b1825',
          2:'#242e39',
          3:'#112132',
          4:'#0c1a29',
        },
        'offWhite': '#EEEEEE',
        'tahiti': {
          1: '#136F63',
          2: '#22AAA1',
          3: '#4CE0D2',
          4: '#acfff7'
        },
        'jobs': {
          100: '#845EC2',
          200: '#D65DB1',
          300: '#FF6F91',
          400: '#FF9671',
          500: '#FFC75F',
          600: '#F9F871',
        }
      },
    },
  },
  plugins: [],
};
