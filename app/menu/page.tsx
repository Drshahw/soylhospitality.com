import { Navigation } from "@/components/navigation";
import { restaurant } from "@/content/restaurant";
import { getMenu, type MenuSection } from "@/lib/qlub-menu";
import { menuStructuredDataJson } from "@/lib/structured-data";
import { ArrowUpRight, MessageCircle, Utensils } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

// Re-read the menu from Qlub at most once an hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Menu — Persian & Lebanese Food in Dubai Design District",
  description:
    "The SOYL menu: Persian grill and kebabs, Lebanese grill, mezze, manakish, breakfast, specialty coffee and desserts in Dubai Design District (d3).",
  alternates: { canonical: "/menu" },
  openGraph: { url: "/menu" },
};

async function loadMenu(): Promise<MenuSection[] | null> {
  try {
    return await getMenu();
  } catch (error) {
    // Never fail a deploy because Qlub is down; at runtime, rethrow so ISR
    // keeps serving the last good version of the page instead.
    if (process.env.NEXT_PHASE === "phase-production-build") {
      console.error(error);
      return null;
    }
    throw error;
  }
}

const formatPrice = (price: number) =>
  `AED ${Number.isInteger(price) ? price : price.toFixed(2)}`;

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function MenuPage() {
  const sections = await loadMenu();

  return (
    <main id="top" className="min-h-screen bg-[#dedcd3]">
      {sections && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: menuStructuredDataJson(sections) }}
        />
      )}
      <Navigation />

      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
          SOYL · Dubai Design District
        </p>
        <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.84] tracking-[-0.08em] text-[#466e8b]">
          The menu.
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-6 text-black/65">
          Persian grill and Lebanese classics from a kitchen that likes a little fire: kebabs over
          an open flame, fresh manakish, mezze to share, breakfast, specialty coffee and dessert.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={restaurant.menuHref}
            target="_blank"
            rel="noreferrer"
            data-analytics="order_click"
            className="inline-flex items-center gap-2 rounded-full bg-[#466e8b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dedcd3] shadow-[0_8px_24px_rgb(70_110_139/20%)] transition hover:-translate-y-0.5 hover:bg-[#6d452a]"
          >
            <Utensils aria-hidden="true" size={16} strokeWidth={1.7} />
            <span>Order on Qlub</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </a>
          <a
            href={restaurant.bookingHref}
            target="_blank"
            rel="noreferrer"
            data-analytics="reservation_click"
            aria-label="Reserve a table on WhatsApp"
            className="inline-flex items-center gap-2 rounded-full border border-[#466e8b]/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#466e8b] transition hover:-translate-y-0.5 hover:border-[#466e8b] hover:bg-[#466e8b] hover:text-[#dedcd3]"
          >
            <MessageCircle aria-hidden="true" size={16} strokeWidth={1.8} />
            <span>Reserve</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </a>
        </div>
      </section>

      {sections ? (
        <>
          <nav
            aria-label="Menu sections"
            className="sticky top-[5.5rem] z-40 mx-auto max-w-[1440px] px-5 sm:px-10 lg:top-[6.5rem] lg:px-16"
          >
            <div className="flex gap-2 overflow-x-auto rounded-full border border-black/10 bg-[#dedcd3]/90 p-2 backdrop-blur-md [scrollbar-width:none]">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${slug(section.name)}`}
                  className="shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/60 transition-colors hover:bg-[#466e8b] hover:text-[#dedcd3]"
                >
                  {section.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="mx-auto grid max-w-[1440px] gap-20 px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
            {sections.map((section) => (
              <section
                key={section.id}
                id={slug(section.name)}
                aria-labelledby={`${slug(section.name)}-heading`}
                className="scroll-mt-44 grid gap-8 lg:grid-cols-[0.6fr_1.4fr]"
              >
                <h2
                  id={`${slug(section.name)}-heading`}
                  className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.06em] text-[#466e8b] lg:sticky lg:top-48 lg:self-start"
                >
                  {section.name}
                </h2>
                <ul className="grid gap-x-10 border-t border-black/20 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 border-b border-black/15 py-5"
                    >
                      {item.image && (
                        <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-black/5">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-serif text-xl leading-tight text-black/85 sm:text-2xl">
                            {item.name}
                          </h3>
                          <span className="shrink-0 text-[12px] font-semibold tracking-[0.04em] text-[#a24a24]">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        {item.description && (
                          <p className="mt-1.5 text-sm leading-5 text-black/60">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </>
      ) : (
        <section className="mx-auto max-w-[1440px] px-5 pb-28 sm:px-10 lg:px-16">
          <p className="max-w-md text-[15px] leading-6 text-black/65">
            Our menu is being updated. See today&apos;s full menu on Qlub.
          </p>
        </section>
      )}

      <footer className="flex flex-col gap-5 bg-[#0e0e0e] px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-[#dedcd3]/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>SOYL · Persian &amp; Lebanese cuisine · Dubai Design District</span>
        <div className="flex gap-5">
          <a href="/" className="transition-colors hover:text-[#dedcd3]">
            Home
          </a>
          <a href="#top" className="transition-colors hover:text-[#dedcd3]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
