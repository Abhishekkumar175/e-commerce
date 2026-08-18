/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        surface: '#FFFFFF',
        primary: '#111111',
        secondary: '#666666',
        accent: '#000000',
        border: '#EAEAEA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0,0,0,0.05)',
        'premium-hover': '0 20px 40px -10px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'card': '0px',
        'button': '2px',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
