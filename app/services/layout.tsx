import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Sweet Events — Fotografía, Video & Contenido",
  description:
    "Servicios de fotografía, video y creación de contenido para bodas, eventos corporativos y celebraciones. Producción premium con enfoque cinematográfico.",
  openGraph: {
    title: "Servicios | Sweet Events",
    description:
      "Fotografía, video y contenido para bodas, corporativo y eventos sociales. Producción premium con enfoque cinematográfico.",
    url: "/services",
    type: "website",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events — Servicios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | Sweet Events",
    description:
      "Fotografía, video y contenido para bodas, corporativo y eventos sociales.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

