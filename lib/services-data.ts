export const servicesData = [
  {
    slug: "weddings",
    id: "bodas",
    title: "Bodas",
    tagline: "Romance Eterno",
    description:
      "Capturamos la magia de tu día especial con una narrativa cinematográfica que trasciende el tiempo. Cada momento, cada emoción, preservados en arte visual.",
    image: "/images/hero-wedding.jpg",
    features: [
      "Cobertura completa del evento",
      "Video cinematográfico 4K",
      "Fotografías editadas profesionales",
      "Sesión pre-boda incluida",
      "Álbum premium personalizado",
      "Galería online privada",
    ],
    color: "from-rose-500 via-pink-500 to-purple-500",
  },
  {
    slug: "corporate",
    id: "empresarial",
    title: "Corporativo",
    tagline: "Branding Visual",
    description:
      "Contenido corporativo que comunica profesionalismo y eleva tu marca. Videos institucionales, retratos ejecutivos y cobertura de eventos con estilo contemporáneo.",
    image: "/images/corporate-event.jpg",
    features: [
      "Videos promocionales HD/4K",
      "Fotografía de producto",
      "Retratos corporativos",
      "Cobertura de eventos",
      "Contenido para RRSS",
      "Entrega express 72hrs",
    ],
    color: "from-blue-500 via-cyan-500 to-indigo-500",
  },
  {
    slug: "dinners",
    id: "eventos",
    title: "Eventos Sociales",
    tagline: "Celebraciones Memorables",
    description:
      "Transformamos celebraciones en recuerdos extraordinarios. Quinceañeras, aniversarios, fiestas: cada evento documentado con creatividad y elegancia.",
    image: "/images/dinner-party.jpg",
    features: [
      "Cobertura completa",
      "Highlight video cinematográfico",
      "Fotografías profesionales",
      "Drone footage opcional",
      "Edición cinematográfica",
      "Entrega digital rápida",
    ],
    color: "from-amber-500 via-orange-500 to-yellow-500",
  },
] as const;

export type ServiceSlug = (typeof servicesData)[number]["slug"];
