/**
 * robots.txt generado con el dominio de site.ts: al cambiar a
 * hotelpantano.com el sitemap apunta solo al dominio nuevo.
 */
import type { APIRoute } from "astro";
import { site } from "../data/site";

export const GET: APIRoute = () =>
  new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "",
      "# Rastreadores de IA: permitidos, queremos aparecer en sus respuestas",
      "User-agent: GPTBot",
      "Allow: /",
      "",
      "User-agent: PerplexityBot",
      "Allow: /",
      "",
      "User-agent: ClaudeBot",
      "Allow: /",
      "",
      `Sitemap: ${site.url}/sitemap-index.xml`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
