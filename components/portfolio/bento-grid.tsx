"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export type BentoCellType = "image" | "video" | "statement" | "content";

export interface BentoItem {
  id: string;
  type: BentoCellType;
  image?: string;
  category: string;
  title: string;
  subtitle?: string;
  slug?: string;
  /** Grid placement: col-span row-span (e.g. "2 2" = 2 cols, 2 rows) */
  span?: string;
}

const defaultItems: BentoItem[] = [
  {
    id: "1",
    type: "image",
    image: "/images/hero-wedding.jpg",
    category: "Fotografía",
    title: "Sarah & Michael",
    subtitle: "Boda · Tuscany",
    slug: "sarah-michael",
    span: "4 2",
  },
  {
    id: "2",
    type: "image",
    image: "/images/gallery-1.jpg",
    category: "Fotografía",
    title: "Emma & James",
    subtitle: "Boda · Paris",
    slug: "emma-james",
    span: "2 1",
  },
  {
    id: "3",
    type: "image",
    image: "/images/corporate-event.jpg",
    category: "Video",
    title: "Tech Summit 2025",
    subtitle: "Evento corporativo",
    slug: "tech-summit",
    span: "2 1",
  },
  {
    id: "4",
    type: "statement",
    category: "Studio",
    title: "Creamos",
    subtitle: "momentos que perduran",
    span: "2 2",
  },
  {
    id: "5",
    type: "image",
    image: "/images/gallery-2.jpg",
    category: "Contenido",
    title: "Sofia's Communion",
    subtitle: "St. Patrick's",
    slug: "sofia-communion",
    span: "2 1",
  },
  {
    id: "6",
    type: "image",
    image: "/images/dinner-party.jpg",
    category: "Fotografía",
    title: "Gala Evening",
    subtitle: "The Plaza",
    slug: "gala-evening",
    span: "2 1",
  },
  {
    id: "7",
    type: "image",
    image: "/images/gallery-3.jpg",
    category: "Video",
    title: "Annual Awards",
    subtitle: "Beverly Hills",
    slug: "annual-awards",
    span: "1 2",
  },
  {
    id: "8",
    type: "image",
    image: "/images/gallery-4.jpg",
    category: "Contenido",
    title: "Baby Oliver",
    subtitle: "Studio",
    slug: "baby-oliver",
    span: "1 1",
  },
  {
    id: "9",
    type: "image",
    image: "/images/gallery-5.jpg",
    category: "Fotografía",
    title: "The Moment",
    subtitle: "Tuscany",
    slug: "the-moment",
    span: "1 1",
  },
  {
    id: "10",
    type: "image",
    image: "/images/gallery-6.jpg",
    category: "Video",
    title: "Executive Conference",
    subtitle: "New York",
    slug: "executive-conference",
    span: "2 1",
  },
  {
    id: "11",
    type: "image",
    image: "/images/gallery-7.jpg",
    category: "Contenido",
    title: "Expecting Joy",
    subtitle: "Golden Gate",
    slug: "expecting-joy",
    span: "1 1",
  },
  {
    id: "12",
    type: "image",
    image: "/images/gallery-8.jpg",
    category: "Fotografía",
    title: "Grand Gala",
    subtitle: "The Ritz",
    slug: "grand-gala",
    span: "1 1",
  },
  {
    id: "13",
    type: "image",
    image: "/images/communion.jpg",
    category: "Fotografía",
    title: "Maria's Blessing",
    subtitle: "St. Mary's",
    slug: "maria-blessing",
    span: "2 1",
  },
  {
    id: "14",
    type: "image",
    image: "/images/announcement.jpg",
    category: "Contenido",
    title: "New Beginnings",
    subtitle: "Home Studio",
    slug: "new-beginnings",
    span: "2 1",
  },
];

function getSpanClasses(span?: string): string {
  // Mobile: single column stack (all items full width, one row each)
  const base = "col-span-1 row-span-1";
  if (!span) return base;
  const [col, row] = span.split(" ").map(Number);
  const colClass =
    col === 1
      ? "md:col-span-1"
      : col === 2
      ? "md:col-span-2"
      : col === 4
      ? "md:col-span-4"
      : "md:col-span-1";
  const rowClass = row === 1 ? "md:row-span-1" : "md:row-span-2";
  return `${base} ${colClass} ${rowClass}`;
}

function BentoCell({ item, index }: { item: BentoItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const spanClasses = getSpanClasses(item.span);
  const isStatement = item.type === "statement";
  const isVideo = item.type === "video";

  const boxClass =
    "group relative overflow-hidden bg-muted rounded-xl md:rounded-2xl border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_60px_-12px_rgba(255,255,255,0.15)] min-h-[200px] sm:min-h-[220px] md:min-h-[280px] h-full aspect-[4/3] md:aspect-auto";
  const wrapperClass = `${spanClasses} ${boxClass}`;

  const inner = (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isStatement ? (
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-linear-to-br from-white/3 via-transparent to-foreground/5">
          <div className="flex items-center gap-2 mb-3 opacity-60">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium">
              {item.category}
            </span>
          </div>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[0.95]">
            {item.title}
          </p>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground/60 italic mt-1">
            {item.subtitle}
          </p>
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ArrowUpRight className="h-5 w-5 text-white/70" />
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0">
            <Image
              src={item.image ?? "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            {isVideo && (
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Play className="h-4 w-4 text-white fill-white ml-0.5" />
              </div>
            )}
          </div>
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
              <span className="w-1 h-1 rounded-full bg-white" />
              <span className="text-[10px] uppercase tracking-wider font-medium text-white/90">
                {item.category}
              </span>
            </div>
            <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-white font-light">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-white/60 text-xs md:text-sm mt-0.5">
                {item.subtitle}
              </p>
            )}
            <div
              className={`mt-3 flex items-center gap-2 text-white/80 text-xs uppercase tracking-wider transition-all duration-500 ${
                hovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <span>Ver proyecto</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/50 rounded-tr-lg transition-all duration-500" />
        </>
      )}
    </div>
  );

  if (item.slug && !isStatement) {
    return (
      <Link
        href={`/portfolio/${item.slug}`}
        className={`block rounded-xl md:rounded-2xl ${wrapperClass}`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={wrapperClass}>{inner}</div>;
}

export function BentoGrid({ items = defaultItems }: { items?: BentoItem[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto md:auto-rows-fr md:min-h-0 transition-opacity duration-500 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {items.map((item, index) => (
        <BentoCell key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
