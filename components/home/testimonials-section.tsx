"use client";

import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah y Michael",
    event: "Boda en Toscana",
    quote:
      "No solo fotografiaron nuestra boda—crearon una obra maestra visual que captura cada emoción, cada detalle, cada momento fugaz de nuestro día perfecto.",
    rating: 5,
    location: "Toscana, Italia",
    image: "/images/hero-wedding.jpg",
  },
  {
    name: "Tech Innovations Inc.",
    event: "Cumbre Anual 2025",
    quote:
      "Profesionales, creativos y absolutamente brillantes. La cobertura de video de nuestro evento corporativo superó todas las expectativas y capturó perfectamente la visión de nuestra marca.",
    rating: 5,
    location: "San Francisco, CA",
    image: "/images/corporate-event.jpg",
  },
  {
    name: "Familia Martínez",
    event: "Primera Comunión de Sofía",
    quote:
      "Hicieron que Sofía se sintiera tan cómoda y capturaron los momentos más hermosos de su día especial. Atesoraremos estos recuerdos para siempre.",
    rating: 5,
    location: "Barcelona, España",
    image: "/images/gallery-2.jpg",
  },
  {
    name: "Jennifer y Mark",
    event: "Gala 25º Aniversario",
    quote:
      "Nuestra celebración de aniversario fue documentada con tanta elegancia y arte. La atención al detalle y los momentos espontáneos que capturaron superaron nuestras expectativas.",
    rating: 5,
    location: "Nueva York, NY",
    image: "/images/dinner-party.jpg",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[current];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-foreground/20" />
            <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase font-medium">
              Testimonios
            </p>
            <div className="w-12 h-px bg-linear-to-l from-transparent to-foreground/20" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6">
            Historias de{" "}
            <span className="italic font-medium bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              nuestros clientes
            </span>
          </h2>

          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            La confianza y satisfacción de nuestros clientes es nuestra mayor
            recompensa
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Quote Content */}
            <div className="order-2 lg:order-1">
              <div
                className={`transition-all duration-700 ${
                  isAnimating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {/* Quote Icon */}
                <div className="relative w-16 h-16 mb-8">
                  <Quote className="w-16 h-16 text-foreground/10" />
                  <Quote className="absolute top-2 left-2 w-16 h-16 text-foreground/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                      style={{
                        animation: `fadeIn 0.3s ease-out ${i * 0.1}s both`,
                      }}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-[1.3] mb-8 italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-foreground/20" />
                    <h4 className="font-medium text-foreground text-lg">
                      {currentTestimonial.name}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm ml-15">
                    {currentTestimonial.event}
                  </p>
                  <p className="text-muted-foreground/60 text-xs ml-15 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-12">
                <button
                  onClick={prev}
                  className="group w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:border-foreground transition-all duration-500 disabled:opacity-30"
                  disabled={isAnimating}
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (isAnimating) return;
                        setIsAnimating(true);
                        setCurrent(index);
                        setTimeout(() => setIsAnimating(false), 700);
                      }}
                      className="relative h-1 rounded-full transition-all duration-500 overflow-hidden"
                      style={{ width: index === current ? "48px" : "24px" }}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    >
                      <div
                        className={`absolute inset-0 ${
                          index === current
                            ? "bg-foreground"
                            : "bg-foreground/20"
                        }`}
                      />
                      {index === current && (
                        <div className="absolute inset-0 bg-foreground/50 animate-progress" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={next}
                  className="group w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:border-foreground transition-all duration-500 disabled:opacity-30"
                  disabled={isAnimating}
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div
              className={`order-1 lg:order-2 relative aspect-4/5 overflow-hidden transition-all duration-700 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.event}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Decorative Corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/40 z-20" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/40 z-20" />

              {/* Event Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-white text-xs uppercase tracking-wider font-medium">
                    {currentTestimonial.event}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-32 pt-16 border-t border-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "Clientes Felices" },
              { value: "5.0", label: "Calificación Promedio" },
              { value: "98%", label: "Satisfacción" },
              { value: "15+", label: "Años de Confianza" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
