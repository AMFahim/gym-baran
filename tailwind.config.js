/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins, sans-serif"],
        grotesque: ['sporting-grotesque', "sans-serif" ]
      }
    },
    colors: ({colors}) => ({
      ...colors,
      "btn-bg": "#264373",
      "primary-btn": "#264373",
      "default-color": "#262524",
      "primary-bg": "#E5E5E5"
    })
  },
  plugins: [],
}