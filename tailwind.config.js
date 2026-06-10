/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Pudú
        pudu: {
          green: '#1B5E3B',  // Verde profundo  — primario, logo, botones, headers
          moss: '#2D6A4F',   // Verde medio     — secundario, hovers, acentos
          earth: '#A0785A',  // Tierra pudú     — badges premium, acentos cálidos
          mist: '#E8F5EE',   // Verde claro     — fondos de cards, superficies suaves
          night: '#1A1A2E',  // Noche sur       — navbar, premium, contraste máximo
          sand: '#F7F7F5',   // Gris claro      — fondos de página
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      keyframes: {
        fade: { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        pop: { '0%': { opacity: '0', transform: 'scale(.96)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
      animation: {
        fade: 'fade .35s ease both',
        pop: 'pop .18s ease both',
      },
    },
  },
  plugins: [],
};
