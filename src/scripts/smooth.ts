/**
 * Scroll suave con inercia (Lenis). Sólo escritorio con puntero fino y sin
 * preferencia de movimiento reducido: en táctil el scroll nativo ya es suave
 * y cualquier capa extra se siente peor.
 */
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.25,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  anchors: { offset: -96 },
  autoRaf: true,
  // Diálogos (lightbox, oferta) y menú móvil hacen su propio scroll nativo.
  prevent: (node: HTMLElement) => node.closest("dialog, #mobile-menu") !== null,
});

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}
window.__lenis = lenis;

// Con un <dialog> abierto (lightbox, oferta) la página de fondo no se mueve.
const syncDialogs = () => {
  const open = document.querySelector("dialog[open]");
  if (open) lenis.stop();
  else lenis.start();
};
new MutationObserver(syncDialogs).observe(document.body, {
  subtree: true,
  attributes: true,
  attributeFilter: ["open"],
});
