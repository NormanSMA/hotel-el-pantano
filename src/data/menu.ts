export interface MenuItem {
  name: string;
  /** Precio en córdobas. `null` cuando se cotiza en el momento. */
  price: number | null;
  description?: string;
  /** Se destaca visualmente como recomendación de la casa. */
  featured?: boolean;
}

export interface MenuCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  categories: MenuCategory[];
}

/** Formatea un precio en córdobas nicaragüenses. */
export function formatPrice(price: number | null): string {
  if (price === null) return "Consultar";
  return `C$${price.toLocaleString("es-NI")}`;
}

export const menuSections: MenuSection[] = [
  {
    id: "comida-ligera",
    title: "Comida Ligera",
    subtitle: "Para compartir en la mesa, con una michelada bien fría al lado.",
    categories: [
      {
        title: "Alitas",
        note: "Todas se sirven con papas fritas",
        items: [
          { name: "Honey Hot", price: 300, description: "Crujientes por fuera y jugosas por dentro, bañadas en una salsa de miel y chile que sólo se consigue aquí", featured: true },
          { name: "Salsa Barbacoa", price: 300 },
          { name: "Salsa Búfalo", price: 300 },
          { name: "Mango Habanero", price: 320 },
          { name: "Miel Mostaza", price: 300 },
          { name: "Cheddar", price: 320 },
          { name: "Chile Habanero", price: 300 },
        ],
      },
      {
        title: "Tostones",
        note: "Plátano verde recién frito",
        items: [
          { name: "Tostones Pantano", price: 250, description: "La versión completa: carne, queso, chorizo y crema", featured: true },
          { name: "Con Chorizo", price: 120 },
          { name: "Con Queso", price: 120 },
          { name: "Con Choriquesillo", price: 160 },
          { name: "Mixtos", price: 170 },
        ],
      },
      {
        title: "Hamburguesas",
        note: "Porción extra de papas +C$50",
        items: [
          { name: "Superburguesa", price: 180, description: "Doble carne, tocino y triple queso", featured: true },
          { name: "Tres Quesos", price: 170 },
          { name: "Tocino", price: 130 },
          { name: "Sencilla", price: 110 },
        ],
      },
      {
        title: "Papas Fritas",
        note: "Crujientes por fuera, suaves por dentro",
        items: [
          { name: "Papas Fundidas", price: 220, description: "Tocino y cheddar derretido", featured: true },
          { name: "Con Salchicha", price: 190 },
          { name: "Con Queso", price: 150 },
          { name: "Clásicas", price: 100 },
        ],
      },
    ],
  },
  {
    id: "a-la-carta",
    title: "A la Carta",
    subtitle: "Platos fuertes preparados al momento, con acompañamiento incluido.",
    categories: [
      {
        title: "Pollo",
        items: [
          { name: "Filete en Salsa de Hongos", price: 360, featured: true },
          { name: "Filete en Salsa Jalapeña", price: 350 },
          { name: "Filete de Pollo", price: 300 },
          { name: "Pollo Frito en Salsa Jalapeña", price: 320 },
          { name: "Pollo Frito (pierna con muslo)", price: 270 },
        ],
      },
      {
        title: "Cerdo",
        items: [
          { name: "Filete Encebollado", price: 325, featured: true },
          { name: "Filete Entomatado", price: 325 },
          { name: "Filete BBQ", price: 325 },
          { name: "Filete de Cerdo", price: 300 },
        ],
      },
      {
        title: "Res",
        items: [
          { name: "Filete en Salsa de Hongos", price: 360, featured: true },
          { name: "Jalapeño de Res", price: 350 },
          { name: "Filete de Res", price: 300 },
        ],
      },
    ],
  },
  {
    id: "bebidas-alcoholicas",
    title: "Bebidas Alcohólicas",
    subtitle: "Nuestras micheladas son la razón por la que mucha gente vuelve.",
    categories: [
      {
        title: "Micheladas",
        note: "Preparadas con nuestra mezcla de salsas y borde escarchado",
        items: [
          { name: "Especial de Verano", price: 180, description: "Edición de temporada, con fruta fresca", featured: true },
          { name: "Original", price: 150, description: "Cerveza bien fría con nuestra mezcla de salsas, limón recién exprimido y borde escarchado" },
          { name: "Mango", price: 150 },
          { name: "Tamarindo", price: 150 },
          { name: "Cálala", price: 150 },
        ],
      },
      {
        title: "Cervezas",
        items: [
          { name: "Toña Clásica", price: 70 },
          { name: "Miller", price: 75 },
          { name: "Sol", price: 110 },
          { name: "Heineken 0 (sin alcohol)", price: 115 },
          { name: "Smirnoff", price: 130 },
          { name: "Seltzer Spark", price: 65 },
          { name: "Frost", price: 55 },
        ],
      },
      {
        title: "Ron y Cócteles",
        note: "Precios de ron según presentación, consulte con su mesero",
        items: [
          { name: "Mangonada con Alcohol", price: 120, featured: true },
          { name: "Flor de Caña Gran Reserva", price: null },
          { name: "Flor de Caña Extra Lite", price: null },
          { name: "Flor de Caña Ultra Lite", price: null },
        ],
      },
    ],
  },
  {
    id: "bebidas-sin-alcohol",
    title: "Bebidas Sin Alcohol",
    subtitle: "Frescos naturales, batidos y refrescos para toda la familia.",
    categories: [
      {
        title: "Batidos",
        items: [
          { name: "Batido Oreo", price: 100, description: "Helado de vainilla batido con trozos generosos de galleta Oreo y coronado con chantilly", featured: true },
          { name: "Batido Pingüino Marinela", price: 120 },
          { name: "Batido de Café", price: 80 },
        ],
      },
      {
        title: "Refrescos y Jugos",
        items: [
          { name: "Mangonada", price: 80, featured: true },
          { name: "Fresco Natural del Día", price: 50 },
          { name: "Agua Gasificada", price: 50 },
          { name: "Jugo de Naranja", price: 35 },
          { name: "Agua Mineral", price: 35 },
          { name: "Gaseosa 12 oz", price: 25 },
        ],
      },
    ],
  },
];

/**
 * Los tres favoritos que se muestran en la portada.
 *
 * El precio y la descripción NO se escriben aquí: se leen de la carta de
 * arriba. Así es imposible que la portada anuncie un precio y el menú otro,
 * que es justo lo que pasaba antes.
 */
interface Signature {
  /** Categoría y nombre exactos tal como aparecen en `menuSections`. */
  category: string;
  item: string;
  /** Nombre para la portada: en la carta basta "Honey Hot" porque está bajo
   *  el encabezado "Alitas", pero fuera de contexto no se entiende. */
  displayName: string;
  tag: string;
  image: string;
}

const signatures: Signature[] = [
  {
    category: "Micheladas",
    item: "Original",
    displayName: "Michelada Original",
    tag: "La más pedida",
    image: "/images/comida/michelada.webp",
  },
  {
    category: "Alitas",
    item: "Honey Hot",
    displayName: "Alitas Honey Hot",
    tag: "Receta de la casa",
    image: "/images/comida/alitas-real.webp",
  },
  {
    category: "Batidos",
    item: "Batido Oreo",
    displayName: "Batido Oreo",
    tag: "Para cerrar",
    image: "/images/comida/batido-oreo.webp",
  },
];

/** Busca un plato en la carta y falla en compilación si ya no existe. */
function findItem(category: string, name: string): MenuItem {
  for (const section of menuSections) {
    for (const cat of section.categories) {
      if (cat.title !== category) continue;
      const found = cat.items.find((i) => i.name === name);
      if (found) return found;
    }
  }
  throw new Error(
    `El destacado "${category} / ${name}" ya no existe en el menú. ` +
      `Actualizá src/data/menu.ts.`
  );
}

export const signatureDishes = signatures.map((s) => {
  const item = findItem(s.category, s.item);
  return {
    name: s.displayName,
    tag: s.tag,
    price: item.price,
    image: s.image,
    description: item.description ?? "",
  };
});
