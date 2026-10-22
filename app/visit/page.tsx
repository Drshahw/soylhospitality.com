import { Navigation } from "@/components/navigation";
import { restaurant } from "@/content/restaurant";
import { faqStructuredDataJson } from "@/lib/structured-data";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit — Hours, Location & Parking in Dubai Design District",
  description:
    "SOYL is open every day, 11:30 AM – 10:00 PM, at Building 7, Ground Floor, Dubai Design District (d3). 100% halal. Reserve on WhatsApp.",
  alternates: { canonical: "/visit" },
  openGraph: { url: "/visit" },
};

const faqs = [
  {
    question: "What are SOYL's opening hours?",
    answer: `SOYL is open ${restaurant.hours.days.toLowerCase()}, ${restaurant.hours.display}.`,
  },
  {
    question: "Where is SOYL?",
    answer: `SOYL is at ${restaurant.address}.`,
  },
  {
    question: "Is there parking?",
    answer:
      "Yes. Dubai Design District has shared parking near Building 7. It is not reserved for SOYL, so allow a few extra minutes at busy times.",
  },
  {
    question: "Is the food halal?",
    answer: "Yes. Everything we serve is 100% halal.",
  },
  {
    question: "How do I reserve a table?",
    answer: `Send us a reservation request on WhatsApp, or call the restaurant on ${restaurant.phone}.`,
  },
  {
    question: "What kind of food does SOYL serve?",
    answer:
      "Persian and Lebanese cuisine: Persian grill such as koobideh, joojeh and torsh kabab, Lebanese grill, mezze, manakish, breakfast plates, specialty coffee and desserts.",
  },
  {
    question: "Do you have outdoor seating?",
    answer: "Yes, we have both indoor and outdoor seating.",
  },
  {
    question: "How much does a meal cost?",
    answer: "Most guests spend around AED 50–100 per person.",
  },
] as const;

const mapEmbedSrc =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sSOYL+Restaurant,+Building+7,+Dubai+Design+District!6i16";

export default function VisitPage() {
  return (
    <main id="top" className="min-h-screen bg-[#dedcd3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqStructuredDataJson(faqs) }}
      />
      <Navigation />

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-32 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:px-16 lg:pt-40">
        <div>
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
            SOYL · Dubai Design District
          </p>
          <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.84] tracking-[-0.08em] text-[#466e8b]">
            Come find us.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-6 text-black/65">
            A Persian &amp; Lebanese restaurant on the ground floor of Building 7, Dubai Design
            District (d3). 100% halal. No rush.
          </p>
        </div>

        <dl className="grid gap-0 border-t border-black/20 text-sm">
          <div className="flex items-start justify-between gap-6 border-b border-black/15 py-4">
            <dt className="inline-flex items-center gap-3 text-black/60">
              <Clock aria-hidden="true" size={17} strokeWidth={1.7} />
              Hours
            </dt>
            <dd className="text-right">
              {restaurant.hours.days}
              <br />
              <span className="text-black/60">{restaurant.hours.display}</span>
            </dd>
          </div>
          <div className="flex items-start justify-between gap-6 border-b border-black/15 py-4">
            <dt className="inline-flex items-center gap-3 text-black/60">
              <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
              Address
            </dt>
            <dd className="max-w-[16rem] text-right">{restaurant.address}</dd>
          </div>
          <div className="flex items-start justify-between gap-6 border-b border-black/15 py-4">
            <dt className="inline-flex items-center gap-3 text-black/60">
              <Phone aria-hidden="true" size={17} strokeWidth={1.7} />
              Phone
            </dt>
            <dd>
              <a href={restaurant.phoneHref} data-analytics="call_click" className="hover:text-[#466e8b]">
                {restaurant.phone}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-wrap gap-3">
          <a
            href={restaurant.bookingHref}
            target="_blank"
            rel="noreferrer"
            data-analytics="reservation_click"
            aria-label="Reserve a table on WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-[#466e8b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dedcd3] shadow-[0_8px_24px_rgb(70_110_139/20%)] transition hover:-translate-y-0.5 hover:bg-[#6d452a]"
          >
            <MessageCircle aria-hidden="true" size={16} strokeWidth={1.8} />
            <span>Reserve on WhatsApp</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </a>
          <a
            href={restaurant.mapsHref}
            target="_blank"
            rel="noreferrer"
            data-analytics="directions_click"
            className="inline-flex items-center gap-2 rounded-full border border-[#466e8b]/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#466e8b] transition hover:-translate-y-0.5 hover:border-[#466e8b] hover:bg-[#466e8b] hover:text-[#dedcd3]"
          >
            <MapPin aria-hidden="true" size={16} strokeWidth={1.7} />
            <span>Get directions</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-black/5">
          <iframe
            title="Map showing SOYL in Dubai Design District"
            src={mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full border-0 sm:h-[460px]"
          />
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-16"
      >
        <h2
          id="faq-heading"
          className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.88] tracking-[-0.06em] text-[#466e8b] lg:sticky lg:top-32 lg:self-start"
        >
          Good to know.
        </h2>
        <div className="border-t border-black/20">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-black/15 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl leading-tight text-black/85 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-[#466e8b] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-[15px] leading-6 text-black/65">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-5 bg-[#0e0e0e] px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-[#dedcd3]/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>SOYL · Persian &amp; Lebanese cuisine · Dubai Design District</span>
        <div className="flex gap-5">
          <a href="/" className="transition-colors hover:text-[#dedcd3]">
            Home
          </a>
          <a href={restaurant.menuPageHref} className="transition-colors hover:text-[#dedcd3]">
            Menu
          </a>
        </div>
      </footer>
    </main>
  );
}
