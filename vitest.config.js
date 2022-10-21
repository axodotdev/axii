import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    deps: {
      inline: true,
    },
    globals: true,
    environment: "happy-dom",
  },
  root: ".",
});
