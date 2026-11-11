import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.crizgen.com/", lastModified: "2026-11-11", changeFrequency: "monthly", priority: 1 },
    { url: "https://www.crizgen.com/privacy", lastModified: "2026-11-11", changeFrequency: "yearly", priority: 0.3 },
  ];
}
