import { Navigation } from "@/components/navigation";
import { events } from "@/content/events";
import { featuredFood } from "@/content/featured-food";
import { restaurant } from "@/content/restaurant";
import { ArrowUpRight, Camera, MapPin, MessageCircle, Phone, Star, Utensils } from "lucide-react";
import Image from "next/image";

const sectionLabel = (number: string, label: string) => (
  <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/55">
    <span className="text-[#a24a24]">{number}</span>
    <span className="h-px w-8 bg-black/25" />
    <span>{label}</span>
  </div>
);

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#dedcd3]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <div id="main-content">
        <section className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-10 pt-32 sm:px-10 sm:pb-14 lg:min-h-screen lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14 lg:px-16 lg:pt-40">
          <div className="flex flex-col justify-end pb-2 lg:pb-12">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
              SOYL · Dubai Design District
            </p>
            <h1 className="max-w-xl font-serif text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.08em] text-[#466e8b]">
              Come hungry.
            </h1>
            <p className="mt-6 max-w-md font-serif text-[clamp(2rem,4vw,4.1rem)] italic leading-[0.95] tracking-[-0.05em] text-[#466e8b]">
              Stay a little longer.
            </p>
            <div className="mt-9 grid max-w-sm grid-cols-2 gap-5 border-t border-black/20 pt-5 text-[13px] leading-5 text-black/65">
              <span>Middle Eastern roots.</span>
              <span>Mediterranean curiosity.</span>
            </div>
            <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-3">
              <a
                href={restaurant.bookingHref}
                target="_blank"
                rel="noreferrer"
                data-analytics="reservation_click"
                aria-label="Reserve a table on WhatsApp"
                className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full bg-[#466e8b] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#dedcd3] shadow-[0_8px_24px_rgb(70_110_139/20%)] transition hover:-translate-y-0.5 hover:bg-[#6d452a] sm:gap-2 sm:px-5 sm:text-[11px] sm:tracking-[0.12em]"
              >
                <MessageCircle aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>Reserve</span>
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
              </a>
              <a
                href={restaurant.menuHref}
                target="_blank"
                rel="noreferrer"
                data-analytics="menu_click"
                className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full border border-[#466e8b]/35 bg-[#dedcd3]/70 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#466e8b] transition hover:-translate-y-0.5 hover:border-[#466e8b] hover:bg-[#466e8b] hover:text-[#dedcd3] sm:gap-2 sm:px-5 sm:text-[11px] sm:tracking-[0.12em]"
              >
                <Utensils aria-hidden="true" size={16} strokeWidth={1.7} />
                <span>View menu</span>
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
              </a>
            </div>
          </div>
          <div className="relative min-h-[350px] overflow-hidden rounded-[1.5rem] bg-black sm:min-h-[620px] lg:min-h-[720px] lg:rounded-[2rem]">
            <Image
              src="/images/hero-team.webp"
              alt="A smiling SOYL team member holding a freshly prepared dish"
              fill
              preload
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7">
              <span className="max-w-[12rem] text-[11px] uppercase leading-4 tracking-[0.18em] text-white/80">
                Good food. Good company. No rush.
              </span>
              <span className="font-serif text-3xl italic">01</span>
            </div>
          </div>
        </section>

        {events.length > 0 && (
          <section
            id="now"
            className="bg-[#466e8b] px-5 py-20 text-[#dedcd3] sm:px-10 sm:py-28 lg:px-16"
          >
            <div className="mx-auto max-w-[1320px]">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dedcd3]/65">
                    <span className="text-[#a24a24]">02</span>
                    <span className="h-px w-8 bg-[#dedcd3]/40" />
                    <span>Now at SOYL</span>
                  </div>
                  <h2 className="max-w-lg font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.86] tracking-[-0.07em]">
                    Good food.
                    <br />
                    No rush.
                  </h2>
                </div>
                <div className="grid gap-3 border-t border-[#dedcd3]/30 pt-3">
                  {events.map((event) => (
                    <div
                      key={event.title}
                      className="grid gap-4 border-b border-[#dedcd3]/30 py-5 sm:grid-cols-[0.45fr_1fr_auto] sm:items-end"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#dedcd3]/65">
                        {event.day}
                      </span>
                      <div>
                        <h3 className="font-serif text-3xl leading-none">{event.title}</h3>
                        <p className="mt-2 text-sm text-[#dedcd3]/70">{event.detail}</p>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#dedcd3]/75">
                        {event.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="food" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
          {sectionLabel("02", "From the kitchen")}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <h2 className="max-w-lg font-serif text-[clamp(3.3rem,7vw,7rem)] leading-[0.85] tracking-[-0.08em] text-[#466e8b]">
                A little curiosity.
                <br />A lot of flavour.
              </h2>
              <p className="mt-8 max-w-sm text-[15px] leading-6 text-black/65">
                Middle Eastern roots, a Mediterranean point of view, and a kitchen that likes a
                little fire.
              </p>
              <a
                href={restaurant.menuHref}
                target="_blank"
                rel="noreferrer"
                data-analytics="menu_click"
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#466e8b] underline decoration-[#466e8b]/40 underline-offset-8"
              >
                <Utensils aria-hidden="true" size={15} strokeWidth={1.7} />
                <span>See the full menu</span>
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredFood.map((item) => (
                <article
                  key={item.number}
                  className="group relative min-h-[390px] overflow-hidden rounded-[1.5rem] bg-black text-white sm:min-h-[480px]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                    <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/70">
                      <span>{item.label}</span>
                      <span>{item.number}</span>
                    </div>
                    <h3 className="font-serif text-4xl leading-none">{item.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-5 text-white/75">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="space" className="bg-[#f4f1e9] px-5 py-24 sm:px-10 sm:py-36 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            {sectionLabel("03", "The space")}
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.83] tracking-[-0.08em] text-[#466e8b]">
                  A place to
                  <br />
                  settle in.
                </h2>
                <p className="mt-8 max-w-sm text-[15px] leading-6 text-black/65">
                  A table to gather around. A space to settle into. Stay for the details.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <figure className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:col-span-2">
                  <Image
                    src="/images/space-dining-room.webp"
                    alt="SOYL dining room with its central olive tree and patterned seating"
                    fill
                    sizes="(max-width: 639px) 100vw, 75vw"
                    className="object-cover"
                  />
                  <figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-black/50">
                    <span>Rooted in SOYL</span>
                    <span>Dubai Design District</span>
                  </figcaption>
                </figure>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/space-olive-tree-night.webp"
                    alt="SOYL's central olive tree beside the open kitchen at night"
                    fill
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-black/50">
                    Take your time
                  </figcaption>
                </figure>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:pt-20">
                  <Image
                    src="/images/space-lanterns.webp"
                    alt="Decorative lanterns and a traditional coffee service inside SOYL"
                    fill
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-black/50">
                    Stay for the details
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="visit"
          className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-10 sm:py-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-16"
        >
          {" "}
          <div>
            {sectionLabel("04", "Come find us")}
            <h2 className="max-w-3xl font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.08em] text-[#466e8b]">
              Your table
              <br />
              is waiting.
            </h2>
            <p className="mt-8 text-base text-black/65">{restaurant.location}</p>
          </div>
          <div className="grid gap-3 border-t border-black/20 pt-4 text-sm">
            <a
              href={restaurant.mapsHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="directions_click"
              className="flex items-center justify-between border-b border-black/15 py-4 transition-colors hover:text-[#466e8b]"
            >
              <span className="inline-flex items-center gap-3">
                <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
                Get directions
              </span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
            <a
              href={restaurant.phoneHref}
              data-analytics="call_click"
              className="flex items-center justify-between border-b border-black/15 py-4 transition-colors hover:text-[#466e8b]"
            >
              <span className="inline-flex items-center gap-3">
                <Phone aria-hidden="true" size={17} strokeWidth={1.7} />
                Call to book
              </span>
              <span>{restaurant.phone}</span>
            </a>
            <a
              href={restaurant.whatsappHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="whatsapp_click"
              className="flex items-center justify-between border-b border-black/15 py-4 transition-colors hover:text-[#466e8b]"
            >
              <span className="inline-flex items-center gap-3">
                <MessageCircle aria-hidden="true" size={17} strokeWidth={1.7} />
                Reserve on WhatsApp
              </span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
            <a
              href={restaurant.instagramHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="instagram_click"
              className="flex items-center justify-between border-b border-black/15 py-4 transition-colors hover:text-[#466e8b]"
            >
              <span className="inline-flex items-center gap-3">
                <Camera aria-hidden="true" size={17} strokeWidth={1.7} />
                Find us on Instagram
              </span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
            <a
              href={restaurant.reviewHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="review_click"
              className="flex items-center justify-between border-b border-black/15 py-4 transition-colors hover:text-[#a24a24]"
            >
              <span className="inline-flex items-center gap-3">
                <Star
                  aria-hidden="true"
                  className="text-[#a24a24]"
                  fill="currentColor"
                  size={17}
                  strokeWidth={1.7}
                />
                Leave a Google review
              </span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
          </div>
        </section>

        <section className="bg-[#0e0e0e] px-5 py-24 text-[#dedcd3] sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dedcd3]/55">
                SOYL · Dubai Design District
              </p>
              <h2 className="max-w-3xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.08em]">
                Come hungry.
                <br />
                Stay a little longer.
              </h2>
            </div>
            <a
              href={restaurant.bookingHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Reserve a table on WhatsApp"
              data-analytics="reservation_click"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#dedcd3] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0e0e0e] transition hover:-translate-y-0.5 hover:bg-[#466e8b] hover:text-[#dedcd3]"
            >
              <MessageCircle aria-hidden="true" size={17} strokeWidth={1.8} />
              <span>Reserve via WhatsApp</span>
              <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-5 bg-[#0e0e0e] px-5 pb-8 text-[10px] uppercase tracking-[0.18em] text-[#dedcd3]/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <span>SOYL · Middle Eastern cuisine</span>
          <div className="flex gap-5">
            <a
              href={restaurant.menuHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="menu_click"
              className="transition-colors hover:text-[#dedcd3]"
            >
              Menu ↗
            </a>
            <a
              href={restaurant.instagramHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="instagram_click"
              className="transition-colors hover:text-[#dedcd3]"
            >
              Instagram ↗
            </a>
            <a href="#top" className="transition-colors hover:text-[#dedcd3]">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
