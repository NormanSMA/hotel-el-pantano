// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.hotel-el-pantano.org",

  // Todo el sitio es estático: no hay rutas que necesiten servidor.
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: false }, // se inyecta desde el Layout
  }),

  // Las imágenes se optimizan en tiempo de compilación con sharp: sin coste en
  // ejecución y servidas como archivos estáticos cacheables para siempre.

  integrations: [
    sitemap({
      changefreq: "monthly",
      lastmod: new Date(),
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-NI" },
      },
    }),
  ],

  build: {
    // El CSS del sitio son ~9 KB comprimidos. Incrustarlo elimina una petición
    // que bloqueaba el render unos 300 ms; a cambio, deja de cachearse entre
    // páginas. Con un sitio de ocho páginas y visitantes que llegan de una
    // búsqueda local, la primera impresión pesa más que la navegación interna.
    inlineStylesheets: "always",
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
