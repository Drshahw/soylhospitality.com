# SOYL Website

SOYL's new mobile-first, single-page restaurant website for Dubai Design District.

## Project status

The first implementation slice is in place. It includes the mobile-first single-page shell, responsive navigation, hero, Now at SOYL, food, space, visit, and final reservation CTA sections.

## Source references

- `docs/reference/product/SOYL_WEBSITE_PRD_EN.md` - product requirements and launch acceptance criteria
- `docs/reference/brand/SOYL Brand Book.pdf` - logo, typography, color, pattern, and icon guidance
- `docs/reference/photography/` - supplied restaurant photography references

## Planned structure

```text
app/                 Route entrypoints, metadata, global styles
components/          Reusable page sections and interface primitives
content/              Typed restaurant, event, and featured-food content
lib/                  Time, analytics, external integrations, and utilities
public/images/        Curated site photography and exported brand assets
public/video/         Optional optimized video assets
public/fonts/         Approved webfont files, when licensed and supplied
public/icons/         Brand and interface icons
docs/                 Product, content, asset, and launch documentation
scripts/              Asset and validation helpers
```

## Local development

```text
npm run dev
npm run lint
npm run build
```

## Next implementation step

Review the first local preview, confirm the launch data listed in `docs/SOYL_LAUNCH_CHECKLIST.md`, then continue with verified contact data, image optimization, structured data, analytics, and the conditional live-content sections.
