module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": ["9rem", "1"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
