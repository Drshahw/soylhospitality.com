import { restaurant } from "@/content/restaurant";

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
      hasMenu: restaurant.menuHref,
      acceptsReservations: true,
      image: images,
      sameAs: [restaurant.instagramHref, restaurant.mapsHref],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1884375,
        longitude: 55.2980625,
      },
      priceRange: "AED 50–100",
      // TODO: add openingHoursSpecification once confirmed by owner
      isPartOf: { "@id": `${siteUrl}/#website` },
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
