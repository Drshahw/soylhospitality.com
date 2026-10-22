export const restaurant = {
  name: "SOYL",
  descriptor: "Persian & Lebanese cuisine",
  location: "Dubai Design District, Dubai",
  address: "Building 7, Ground Floor, Dubai Design District (d3), Dubai",
  // Confirmed by owner; matches the Google Business Profile.
  hours: { days: "Every day", opens: "11:30", closes: "22:00", display: "11:30 AM – 10:00 PM" },
  visitPageHref: "/visit",
  phone: "+971 4 244 1331",
  phoneHref: "tel:+97142441331",
  whatsappHref:
    "https://wa.me/971504296868?text=Hi%20SOYL%2C%20I%27d%20like%20to%20reserve%20a%20table.",
  mapsHref: "https://maps.app.goo.gl/2cXo7YqB3WidjTug8",
  menuPageHref: "/menu",
  menuHref: "https://app.qlub.io/qr/ae/soyl-d3/422/_/_/0b31d40521/qsr/E2BYj?lang=en&qsr=dm",
  instagramHref: "https://www.instagram.com/soylrestaurant/",
  instagramHandle: "@soylrestaurant",
  reviewHref: "https://g.page/r/CWSZIvfCtjRVEBM/review",
  bookingHref:
    "https://wa.me/971504296868?text=Hi%20SOYL%2C%20I%27d%20like%20to%20reserve%20a%20table.",
} as const;

export const navigationItems = [
  { label: "Food", href: "/#food" },
  { label: "Space", href: "/#space" },
  { label: "Visit", href: "/visit" },
] as const;
