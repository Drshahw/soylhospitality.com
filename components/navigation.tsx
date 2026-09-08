"use client";

import { useState } from "react";
import { ArrowUpRight, Menu as MenuIcon, MessageCircle, Utensils } from "lucide-react";
import { navigationItems, restaurant } from "@/content/restaurant";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 lg:px-12 lg:pt-6">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-black/10 bg-[#dedcd3]/90 px-4 py-3 shadow-[0_12px_40px_rgb(14_14_14/6%)] backdrop-blur-md sm:px-6">
        <a
          href="#top"
          aria-label="SOYL home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2"
        >
          <span className="font-serif text-[1.9rem] leading-none tracking-[-0.12em] text-[#466e8b] transition-transform group-hover:scale-[1.02]">
            SOYL
          </span>
          <span className="hidden border-l border-black/20 pl-2 text-[9px] uppercase tracking-[0.18em] text-black/55 sm:inline">
            Middle Eastern cuisine
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/65 transition-colors hover:text-[#466e8b]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={restaurant.menuHref}
            target="_blank"
            rel="noreferrer"
            data-analytics="menu_click"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-black/65 transition-colors hover:text-[#466e8b]"
          >
            <span>View menu</span>
            <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.8} />
          </a>
          <a
            href={restaurant.bookingHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Reserve a table on WhatsApp"
            data-analytics="reservation_click"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#466e8b] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#dedcd3] shadow-[0_8px_24px_rgb(70_110_139/20%)] transition hover:-translate-y-0.5 hover:bg-[#6d452a]"
          >
            <MessageCircle aria-hidden="true" size={15} strokeWidth={1.8} />
            <span>Reserve via WhatsApp</span>
            <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.8} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] lg:hidden"
        >
          <MenuIcon aria-hidden="true" size={15} strokeWidth={1.8} />
          <span>{isOpen ? "Close" : "Explore"}</span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-2 max-w-[1440px] rounded-[1.5rem] border border-black/10 bg-[#dedcd3] p-5 shadow-xl lg:hidden"
        >
          <div className="grid gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-black/10 py-3 font-serif text-3xl text-[#466e8b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={restaurant.menuHref}
              target="_blank"
              rel="noreferrer"
              data-analytics="menu_click"
              className="border-b border-black/10 py-3 font-serif text-3xl text-[#466e8b]"
            >
              <span className="inline-flex items-center gap-2">
                <Utensils aria-hidden="true" size={18} strokeWidth={1.7} />
                View menu
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.7} />
              </span>
            </a>
            <a
              href={restaurant.bookingHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Reserve a table on WhatsApp"
              onClick={() => setIsOpen(false)}
              data-analytics="reservation_click"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#466e8b] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#dedcd3]"
            >
              <MessageCircle aria-hidden="true" size={16} strokeWidth={1.8} />
              <span>Reserve via WhatsApp</span>
              <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
