/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        game: "Share Tech Mono, monospace",
      },
      colors: {
        "project-green": "#3dc9a4",
        "project-main-blue": "#012a4a",
      },
    },
  },
  plugins: [],
};
