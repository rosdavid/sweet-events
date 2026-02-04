import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Sweet Events",
  description:
    "Read the terms and conditions for using Sweet Events photography and video production services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: January 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Welcome to Sweet Events. By booking our services or using our
              website, you agree to be bound by these Terms of Service. Please
              read them carefully before proceeding.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sweet Events provides professional photography and videography
              services for weddings, corporate events, and other occasions. The
              specific services, deliverables, and timelines will be outlined in
              your individual contract or booking agreement.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Booking and Payment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To secure your booking:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>
                A signed contract and 30% non-refundable retainer are required
              </li>
              <li>The remaining balance is due 14 days before your event</li>
              <li>
                Additional services requested after booking may require
                immediate payment
              </li>
              <li>We accept credit cards, bank transfers, and PayPal</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Cancellation and Refunds
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our cancellation policy is as follows:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>
                Cancellations 60+ days before the event: 50% refund of retainer
              </li>
              <li>Cancellations within 60 days: Retainer is forfeited</li>
              <li>Cancellations within 14 days: Full payment is due</li>
              <li>
                Rescheduling may be accommodated within 12 months subject to
                availability
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. Copyright and Usage Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sweet Events retains copyright to all photographs and videos
              created. Clients receive a license to use images for personal,
              non-commercial purposes. We reserve the right to use images for
              portfolio, marketing, and promotional purposes unless otherwise
              agreed in writing. Commercial usage rights are available for an
              additional fee.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              5. Client Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To ensure the best results, clients agree to:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>Provide accurate event details and timelines</li>
              <li>Ensure adequate time for photography as discussed</li>
              <li>Inform us of any venue restrictions or requirements</li>
              <li>Designate a point of contact for the event day</li>
              <li>Communicate special requests in advance</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              6. Deliverables
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Delivery timelines are estimates and may vary based on project
              complexity. We strive to deliver within the timeframes specified
              in your contract but cannot guarantee exact delivery dates. All
              images are professionally edited; we do not provide RAW files.
              Galleries are hosted online for a minimum of 30 days after
              delivery.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While we take every precaution, including using professional
              equipment and backup systems, we cannot be held liable for
              circumstances beyond our control, including but not limited to
              equipment failure, acts of nature, or venue restrictions that
              prevent capture of specific moments. Our liability is limited to
              the amount paid for services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              8. Force Majeure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Neither party shall be liable for any failure to perform due to
              circumstances beyond reasonable control, including natural
              disasters, pandemic, government actions, or other force majeure
              events. In such cases, we will work together to reschedule or find
              alternative solutions.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              9. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of New York, without regard to its conflict
              of law provisions.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to our website. Your
              continued use of our services constitutes acceptance of any
              changes.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms, please contact us at{" "}
              <a
                href="mailto:legal@lumierestudios.com"
                className="text-primary hover:underline"
              >
                legal@lumierestudios.com
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
