import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soylhospitality.com"),
  title: "SOYL — Come hungry. Stay a little longer.",
  description:
    "SOYL is a Middle Eastern restaurant in Dubai Design District, made for good food, good company, and no rush.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SOYL — Come hungry. Stay a little longer.",
    description:
      "Middle Eastern roots. Mediterranean curiosity. Find SOYL in Dubai Design District.",
    url: "https://soylhospitality.com",
    siteName: "SOYL",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
