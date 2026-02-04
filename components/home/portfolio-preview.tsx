"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    image: "/images/hero-wedding.jpg",
    category: "Wedding",
    title: "Sarah & Michael",
    location: "Tuscany, Italia",
    year: "2025",
  },
  {
    image: "/images/gallery-1.jpg",
    category: "Wedding",
    title: "Emma & James",
    location: "Paris, France",
    year: "2025",
  },
  {
    image: "/images/corporate-event.jpg",
    category: "Corporate",
    title: "Tech Summit 2025",
    location: "San Francisco, CA",
    year: "2025",
  },
  {
    image: "/images/gallery-2.jpg",
    category: "Communion",
    title: "Sofia's First Communion",
    location: "Barcelona, Spain",
    year: "2025",
  },
  {
    image: "/images/dinner-party.jpg",
    category: "Dinner",
    title: "Gala Evening",
    location: "New York, NY",
    year: "2025",
  },
  {
    image: "/images/gallery-3.jpg",
    category: "Corporate",
    title: "Annual Awards",
    location: "London, UK",
    year: "2025",
  },
  {
    image: "/images/gallery-4.jpg",
    category: "Announcement",
    title: "Baby Oliver",
    location: "Los Angeles, CA",
    year: "2026",
  },
];

export function PortfolioPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-foreground/20" />
            <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase font-medium">
              Portfolio Seleccionado
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.95] mb-6">
                Historias que{" "}
                <span className="italic font-medium">cobran vida</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Cada proyecto es una narrativa única, elaborada con{" "}
                <span className="text-foreground font-medium">
                  pasión cinematográfica
                </span>{" "}
                y{" "}
                <span className="text-foreground font-medium">
                  precisión artística
                </span>
                .
              </p>
            </div>

            <Link
              href="/portfolio"
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground hover:text-foreground/70 transition-colors whitespace-nowrap"
            >
              <span>Ver todo el portfolio</span>
              <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href={`/portfolio/${item.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`group relative overflow-hidden bg-black ${
                index === 0 ? "col-span-2 row-span-2" : ""
              } ${index === 3 ? "col-span-2" : ""} ${
                index === 5 ? "row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-4/5" : "aspect-square"
                }`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />

                {/* Eye Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-white text-[10px] uppercase tracking-wider font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-serif text-xl md:text-2xl mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>

                {/* Location & Year */}
                <div className="flex items-center gap-3 text-white/70 text-xs transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="tracking-wide">{item.location}</span>
                  <span>•</span>
                  <span>{item.year}</span>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-white/0 via-white to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
