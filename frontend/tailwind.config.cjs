/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Open Sans", "sans-serif"],
        cascadia: ['"Cascadia Mono"', "monospace"],
        ephesis: ['"Ephesis"', "cursive"],
      },
    },
  },
  plugins: [],
};
