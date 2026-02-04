import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { servicesData, type ServiceSlug } from "@/lib/services-data";

const slugs: ServiceSlug[] = ["weddings", "corporate", "dinners"];

function getService(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio | Sweet Events" };
  return {
    title: `${service.title} | Sweet Events — Fotografía y Video`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Sweet Events`,
      description: service.description,
      url: `/services/${service.slug}`,
      type: "website",
      siteName: "Sweet Events",
      images: [
        { url: service.image, width: 1200, height: 630, alt: service.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Sweet Events`,
      description: service.description,
    },
  };
}

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <p className="text-white/80 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            {service.tagline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white italic leading-[0.9] mb-6">
            {service.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl">
            {service.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <Link
              href={`/contact?service=${service.id}`}
              className="group inline-flex items-center gap-2.5 bg-white text-black px-8 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300"
            >
              Solicitar presupuesto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.2em] text-white/90 border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Ver todos los servicios
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
            Qué incluye
          </h2>
          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-foreground/80 font-light"
              >
                <Check className="w-5 h-5 text-foreground/60 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 pt-12 border-t border-border">
            <Link
              href={`/contact?service=${service.id}`}
              className="group inline-flex items-center gap-2.5 bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all duration-300"
            >
              Creemos juntos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
