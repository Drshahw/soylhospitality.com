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

// Dish names people search for; `match` finds the live Qlub item (for photo and
// price), and anchors match section ids on /menu.
export const signatureDishes = [
  { name: "Soyl Koobideh Kabab", note: "Lamb & beef, saffron rice", match: /k(oo|ub)b?ideh/i, href: "/menu#persian-grill" },
  { name: "Soyl Torsh Kabab", note: "Pomegranate & walnut", match: /torsh/i, href: "/menu#persian-grill" },
  { name: "Joojeh Masti", note: "Yogurt-marinated chicken", match: /joojeh? masti/i, href: "/menu#persian-grill" },
  { name: "Kashk-e Bademjan", note: "Smoky eggplant, kashk", match: /kashk/i, href: "/menu#hot-appetizers" },
  { name: "Mirza Ghasemi", note: "Fire-roasted eggplant", match: /mirza/i, href: "/menu#hot-appetizers" },
  { name: "Kunafa on Fire", note: "Our signature dessert", match: /kunafa/i, href: "/menu#desserts" },
] as const;
