/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#070F09',
          900: '#0E1A11',
          800: '#152718',
          700: '#1A3320',
          600: '#2D5A27',
          500: '#3D7A37',
          400: '#4E9A47',
          300: '#6BBF64',
          200: '#8FD488',
          100: '#C5EEC2',
        },
        bark: {
          900: '#1E0E05',
          800: '#3D2010',
          700: '#5C3D1E',
          600: '#7A5232',
          500: '#9A6842',
          400: '#C4936A',
          300: '#D9B49A',
          200: '#EDD5BE',
          100: '#F7EDE2',
        },
        cream: '#F5F0E8',
        'cream-dark': '#EDE5D8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1s infinite',
        'float-delay2': 'float 4s ease-in-out 2s infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 70% 50%, #2D5A2720 0%, transparent 60%), linear-gradient(135deg, #0E1A11 0%, #152718 50%, #1A3320 100%)',
        'cta-gradient': 'linear-gradient(135deg, #5C3D1E 0%, #3D2010 40%, #2D5A27 100%)',
        'tech-gradient': 'linear-gradient(160deg, #152718 0%, #0E1A11 100%)',
      },
    },
  },
  plugins: [],
};
