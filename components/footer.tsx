"use client";

import Link from "next/link";
import {
  Circle,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services#weddings", label: "Bodas" },
    { href: "/services#corporate", label: "Eventos Corporativos" },
    { href: "/services#dinners", label: "Eventos Privados" },
    { href: "/services#communions", label: "Momentos Especiales" },
    { href: "/services#announcements", label: "Creación de Contenido" },
  ],
  company: [
    { href: "/about", label: "Studio" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contacto" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacidad" },
    { href: "/terms", label: "Términos" },
    { href: "/cookies", label: "Cookies" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/5">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* CTA strip */}
        <div className="border-b border-white/5 bg-white/3">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-light text-white leading-tight">
                  ¿Listo para contar tu historia?
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Respuesta en 24h · Sin compromiso
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-white text-black px-7 py-4 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-white/90 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-300 shrink-0"
              >
                Contacto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-14 pb-10 md:pt-16 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="relative">
                  <Circle className="h-9 w-9 text-white fill-white transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-2 w-2 bg-black rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-light text-xl text-white tracking-[-0.02em] leading-none">
                    SWEET EVENTS
                  </span>
                  <span className="text-[8px] text-white/50 tracking-[0.35em] uppercase mt-1">
                    Fotografía · Video · Contenido
                  </span>
                </div>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mt-6 font-light">
                Transformamos momentos en narrativas visuales. Un estudio
                creativo con base en Barcelona y Madrid.
              </p>

              {/* Contact */}
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:hello@sweetevents.com"
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  hello@sweetevents.com
                </a>
                <a
                  href="tel:+34612345678"
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  +34 612 345 678
                </a>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>Barcelona · Madrid · Por encargo</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-2 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-8">
              <div>
                <h3 className="text-[10px] text-white/40 font-medium uppercase tracking-[0.25em] mb-5">
                  Servicios
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm font-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] text-white/40 font-medium uppercase tracking-[0.25em] mb-5">
                  Empresa
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm font-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white/40 text-xs uppercase tracking-wider">
              © {currentYear} Sweet Events. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white/70 text-xs uppercase tracking-wider transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
