"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const gridItems = [
  { image: "/images/hero-wedding.jpg", title: "Weddings", span: "col-span-2 row-span-2" },
  { image: "/images/gallery-2.jpg", title: "Communions", span: "col-span-1 row-span-1" },
  { image: "/images/gallery-3.jpg", title: "Corporate", span: "col-span-1 row-span-1" },
  { image: "/images/dinner-party.jpg", title: "Private Events", span: "col-span-1 row-span-2" },
  { image: "/images/announcement.jpg", title: "Announcements", span: "col-span-1 row-span-1" },
  { image: "/images/gallery-5.jpg", title: "Celebrations", span: "col-span-1 row-span-1" },
]

export function VisualGrid() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      {/* Header */}
      <div className="px-6 md:px-12 mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Craft</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl italic text-foreground max-w-4xl">
            Every moment deserves to be immortalized
          </h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground shrink-0"
          >
            <span>All Services</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Asymmetric Grid */}
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {gridItems.map((item, index) => (
            <Link
              key={item.title}
              href="/services"
              className={`group relative overflow-hidden ${item.span}`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="text-xs text-foreground/70 uppercase tracking-wider">0{index + 1}</span>
                    <h3 className="font-serif text-xl md:text-2xl italic text-foreground">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 overflow-hidden border-y border-foreground/10 py-6">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {["Weddings", "Corporate", "Private Events", "Communions", "Announcements", "Celebrations"].map((item) => (
                <span key={item} className="mx-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  {item}
                  <span className="mx-8 text-foreground/30">*</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
