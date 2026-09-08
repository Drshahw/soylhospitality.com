# SOYL Site Foundation

## 1. Product shape

SOYL V1 is a single-page, mobile-first restaurant website. It should feel like an invitation into the restaurant rather than a catalogue of information.

The experience is organized around three ideas:

- **Food** — Middle Eastern roots with Iranian and Lebanese influence, interpreted with Mediterranean curiosity.
- **Space** — a warm, design-conscious place where guests can stay and gather.
- **Culture** — an active part of Dubai Design District when there is real programming to show.

## 2. Primary outcomes

The site must make these actions easy, in priority order:

1. Book or contact SOYL about a table.
2. Open the live Qlub menu.
3. Get directions.
4. Call or WhatsApp.
5. Visit Instagram.
6. Understand what is happening at SOYL now.

## 3. Page architecture

V1 remains one route with anchor sections:

```text
Navigation
Hero
Now at SOYL
The SOYL
From the Kitchen
The Space
SOYL x Culture (conditional)
SOYL, Lately (Instagram)
Come Find Us
Final reservation CTA
Footer
```

Future routes are explicitly deferred: `/events`, `/private-dining`, `/journal`, and `/menu`.

## 4. Visual direction

Use the supplied photography and brand system as the source of truth. The visual language is warm, earthy, architectural, contemporary, relaxed, editorial, human, and connected to d3.

Brand tokens derived from the Brand Book:

| Token         | Value     | Use                                           |
| ------------- | --------- | --------------------------------------------- |
| `soyl-cream`  | `#DEDCD3` | Main light surface                            |
| `soyl-brown`  | `#6D452A` | Logo, headings, warm accents                  |
| `soyl-blue`   | `#466E8B` | Secondary accent and selected icon treatments |
| `soyl-orange` | `#A24A24` | Sparing accent only                           |
| `soyl-black`  | `#0E0E0E` | Dark surface and high-contrast text           |
| `soyl-white`  | `#FFFFFF` | Reverse type and clean surfaces               |

The PDF displays the cream swatch as `#DEDCD3`; verify the value again from the source artwork before coding the final token.

Typography direction:

- `Tavira` for major display headlines and editorial moments, if the webfont license/file is supplied.
- A restrained modern sans-serif for navigation, buttons, metadata, and operational information.
- The SOYL wordmark must use supplied artwork or a correctly licensed brand asset; do not recreate it with ordinary text.

Motion should be quiet: image reveals, crossfades, restrained parallax, smooth anchors, and reduced-motion support. No WebGL, custom cursor, or continuous decorative animation in V1.

## 5. Technical direction

- Next.js App Router + TypeScript + Tailwind CSS.
- Server Components by default.
- Client Components only for time-aware hero state, mobile navigation, analytics hooks, and Instagram behavior where required.
- Typed local content; no CMS, database, authentication, or custom reservation engine in V1.
- Qlub remains the operational menu source of truth.
- Instagram credentials, if integrated, remain server-only and responses are cached/revalidated.
- Core photography must work even if Instagram or another external service fails.

## 6. Quality gates

- Mobile layout is the primary design surface.
- Hero actions are visible immediately.
- No horizontal overflow or layout shift from the hero.
- Real photography is used for hero, food, space, and visit contexts.
- Empty event/culture states hide cleanly instead of showing filler.
- Contact data is centralized and verified before launch.
- Metadata, sitemap, robots, Restaurant structured data, analytics, keyboard access, focus states, contrast, alt text, and reduced motion are included before release.
