/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#091242",
        secondary: "#F4F4F4",
        heading: "#1C1F35",
        paragraph: "#666C89"
      }
    },
  },
  plugins: [],
}

