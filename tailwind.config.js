module.exports = {
  content: ["./*.html", "./blog/**/*.html", "./blog/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
