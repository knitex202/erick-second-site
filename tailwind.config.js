/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "short": {'raw':"(max-height: 380px)"},
    },
    extend: {},
  },
  plugins: [],
};
