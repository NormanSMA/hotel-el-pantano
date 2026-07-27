export interface Amenity {
  label: string;
  icon: "guests" | "shower" | "wifi" | "parking" | "nature" | "coffee";
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const roomAmenities: Amenity[] = [
  { label: "Hasta 3 huéspedes", icon: "guests" },
  { label: "Baño privado con agua caliente", icon: "shower" },
  { label: "Wi-Fi de cortesía", icon: "wifi" },
  { label: "Parqueo seguro dentro del predio", icon: "parking" },
  { label: "Acceso libre a jardines y áreas verdes", icon: "nature" },
  { label: "Restaurante en el mismo sitio", icon: "coffee" },
];

export const roomRates = [
  { occupancy: "1 persona", price: 500 },
  { occupancy: "2 personas", price: 750 },
  { occupancy: "3 personas", price: 1000 },
] as const;

export const roomGallery: GalleryImage[] = [
  { src: "/images/habitaciones/interior-habitacion.webp", alt: "Interior de la habitación con cama matrimonial y luz natural", width: 1000, height: 800 },
  { src: "/images/habitaciones/bano.webp", alt: "Baño privado con ducha y agua caliente", width: 800, height: 640 },
  { src: "/images/habitaciones/fachada-cercana.webp", alt: "Acceso privado a la cabaña desde el jardín", width: 1200, height: 960 },
  { src: "/images/habitaciones/cabanas-exterior-nocturno.webp", alt: "Las cabañas iluminadas al anochecer", width: 1280, height: 960 },
  { src: "/images/habitaciones/zona-recreativa-columpios.webp", alt: "Zona recreativa con columpios y áreas verdes", width: 1280, height: 960 },
];

export const roomFaqs = [
  {
    q: "¿Las habitaciones tienen agua caliente?",
    a: "Sí. Todas nuestras cabañas cuentan con baño privado y agua caliente las 24 horas.",
  },
  {
    q: "¿Hay Wi-Fi en las habitaciones?",
    a: "Sí, ofrecemos Wi-Fi gratuito en las cabañas, el restaurante y las áreas comunes.",
  },
  {
    q: "¿Cuál es el horario de check-in y check-out?",
    a: "El check-in es a partir de las 2:00 PM y el check-out hasta las 12:00 del mediodía. Si necesita otro horario, escríbanos y vemos qué se puede hacer.",
  },
  {
    q: "¿Aceptan mascotas?",
    a: "Somos pet friendly en áreas específicas del hotel. Por favor coménteselo al reservar para asignarle la cabaña adecuada.",
  },
  {
    q: "¿El desayuno está incluido?",
    a: "No está incluido en la tarifa, pero el restaurante abre temprano y ofrece desayunos a la carta.",
  },
  {
    q: "¿Puedo llegar de noche?",
    a: "Sí, pero avisanos antes. Atendemos llamadas y mensajes hasta las 8:30 PM; si tu llegada es más tarde, coordinalo con nosotros ese mismo día y te esperamos.",
  },
  {
    q: "¿Cuál es el horario del restaurante?",
    a: "Abrimos todos los días a la 1:00 PM. De domingo a jueves cerramos a las 10:00 PM y viernes y sábado a las 11:00 PM.",
  },
  {
    q: "¿Cómo puedo reservar?",
    a: "Directamente por WhatsApp al +505 8653 8494 o llamando al mismo número. Las reservaciones directas son las que aplican a nuestras promociones.",
  },
  {
    q: "¿Cómo llego desde el centro de Jalapa?",
    a: "Estamos a pocos minutos del casco urbano de Jalapa. En el mapa de esta página encuentra la ruta exacta desde su ubicación.",
  },
];

export const roomOffer = {
  badge: "Oferta directa",
  headline: "15% de descuento",
  subline: "en estadías de 3 noches o más",
  terms: [
    "Válido únicamente para reservaciones directas (WhatsApp, teléfono o presencial).",
    "Sujeto a disponibilidad de cabañas en las fechas solicitadas.",
    "No acumulable con otras promociones vigentes.",
    "El descuento se calcula sobre la tarifa regular por noche.",
  ],
} as const;
