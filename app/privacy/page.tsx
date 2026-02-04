import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Sweet Events",
  description:
    "Learn how Sweet Events collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: January 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Sweet Events, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>
                Name, email address, and phone number when you contact us or
                submit a form
              </li>
              <li>Event details and preferences when booking our services</li>
              <li>Payment information when you make a purchase</li>
              <li>
                Photos and videos taken during your event (with your consent)
              </li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except to
              trusted partners who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Photo & Video Usage
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may use photographs and videos from events for portfolio,
              marketing, and promotional purposes unless you specifically
              request otherwise in writing. If you prefer your images remain
              private, please let us know before your event, and we will honor
              your wishes.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement appropriate security measures to protect against
              unauthorized access, alteration, disclosure, or destruction of
              your personal information. However, no method of transmission over
              the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-6 list-disc list-inside">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our website may use cookies to enhance your browsing experience.
              You can choose to disable cookies through your browser settings,
              though this may affect your ability to use certain features of our
              site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@lumierestudios.com"
                className="text-primary hover:underline"
              >
                privacy@lumierestudios.com
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
