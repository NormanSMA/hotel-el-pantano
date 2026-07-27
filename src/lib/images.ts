import type { ImageMetadata } from "astro";

/**
 * Registro de todas las fotografías del sitio.
 *
 * Los archivos de datos siguen refiriéndose a las imágenes con rutas legibles
 * ("/images/hero/…"), pero las imágenes viven en `src/assets` para que Astro
 * pueda optimizarlas: genera varios tamaños, sirve AVIF donde se pueda y lee
 * las dimensiones reales del archivo, de modo que nunca vuelvan a declararse
 * a mano.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{webp,jpg,jpeg,png,avif}",
  { eager: true }
);

const registry = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  registry.set(path.replace("/src/assets", ""), mod.default);
}

/** Devuelve los metadatos de una imagen a partir de su ruta pública. */
export function image(path: string): ImageMetadata {
  const found = registry.get(path);
  if (!found) {
    throw new Error(
      `No existe la imagen "${path}". Rutas disponibles:\n${[...registry.keys()].sort().join("\n")}`
    );
  }
  return found;
}

/** Comprueba si una ruta corresponde a una imagen optimizable. */
export function hasImage(path: string): boolean {
  return registry.has(path);
}

/**
 * URL optimizada a tamaño grande, pensada para la vista ampliada del lightbox.
 * Debe llamarse desde el frontmatter de una página, no desde el navegador.
 */
export async function largeSrc(path: string, width = 1600): Promise<string> {
  const { getImage } = await import("astro:assets");
  const source = image(path);
  const result = await getImage({
    src: source,
    width: Math.min(width, source.width),
    format: "webp",
  });
  return result.src;
}
