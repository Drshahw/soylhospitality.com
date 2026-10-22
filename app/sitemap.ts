import type { MetadataRoute } from "next";

const siteUrl = "https://soylhospitality.com";

// Add new pages here as the site grows.
const routes: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [{ path: "/", changeFrequency: "monthly", priority: 1 }];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
