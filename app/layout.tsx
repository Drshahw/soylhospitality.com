import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S67QF8HRME"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S67QF8HRME');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
