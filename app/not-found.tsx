import { restaurant } from "@/content/restaurant";
import { ArrowUpRight, Utensils } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — SOYL",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[#dedcd3] px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1320px]">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#466e8b]">
          SOYL · Error 404
        </p>
        <h1 className="max-w-3xl font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.84] tracking-[-0.08em] text-[#466e8b]">
          This table isn&apos;t set.
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-6 text-black/65">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back to the good
          part.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#466e8b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dedcd3] shadow-[0_8px_24px_rgb(70_110_139/20%)] transition hover:-translate-y-0.5 hover:bg-[#6d452a]"
          >
            <span>Back home</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </Link>
          <a
            href={restaurant.menuHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#466e8b]/35 bg-[#dedcd3]/70 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#466e8b] transition hover:-translate-y-0.5 hover:border-[#466e8b] hover:bg-[#466e8b] hover:text-[#dedcd3]"
          >
            <Utensils aria-hidden="true" size={16} strokeWidth={1.7} />
            <span>View menu</span>
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </main>
  );
}
