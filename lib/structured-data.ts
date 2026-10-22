import { restaurant } from "@/content/restaurant";
import type { MenuSection } from "@/lib/qlub-menu";

const siteUrl = "https://soylhospitality.com";

const images = [
  "hero-team.jpeg",
  "space-dining-room.jpeg",
  "space-lanterns.jpeg",
  "space-olive-tree-night.jpeg",
].map((file) => `${siteUrl}/images/${file}`);

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: restaurant.name,
      url: siteUrl,
      telephone: "+97142441331",
      servesCuisine: ["Persian", "Lebanese", "Middle Eastern"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building 7, Ground Floor, Dubai Design District (d3)",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      hasMenu: `${siteUrl}/menu`,
      acceptsReservations: true,
      image: images,
      sameAs: [restaurant.instagramHref, restaurant.mapsHref],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1884375,
        longitude: 55.2980625,
      },
      priceRange: "AED 50–100",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: restaurant.hours.opens,
          closes: restaurant.hours.closes,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: restaurant.name,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#restaurant` },
    },
  ],
};

export function structuredDataJson(): string {
  return JSON.stringify(structuredData).replace(/</g, "\\u003c");
}

export function menuStructuredDataJson(sections: MenuSection[]): string {
  const menu = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteUrl}/menu#menu`,
    name: "SOYL Menu",
    url: `${siteUrl}/menu`,
    inLanguage: "en",
    mainEntityOfPage: `${siteUrl}/menu`,
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: item.image }),
        offers: { "@type": "Offer", price: item.price, priceCurrency: "AED" },
      })),
    })),
  };
  return JSON.stringify(menu).replace(/</g, "\\u003c");
}

export function faqStructuredDataJson(faqs: readonly { question: string; answer: string }[]): string {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
  return JSON.stringify(faq).replace(/</g, "\\u003c");
}
