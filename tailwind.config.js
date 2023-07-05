/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#35a5fb",
          100: "#1995f4",
          200: "#1182d8",
          300: "#146eb3",
          400: "#105a93",
          500: "#124e7c",
          600: "#134267",
          700: "#123753",
          800: "#102b40",
          900: "#0e202d",
        },
      },
    },
  },
  plugins: [],
};
