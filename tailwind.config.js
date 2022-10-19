const {
  plugins,
  theme,
  darkMode,
} = require("@axodotdev/fringe/tailwind.config");

module.exports = {
  content: [
    "./app.vue",
    "./components/*.vue",
    "./nuxt.config.js",
    "./node_modules/@axodotdev/fringe/lib/*.vue",
  ],
  theme,
  plugins,
  darkMode,
};
