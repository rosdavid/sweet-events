"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const featuredProjects = [
  {
    id: 1,
    title: "Sarah & James",
    category: "Boda",
    image: "/images/gallery-1.jpg",
    year: "2025",
    location: "Tuscany, Italy",
  },
  {
    id: 2,
    title: "Tech Summit",
    category: "Empresa",
    image: "/images/corporate-event.jpg",
    year: "2025",
    location: "Milan, Italy",
  },
  {
    id: 3,
    title: "Sofia's Communion",
    category: "Comunión",
    image: "/images/communion.jpg",
    year: "2024",
    location: "Barcelona, Spain",
  },
  {
    id: 4,
    title: "Gala Evening",
    category: "Evento Privado",
    image: "/images/dinner-party.jpg",
    year: "2024",
    location: "Paris, France",
  },
];

export function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Obras Selectas
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl italic text-foreground">
            Proyectos Destacados
          </h2>
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
        >
          <span>Ver Todo</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Projects Grid - Asymmetric Layout */}
      <div className="space-y-1">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.id}
            href="/gallery"
            className="group block border-t border-foreground/10 py-6 md:py-8"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-sm text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground group-hover:translate-x-4 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Image Preview (Desktop) */}
              <div className="hidden md:block col-span-3 relative h-20 overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredId === project.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="hidden md:block col-span-2">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {/* Year */}
              <div className="hidden md:block col-span-1">
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex col-span-1 justify-end">
                <ArrowUpRight
                  className={`h-5 w-5 text-foreground transition-all duration-300 ${
                    hoveredId === project.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
