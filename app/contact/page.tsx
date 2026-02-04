import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Sweet Events",
  description:
    "Hablemos de tu proyecto. Fotografía, video y contenido. Consulta sin compromiso. Respuesta en menos de 24h.",
  openGraph: {
    title: "Contacto | Sweet Events",
    description:
      "Hablemos de tu proyecto. Fotografía, video y contenido. Consulta sin compromiso. Respuesta en 24h.",
    url: "/contact",
    type: "website",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events — Contacto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Sweet Events",
    description:
      "Hablemos de tu proyecto. Fotografía, video y contenido. Respuesta en 24h.",
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sweetevents.com",
    href: "mailto:hello@sweetevents.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 612 345 678",
    href: "tel:+34612345678",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Barcelona · Madrid · Por encargo",
    href: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun – Vie 10:00 – 20:00 · Sábados bajo cita",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero: editorial, asymmetric */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-foreground/50 text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium mb-6">
                Contacto
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[0.94] tracking-tight">
                Hablemos de tu{" "}
                <span className="italic font-normal text-foreground/90">
                  historia
                </span>
              </h1>
              <p className="mt-8 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed font-light">
                Cuéntanos tu idea, fecha o evento.
              </p>
              <p className="mt-2 text-foreground/40 text-xs uppercase tracking-wider">
                Respuesta en menos de 24h · Consulta sin compromiso
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/34612345678?text=Hola,%20me%20gustaría%20información%20sobre%20vuestros%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span className="text-xs uppercase tracking-[0.15em] font-medium text-foreground/90">
                  WhatsApp
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="mailto:hello@sweetevents.com"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-foreground/70" />
                <span className="text-xs uppercase tracking-[0.15em] font-medium text-foreground/90">
                  Email directo
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content: form + contact panel */}
      <section className="py-16 md:py-24 lg:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form - takes more space, feels primary */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <p className="text-foreground/50 text-[10px] uppercase tracking-[0.3em] font-medium mb-2">
                  Envíanos un mensaje
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                  Cuéntanos tu proyecto
                </h2>
              </div>
              <ContactForm />
            </div>

            {/* Contact info - refined card style */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-sm">
                <h3 className="font-serif text-lg font-light text-foreground mb-6">
                  Información de contacto
                </h3>
                <ul className="space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-4 w-4 text-foreground/60" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-foreground/50 mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground/90 hover:text-foreground transition-colors font-light wrap-break-word"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground/90 font-light">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-sm">
                <h3 className="font-serif text-lg font-light text-foreground mb-4">
                  Síguenos
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Optional: small visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-4/3 min-h-[180px]">
                <Image
                  src="/images/team-working.jpg"
                  alt="Sweet Events Studio"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/70">
                    Studio & ubicaciones
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1 text-white/90 hover:text-white text-sm font-light transition-colors"
                  >
                    Ver en mapa
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip: minimal CTA */}
      <section className="border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
            Respuesta en menos de 24 horas · Sin compromiso
          </p>
        </div>
      </section>
    </main>
  );
}
