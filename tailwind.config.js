/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(111deg, #FC925B 22.36%, #E0D5FA 35.71%, #44B9ED 49.93%, #90B1A9 64.44%, #F7949E 78.08%)",
        gradient1:
          "background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 79.18%);",
      },
      fontSize: {
        "3xl": "1.8rem"
      }
    },
  },
  plugins: [],
};
