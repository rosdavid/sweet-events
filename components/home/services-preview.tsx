"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Video, Sparkles } from "lucide-react";

const services = [
  {
    title: "Bodas",
    description:
      "Capturamos la magia de tu día más especial con arte cinematográfico y sensibilidad única.",
    image: "/images/hero-wedding.jpg",
    href: "/services#weddings",
    icon: Sparkles,
    color: "from-rose-500/10 via-purple-500/10 to-pink-500/10",
    stats: "500+ celebraciones inmortalizadas",
  },
  {
    title: "Eventos Corporativos",
    description:
      "Cobertura profesional que eleva la imagen de marca con producción de alto nivel.",
    image: "/images/corporate-event.jpg",
    href: "/services#corporate",
    icon: Camera,
    color: "from-blue-500/10 via-cyan-500/10 to-indigo-500/10",
    stats: "200+ eventos empresariales",
  },
  {
    title: "Eventos Privados",
    description:
      "Documentación elegante de experiencias exclusivas y momentos íntimos inolvidables.",
    image: "/images/dinner-party.jpg",
    href: "/services#dinners",
    icon: Video,
    color: "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
    stats: "300+ eventos privados",
  },
];

export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-foreground/20" />
            <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase font-medium">
              Nuestros Servicios
            </p>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-[0.95]">
            Transformamos{" "}
            <span className="italic font-medium bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              momentos
            </span>
            <br />
            en obras de arte visuales
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Desde celebraciones íntimas hasta grandes eventos corporativos,
            aportamos{" "}
            <span className="text-foreground font-medium">
              excelencia artística
            </span>{" "}
            y{" "}
            <span className="text-foreground font-medium">
              precisión técnica
            </span>{" "}
            a cada proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-sm aspect-3/4 bg-background border border-foreground/10 transition-all duration-700 group-hover:border-foreground/20">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top - Icon & Number */}
                    <div className="flex items-start justify-between">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/40">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <span className="text-white/40 text-xs font-light tracking-wider">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Bottom - Text Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 transition-all duration-500 group-hover:translate-x-2">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed font-light md:transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                          {service.description}
                        </p>
                      </div>

                      {/* Stats & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 md:transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-200">
                        <span className="text-white/50 text-xs tracking-wide">
                          {service.stats}
                        </span>
                        <div className="flex items-center gap-2 text-white">
                          <span className="text-xs uppercase tracking-wider font-medium">
                            Explorar
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>

                {/* Floating Number Background */}
                <div className="absolute -top-8 -right-8 text-[120px] font-bold text-foreground/5 leading-none pointer-events-none transition-all duration-700 group-hover:text-foreground/10">
                  0{index + 1}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 text-foreground hover:text-foreground/80 transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium">
              Ver todos los servicios
            </span>
            <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 group-hover:text-background transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
