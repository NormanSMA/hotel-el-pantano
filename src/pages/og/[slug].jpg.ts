/**
 * Genera en build la imagen para compartir de cada página (1200x630, JPG).
 * Satori convierte el diseño a SVG con el texto ya trazado, sin depender de
 * fuentes del sistema; sharp lo rasteriza y comprime. El JPG queda por debajo
 * de 300 KB, el límite práctico para que WhatsApp muestre la vista previa.
 */
import type { APIRoute, GetStaticPaths } from "astro";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import satori from "satori";
import sharp from "sharp";
import { shareCards, type ShareCard } from "../../data/share";
import { site } from "../../data/site";

const require = createRequire(import.meta.url);
const fontDir = join(dirname(require.resolve("@fontsource/outfit/package.json")), "files");

const WIDTH = 1200;
const HEIGHT = 630;

export const getStaticPaths: GetStaticPaths = () =>
  shareCards.map((card) => ({ params: { slug: card.slug }, props: { card } }));

async function loadFonts() {
  const [regular, semibold] = await Promise.all([
    readFile(join(fontDir, "outfit-latin-400-normal.woff")),
    readFile(join(fontDir, "outfit-latin-600-normal.woff")),
  ]);
  return [
    { name: "Outfit", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Outfit", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

/** Foto de fondo recortada a 1200x630 y oscurecida, como data URI. */
async function background(card: ShareCard): Promise<string> {
  const file = join(process.cwd(), "src", "assets", card.image);
  const jpg = await sharp(file)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .modulate({ brightness: 0.85 })
    .jpeg({ quality: 82 })
    .toBuffer();
  return `data:image/jpeg;base64,${jpg.toString("base64")}`;
}

async function logo(): Promise<string> {
  const png = await sharp(join(process.cwd(), "src", "assets", "logo.png"))
    .resize(112, 112)
    .png()
    .toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export const GET: APIRoute = async ({ props }) => {
  const card = (props as { card: ShareCard }).card;
  const [fonts, bg, mark] = await Promise.all([loadFonts(), background(card), logo()]);
  const host = new URL(site.url).host.replace(/^www\./, "");

  // Capas con posición absoluta: satori no reparte bien el alto con
  // space-between y el titular quedaba cortado abajo.
  const tree = h(
    "div",
    {
      position: "relative",
      width: WIDTH,
      height: HEIGHT,
      display: "flex",
      fontFamily: "Outfit",
      color: "#ffffff",
      backgroundColor: "#0e0d0c",
    },
    [
      h("img", { position: "absolute", left: 0, top: 0, width: WIDTH, height: HEIGHT }, undefined, {
        src: bg,
        width: WIDTH,
        height: HEIGHT,
      }),
      // Velo inferior: el titular siempre legible, la foto respira arriba.
      h("div", {
        position: "absolute",
        left: 0,
        top: 0,
        width: WIDTH,
        height: HEIGHT,
        backgroundImage: "linear-gradient(to top, rgba(14,13,12,0.92) 0%, rgba(14,13,12,0.55) 45%, rgba(14,13,12,0.1) 100%)",
      }),
      h("div", { position: "absolute", left: 72, top: 56, display: "flex", alignItems: "center", gap: 20 }, [
        h("img", { width: 72, height: 72, borderRadius: 36 }, undefined, { src: mark, width: 72, height: 72 }),
        h("div", { display: "flex", flexDirection: "column" }, [
          h("div", { fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }, site.shortName),
          h("div", { fontSize: 16, letterSpacing: 4, textTransform: "uppercase", opacity: 0.85 }, site.tagline),
        ]),
      ]),
      h("div", { position: "absolute", left: 72, right: 72, bottom: 56, display: "flex", flexDirection: "column" }, [
        h("div", { fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#eed156" }, card.kicker),
        h("div", { marginTop: 14, fontSize: 74, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2 }, card.title),
        h("div", { marginTop: 18, fontSize: 24, opacity: 0.85 }, host),
      ]),
    ]
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], { width: WIDTH, height: HEIGHT, fonts });
  const jpg = await sharp(Buffer.from(svg)).jpeg({ quality: 80, mozjpeg: true }).toBuffer();

  return new Response(new Uint8Array(jpg), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
