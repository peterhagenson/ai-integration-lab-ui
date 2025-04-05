module.exports = {
  content: [
    "./app/src/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"], // Add Roboto as the default sans font
      },
    },
  },
  plugins: [],
};
