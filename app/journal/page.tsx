import { Navigation } from "@/components/navigation";
import { restaurant } from "@/content/restaurant";
import { journalArticles } from "@/content/journal";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal — Persian & Lebanese Food Stories from d3",
  description:
    "Guides and stories from the SOYL kitchen: Persian grill, Lebanese favourites and what to order at our restaurant in Dubai Design District (d3).",
  alternates: { canonical: "/journal" },
  openGraph: { url: "/journal" },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function JournalPage() {
  const articles = [...journalArticles].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  return (
    <main id="top" className="min-h-screen bg-[#dedcd3]">
      <Navigation />

      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
          SOYL · Dubai Design District
        </p>
        <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.84] tracking-[-0.08em] text-[#466e8b]">
          Journal.
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-6 text-black/65">
          Guides and stories from the SOYL kitchen: Persian grill, Lebanese favourites and the
          dishes behind them.
        </p>
      </section>

      <section
        aria-label="Articles"
        className="mx-auto max-w-[1440px] px-5 pb-24 pt-10 sm:px-10 sm:pb-32 lg:px-16"
      >
        <ul className="border-t border-black/20">
          {articles.map((article) => (
            <li key={article.slug} className="border-b border-black/15">
              <Link
                href={`/journal/${article.slug}`}
                className="group grid gap-4 py-8 lg:grid-cols-[0.4fr_1.6fr] lg:gap-10"
              >
                <time
                  dateTime={article.datePublished}
                  className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#a24a24]"
                >
                  {formatDate(article.datePublished)}
                </time>
                <div>
                  <h2 className="max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1] tracking-[-0.04em] text-black/85 transition-colors group-hover:text-[#466e8b]">
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-6 text-black/65">
                    {article.description}
                  </p>
                  <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#466e8b]">
                    Read →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
