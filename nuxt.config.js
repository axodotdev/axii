// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/css/main.css",
  },
  app: {
    head: {
      script: [
        {
          src: "https://plausible.io/js/plausible.js",
          defer: true,
          "data-domain": "axii.axo.dev, axo.dev",
        },
      ],
    },
  },
});
