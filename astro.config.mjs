// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// Dominio canónico. Al comprar hotelpantano.com basta con definir
// PUBLIC_SITE_URL=https://hotelpantano.com en Vercel y volver a desplegar.
// En local se puede poner en un archivo .env (no se versiona).
try {
  process.loadEnvFile();
} catch {
  // Sin .env local: se usan las variables del entorno o el valor por defecto.
}
const SITE_URL = (process.env.PUBLIC_SITE_URL || "https://www.hotel-el-pantano.org").replace(/\/$/, "");

export default defineConfig({
  site: SITE_URL,

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
