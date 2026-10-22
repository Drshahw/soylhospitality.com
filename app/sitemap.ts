import { journalArticles } from "@/content/journal";
import type { MetadataRoute } from "next";

const siteUrl = "https://soylhospitality.com";

// Add new pages here as the site grows.
const routes: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/menu", changeFrequency: "daily", priority: 0.9 },
  { path: "/visit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/offers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/journal", changeFrequency: "weekly", priority: 0.6 },
  ...journalArticles.map((article) => ({
    path: `/journal/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
