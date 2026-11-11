/**
 * Tarjetas para compartir (Open Graph) de cada página. Se generan en build
 * como JPG de 1200x630 en /og/<slug>.jpg: es lo que se ve al pegar el enlace
 * en WhatsApp, Facebook, Messenger, X o LinkedIn.
 */
export interface ShareCard {
  slug: string;
  /** Ruta de la página, con barra final. */
  path: string;
  kicker: string;
  title: string;
  image: string;
  alt: string;
}

export const shareCards: ShareCard[] = [
  {
    slug: "inicio",
    path: "/",
    kicker: "Hotel & Restaurante · Jalapa",
    title: "El campo, como se recuerda.",
    image: "/images/hero/hotel-pantano-nocturno.webp",
    alt: "Jardines iluminados de Hotel El Pantano al anochecer, en Jalapa, Nueva Segovia",
  },
  {
    slug: "habitaciones",
    path: "/habitaciones/",
    kicker: "Cabañas desde C$500 la noche",
    title: "Cabañas entre jardines",
    image: "/images/habitaciones/cabanas-exterior-nocturno.webp",
    alt: "Cabañas de Hotel El Pantano iluminadas al anochecer",
  },
  {
    slug: "menu",
    path: "/menu/",
    kicker: "Restaurante · Cocina nicaragüense",
    title: "La carta completa",
    image: "/images/comida/papas-preparadas.webp",
    alt: "Platillo del restaurante de Hotel El Pantano",
  },
  {
    slug: "eventos",
    path: "/eventos/",
    kicker: "Bodas, XV años y corporativos · Hasta 400",
    title: "Eventos inolvidables",
    image: "/images/eventos/xv-anos/montaje-jardin.webp",
    alt: "Montaje de evento en los jardines de Hotel El Pantano",
  },
  {
    slug: "historia",
    path: "/historia/",
    kicker: "Desde 2003 en Jalapa",
    title: "Un legado que florece",
    image: "/images/hero/hotel-pantano-exterior.webp",
    alt: "Vista exterior de Hotel El Pantano rodeado de vegetación",
  },
  {
    slug: "contacto",
    path: "/contacto/",
    kicker: "Reservas por WhatsApp",
    title: "Estamos para servirte",
    image: "/images/hero/decoracion-rustica-jardin.webp",
    alt: "Decoración rústica en el jardín de Hotel El Pantano",
  },
  {
    slug: "privacidad",
    path: "/privacidad/",
    kicker: "Hotel & Restaurante El Pantano",
    title: "Política de privacidad",
    image: "/images/hero/jardin-nocturno-luces.webp",
    alt: "Jardín de Hotel El Pantano con luces de noche",
  },
];

/** Tarjeta de una ruta. Las rutas sin tarjeta usan la de inicio. */
export function shareCardFor(pathname: string): ShareCard {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return shareCards.find((c) => c.path === path) ?? shareCards[0];
}
