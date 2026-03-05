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
        lobster: ['"Lobster"', "cursive"],
        bebas: ['"Bebas Neue"', "cursive"],
        chakra: ['"Chakra Petch"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
