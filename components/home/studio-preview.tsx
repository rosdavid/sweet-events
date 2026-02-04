import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StudioPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Image */}
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src="/images/team-working.jpg"
            alt="Our studio at work"
            fill
            className="object-cover"
          />
          {/* Floating Label */}
          <div className="absolute bottom-6 left-6 bg-background px-4 py-3">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground">
              Est. 2015
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
            About Us
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-foreground mb-8 leading-[1.1]">
            We are storytellers, visionaries, artists
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Sweet Events is a collective of visual artists dedicated to
              capturing the essence of your most significant moments. We believe
              every celebration, every milestone, every fleeting instance of joy
              deserves to be preserved with artistry and intention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines documentary authenticity with cinematic
              beauty, creating timeless pieces that transcend trends and speak
              to the heart of your story.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-foreground/10">
            <div>
              <span className="font-serif text-4xl md:text-5xl italic text-foreground">
                10+
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                Years
              </p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl italic text-foreground">
                500+
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                Projects
              </p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl italic text-foreground">
                15
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                Countries
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-foreground"
          >
            <span>Meet the Team</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
