// Journal articles. To add one, append a new object to `journalArticles`.
// Each section has a heading, paragraphs, and (optionally) a list of dishes.
// `menuHref` should only point at a section that exists on /menu, e.g. "/menu#persian-grill".

export type JournalDish = {
  name: string;
  alsoKnownAs?: string[];
  description: string;
  menuHref?: string;
};

export type JournalSection = {
  heading: string;
  paragraphs: string[];
  dishes?: JournalDish[];
};

export type JournalArticle = {
  slug: string;
  title: string;
  /** Meta description, 160 characters or fewer. */
  description: string;
  /** ISO date, e.g. "2026-10-22". */
  datePublished: string;
  author: string;
  intro: string;
  heroImage?: { src: string; alt: string };
  sections: JournalSection[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "persian-and-lebanese-food-guide",
    title: "A Guide to Persian & Lebanese Food: What to Order at SOYL",
    description:
      "New to Persian or Lebanese food? A plain-English guide to koobideh, joojeh, hummus, fattoush, kunafa and more, and what to order at SOYL in d3, Dubai.",
    datePublished: "2026-10-22",
    author: "SOYL Kitchen",
    intro:
      "Persian and Lebanese cooking share a lot: charcoal grills, fresh herbs, yogurt, eggplant, lemon and a habit of putting plenty of small dishes in the middle of the table. They also differ in lovely ways. Persian food leans on saffron, dried limes and slow-cooked stews; Lebanese food on olive oil, garlic, tahini and bright salads. This guide walks through the dishes you will meet on the SOYL menu at Dubai Design District (d3), with a little background on each.",
    heroImage: {
      src: "/images/space-dining-room.webp",
      alt: "The dining room at SOYL, a Persian and Lebanese restaurant in Dubai Design District",
    },
    sections: [
      {
        heading: "First time? What to order",
        paragraphs: [
          "If you are unsure where to begin, here is a simple way to build a meal. Start by sharing hummus and fattoush for the table. Then choose one grill: koobideh if you like rich, juicy minced meat, or joojeh if you prefer chicken with saffron. Both come with saffron rice.",
          "Finish with kunafa and a glass of Persian tea. Order a second starter if you are a bigger group; the dishes are made for sharing, so there is no wrong way to mix the two cuisines.",
        ],
      },
      {
        heading: "Persian grills",
        paragraphs: [
          "Kebab is the heart of Persian restaurant cooking. Meat is marinated, threaded onto skewers and grilled over an open flame, then served with rice that is fragrant with saffron. At SOYL the Persian grill is served this way, with saffron rice alongside.",
        ],
        dishes: [
          {
            name: "Koobideh",
            alsoKnownAs: ["Kubideh", "Kubbideh", "Kabab Koobideh"],
            description:
              "Koobideh is the classic Persian minced-meat kebab, pressed onto a wide skewer so it stays tender and juicy. Our Kubbideh Kabab is made with finely ground lamb and beef, seasoned with aromatic spices and saffron, grilled over an open flame and served with saffron rice.",
            menuHref: "/menu#persian-grill",
          },
          {
            name: "Joojeh Kabab",
            alsoKnownAs: ["Jujeh", "Joojeh Kebab"],
            description:
              "Joojeh means chicken in Persian, and joojeh kabab is one of Iran's best-loved dishes. Ours is chicken marinated in saffron, yogurt and aromatic spices, grilled over an open flame and served with saffron rice. If you prefer a creamier marinade, the Jooje Masti uses chicken breast marinated in yogurt and Persian spices.",
            menuHref: "/menu#persian-grill",
          },
          {
            name: "Torsh Kabab",
            description:
              "Torsh means sour in Persian, and this kebab comes from the north of Iran, where pomegranate and walnut are common in the kitchen. Our Torsh Kabab is beef tenderloin marinated in pomegranate molasses and walnut, grilled over an open flame, topped with fresh pomegranate seeds and served with saffron rice.",
            menuHref: "/menu#persian-grill",
          },
          {
            name: "Tikkeh Masti",
            description:
              "Mast means yogurt in Persian, and masti dishes are marinated in it, which keeps the meat soft and gives a gentle tang. On our menu it appears as Tikk E Masti: beef tenderloin marinated in yogurt, saffron and Persian spices, grilled over an open flame and served with saffron rice.",
            menuHref: "/menu#persian-grill",
          },
        ],
      },
      {
        heading: "Persian starters & stews",
        paragraphs: [
          "Away from the grill, Persian cooking is known for eggplant dips, cool yogurt and herbs, and slow-cooked stews called khoresht. Stews are traditionally eaten with rice, and are a good choice if you want something comforting rather than smoky.",
        ],
        dishes: [
          {
            name: "Kashk-e Bademjan",
            description:
              "A classic Persian eggplant dish, with bademjan meaning eggplant and kashk a tangy fermented whey. Ours is slow-cooked with caramelised onions, garlic and mint, then topped with kashk, crispy fried garlic and walnuts. It is rich and velvety, best scooped up with bread.",
            menuHref: "/menu#hot-appetizers",
          },
          {
            name: "Mirza Ghasemi",
            description:
              "A smoky eggplant dish from the north of Iran. Ours is made with fire-roasted eggplant, slow-cooked in a tomato and garlic sauce, and topped with a fried egg and a sprinkle of chili flakes.",
            menuHref: "/menu#hot-appetizers",
          },
          {
            name: "Mast-o-Khiar",
            alsoKnownAs: ["Mast O Kheyar"],
            description:
              "A cooling Persian yogurt dip of cucumber and mint, often served alongside grilled meat. Ours is made with creamy strained yogurt, cucumber and a hint of dried mint, which makes it a refreshing counterpoint to the grill.",
            menuHref: "/menu#cold-appetizer",
          },
          {
            name: "Salad Shirazi",
            description:
              "Named after the city of Shiraz, this is a chopped salad of cucumber, tomato and red onion with dried mint and a citrus dressing. At SOYL it is served in a crisp golden pastry bowl over lettuce, with herbs and a tomato rose.",
            menuHref: "/menu#salads",
          },
          {
            name: "Khoresht-e Gheymeh",
            description:
              "One of Iran's most familiar stews. Ours is slow-cooked lamb with yellow split peas and dried limes in a saffron and tomato sauce, topped with crispy golden potato fries and served with saffron rice.",
            menuHref: "/menu#main-course",
          },
          {
            name: "Khoresht-e Bamieh",
            description:
              "A traditional Persian stew built around okra, which gives it a distinctive texture. Ours is okra slow-cooked in a tomato and saffron sauce with lamb, aromatic spices and dried lime, served with saffron rice.",
            menuHref: "/menu#main-course",
          },
        ],
      },
      {
        heading: "Lebanese favourites",
        paragraphs: [
          "Lebanese food is built for sharing. A meal often starts with a spread of cold and hot mezze, followed by something from the grill and bread baked fresh. Garlic, lemon, olive oil and fresh herbs do much of the work.",
        ],
        dishes: [
          {
            name: "Shish Tawook",
            alsoKnownAs: ["Tawook"],
            description:
              "Tawook is marinated chicken grilled on skewers, usually with lemon and garlic. At SOYL the Tawook Plate comes with two skewers of shish tawook, French fries and garlic paste.",
            menuHref: "/menu#lebanese-grill",
          },
          {
            name: "Kafta",
            alsoKnownAs: ["Lebanese kabab"],
            description:
              "Kafta is seasoned minced meat shaped onto a skewer and grilled. Our Kabab Plate is two skewers of Lebanese kabab served with fries, pickles, and grilled tomato and onion.",
            menuHref: "/menu#lebanese-grill",
          },
          {
            name: "Arayes",
            description:
              "Arayes is Lebanese bread, stuffed and grilled until crisp. Our Arayes Plate is stuffed Lebanese bread served with fries and pickles, and a satisfying choice if you want something handheld.",
            menuHref: "/menu#lebanese-grill",
          },
          {
            name: "Hummus & Hummus Beiruty",
            description:
              "Hummus is the chickpea and tahini dip found across the Levant. Our hummus is chickpeas mixed with tahina, while Hummus Beiruty is hummus mixed with parsley and tomato, which gives it a fresher, brighter taste. Both are made for scooping with warm bread.",
            menuHref: "/menu#cold-appetizer",
          },
          {
            name: "Mutabal & Baba Ghanoush",
            alsoKnownAs: ["Moutabal", "Baba Ghanouj"],
            description:
              "Two smoky eggplant dips that are often confused. Our Mutabal is grilled eggplant with tahina, and our Baba Ghanouj is eggplant mixed with vegetables. Order both to see the difference.",
            menuHref: "/menu#cold-appetizer",
          },
          {
            name: "Fattoush",
            alsoKnownAs: ["Fatouch"],
            description:
              "A Lebanese salad that is known for its crisp fried bread. Ours is a mixed vegetable salad topped with fried bread, so it keeps its crunch. It pairs well with anything from the grill.",
            menuHref: "/menu#salads",
          },
          {
            name: "Tabbouleh",
            alsoKnownAs: ["Taboule"],
            description:
              "A Lebanese salad that is mostly parsley, traditionally with tomato, fine bulgur wheat, olive oil and lemon. Ours is Lebanese taboule seasoned with olive oil and lemon: light, green and fresh.",
            menuHref: "/menu#salads",
          },
          {
            name: "Manakish",
            alsoKnownAs: ["Manakeesh"],
            description:
              "Manakish are Lebanese flatbreads baked with a topping, and are often eaten at breakfast but good at any hour. We bake several kinds, including zaatar, akkawi cheese, a half-and-half of the two, and Manakish Lahem with spiced lamb, melted cheese and creamy yogurt.",
            menuHref: "/menu#manakish-and-pizza",
          },
          {
            name: "Kibbeh",
            alsoKnownAs: ["Kebbe"],
            description:
              "Kibbeh is a Levantine favourite of crushed wheat dough wrapped around a minced meat filling. Our Kebbe Meat is four fried pieces of crushed wheat dough stuffed with minced meat, an easy dish to share at the start of a meal.",
            menuHref: "/menu#hot-appetizers",
          },
        ],
      },
      {
        heading: "Something sweet & tea",
        paragraphs: [
          "Tea is central to Persian hospitality, and a sweet finish is part of the Lebanese table. Both are worth leaving room for.",
        ],
        dishes: [
          {
            name: "Kunafa",
            alsoKnownAs: ["Knafeh", "Kanafeh"],
            description:
              "Kunafa is a Levantine dessert made from fine pastry and cheese, served warm. Ours is called SOYL kunafa on fire, and it is a good one to share at the end of the meal.",
            menuHref: "/menu#desserts",
          },
          {
            name: "Mohalabia",
            alsoKnownAs: ["Muhallebi"],
            description:
              "A light, creamy milk pudding found across the Middle East. Ours is served with pistachio nuts on top, and is a gentle way to end a rich meal.",
            menuHref: "/menu#desserts",
          },
          {
            name: "Persian tea with nabat",
            alsoKnownAs: ["Iranian tea", "Chai"],
            description:
              "Nabat is crystallised sugar, traditionally enjoyed with tea in Iran. Our Iranian Tea is a blend with rose flower and saffron, served with sweets or nabat. For a longer sitting, the Soyl Afternoon Tea pairs black tea in glassware with saffron-infused nabat and Persian sweets.",
            menuHref: "/menu#hot-beverage",
          },
        ],
      },
    ],
  },
];

export function getJournalArticle(slug: string): JournalArticle | undefined {
  return journalArticles.find((article) => article.slug === slug);
}
