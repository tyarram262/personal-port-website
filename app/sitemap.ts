import type { MetadataRoute } from "next";

const SITE_URL = "https://tanush-yarram-portfolio.vercel.app";
const sections = ["experience", "projects", "education", "skills"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...sections.map((section) => ({
      url: `${SITE_URL}/#${section}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
