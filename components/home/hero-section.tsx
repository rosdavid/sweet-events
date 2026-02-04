"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

const heroProjects = [
  {
    image: "/images/hero-wedding.jpg",
    title: "The Eternal Vow",
    subtitle: "Momentos que trascienden el tiempo",
    category: "Bodas",
    year: "2026",
  },
  {
    image: "/images/corporate-event.jpg",
    title: "Vision Forward",
    subtitle: "Innovación capturada en cada detalle",
    category: "Empresas",
    year: "2026",
  },
  {
    image: "/images/dinner-party.jpg",
    title: "To Remember",
    subtitle: "Elegancia en cada fotograma",
    category: "Eventos Privados",
    year: "2026",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [heroReady, setHeroReady] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleFirstImageLoad = () => setHeroReady(true);
  useEffect(() => {
    const fallback = setTimeout(() => setHeroReady(true), 2500);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroProjects.length);
        setIsTransitioning(false);
      }, 700);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const current = heroProjects[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Background - neutral tone for cohesion */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 transition-all duration-1000 blur-3xl opacity-40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        {heroProjects.map((project, index) => (
          <div
            key={project.image}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              transform:
                index === currentIndex
                  ? `translate(${mousePosition.x * 0.5}px, ${
                      mousePosition.y * 0.5
                    }px)`
                  : undefined,
            }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority={index === 0}
              onLoad={index === 0 ? handleFirstImageLoad : undefined}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      </div>

      {/* Floating Elements - neutral */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-linear-to-br from-white/8 to-transparent blur-3xl opacity-30 animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content - fade in when hero image is ready */}
      <div
        className={`relative z-10 flex-1 flex flex-col justify-end pb-16 md:pb-32 px-6 md:px-12 lg:px-20 transition-opacity duration-700 ${
          heroReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Category Badge */}
        <div className="mb-8 md:mb-12 flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 backdrop-blur-md bg-background/10">
            <Sparkles className="w-3 h-3 text-foreground/70" />
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              {current.category}
            </span>
          </div>
          <span className="text-xs text-foreground/50">{current.year}</span>
        </div>

        {/* Large Display Typography */}
        <div className="mb-12 md:mb-20">
          <h1
            className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] xl:text-[14rem] leading-[0.8] text-foreground italic transition-all duration-700 ${
              isTransitioning
                ? "opacity-0 translate-y-8 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            }`}
            style={{
              textShadow: "0 0 80px rgba(255, 255, 255, 0.1)",
            }}
          >
            {current.title}
          </h1>
          <p
            className={`mt-6 text-lg md:text-xl text-foreground/70 font-light tracking-wide transition-all duration-700 delay-100 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {current.subtitle}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-foreground/10 backdrop-blur-sm p-5">
          <div className="max-w-lg">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
              Transformamos instantes en obras de arte visuales.{" "}
              <span className="text-foreground font-medium">
                Cada proyecto es una sinfonía de luz, emoción y creatividad sin
                límites.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all duration-300"
            >
              Creemos juntos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-2.5 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-foreground/25 flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                <Play className="h-3.5 w-3.5" />
              </span>
              Ver showreel
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Project Navigation */}
      <div className="relative z-10 border-t border-foreground/10 backdrop-blur-md bg-background/5">
        <div className="grid grid-cols-3">
          {heroProjects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 400);
              }}
              className={`group relative py-6 md:py-8 px-4 md:px-8 text-left border-r border-foreground/10 last:border-r-0 transition-all duration-500 ${
                index === currentIndex
                  ? "bg-foreground/5"
                  : "hover:bg-foreground/5"
              }`}
            >
              {index === currentIndex && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-foreground">
                  <div className="h-full bg-foreground/50 animate-progress" />
                </div>
              )}
              <span className="block text-xs text-muted-foreground mb-2 transition-colors group-hover:text-foreground">
                0{index + 1}
              </span>
              <span
                className={`block text-xs md:text-sm font-medium truncate transition-all duration-300 ${
                  index === currentIndex
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {project.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
