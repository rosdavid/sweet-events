import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowUpRight,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    authorImage: string;
    date: string;
    readTime: string;
    category: string;
    content: string[];
  }
> = {
  "choosing-perfect-wedding-photographer": {
    title: "The Ultimate Guide to Choosing Your Perfect Wedding Photographer",
    excerpt:
      "Your wedding photos will be treasured for generations. Learn what to look for, questions to ask, and how to find a photographer whose style matches your vision.",
    image: "/images/hero-wedding.jpg",
    author: "Alexander Chen",
    authorImage: "/images/founder.jpg",
    date: "15 Ene 2026",
    readTime: "8 min",
    category: "Bodas",
    content: [
      "Your wedding photographs are more than just images—they are the tangible memories of one of the most important days of your life. Long after the flowers have wilted and the cake has been eaten, your photos will remain as a window into those precious moments.",
      "Choosing the right wedding photographer is a decision that deserves careful consideration. The photographer you select will not only document your day but will also be a constant presence during your most intimate moments. Here's our comprehensive guide to finding your perfect match.",
      "## Understanding Photography Styles",
      "Before you start your search, it's essential to understand the different photography styles available. Traditional or classic photography focuses on posed, formal shots with careful attention to lighting and composition. Documentary or photojournalistic style captures candid moments as they naturally unfold, telling the story of your day without intervention.",
      "Fine art photography treats each image as a work of art, with creative compositions and often editorial-style poses. Many modern photographers blend these styles, which is often called 'lifestyle' photography—a mix of candid moments with some gentle direction.",
      "## Questions to Ask Potential Photographers",
      "When meeting with photographers, come prepared with questions that will help you understand their approach and professionalism. Ask about their backup equipment policy, how they handle low-light situations, and their typical turnaround time for delivering images.",
      "Inquire about their experience with your specific venue and whether they've worked at locations with similar lighting conditions. Ask to see full wedding galleries, not just highlight reels, to get a true sense of their consistency throughout an entire event.",
      "## Red Flags to Watch For",
      "Be cautious of photographers who only show heavily edited images, as this may indicate inconsistent quality in their original captures. Unclear pricing or contracts that seem incomplete should raise concerns. A photographer who seems inflexible or dismissive of your ideas may not be the right creative partner for your day.",
      "## Making Your Final Decision",
      "After narrowing down your choices, schedule in-person or video meetings with your top candidates. Pay attention to how comfortable you feel in their presence—this person will be capturing your most intimate moments, so a good rapport is essential.",
      "Trust your instincts. When you find the right photographer, their portfolio will resonate with you, their personality will put you at ease, and their professionalism will give you confidence that your memories are in capable hands.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Artículo no encontrado | Sweet Events" };
  }

  return {
    title: `${post.title} | Sweet Events Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sweet Events`,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="min-h-screen">
        <section className="relative border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="relative container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Artículo no encontrado
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              El artículo que buscas no existe o ha sido movido.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2.5 bg-white text-black px-6 py-3 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero image + overlay */}
      <section className="relative h-[55vh] md:h-[65vh] min-h-[320px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-10 md:pb-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.2em] font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] uppercase tracking-wider text-white/90 mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[0.95] max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-14 md:py-20 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6 pb-8 mb-10 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground font-light text-sm">
                    {post.author}
                  </p>
                  <p className="text-foreground/50 text-xs uppercase tracking-wider">
                    Sweet Events
                  </p>
                </div>
              </div>
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
            </div>

            {/* Content */}
            <div className="space-y-6">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-4 first:mt-0"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-foreground/80 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Share */}
            <div className="mt-14 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-foreground/60 text-xs uppercase tracking-wider font-medium flex items-center gap-2">
                  <Share2 className="h-3.5 w-3.5" />
                  Compartir
                </p>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                    aria-label="Compartir en Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(
                      post.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                    aria-label="Compartir en Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA strip */}
      <section className="border-t border-white/5 py-12 md:py-16 bg-white/2">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 text-center sm:text-left">
          <div>
            <p className="text-foreground/90 font-serif text-lg md:text-xl font-light">
              ¿Listo para contar tu historia?
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">
              Respuesta en 24h · Sin compromiso
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-white text-black px-7 py-4 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300 shrink-0"
          >
            Contacto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
