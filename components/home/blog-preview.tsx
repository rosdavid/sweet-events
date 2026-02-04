"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

const previewPosts = [
  {
    slug: "choosing-perfect-wedding-photographer",
    title: "The Ultimate Guide to Choosing Your Perfect Wedding Photographer",
    excerpt:
      "Your wedding photos will be treasured for generations. Learn what to look for, questions to ask, and how to find a photographer whose style matches your vision.",
    image: "/images/hero-wedding.jpg",
    date: "15 Ene 2026",
    readTime: "8 min",
    category: "Bodas",
  },
  {
    slug: "corporate-event-photography-tips",
    title: "10 Tips for Stunning Corporate Event Photography",
    excerpt:
      "Elevate your brand presence with professional event coverage. Discover insider tips for capturing impactful corporate moments.",
    image: "/images/corporate-event.jpg",
    date: "10 Ene 2026",
    readTime: "6 min",
    category: "Corporativo",
  },
  {
    slug: "golden-hour-photography-secrets",
    title: "Golden Hour Secrets: Mastering Natural Light",
    excerpt:
      "Learn why photographers love the golden hour and how to make the most of this magical lighting for your event photos.",
    image: "/images/gallery-1.jpg",
    date: "28 Dic 2025",
    readTime: "7 min",
    category: "Consejos",
  },
];

export function BlogPreview() {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-foreground/20" />
            <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase font-medium">
              Blog
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[0.95] mb-6">
                Inspiración y{" "}
                <span className="italic font-medium">consejos</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Guías, ideas y detrás de cámaras para planear tu evento y
                conseguir fotos que perduren.
              </p>
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground hover:text-foreground/70 transition-colors whitespace-nowrap"
            >
              <span>Ver todo el blog</span>
              <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        {/* Post cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/2 overflow-hidden hover:border-white/20 hover:bg-white/5 transition-all duration-500"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider text-white/90">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-3 group-hover:text-foreground/90 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-foreground/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition-colors">
                  Leer artículo
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
