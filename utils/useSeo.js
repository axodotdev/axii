export const useSeo = () => {
  const description = "image to ascii converter";
  const url = "https://axii.axo.dev";
  const title = "axii";
  useHead({
    title: title,
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    meta: [
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: `${url}/meta_axii.jpg` },

      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: url },
      { property: "twitter:title", content: title },
      { property: "twitter:description", content: description },
      { property: "twitter:image", content: `${url}/meta_axii.jpg` },
      { property: "twitter:creator", content: "@axodotdev" },
    ],
    bodyAttrs: {
      class: "dark:bg-slate-900 dark:text-slate-300",
    },
    htmlAttrs: {
      class: "dark",
      lang: "en-us",
    },
  });
};
