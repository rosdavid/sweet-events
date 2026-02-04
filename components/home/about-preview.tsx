"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Heart,
  Camera,
  Sparkles,
  Film,
  Users,
} from "lucide-react";
import { useState } from "react";

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description:
      "Cada fotograma está impregnado de nuestro amor por la narración visual.",
    color: "from-rose-500/10 to-pink-500/10",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Calidad galardonada que supera las expectativas.",
    color: "from-amber-500/10 to-yellow-500/10",
  },
  {
    icon: Camera,
    title: "Arte",
    description: "Combinando experiencia técnica con visión creativa.",
    color: "from-blue-500/10 to-cyan-500/10",
  },
];

const stats = [
  { number: "10+", label: "Años de experiencia" },
  { number: "500+", label: "Proyectos completados" },
  { number: "50+", label: "Premios internacionales" },
];

export function AboutPreview() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-4/5 overflow-hidden group">
              <Image
                src="/images/team-working.jpg"
                alt="Nuestro equipo en el trabajo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  Estudio Galardonado
                </span>
              </div>
            </div>

            {/* Secondary Image - Mejorada */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 md:w-64 md:h-64 overflow-hidden shadow-2xl group/secondary">
              <div className="relative w-full h-full border-4 border-background">
                <Image
                  src="/images/gallery-7.jpg"
                  alt="Behind the scenes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/secondary:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-foreground/10" />
            <div className="absolute top-1/2 -left-12 w-32 h-32 bg-linear-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-12">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-linear-to-r from-transparent to-foreground/20" />
                <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase font-medium">
                  Sobre Nosotros
                </p>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-6">
                Creamos experiencias{" "}
                <span className="italic font-medium bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  visuales inolvidables
                </span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4 font-light">
                Somos un colectivo de{" "}
                <span className="text-foreground font-medium">
                  cineastas, fotógrafos y creativos
                </span>{" "}
                apasionados por capturar la esencia de cada momento.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed font-light">
                Con más de 15 años de experiencia, hemos perfeccionado el arte
                de convertir historias ordinarias en{" "}
                <span className="text-foreground font-medium">
                  narrativas extraordinarias
                </span>
                .
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-foreground/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="font-serif text-3xl md:text-4xl font-light text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 overflow-hidden"
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                          <Icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-500" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-500">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          {value.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-foreground group-hover:translate-x-2 transition-all duration-500" />
                    </div>

                    {/* Bottom Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-foreground to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-background bg-foreground px-8 py-4 hover:bg-foreground/90 transition-all duration-500 overflow-hidden relative"
              >
                <span className="absolute inset-0 bg-linear-to-r from-foreground to-foreground/80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-medium">
                  Conoce al equipo
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 text-foreground border border-foreground/20 px-8 py-4 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-500"
              >
                <Film className="w-4 h-4" />
                <span className="text-sm uppercase tracking-[0.2em] font-medium">
                  Ver portfolio
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Feature Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Equipo Multidisciplinario",
              description:
                "Fotógrafos, cineastas, editores y diseñadores trabajando en armonía.",
            },
            {
              icon: Film,
              title: "Tecnología de Vanguardia",
              description:
                "Equipamiento profesional 4K/8K y herramientas de edición avanzadas.",
            },
            {
              icon: Sparkles,
              title: "Enfoque Personalizado",
              description:
                "Cada proyecto recibe atención dedicada y soluciones a medida.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 border border-foreground/10 hover:border-foreground/20 transition-all duration-500"
              >
                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full border border-foreground/20 mb-6 group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                  <Icon className="w-7 h-7 text-foreground group-hover:text-background transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
