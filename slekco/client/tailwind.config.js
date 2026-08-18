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
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'image-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delay': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s ease-out 0.4s forwards',
        'image-zoom': 'image-zoom 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      }
    },
  },
  plugins: [],
}
