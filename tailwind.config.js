/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        bgDark: '#18181b',
        softBgDark: '#222226',
        primary: '#ef4444',
        white: '#fee2e2',
        light: '#fef2f2',
        gray: '#848484',
        darkGray: '#2a2a31',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
  },
  plugins: [],
};
