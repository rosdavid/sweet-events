"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
} from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-black to-black" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-200 bg-white/2 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6">
              ¿Listo para crear algo <span className="italic">memorable?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Cuéntanos sobre tu evento y transformemos tu visión en realidad
              visual
            </p>
          </div>

          {/* Main CTA */}
          <div className="flex justify-center mb-16">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black overflow-hidden"
            >
              <span className="absolute inset-0 bg-zinc-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <Calendar className="relative z-10 w-5 h-5" />
              <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-medium">
                Agenda tu consulta gratuita
              </span>
              <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 text-sm uppercase tracking-wider">
              O contáctanos directamente
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Llamada",
                info: "+1 (555) 123-4567",
                detail: "Lun-Vie 9AM-6PM",
                href: "tel:+15551234567",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                info: "Chatea ahora",
                detail: "Respuesta inmediata",
                href: "https://wa.me/15551234567",
              },
              {
                icon: Mail,
                title: "Email",
                info: "hello@sweetevents.com",
                detail: "Respuesta en 24h",
                href: "mailto:hello@lumiere.studio",
              },
            ].map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative p-8 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-500"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-white/40 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-white text-lg font-medium mb-1">
                        {method.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-1">
                        {method.info}
                      </p>
                      <p className="text-white/50 text-xs">{method.detail}</p>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </a>
              );
            })}
          </div>

          {/* Bottom Info */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Disponibles para proyectos 2026</span>
                </div>
                <span className="hidden md:block">•</span>
                <span>Consulta inicial sin costo</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-white/50 text-sm">Síguenos:</span>
                <div className="flex gap-3">
                  {["instagram", "vimeo", "youtube"].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:border-white group transition-all duration-300"
                    >
                      <span className="text-white group-hover:text-black text-xs uppercase font-medium transition-colors">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
