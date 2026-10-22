// Current offers shown on /offers and the homepage. Add, edit or remove entries
// here; `match` finds the live Qlub item so its photo can be reused.
export type OfferItem = {
  name: string;
  description: string;
  match?: RegExp;
};

export type Offer = {
  id: string;
  label: string;
  title: string;
  price: number;
  days: string;
  time: string;
  summary: string;
  items: OfferItem[];
  terms: string[];
};

export const offers: Offer[] = [
  {
    id: "lunch",
    label: "Lunch offer",
    title: "Lunch, AED 39.",
    price: 39,
    days: "Every day",
    time: "12:00 – 3:00 PM",
    summary:
      "A complete lunch in Dubai Design District: koobideh, joojeh or schnitzel, served the way it should be.",
    items: [
      {
        name: "Chelo Koobideh",
        description: "Grilled lamb & beef koobideh with saffron rice and traditional sides.",
        match: /k(oo|ub)b?ideh/i,
      },
      {
        name: "Chelo Joojeh",
        description: "Saffron chicken kabab with saffron rice and traditional sides.",
        match: /joojeh? kabab/i,
      },
      {
        name: "Chicken Schnitzel",
        description: "Crisp chicken schnitzel with fries, coleslaw and sauce.",
      },
    ],
    terms: ["Dine-in only, not available for delivery.", "Limited-time offer."],
  },
];
