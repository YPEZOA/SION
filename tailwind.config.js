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
    },
  },
  plugins: [],
}
