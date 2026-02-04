import React from "react";
import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sweetevents.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sweet Events | Photography & Video Production",
  description:
    "Premium photography and video production services for weddings, corporate events, dinners, communions, and special occasions. Capturing your most precious moments with artistry and elegance.",
  keywords: [
    "photography",
    "video production",
    "wedding photography",
    "corporate events",
    "event videography",
    "professional photographer",
  ],
  openGraph: {
    title: "Sweet Events | Photography & Video Production",
    description:
      "Premium photography and video production services for weddings, corporate events, and special occasions.",
    type: "website",
    url: "/",
    siteName: "Sweet Events",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Events — Fotografía y Video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Events | Photography & Video Production",
    description:
      "Premium photography and video production for weddings, corporate events, and special occasions.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
