export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: "menu" | "bed" | "calendar";
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/menu",
    children: [
      {
        label: "Restaurante",
        href: "/menu",
        description: "Alitas, micheladas y cocina nicaragüense",
        icon: "menu",
      },
      {
        label: "Habitaciones",
        href: "/habitaciones",
        description: "Cabañas desde C$500 la noche",
        icon: "bed",
      },
      {
        label: "Eventos",
        href: "/eventos",
        description: "Bodas, XV años y corporativos hasta 400 personas",
        icon: "calendar",
      },
    ],
  },
  { label: "Historia", href: "/historia" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Restaurante", href: "/menu" },
      { label: "Habitaciones", href: "/habitaciones" },
      { label: "Eventos", href: "/eventos" },
      { label: "Nuestra Historia", href: "/historia" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
