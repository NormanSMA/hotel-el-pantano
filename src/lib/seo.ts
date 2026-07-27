import { site, contact, openingHours } from "../data/site";

/** Nodo JSON-LD de la organización — se reutiliza mediante @id en el resto de esquemas. */
export const organizationSchema = {
  "@type": ["Hotel", "Restaurant", "LocalBusiness"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  url: site.url,
  telephone: contact.phoneRaw,
  email: contact.email,
  image: `${site.url}${site.defaultOgImage}`,
  logo: {
    "@type": "ImageObject",
    "@id": `${site.url}/#logo`,
    url: `${site.url}/logo.png`,
    width: 512,
    height: 512,
  },
  priceRange: "$$",
  currenciesAccepted: "NIO",
  paymentAccepted: "Efectivo, Transferencia bancaria",
  servesCuisine: ["Nicaragüense", "Latinoamericana"],
  foundingDate: String(site.foundedYear),
  founder: {
    "@type": "Person",
    name: "Wilhelmus Johannes Maria",
  },
  // Señales específicas de hospedaje que Google muestra en los resultados
  checkinTime: "14:00",
  checkoutTime: "12:00",
  petsAllowed: true,
  smokingAllowed: false,
  isAccessibleForFree: false,
  publicAccess: true,
  availableLanguage: [
    { "@type": "Language", name: "Español", alternateName: "es" },
  ],
  // Consultas del tipo "hotel cerca de Jalapa" o "eventos en Nueva Segovia"
  areaServed: [
    { "@type": "City", name: "Jalapa" },
    { "@type": "AdministrativeArea", name: "Nueva Segovia" },
    { "@type": "Country", name: "Nicaragua" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Hospedaje en cabaña",
      description: "Cabaña para hasta 3 huéspedes con baño privado y agua caliente.",
      priceCurrency: "NIO",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 500,
        maxPrice: 1000,
        priceCurrency: "NIO",
      },
      url: `${site.url}/habitaciones/`,
    },
    {
      "@type": "Offer",
      name: "Salón y jardines para eventos",
      description:
        "Bodas, XV años, cumpleaños y eventos corporativos para hasta 400 invitados.",
      url: `${site.url}/eventos/`,
    },
    {
      "@type": "Offer",
      name: "Restaurante",
      description: "Cocina nicaragüense: alitas, tostones, filetes a la carta y micheladas.",
      url: `${site.url}/menu/`,
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: contact.addressLocality,
    addressRegion: contact.addressRegion,
    addressCountry: contact.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.latitude,
    longitude: contact.geo.longitude,
  },
  hasMap: contact.mapsUrl,
  potentialAction: {
    "@type": "ReserveAction",
    name: "Reservar por WhatsApp",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://wa.me/${contact.whatsapp}`,
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
  },
  openingHoursSpecification: openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...slot.days],
    opens: slot.opens,
    closes: slot.closes,
  })),
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parqueo gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurante", value: true },
    { "@type": "LocationFeatureSpecification", name: "Agua caliente", value: true },
    { "@type": "LocationFeatureSpecification", name: "Salón de eventos", value: true },
    { "@type": "LocationFeatureSpecification", name: "Área infantil", value: true },
    { "@type": "LocationFeatureSpecification", name: "Admite mascotas", value: true },
  ],
  sameAs: [contact.facebook],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  inLanguage: "es-NI",
  publisher: { "@id": `${site.url}/#organization` },
};

export interface Crumb {
  label: string;
  href?: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href
        ? { item: `${site.url}${crumb.href.endsWith("/") ? crumb.href : `${crumb.href}/`}` }
        : {}),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Envuelve varios nodos en un único @graph — la forma recomendada por Google. */
export function graph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
