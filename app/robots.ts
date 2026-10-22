import type { MetadataRoute } from "next";

const siteUrl = "https://soylhospitality.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: "soylhospitality.com",
  };
}
