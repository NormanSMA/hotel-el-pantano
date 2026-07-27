import type { GalleryImage } from "./rooms";

export interface EventType {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  features: string[];
}

export const eventTypes: EventType[] = [
  {
    slug: "bodas",
    title: "Bodas",
    kicker: "El día más importante",
    description:
      "Ceremonia al aire libre entre jardines, recepción bajo carpas iluminadas y un equipo que se encarga de los detalles para que ustedes sólo tengan que estar presentes.",
    image: "/images/eventos/bodas/ceremonia-aire-libre.webp",
    features: [
      "Ceremonia en jardín o salón techado",
      "Menú y catering personalizado",
      "Decoración y montaje a medida",
      "Sonido, iluminación y DJ",
    ],
  },
  {
    slug: "xv-anos-y-cumpleanos",
    title: "XV Años y Cumpleaños",
    kicker: "Celebraciones sociales",
    description:
      "Desde una fiesta infantil con temática de granja hasta unos quince años con neón y mesa de dulces. Adaptamos el espacio completo al tema que elijan.",
    image: "/images/eventos/xv-anos/montaje-jardin.webp",
    features: [
      "Ambientación temática completa",
      "Mesa de dulces y photobooth",
      "Menú adaptado a la ocasión",
      "Zona infantil supervisada",
    ],
  },
  {
    slug: "corporativos",
    title: "Eventos Corporativos",
    kicker: "Empresas y equipos",
    description:
      "Retiros, capacitaciones, lanzamientos y fines de año. La tranquilidad del campo a pocos minutos de Jalapa, con todo lo necesario para trabajar y desconectar.",
    image: "/images/eventos/corporativos/grupo-areas-verdes.webp",
    features: [
      "Salones equipados con proyección",
      "Internet de alta velocidad",
      "Coffee breaks y almuerzos",
      "Áreas verdes para dinámicas de equipo",
    ],
  },
];

export const eventGallery: (GalleryImage & { category: string })[] = [
  { src: "/images/eventos/bodas/mesa-principal-bodas.webp", alt: "Mesa principal de boda decorada con flores blancas", category: "Bodas", width: 2048, height: 1536 },
  { src: "/images/eventos/xv-anos/letrero-neon.webp", alt: "Letrero de neón personalizado en una fiesta de XV años", category: "XV Años", width: 800, height: 640 },
  { src: "/images/eventos/bodas/ceremonia-jardin.webp", alt: "Ceremonia de boda al aire libre en el jardín", category: "Bodas", width: 2048, height: 1536 },
  { src: "/images/eventos/cumpleanos/salon-morado.webp", alt: "Salón montado en tonos morados para un cumpleaños", category: "Cumpleaños", width: 800, height: 640 },
  { src: "/images/eventos/bodas/pasillo-decorado-flores.webp", alt: "Pasillo nupcial decorado con arreglos florales", category: "Bodas", width: 1280, height: 960 },
  { src: "/images/eventos/xv-anos/entrada-rosa.webp", alt: "Entrada temática en rosa para una fiesta de XV años", category: "XV Años", width: 800, height: 640 },
  { src: "/images/eventos/corporativos/bienvenida-empresarial.webp", alt: "Montaje de bienvenida para un evento empresarial", category: "Corporativos", width: 800, height: 640 },
  { src: "/images/eventos/evento-carpas-nocturno.webp", alt: "Carpas iluminadas durante un evento nocturno", category: "Bodas", width: 1280, height: 960 },
  { src: "/images/eventos/cumpleanos/infantil-granja.webp", alt: "Cumpleaños infantil con temática de granja", category: "Cumpleaños", width: 800, height: 640 },
  { src: "/images/eventos/xv-anos/decoracion-mariposas.webp", alt: "Decoración de mariposas para una celebración de XV años", category: "XV Años", width: 800, height: 640 },
  { src: "/images/eventos/xv-anos/recepcion-nocturna.webp", alt: "Recepción nocturna iluminada para XV años", category: "XV Años", width: 800, height: 640 },
  { src: "/images/eventos/corporativos/lanzamiento-producto.webp", alt: "Montaje para el lanzamiento de un producto", category: "Corporativos", width: 800, height: 640 },
];

export const eventCapabilities = [
  { value: "400", label: "Invitados", detail: "Capacidad máxima del salón y jardines combinados" },
  { value: "20+", label: "Años", detail: "Organizando celebraciones en Jalapa desde 2003" },
  { value: "3", label: "Espacios", detail: "Salón techado, jardín central y terraza del restaurante" },
];

/** Pasos del proceso de contratación — reduce la fricción del visitante. */
export const eventProcess = [
  { step: "01", title: "Contanos tu idea", text: "Escribinos por WhatsApp con la fecha, el tipo de evento y cuántos invitados esperás." },
  { step: "02", title: "Visitá el lugar", text: "Te mostramos los espacios sin compromiso para que veas el montaje que mejor te funciona." },
  { step: "03", title: "Armamos la cotización", text: "Definimos menú, decoración y servicios. Recibís una propuesta clara y por escrito." },
  { step: "04", title: "Nosotros nos encargamos", text: "El día del evento vos sólo te preocupás por disfrutar. Del resto se encarga el equipo." },
];
