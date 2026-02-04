import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sweetevents.com")
  .trim()
  .replace(/\/$/, "");

const blogSlugs = ["choosing-perfect-wedding-photographer"];
const serviceSlugs = ["weddings", "corporate", "dinners"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/services",
    "/about",
    "/portfolio",
    "/gallery",
    "/contact",
    "/blog",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

