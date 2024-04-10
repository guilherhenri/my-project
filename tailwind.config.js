/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '250px 1fr',
        profile: '1fr max-content',
      },
      gridTemplateRows: {
        app: '70px 1fr',
      },
    },
  },
  plugins: [],
}

