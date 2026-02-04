import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Sweet Events — Sobre nosotros",
  description:
    "Conoce Sweet Events: un estudio creativo de fotografía, video y contenido con base en Barcelona y Madrid. Historias visuales con sensibilidad editorial.",
  openGraph: {
    title: "Studio | Sweet Events",
    description:
      "Un estudio creativo de fotografía, video y contenido. Historias visuales con sensibilidad editorial.",
    url: "/about",
    type: "website",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/team-working.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events — Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Sweet Events",
    description:
      "Conoce Sweet Events: fotografía, video y contenido con base en Barcelona y Madrid.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

