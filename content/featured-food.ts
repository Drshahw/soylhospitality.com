export const featuredFood = [
  {
    number: "01",
    label: "Fire",
    title: "From the kitchen",
    text: "Smoke, warmth, and a little bit of theatre. Follow the glow and let the appetite lead.",
    image: "/images/fire-kitchen.webp",
    alt: "Fire glowing inside the SOYL kitchen oven",
  },
  {
    number: "02",
    label: "Detail",
    title: "Stay for the details",
    text: "From the first pour to the last plate, every small thing is part of the table.",
    image: "/images/coffee-detail.webp",
    alt: "Coffee served with SOYL lettering in the foam",
  },
] as const;

// Signature dishes, grouped to match SOYL's positioning. `match` finds the live
// Qlub item (for photo and price); anchors match section ids on /menu.
export const signatureGroups = [
  {
    title: "Persian Grills",
    dishes: [
      { name: "Soyl Koobideh Kabab", note: "Lamb & beef, saffron rice", match: /k(oo|ub)b?ideh/i, href: "/menu#persian-grill" },
      { name: "Joojeh Kabab", note: "Saffron chicken", match: /joojeh? kabab/i, href: "/menu#persian-grill" },
      { name: "Soyl Torsh Kabab", note: "Pomegranate & walnut", match: /torsh/i, href: "/menu#persian-grill" },
    ],
  },
  {
    title: "Lebanese Favourites",
    dishes: [
      { name: "Shish Tawook", note: "Garlic chicken skewers", match: /tawook/i, href: "/menu#lebanese-grill" },
      { name: "Fattoush", note: "Crisp bread, pomegranate", match: /fatt?ou(ch|sh)/i, href: "/menu#salads" },
      { name: "Hummus Beiruty", note: "Parsley & tomato", match: /hummus beir/i, href: "/menu#cold-appetizer" },
    ],
  },
] as const;
