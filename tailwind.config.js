/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        buttonStartPurple: "#4D1181",
        buttonEndPurple: "#32080B",
      },
      fontFamily: {
        lycan: "Lycanthrope",
        mironta: "Mironta",
      },
      fontSize: {
        inheritSize: "inherit",
      },
      screens: {
        phone: "400px",
      },
    },
  },
  plugins: [],
};
