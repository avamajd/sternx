/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-gray": "#E7F2F3",
      },
    },
    container: {
      center: true,
      padding: {
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
