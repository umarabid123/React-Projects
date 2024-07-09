/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/bg-slate.png')",
      },
      colors: {
        primary: "#f19509",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray: "#1a1f25",
        lightGray: "#272c35 ",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
