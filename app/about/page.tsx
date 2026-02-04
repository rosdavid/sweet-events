"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Camera,
  Film,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background - neutral */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent blur-3xl opacity-40 transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-foreground/20 rounded-full animate-float2"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i * 1}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 backdrop-blur-md bg-background/10 mb-8">
            <Sparkles className="w-3 h-3 text-foreground/70" />
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              Sobre Nosotros
            </span>
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[0.85] text-foreground italic mb-8">
            Creamos
            <br />
            <span className="text-foreground/60">Momentos</span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/70 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Somos un estudio visual que transforma instantes en arte.
            <br />
            Cada proyecto es una historia única, contada con pasión y
            creatividad.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-16 bg-linear-to-b from-foreground/0 via-foreground/50 to-foreground/0" />
          <span className="text-xs text-foreground/50 tracking-widest">
            DESLIZA
          </span>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative aspect-4/5 overflow-hidden group">
              <Image
                src="/images/gallery-1.jpg"
                alt="Nuestra Historia"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground italic mb-8">
                Nuestra
                <br />
                Historia
              </h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-lg md:text-xl font-light">
                  Nacimos de la pasión por capturar lo efímero y transformarlo
                  en eterno. Desde nuestros inicios, hemos creído que cada
                  momento tiene una historia que merece ser contada con
                  autenticidad y belleza.
                </p>
                <p className="text-lg md:text-xl font-light">
                  Nuestro enfoque combina la técnica más avanzada con una
                  sensibilidad artística única. No solo documentamos eventos,
                  creamos experiencias visuales que trascienden el tiempo.
                </p>
                <p className="text-lg md:text-xl font-light">
                  Con cada proyecto, buscamos desafiar los límites de lo
                  convencional, explorando nuevas perspectivas y técnicas que
                  eleven tu visión a una obra de arte cinematográfica.
                </p>
              </div>

              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 mt-12 text-sm uppercase tracking-[0.2em] text-foreground"
              >
                <span className="relative">
                  Ver nuestro trabajo
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-foreground/2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground italic mb-6">
              Nuestros Valores
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mx-auto">
              Los pilares que definen nuestra forma de crear y conectar con cada
              historia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: Camera,
                title: "Autenticidad",
                description:
                  "Capturamos emociones genuinas sin artificios. Cada imagen refleja la verdad del momento.",
              },
              {
                icon: Zap,
                title: "Innovación",
                description:
                  "Exploramos constantemente nuevas técnicas y perspectivas para crear contenido único.",
              },
              {
                icon: Award,
                title: "Excelencia",
                description:
                  "Nos comprometemos con la más alta calidad en cada detalle, desde la captura hasta la edición final.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="group relative p-8 md:p-10 border border-foreground/10 hover:border-foreground/30 transition-all duration-500 hover:bg-foreground/2"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border border-foreground/20 group-hover:border-foreground/40 transition-all duration-500">
                  <value.icon className="w-7 h-7 text-foreground/70 group-hover:text-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif italic mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground italic mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mx-auto">
              Artistas visuales apasionados por transformar tu visión en
              realidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                image: "/images/team-1.jpg",
                name: "Sofia Martinez",
                role: "Directora Creativa & Fotógrafa",
                specialty: "Bodas & Retratos",
              },
              {
                image: "/images/team-2.jpg",
                name: "Carlos Ruiz",
                role: "Director de Fotografía",
                specialty: "Video Cinematográfico",
              },
              {
                image: "/images/founder.jpg",
                name: "Ana Gómez",
                role: "Editora Senior",
                specialty: "Post-Producción",
              },
            ].map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="relative aspect-3/4 overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-serif italic text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">
                  {member.role}
                </p>
                <p className="text-foreground/50 text-sm font-light">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-foreground/2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { number: "500+", label: "Proyectos Realizados" },
              { number: "12+", label: "Años de Experiencia" },
              { number: "50+", label: "Premios Ganados" },
              { number: "100%", label: "Clientes Satisfechos" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="font-serif text-5xl md:text-7xl text-foreground italic mb-4">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground italic mb-8">
            Creemos Juntos
          </h2>
          <p className="text-lg md:text-2xl text-foreground/70 font-light mb-10 max-w-2xl mx-auto">
            Cada proyecto es una colaboración única. Cuéntanos tu visión y la
            transformaremos en una obra de arte visual.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-foreground text-background px-10 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all duration-300"
          >
            Iniciar un proyecto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="text-foreground/40 text-xs uppercase tracking-wider mt-5">
            Respuesta en 24h · Consulta sin compromiso
          </p>
        </div>
      </section>
    </div>
  );
}
