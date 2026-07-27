export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2003",
    title: "La primera piedra",
    text: "Con trabajo duro y una visión clara se levantaron las primeras cabañas. El Pantano era todavía una promesa: un lugar rústico que invitaba a descubrir la naturaleza de Jalapa.",
    image: "/images/historia/inicios-construccion.webp",
    alt: "Los inicios de la construcción del hotel en 2003",
  },
  {
    year: "2012",
    title: "Llega el restaurante",
    text: "Lo que empezó como un servicio para los huéspedes se convirtió en punto de encuentro del pueblo. Las micheladas y las alitas se volvieron parte del vocabulario local.",
    image: "/images/restaurante/reunion-familiar.webp",
    alt: "Familias reunidas en el restaurante del hotel",
  },
  {
    year: "2018",
    title: "El salón de eventos",
    text: "Ampliamos los jardines y habilitamos el salón para bodas, quinceañeros y eventos corporativos. Hoy recibimos hasta 400 invitados en una sola celebración.",
    image: "/images/eventos/evento-nocturno-iluminado.webp",
    alt: "Salón de eventos iluminado durante una celebración nocturna",
  },
  {
    year: "Hoy",
    title: "Un legado que crece",
    text: "Lo que fue un sueño pionero es hoy un destino para familias de toda Nueva Segovia. Cada área nueva es un tributo a la visión original, adaptada para crear mejores recuerdos.",
    image: "/images/hero/jardin-panoramico-arcoiris.webp",
    alt: "Vista panorámica de los jardines del hotel con un arcoíris",
  },
];

export const values = [
  {
    title: "Hospitalidad con alma",
    text: "Honramos el sueño de Wilhelmus tratando a cada huésped como familia, no como un número de habitación.",
  },
  {
    title: "Autenticidad",
    text: "Mantenemos viva la esencia rústica del lugar y el respeto por el entorno natural que nos rodea.",
  },
  {
    title: "Mejora constante",
    text: "Cada año invertimos en el lugar para que quien vuelva encuentre algo mejor de lo que dejó.",
  },
];
