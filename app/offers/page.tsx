import { Navigation } from "@/components/navigation";
import { offers } from "@/content/offers";
import { restaurant } from "@/content/restaurant";
import { loadMenu } from "@/lib/qlub-menu";
import { ArrowUpRight, Clock, MapPin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

// Offer photos come from the live Qlub menu.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Offers — AED 39 Lunch in Dubai Design District",
  description:
    "SOYL's lunch offer: Chelo Koobideh, Chelo Joojeh or Chicken Schnitzel for AED 39, every day 12–3 PM at Dubai Design District (d3). Dine-in only.",
  alternates: { canonical: "/offers" },
  openGraph: { url: "/offers" },
};

export default async function OffersPage() {
  const menuItems = (await loadMenu())?.flatMap((section) => section.items) ?? [];
  const photoFor = (match?: RegExp) =>
    match ? menuItems.find((entry) => match.test(entry.name))?.photo : undefined;

  return (
    <main id="top" className="min-h-screen bg-[#dedcd3]">
      <Navigation />

      <section className="mx-auto max-w-[1440px] px-5 pb-12 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
          SOYL · Dubai Design District
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.84] tracking-[-0.08em] text-[#466e8b]">
          Offers.
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-6 text-black/65">
          Good food, fairly priced, and no rush. A business lunch in d3 that feels like a proper
          meal.
        </p>
      </section>

      {offers.map((offer) => (
        <section
          key={offer.id}
          id={offer.id}
          className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-10 sm:pb-32 lg:px-16"
        >
          <div className="overflow-hidden rounded-[2rem] bg-[#0e0e0e] text-[#dedcd3]">
            <div className="grid gap-10 p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:p-16">
              <div>
                <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dedcd3]/60">
                  <span className="text-[#a24a24]">01</span>
                  <span className="h-px w-8 bg-[#dedcd3]/30" />
                  <span>{offer.label}</span>
                </div>
                <h2 className="font-serif text-[clamp(3rem,6vw,5.75rem)] leading-[0.88] tracking-[-0.06em]">
                  {offer.title}
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-6 text-[#dedcd3]/70">
                  {offer.summary}
                </p>
              </div>
              <div className="grid gap-0 border-t border-[#dedcd3]/20 text-sm">
                <div className="flex items-center justify-between gap-6 border-b border-[#dedcd3]/15 py-4">
                  <span className="inline-flex items-center gap-3 text-[#dedcd3]/60">
                    <Clock aria-hidden="true" size={17} strokeWidth={1.7} />
                    When
                  </span>
                  <span>
                    {offer.days}, {offer.time}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-[#dedcd3]/15 py-4">
                  <span className="inline-flex items-center gap-3 text-[#dedcd3]/60">
                    <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
                    Where
                  </span>
                  <span className="text-right">Building 7, Dubai Design District</span>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-[#dedcd3]/60">Price</span>
                  <span className="font-serif text-4xl text-[#dedcd3]">AED {offer.price}</span>
                </div>
              </div>
            </div>

            <ul className="grid gap-px bg-[#dedcd3]/10 sm:grid-cols-3">
              {offer.items.map((item) => {
                const photo = photoFor(item.match);
                return (
                  <li key={item.name} className="bg-[#0e0e0e]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`${item.name} at SOYL`}
                          fill
                          sizes="(max-width: 639px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center font-serif text-5xl italic text-[#dedcd3]/25">
                          {offer.price}
                        </div>
                      )}
                    </div>
                    <div className="p-7 sm:p-8">
                      <h3 className="font-serif text-3xl leading-none">{item.name}</h3>
                      <p className="mt-3 text-sm leading-5 text-[#dedcd3]/65">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-12 lg:px-16">
              <ul className="grid gap-1 text-[11px] uppercase tracking-[0.16em] text-[#dedcd3]/55">
                {offer.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={restaurant.bookingHref}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics="reservation_click"
                  aria-label="Reserve a table on WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full bg-[#466e8b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dedcd3] transition hover:-translate-y-0.5 hover:bg-[#6d452a]"
                >
                  <MessageCircle aria-hidden="true" size={16} strokeWidth={1.8} />
                  <span>Reserve</span>
                  <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
                </a>
                <a
                  href={restaurant.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics="directions_click"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dedcd3]/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dedcd3] transition hover:-translate-y-0.5 hover:border-[#dedcd3] hover:bg-[#dedcd3] hover:text-[#0e0e0e]"
                >
                  <MapPin aria-hidden="true" size={16} strokeWidth={1.7} />
                  <span>Directions</span>
                  <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <footer className="flex flex-col gap-5 bg-[#0e0e0e] px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-[#dedcd3]/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>SOYL · Persian Grills &amp; Lebanese Favourites · Dubai Design District</span>
        <div className="flex gap-5">
          <a href="/" className="transition-colors hover:text-[#dedcd3]">
            Home
          </a>
          <a href={restaurant.menuPageHref} className="transition-colors hover:text-[#dedcd3]">
            Menu
          </a>
          <a href={restaurant.visitPageHref} className="transition-colors hover:text-[#dedcd3]">
            Visit
          </a>
        </div>
      </footer>
    </main>
  );
}
