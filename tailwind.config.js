/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lycan: "Lycanthrope",
        mironta: "Mironta",
      },
      fontSize: {
        inheritSize: "inherit",
      },
    },
  },
  plugins: [],
};
