/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: "hsl(233, 47%, 7%)",
        DarkDesaturatedBlue: "hsl(244, 38%, 16%)",
        SoftViolet: "hsl(277, 64%, 61%)",
        White: "hsl(0, 0%, 100%)",
        SlightlyMoreTransparentWhite: "hsla(0, 0%, 100%, 0.75",
        SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
