/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '478px',
        tablet: '767px',
        ipad: '1024px',
        laptop: '1224px',
      },
      backgroundColor: {
        'zinc-root': '#242424',
      },
    },
  },
  plugins: [],
}
