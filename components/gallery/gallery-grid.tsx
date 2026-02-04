"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
  location: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const categories = [
  "All",
  "Wedding",
  "Corporate",
  "Dinner",
  "Communion",
  "Announcement",
  "Behind the Scenes",
];

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${
              index % 5 === 0
                ? "col-span-2 row-span-2 aspect-square"
                : "aspect-4/5"
            }`}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-primary text-xs uppercase tracking-wider mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 rounded-lg overflow-hidden mb-6">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <span className="text-primary text-sm uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground mt-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground flex items-center justify-center gap-1 mt-1">
                <MapPin className="h-4 w-4" />
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
