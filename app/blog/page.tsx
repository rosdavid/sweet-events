import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Sweet Events — Inspiración y Consejos",
  description:
    "Consejos de fotografía, planificación de bodas, inspiración para eventos y detrás de cámaras. En español.",
  openGraph: {
    title: "Blog | Sweet Events",
    description:
      "Inspiración y consejos para tu evento. Fotografía, bodas, corporativo y más.",
    url: "/blog",
    type: "website",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sweet Events",
    description: "Inspiración y consejos para tu evento.",
  },
};

const featuredPost = {
  slug: "choosing-perfect-wedding-photographer",
  title: "The Ultimate Guide to Choosing Your Perfect Wedding Photographer",
  excerpt:
    "Your wedding photos will be treasured for generations. Learn what to look for, questions to ask, and how to find a photographer whose style matches your vision.",
  image: "/images/hero-wedding.jpg",
  author: "Alexander Chen",
  date: "15 Ene 2026",
  readTime: "8 min",
  category: "Bodas",
};

const blogPosts = [
  {
    slug: "corporate-event-photography-tips",
    title: "10 Tips for Stunning Corporate Event Photography",
    excerpt:
      "Elevate your brand presence with professional event coverage. Discover insider tips for capturing impactful corporate moments.",
    image: "/images/corporate-event.jpg",
    author: "Sarah Mitchell",
    date: "10 Ene 2026",
    readTime: "6 min",
    category: "Corporativo",
  },
  {
    slug: "preparing-first-communion-photos",
    title: "How to Prepare Your Child for First Communion Photos",
    excerpt:
      "Make the most of this sacred milestone with our comprehensive guide to preparing for beautiful, stress-free communion photography.",
    image: "/images/communion.jpg",
    author: "Marcus Johnson",
    date: "5 Ene 2026",
    readTime: "5 min",
    category: "Momentos Especiales",
  },
  {
    slug: "golden-hour-photography-secrets",
    title: "Golden Hour Secrets: Mastering Natural Light",
    excerpt:
      "Learn why photographers love the golden hour and how to make the most of this magical lighting for your event photos.",
    image: "/images/gallery-1.jpg",
    author: "Alexander Chen",
    date: "28 Dic 2025",
    readTime: "7 min",
    category: "Consejos",
  },
  {
    slug: "intimate-dinner-party-documentation",
    title: "Documenting Intimate Dinner Parties: An Art Form",
    excerpt:
      "Discover how professional photographers capture the elegance and warmth of private dinner celebrations without disrupting the atmosphere.",
    image: "/images/dinner-party.jpg",
    author: "Sarah Mitchell",
    date: "20 Dic 2025",
    readTime: "5 min",
    category: "Eventos",
  },
  {
    slug: "pregnancy-announcement-ideas",
    title: "Creative Pregnancy Announcement Photo Ideas for 2026",
    excerpt:
      "From classic to quirky, explore the most memorable ways to announce your growing family through beautiful photography.",
    image: "/images/gallery-7.jpg",
    author: "Marcus Johnson",
    date: "15 Dic 2025",
    readTime: "6 min",
    category: "Anuncios",
  },
  {
    slug: "building-wedding-timeline",
    title: "How to Build the Perfect Wedding Day Timeline",
    excerpt:
      "A well-planned timeline ensures beautiful photos and a stress-free day. Learn how to allocate time for every important moment.",
    image: "/images/gallery-5.jpg",
    author: "Alexander Chen",
    date: "10 Dic 2025",
    readTime: "9 min",
    category: "Bodas",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)]" />
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
          <p className="text-foreground/50 text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium mb-6">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[0.92] tracking-tight max-w-5xl">
            Inspiración y{" "}
            <span className="italic font-normal text-foreground/90">
              consejos
            </span>
          </h1>
          <p className="mt-8 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed font-light">
            Guías, ideas y detrás de cámaras para planear tu evento y conseguir
            fotos que perduren.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-20 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-2xl border border-white/10 bg-white/2 overflow-hidden hover:border-white/20 hover:bg-white/5 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-[400px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider text-white/90">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-foreground/50 text-[10px] uppercase tracking-[0.25em] font-medium mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4 group-hover:text-foreground/90 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-wider text-foreground/50 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/80 group-hover:text-foreground font-medium transition-colors">
                  Leer artículo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-foreground/50 text-[10px] uppercase tracking-[0.3em] font-medium mb-4">
            Artículos recientes
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-12">
            Últimos artículos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
    </main>
  );
}
