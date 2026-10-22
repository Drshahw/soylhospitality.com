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

// Dish names people search for; anchors match section ids on /menu.
export const signatureDishes = [
  { name: "Soyl Koobideh Kabab", note: "Lamb & beef, saffron rice", href: "/menu#persian-grill" },
  { name: "Soyl Torsh Kabab", note: "Pomegranate & walnut", href: "/menu#persian-grill" },
  { name: "Joojeh Masti", note: "Yogurt-marinated chicken", href: "/menu#persian-grill" },
  { name: "Kashk-e Bademjan", note: "Smoky eggplant, kashk", href: "/menu#hot-appetizers" },
  { name: "Mirza Ghasemi", note: "Fire-roasted eggplant", href: "/menu#hot-appetizers" },
  { name: "Kunafa on Fire", note: "Our signature dessert", href: "/menu#desserts" },
] as const;
