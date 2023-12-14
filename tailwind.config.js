/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        semibold: 'var(--semi-bold)',
        bold: 'var(--bold)',
        extralight: 'var(--extra-light)',
        regular: 'var(--regular)',
      },
      backgroundColor: {
        primary: '#239595',
        secondary: '#4C4B63',
        neutral_light: '#F9F9F9',
      },
      colors: {
        primary: '#239595',
        secondary: '#4C4B63',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      fontSize: {
        DEFAULT: '18px',
      },
    },
  },
  plugins: [],
}
