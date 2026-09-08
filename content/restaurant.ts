export const restaurant = {
  name: "SOYL",
  descriptor: "Middle Eastern cuisine",
  location: "Dubai Design District, Dubai",
  phone: "+971 4 244 1331",
  phoneHref: "tel:+97142441331",
  mapsHref: "https://maps.app.goo.gl/2cXo7YqB3WidjTug8",
  menuHref: "https://app.qlub.io/qr/ae/soyl-d3/422/_/_/0b31d40521/qsr/E2BYj?lang=en&qsr=dm",
  instagramHref: "https://www.instagram.com/soylrestaurant/",
  instagramHandle: "@soylrestaurant",
  bookingHref: "#visit",
} as const;

export const navigationItems = [
  { label: "Now", href: "#now" },
  { label: "Food", href: "#food" },
  { label: "Space", href: "#space" },
  { label: "Visit", href: "#visit" },
] as const;
