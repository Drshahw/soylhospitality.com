// Hand-picked excerpts from SOYL's Google reviews. Update the rating/count and
// swap quotes occasionally; keep excerpts short and attributed.
export const reviewSummary = {
  rating: 4.8,
  count: 399,
} as const;

export type GuestReview = {
  author: string;
  quote: string;
  dish: string;
};

export const guestReviews: GuestReview[] = [
  {
    author: "Bianne B.",
    quote:
      "The Koobideh is by far the best Persian food I've tasted… They must try Soyl in Dubai Design District.",
    dish: "Koobideh",
  },
  {
    author: "Maryjane P.",
    quote:
      "The Joojeh Masti was another standout dish — perfectly marinated, creamy, tender, and beautifully spiced.",
    dish: "Joojeh Masti",
  },
  {
    author: "Kimia P.",
    quote:
      "I loooooved the kashke bademjan… you can taste an Iranian traditional tea, felt nostalgic!",
    dish: "Kashk-e bademjan",
  },
  {
    author: "Viviana M.",
    quote:
      "A Persian & Lebanese restaurant in Design District… there's a beautiful tree inside that gives it a warm and unique feeling.",
    dish: "The olive tree",
  },
  {
    author: "Delia L.",
    quote:
      "I especially loved the kababs and the saffron-infused rice… a must-visit for anyone craving authentic Iranian food in Dubai!",
    dish: "Kababs & saffron rice",
  },
  {
    author: "Isla B.",
    quote:
      "The mix of Middle Eastern and Persian dishes was amazing — especially the grills and meze.",
    dish: "Grills & meze",
  },
];
