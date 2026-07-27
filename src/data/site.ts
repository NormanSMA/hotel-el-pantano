/**
 * Configuración global del sitio.
 * Fuente única de verdad para datos de contacto, URLs y textos de marca.
 */

export const site = {
  name: "Hotel & Restaurante El Pantano",
  shortName: "El Pantano",
  tagline: "Hotel & Restaurante",
  url: "https://www.hotel-el-pantano.org",
  locale: "es_NI",
  lang: "es",
  foundedYear: 2003,
  description:
    "Hotel y Restaurante campestre en Jalapa, Nueva Segovia. Cabañas rodeadas de naturaleza, cocina nicaragüense y un salón para eventos de hasta 400 personas.",
  /** Imagen dedicada de 1200x630 para compartir en WhatsApp y redes. */
  defaultOgImage: "/og-image.jpg",
} as const;

export const contact = {
  phone: "+505 8653 8494",
  phoneRaw: "+50586538494",
  whatsapp: "50586538494",
  email: "elpantanohotel@gmail.com",
  addressLocality: "Jalapa",
  addressRegion: "Nueva Segovia",
  addressCountry: "NI",
  addressLine: "Jalapa, Nueva Segovia, Nicaragua",
  mapsUrl: "https://maps.app.goo.gl/msoFgV7S2m8YNm4Y6",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.0697802287787!2d-86.13062020000001!3d13.917641099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6ddda7a26737eb%3A0x6a241a73a2aaf681!2sHotel%20Campestre%20El%20Pantano!5e1!3m2!1ses-419!2sni!4v1771633382288!5m2!1ses-419!2sni",
  geo: { latitude: 13.9213568, longitude: -86.1342697 },
  facebook: "https://www.facebook.com/hotelpantano",
} as const;

export const hours = {
  restaurant: {
    label: "Restaurante",
    /** Resumen para mostrar cuando no cabe el detalle día a día. */
    value: "Todos los días · 1:00 PM – 10:00 PM",
    /** Detalle real, el que se muestra en contacto y en los datos estructurados. */
    schedule: [
      { days: "Lunes a jueves", value: "1:00 PM – 10:00 PM" },
      { days: "Viernes y sábado", value: "1:00 PM – 11:00 PM" },
      { days: "Domingo", value: "1:00 PM – 10:00 PM" },
    ],
  },
  reception: {
    label: "Recepción",
    value: "Llegadas tarde con reserva previa",
    detail:
      "Atendemos llamadas y mensajes hasta las 8:30 PM. Si llegás más tarde, avisanos antes y te esperamos.",
  },
  /** Hora a partir de la cual los mensajes se responden al día siguiente. */
  messagesUntil: "8:30 PM",
} as const;

/**
 * Franjas del restaurante en el formato que espera Schema.org.
 * Se mantienen aparte de los textos porque Google necesita horas de 24 h.
 */
export const openingHours = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"], opens: "13:00", closes: "22:00" },
  { days: ["Friday", "Saturday"], opens: "13:00", closes: "23:00" },
] as const;

/** Construye un enlace de WhatsApp con mensaje predefinido. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const waMessages = {
  general: "¡Hola! Me gustaría más información sobre El Pantano.",
  room: "¡Hola! Deseo consultar disponibilidad para una habitación.",
  offer: "¡Hola! Quiero aprovechar la oferta del 15% por 3 noches o más.",
  order: "¡Hola! Quiero hacer un pedido del restaurante.",
  event: "¡Hola! Quiero cotizar un evento en El Pantano.",
} as const;
