import { Navigation } from "@/components/navigation";
import { getJournalArticle, journalArticles, type JournalArticle } from "@/content/journal";
import { restaurant } from "@/content/restaurant";
import { ArrowUpRight, MessageCircle, Utensils } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const siteUrl = "https://soylhospitality.com";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      type: "article",
      url: `/journal/${slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      authors: [article.author],
      ...(article.heroImage
        ? { images: [{ url: article.heroImage.src, alt: article.heroImage.alt }] }
        : {}),
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

function articleStructuredDataJson(article: JournalArticle): string {
  const url = `${siteUrl}/journal/${article.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: { "@type": "Organization", name: "SOYL" },
    publisher: { "@id": `${siteUrl}/#restaurant` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(article.heroImage ? { image: `${siteUrl}${article.heroImage.src}` } : {}),
  };
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) notFound();

  return (
    <main id="top" className="min-h-screen bg-[#dedcd3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleStructuredDataJson(article) }}
      />
      <Navigation />

      <article>
        <header className="mx-auto max-w-[1440px] px-5 pb-10 pt-32 sm:px-10 lg:px-16 lg:pt-40">
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
            <Link href="/journal" className="hover:text-[#a24a24]">
              Journal
            </Link>{" "}
            · <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
          </p>
          <h1 className="max-w-5xl font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.07em] text-[#466e8b]">
            {article.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-7 text-black/70">{article.intro}</p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
            By {article.author}
          </p>
        </header>

        {article.heroImage && (
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-black/5">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1440px) 1312px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="mx-auto grid max-w-[1440px] gap-24 px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          {article.sections.map((section, index) => (
            <section
              key={section.heading}
              aria-labelledby={`section-${index}-heading`}
              className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]"
            >
              <h2
                id={`section-${index}-heading`}
                className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.92] tracking-[-0.06em] text-[#466e8b] lg:sticky lg:top-32 lg:self-start"
              >
                {section.heading}
              </h2>
              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-5 max-w-2xl text-[16px] leading-7 text-black/70">
                    {paragraph}
                  </p>
                ))}
                {section.dishes && (
                  <div className="mt-8 border-t border-black/20">
                    {section.dishes.map((dish) => (
                      <div key={dish.name} className="border-b border-black/15 py-7">
                        <h3 className="font-serif text-2xl leading-tight text-black/85 sm:text-3xl">
                          {dish.name}
                        </h3>
                        {dish.alsoKnownAs && dish.alsoKnownAs.length > 0 && (
                          <p className="mt-1.5 text-[12px] italic text-black/50">
                            Also known as {dish.alsoKnownAs.join(", ")}
                          </p>
                        )}
                        <p className="mt-3 max-w-2xl text-[15px] leading-6 text-black/65">
                          {dish.description}
                        </p>
                        {dish.menuHref && (
                          <Link
                            href={dish.menuHref}
                            className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a24a24] transition-colors hover:text-[#466e8b]"
                          >
                            On our menu →
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      <section
        aria-labelledby="cta-heading"
        className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-10 sm:pb-32 lg:px-16"
      >
        <div className="rounded-[1.5rem] bg-[#466e8b]/10 p-8 sm:p-12">
          <h2
            id="cta-heading"
            className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.92] tracking-[-0.06em] text-[#466e8b]"
          >
            Come hungry.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-6 text-black/65">
            Open every day, {restaurant.hours.display}, at Building 7, Dubai Design District (d3).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={restaurant.menuPageHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#466e8b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dedcd3] shadow-[0_8px_24px_rgb(70_110_139/20%)] transition hover:-translate-y-0.5 hover:bg-[#6d452a]"
            >
              <Utensils aria-hidden="true" size={16} strokeWidth={1.7} />
              <span>See the full menu</span>
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
            </Link>
            <a
              href={restaurant.bookingHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="reservation_click"
              aria-label="Reserve a table on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full border border-[#466e8b]/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#466e8b] transition hover:-translate-y-0.5 hover:border-[#466e8b] hover:bg-[#466e8b] hover:text-[#dedcd3]"
            >
              <MessageCircle aria-hidden="true" size={16} strokeWidth={1.8} />
              <span>Reserve on WhatsApp</span>
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-5 bg-[#0e0e0e] px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-[#dedcd3]/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>SOYL · Persian &amp; Lebanese cuisine · Dubai Design District</span>
        <div className="flex gap-5">
          <a href="/" className="transition-colors hover:text-[#dedcd3]">
            Home
          </a>
          <a href="/journal" className="transition-colors hover:text-[#dedcd3]">
            Journal
          </a>
          <a href="#top" className="transition-colors hover:text-[#dedcd3]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
