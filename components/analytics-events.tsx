"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }
}

const MAX_TEXT_LENGTH = 100;

function getHref(element: Element): string {
  if (element instanceof HTMLAnchorElement) {
    return element.href;
  }
  return element.getAttribute("href") ?? "";
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest("[data-analytics]");
      if (!element) return;

      const name = element.getAttribute("data-analytics")?.trim();
      if (!name) return;

      const href = getHref(element);
      const text = (element.textContent ?? "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, MAX_TEXT_LENGTH);

      window.gtag?.("event", name, {
        link_url: href,
        link_text: text,
        event_category: "engagement",
        transport_type: "beacon",
      });

      track(name, { href });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
