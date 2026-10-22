import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsEvents } from "@/components/analytics-events";
import { structuredDataJson } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soylhospitality.com"),
  title: {
    default: "SOYL — Persian & Lebanese Restaurant in Dubai Design District (d3)",
    template: "%s — SOYL",
  },
  description:
    "SOYL is a Persian & Lebanese restaurant in Dubai Design District (d3): kebabs, fresh tabun bread, mezze, and a dining room built around an olive tree.",
  alternates: { canonical: "/" },
  category: "restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "SOYL — Come hungry. Stay a little longer.",
    description:
      "Persian & Lebanese kitchen, olive-tree dining room, no rush. Find SOYL in Dubai Design District (d3).",
    url: "/",
    siteName: "SOYL",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson() }}
        />
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
        <AnalyticsEvents />
        <Analytics />
      </body>
    </html>
  );
}
