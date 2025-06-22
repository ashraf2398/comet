/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: 'hsl(45 100% 60%)',
          'yellow-light': 'hsl(45 100% 70%)',
          'yellow-dark': 'hsl(45 100% 50%)',
          navy: 'hsl(225 70% 25%)',
          'navy-light': 'hsl(225 70% 35%)',
          'navy-lighter': 'hsl(225 70% 45%)',
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'comet': '0 4px 20px rgba(0, 51, 102, 0.1)',
        'comet-lg': '0 10px 25px -5px rgba(0, 51, 102, 0.1), 0 8px 10px -6px rgba(0, 51, 102, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
