// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lauraperitomedico.com",
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) => {
        const excludedPages = [
          "https://lauraperitomedico.com/blog/",
          "https://lauraperitomedico.com/contacto/",
          "https://lauraperitomedico.com/legal/aviso-legal/",
          "https://lauraperitomedico.com/legal/politica-cookies/",
          "https://lauraperitomedico.com/legal/politica-privacidad/",
        ];
        return !excludedPages.includes(page);
      },
    }),
  ],
  server: {
    host: true,
  },
});
