/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    colors: {
      black: "#111111",
      grey: "#1D1D1D",
      yellow: "#E3B748",
      lightGrey: "rgba(71, 71, 71, 0.50)",
      white: "#FFFFFF",
      textColor: "rgb(255, 255, 255, 30%)",
      borderColor: "#6A6A6A",
      hover: "#2E2E2E",
      bg2: "rgba(71, 71, 71, 0.50)"
    },
  },
  plugins: [],
}