# Hotel & Restaurante El Pantano

Sitio web oficial del **Hotel & Restaurante El Pantano**, en Jalapa, Nueva Segovia (Nicaragua).
Hospedaje campestre, restaurante y salón de eventos para hasta 400 personas.

🌐 <https://hotel-el-pantano.vercel.app> (dominio propio previsto: hotelpantano.com)

---

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | [Astro 7](https://astro.build/), sitio completamente estático |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) mediante `@tailwindcss/vite` |
| Tipografía | Outfit Variable (`@fontsource-variable`), auto-hospedada. Una sola familia |
| Hosting | [Vercel](https://vercel.com/) con `@astrojs/vercel` |
| Métricas | Vercel Analytics, Speed Insights y Google Analytics diferido |

Sin frameworks de UI ni librerías de animación: todo es HTML, CSS moderno y
JavaScript nativo. El único JS que se envía al navegador son unos pocos kB de
lógica de interfaz.

---

## Estructura

```
src/
├── components/
│   ├── ui/          Piezas reutilizables (Button, Card, Icon, Section, Lightbox…)
│   ├── sections/    Bloques de la portada (Hero, Promise, Signature…)
│   ├── Navbar.astro
│   └── Footer.astro
├── data/            Contenido del sitio en TypeScript tipado
│   ├── site.ts      Contacto, horarios, enlaces de WhatsApp
│   ├── navigation.ts
│   ├── menu.ts      Carta completa del restaurante
│   ├── rooms.ts     Habitación, tarifas, galería, FAQ
│   ├── events.ts    Tipos de evento, galería, proceso
│   └── history.ts   Línea de tiempo y valores
├── lib/
│   ├── seo.ts       Generadores de JSON-LD (Schema.org)
│   └── images.ts    Registro de fotografías optimizables
├── assets/images/   Fotografías (las optimiza Astro al compilar)
├── layouts/Layout.astro
├── pages/
│   ├── index.astro
│   ├── menu.astro · habitaciones.astro · eventos.astro
│   ├── historia.astro · contacto.astro
│   └── privacidad.astro · 404.astro
└── styles/global.css    Design system completo
```

> **Para cambiar precios, platos o textos no hace falta tocar ningún componente.**
> Todo el contenido vive en `src/data/`.

---

## Sistema de diseño

`src/styles/global.css` define tres capas:

1. **Primitivas** — la escala neutra `ink` (la base real de la interfaz), más
   `forest` y `gold` reducidos a los tonos que se usan de verdad. Tipografía
   fluida con `clamp()`, sombras neutras, radios y curvas de animación.
2. **Tokens semánticos** — `--surface`, `--content`, `--border-*`, `--action`.
   Cambiar el tono de todas las superficies es tocar cuatro líneas, no
   cuatrocientas clases.
3. **Utilidades** — `container-site`, `section-padding`, `kicker`, `card`,
   `card-interactive`, `card-media`, `scrim`.

Tres reglas que conviene respetar al añadir secciones:

- **La base es neutra.** Blanco, negro y grises. El verde y el dorado son
  detalle: iconos, antetítulos, el marcador del plato recomendado. Si una
  pantalla empieza a verse verde, algo se fue de la mano.
- **Superficies sólidas.** Nada de degradados de fondo, halos difuminados ni
  degradados sobre texto. El contraste sobre fotografía se resuelve con
  `.scrim`, que es un color plano con alfa.
- **Una sola tipografía.** La jerarquía se construye con tamaño, peso y
  tracking, nunca mezclando familias dentro de un mismo bloque.

**El sitio es sólo en modo claro, y es una decisión, no un olvido.** En
hostelería la fotografía es el producto y el modo oscuro la apaga; además el
interruptor competía en la barra con el botón de reservar, que es el que
importa. Quitarlo eliminó unas 90 líneas de CSS y toda una dimensión de
revisión visual.

Todas las animaciones respetan `prefers-reduced-motion` y los reveals al hacer
scroll sólo se activan si hay JavaScript, de modo que el contenido siempre es
visible.

### Animación

- `data-reveal` — el elemento entra desplazándose y apareciendo.
- `data-reveal-group` — escalona automáticamente a los hijos directos.
- `data-reveal-media` — la fotografía entra ligeramente ampliada y se asienta.
- `data-count` — la cifra sube desde cero al entrar en pantalla.

Los cuatro los gestiona un único `IntersectionObserver` en el layout.

### Llamadas a la acción

Cada página tiene **una** llamada a la acción fuerte, al cierre. Los enlaces
intermedios son secundarios (botón `outline` o enlace subrayado). El pie de
página es informativo a propósito: repetir ahí el "reservá ahora" sólo
duplicaba el mensaje que la propia página acababa de dar.

---

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run check    # typecheck de archivos .astro y .ts
npm run build    # build de producción
npm run preview  # previsualizar el build
```

Requiere Node 20 o superior.

No hacen falta variables de entorno: el sitio es completamente estático y no
depende de ningún servicio externo en tiempo de ejecución.

---

## Horarios y datos de contacto

Los horarios viven en un solo sitio: `src/data/site.ts`. De ahí salen el pie de
página, la tarjeta de contacto, las preguntas frecuentes y el
`openingHoursSpecification` de Schema.org. Cambiar una hora es editar una línea.

`openingHours` está aparte de los textos porque Google necesita el formato de
24 horas y las personas leen mejor «1:00 PM».

---

## Seguridad

- **Cabeceras** definidas en `vercel.json`: CSP, HSTS, `X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy`.
- **Sin superficie de ataque de servidor**: no hay formularios, ni endpoints,
  ni base de datos, ni credenciales que filtrar. El contacto ocurre por
  WhatsApp, teléfono y correo.

---

## SEO

- Datos estructurados en un único `@graph`: `Hotel`, `Restaurant`,
  `LocalBusiness`, `WebSite`, `Menu`, `HotelRoom`, `FAQPage`, `BreadcrumbList`
  y `AboutPage`.
- Canonical, Open Graph y Twitter Cards en todas las páginas.
- Sitemap automático (excluye `/api/`) y `robots.txt` que autoriza
  explícitamente a los rastreadores de IA.
- Migas de pan visibles y marcadas semánticamente.

---

## Rendimiento

- Una sola fuente auto-hospedada: dos archivos `woff2`, cero peticiones a Google Fonts.
- Google Analytics se carga tras la primera interacción o a los 4 segundos.
- Imágenes procesadas por `astro:assets`: cada foto se emite en cinco anchos
  con `srcset`, de modo que un teléfono descarga la variante de 480 px y no el
  original de 2048 px. La portada pasó de 1.9 MB a unos 300 KB en móvil.
- CSS único de ~9 kB comprimido; JavaScript de interfaz por debajo de 3 kB.
- `prefetch` de enlaces al entrar en el viewport.
