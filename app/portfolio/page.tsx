import type { Metadata } from "next";
import { BentoGrid } from "@/components/portfolio/bento-grid";

export const metadata: Metadata = {
  title: "Portfolio | Sweet Events — Fotografía, Video & Contenido",
  description:
    "Explora nuestro portfolio: bodas, eventos corporativos, contenido creativo y producciones audiovisuales. Diseño visual innovador y narrativas que perduran.",
  openGraph: {
    title: "Portfolio | Sweet Events — Fotografía, Video & Contenido",
    description:
      "Fotografía, video y creación de contenido. Bodas, eventos corporativos y producciones audiovisuales. Momentos que perduran.",
    url: "/portfolio",
    type: "website",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Sweet Events",
    description:
      "Fotografía, video y creación de contenido. Momentos que perduran.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero: bold, minimal, risky typography */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="relative container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <p className="text-foreground/50 text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium mb-6">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[0.92] tracking-tight max-w-5xl">
            Historias en{" "}
            <span className="italic font-normal text-foreground/90">
              imagen
            </span>
            <br />
            <span className="text-foreground/70">y movimiento</span>
          </h1>
          <p className="mt-8 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed font-light">
            Fotografía, video y creación de contenido para marcas y momentos
            únicos. Cada celda es un proyecto; cada proyecto, una narrativa.
          </p>
          {/* Filter pills - visual only for now */}
          <div className="flex flex-wrap gap-2 mt-10">
            {["Todo", "Fotografía", "Video", "Contenido"].map((label) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full text-xs uppercase tracking-wider border border-white/10 text-foreground/70 hover:border-white/25 hover:text-foreground transition-colors cursor-default"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <BentoGrid />
        </div>
      </section>

      {/* Bottom CTA strip - lead-focused */}
      <section className="border-t border-white/5 bg-white/2 py-14 md:py-16">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 text-center sm:text-left">
          <div>
            <p className="text-foreground/90 font-serif text-lg md:text-xl font-light">
              ¿Tienes un proyecto en mente?
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">
              Respuesta en menos de 24h · Sin compromiso
            </p>
          </div>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-white text-black px-7 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300 shrink-0"
          >
            Hablemos
            <span className="text-black/70">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
