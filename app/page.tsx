import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";
import { StatsSection } from "@/components/home/stats-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <PortfolioPreview />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
