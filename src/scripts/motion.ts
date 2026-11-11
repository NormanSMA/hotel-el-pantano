/**
 * Movimiento ligado al scroll. Se carga bajo demanda desde el Layout sólo si
 * la página tiene elementos que lo usan y el visitante no pidió reducir el
 * movimiento. Todo anima transform u opacity: nada fuerza un relayout.
 *
 * API por atributos:
 *   data-parallax="0.12"  La foto se desplaza ±12 % de su alto. Sólo escritorio.
 *                         Debe vivir dentro de un .parallax-frame.
 *   data-fade-out         El bloque se desvanece y sube al salir por arriba.
 *   data-words            Las .scroll-word se iluminan una a una con el scroll.
 *   data-magnetic         El botón sigue levemente al cursor. Sólo puntero fino.
 */
// animate de "motion/mini" usa la Web Animations API del navegador: pesa una
// fracción del motor completo y corre en el compositor.
import { animate } from "motion/mini";
import { scroll } from "motion";

const desktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

// ---- Parallax --------------------------------------------------------------
if (desktop) {
  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const amount = Number.parseFloat(el.dataset.parallax || "0.12") * 100;
    scroll(
      animate(el, { transform: [`translateY(-${amount / 2}%)`, `translateY(${amount / 2}%)`] }, { ease: "linear" }),
      { target: el.parentElement ?? el, offset: ["start end", "end start"] }
    );
  });
}

// ---- Salida del hero -------------------------------------------------------
// El progreso se mide sobre la sección completa desde scroll 0: en móvil el
// bloque de texto es más alto que la pantalla y medirlo a él lo dejaba
// medio desvanecido al cargar.
document.querySelectorAll<HTMLElement>("[data-fade-out]").forEach((el) => {
  scroll(
    animate(
      el,
      { opacity: [1, 1, 0], transform: ["translateY(0px)", "translateY(-20px)", "translateY(-80px)"] },
      { ease: "linear", times: [0, 0.35, 1] }
    ),
    { target: el.closest("section") ?? el, offset: ["start start", "end start"] }
  );
});

// ---- Palabras que se iluminan ---------------------------------------------
// La opacidad mínima es 0,5: el texto es grande (≥ 24 px) y con 0,5 sigue
// pasando el contraste AA de 3:1. Nunca queda ilegible.
const MIN = 0.5;
document.querySelectorAll<HTMLElement>("[data-words]").forEach((block) => {
  const words = Array.from(block.querySelectorAll<HTMLElement>(".scroll-word"));
  if (words.length === 0) return;
  words.forEach((w) => (w.style.opacity = String(MIN)));

  scroll(
    (progress: number) => {
      const lit = progress * (words.length + 2);
      for (let i = 0; i < words.length; i++) {
        const t = Math.min(Math.max(lit - i, 0), 1);
        words[i].style.opacity = String(MIN + (1 - MIN) * t);
      }
    },
    { target: block, offset: ["start 0.85", "end 0.4"] }
  );
});

// ---- Botones magnéticos ----------------------------------------------------
if (finePointer) {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = 0.22;
    let frame = 0;

    el.addEventListener("pointermove", (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        animate(el, { transform: `translate(${x}px, ${y}px)` }, { duration: 0.4, ease: [0.22, 1, 0.36, 1] });
      });
    });

    el.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      animate(el, { transform: "translate(0px, 0px)" }, { duration: 0.9, ease: [0.16, 1, 0.3, 1] });
    });
  });
}
