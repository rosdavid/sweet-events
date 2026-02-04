"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Briefcase,
  PartyPopper,
  Check,
  Star,
} from "lucide-react";
import React from "react";

const services = [
  {
    id: "bodas",
    icon: Heart,
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
    id: "empresarial",
    icon: Briefcase,
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
    id: "eventos",
    icon: PartyPopper,
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
];

const examples = [
  {
    title: "Boda en Toscana",
    description: "Sarah & Michael",
    image: "/images/hero-wedding.jpg",
    category: "Bodas",
    details: "3 días de cobertura completa en viñedos italianos",
  },
  {
    title: "Tech Summit 2025",
    description: "Conferencia corporativa",
    image: "/images/corporate-event.jpg",
    category: "Corporativo",
    details: "Video promocional + cobertura de 500+ asistentes",
  },
  {
    title: "Aniversario de Gala",
    description: "Jennifer & Mark",
    image: "/images/dinner-party.jpg",
    category: "Eventos",
    details: "Celebración íntima con 80 invitados",
  },
  {
    title: "Sesión Pre-Boda",
    description: "Emma & James",
    image: "/images/gallery-1.jpg",
    category: "Bodas",
    details: "Editorial romántico en París",
  },
  {
    title: "Branding Corporativo",
    description: "Startup Tech",
    image: "/images/gallery-2.jpg",
    category: "Corporativo",
    details: "Retratos de equipo + video institucional",
  },
  {
    title: "Quinceañera",
    description: "Celebración de Sofía",
    image: "/images/gallery-3.jpg",
    category: "Eventos",
    details: "Fiesta temática con 200 invitados",
  },
];

const testimonials = [
  {
    quote:
      "Capturaron nuestra boda con una sensibilidad artística increíble. Cada foto es una obra de arte.",
    author: "Sarah & Michael",
    rating: 5,
  },
  {
    quote:
      "Profesionales absolutos. El video corporativo superó todas nuestras expectativas.",
    author: "Tech Innovations Inc.",
    rating: 5,
  },
  {
    quote:
      "Hicieron que nuestra celebración de aniversario fuera inolvidable. Trabajo impecable.",
    author: "Jennifer & Mark",
    rating: 5,
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Carousel Style */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeService
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Solo overlay muy sutil para legibilidad */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 pt-32">
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-black/20">
              <Camera className="w-3 h-3 text-white/70" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                Servicios
              </span>
            </div>

            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeService
                      ? "w-12 bg-white"
                      : "w-8 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Contenido con sombra de texto para legibilidad */}
            <div
              className={`transition-all duration-700 ${
                activeService >= 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                {React.createElement(services[activeService].icon, {
                  className: "w-8 h-8 text-white drop-shadow-lg",
                })}
                <span className="text-white/90 text-sm uppercase tracking-[0.3em]">
                  {services[activeService].tagline}
                </span>
              </div>

              <h1 className="font-serif text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] text-white italic mb-8">
                {services[activeService].title}
              </h1>

              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                {services[activeService].description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={`/contact?service=${services[activeService].id}`}
                  className="group inline-flex items-center gap-2.5 bg-white text-black px-8 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300"
                >
                  Solicitar cotización
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.2em] text-white/90 border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Ver portfolio
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div
              className="text-white/90 text-sm"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
            >
              <div className="mb-2 text-white/70 uppercase tracking-wider text-xs">
                Características principales
              </div>
              <div className="flex flex-wrap gap-3">
                {services[activeService].features
                  .slice(0, 3)
                  .map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs text-white/90 px-3 py-1 border border-white/30 backdrop-blur-sm bg-white/10 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
              </div>
            </div>

            <button
              onClick={() =>
                setActiveService((activeService + 1) % services.length)
              }
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
            >
              <span className="text-sm uppercase tracking-wider">
                Siguiente servicio
              </span>
              <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid Detail */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl leading-none text-foreground mb-6">
              Qué incluye cada servicio
            </h2>
            <p className="text-lg text-foreground/60 font-light">
              Paquetes diseñados para superar tus expectativas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative border border-foreground/10 overflow-hidden hover:border-foreground/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay`}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-5 h-5 text-foreground/60" />
                    <h3 className="font-serif text-2xl italic text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <Check className="w-4 h-4 text-foreground/40 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="group/btn w-full inline-flex items-center justify-center gap-2 bg-foreground text-background py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all duration-300"
                  >
                    <span>Solicitar información</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-foreground/2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl leading-none text-foreground mb-6">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-foreground/60 font-light">
              Ejemplos de nuestro trabajo reciente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-foreground/10 hover:border-foreground/30 transition-all duration-500"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={example.image}
                    alt={example.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-white text-xs uppercase tracking-wider">
                      {example.category}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-serif text-2xl italic mb-2">
                      {example.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      {example.description}
                    </p>
                    <p className="text-white/50 text-xs">{example.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground"
            >
              <span className="relative">
                Ver portfolio completo
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-foreground/10 p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm text-foreground/50">
                  — {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground italic mb-8">
            Creemos Juntos
          </h2>
          <p className="text-lg md:text-2xl text-foreground/70 font-light mb-12 max-w-2xl mx-auto">
            Cada proyecto es una colaboración única. Cuéntanos tu visión y la
            transformaremos en una obra de arte visual.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-background bg-foreground px-12 py-6 overflow-hidden"
          >
            <span className="absolute inset-0 bg-foreground/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10">Iniciar un proyecto</span>
            <ArrowUpRight className="h-4 w-4 relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
