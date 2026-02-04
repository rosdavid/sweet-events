import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ | Sweet Events - Photography Questions Answered",
  description:
    "Find answers to frequently asked questions about our photography and video production services, pricing, booking process, and more.",
};

const faqCategories = [
  {
    category: "Booking & Pricing",
    questions: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking 6-12 months in advance for weddings and large events, especially during peak season (May-October). Corporate events and smaller sessions can often be accommodated with 2-4 weeks notice, depending on availability.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "Our pricing varies based on the type of event, duration of coverage, and deliverables included. Wedding packages start at $3,500, corporate events from $2,000, and portrait sessions from $400. We're happy to provide a custom quote tailored to your specific needs.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we require a 30% non-refundable retainer to secure your date, with the remaining balance due 14 days before your event. We accept major credit cards, bank transfers, and PayPal.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We understand plans can change. Cancellations made 60+ days before the event receive a 50% refund of the deposit. Cancellations within 60 days forfeit the deposit. We offer the option to reschedule within 12 months when possible.",
      },
    ],
  },
  {
    category: "Services & Coverage",
    questions: [
      {
        question: "Do you travel for events?",
        answer:
          "Absolutely! We love destination events. Travel within 50 miles is included in our packages. For events beyond that distance, we add travel expenses which we'll outline in your custom quote. We've captured beautiful moments across the country and internationally.",
      },
      {
        question: "How many photographers will cover my event?",
        answer:
          "Most packages include one lead photographer. For larger events like weddings, we strongly recommend adding a second photographer to capture multiple angles and ensure no moment is missed. Second photographers are available as an add-on.",
      },
      {
        question: "Do you provide both photography and videography?",
        answer:
          "Yes! We offer comprehensive coverage including both photography and videography. Many clients choose our combined packages for seamless coverage and a cohesive visual story of their event.",
      },
      {
        question: "Can you accommodate special requests or themed events?",
        answer:
          "We love creative challenges! Whether you have a specific theme, cultural traditions, or unique venue requirements, we work closely with you to understand and capture your vision perfectly.",
      },
    ],
  },
  {
    category: "Deliverables & Timeline",
    questions: [
      {
        question: "When will I receive my photos and videos?",
        answer:
          "Photo galleries are typically delivered within 4-6 weeks. Wedding films take 8-12 weeks for the highlight reel and documentary edit. Corporate clients needing faster turnaround can inquire about rush processing (additional fees apply).",
      },
      {
        question: "How many photos will I receive?",
        answer:
          "The number varies by event length and type. Weddings typically yield 400-800+ edited images for full-day coverage. Corporate events average 100-200 images per hour. All delivered images are professionally edited and color-corrected.",
      },
      {
        question: "Do you provide raw/unedited files?",
        answer:
          "We do not provide RAW files as they're not representative of our finished work. However, we deliver high-resolution edited images and can provide additional edits upon request.",
      },
      {
        question: "How long do you keep my photos on file?",
        answer:
          "We maintain a secure backup of your images for 2 years after delivery. We recommend clients back up their galleries to personal storage as well. Extended archival services are available.",
      },
    ],
  },
  {
    category: "On the Day",
    questions: [
      {
        question: "What should we prepare before the event?",
        answer:
          "We'll send a detailed questionnaire to understand your timeline, must-have shots, and key people to photograph. For weddings, we also recommend scheduling an engagement session to get comfortable in front of the camera.",
      },
      {
        question: "How do you handle low-light situations?",
        answer:
          "Our team is equipped with professional low-light lenses and lighting equipment. We're experienced in challenging lighting conditions and always come prepared with backup equipment.",
      },
      {
        question: "Will you coordinate with other vendors?",
        answer:
          "Yes! We work seamlessly with wedding planners, venue coordinators, DJs, and other vendors to ensure smooth coverage without disrupting your event flow.",
      },
      {
        question: "What do you wear to events?",
        answer:
          "Our team dresses professionally and appropriately for each event. For weddings, we typically wear all black or dark attire to blend in while maintaining a professional appearance.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            FAQ
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, booking
            process, and what to expect when working with us.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            {
              "We're here to help! Reach out and we'll be happy to answer any questions you have about our services."
            }
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
