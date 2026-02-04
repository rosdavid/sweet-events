import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Portfolio Gallery | Sweet Events",
  description:
    "Browse our portfolio of wedding photography, corporate events, dinner parties, communions, and special announcements. See our work and get inspired for your event.",
};

const portfolioItems = [
  {
    id: 1,
    image: "/images/hero-wedding.jpg",
    category: "Wedding",
    title: "Sarah & Michael",
    location: "Napa Valley",
  },
  {
    id: 2,
    image: "/images/gallery-1.jpg",
    category: "Wedding",
    title: "Emma & James",
    location: "Central Park",
  },
  {
    id: 3,
    image: "/images/corporate-event.jpg",
    category: "Corporate",
    title: "Tech Summit 2025",
    location: "San Francisco",
  },
  {
    id: 4,
    image: "/images/gallery-2.jpg",
    category: "Communion",
    title: "Sofia's First Communion",
    location: "St. Patrick's Cathedral",
  },
  {
    id: 5,
    image: "/images/dinner-party.jpg",
    category: "Dinner",
    title: "Charity Gala Evening",
    location: "The Plaza Hotel",
  },
  {
    id: 6,
    image: "/images/gallery-3.jpg",
    category: "Corporate",
    title: "Annual Awards Night",
    location: "Beverly Hills",
  },
  {
    id: 7,
    image: "/images/gallery-4.jpg",
    category: "Announcement",
    title: "Baby Oliver Arrives",
    location: "Studio Session",
  },
  {
    id: 8,
    image: "/images/gallery-5.jpg",
    category: "Wedding",
    title: "The Moment",
    location: "Tuscany, Italy",
  },
  {
    id: 9,
    image: "/images/gallery-6.jpg",
    category: "Corporate",
    title: "Executive Conference",
    location: "New York City",
  },
  {
    id: 10,
    image: "/images/gallery-7.jpg",
    category: "Announcement",
    title: "Expecting Joy",
    location: "Golden Gate Park",
  },
  {
    id: 11,
    image: "/images/gallery-8.jpg",
    category: "Dinner",
    title: "Grand Gala",
    location: "The Ritz",
  },
  {
    id: 12,
    image: "/images/communion.jpg",
    category: "Communion",
    title: "Maria's Blessing",
    location: "St. Mary's Church",
  },
  {
    id: 13,
    image: "/images/announcement.jpg",
    category: "Announcement",
    title: "New Beginnings",
    location: "Home Studio",
  },
  {
    id: 14,
    image: "/images/team-working.jpg",
    category: "Behind the Scenes",
    title: "Our Process",
    location: "On Location",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Our Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Stories We Have Told
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Each image represents a unique story, a cherished moment, a
            celebration of life. Explore our portfolio and discover the artistry
            behind every frame.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Filter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <GalleryGrid items={portfolioItems} />
        </div>
      </section>
    </main>
  );
}
