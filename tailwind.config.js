/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        card: "24rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
