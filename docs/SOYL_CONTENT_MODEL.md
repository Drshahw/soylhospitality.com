# SOYL Content Model

V1 uses small typed local content files. The aim is to keep updates fast and visible in source control without introducing a CMS or admin panel.

## Content files

```text
content/restaurant.ts     Address, hours, contact, booking, menu, social links
content/events.ts         Current events or the single fallback daily experience
content/featured-food.ts  Selected food categories and image references
content/culture.ts        Optional current collaboration or cultural feature
content/navigation.ts     Section labels and CTA destinations
```

## Data ownership

### `restaurant.ts`

Owns:

- Restaurant name and description
- Production URL
- Exact address and building/unit
- Phone and WhatsApp
- Opening hours and timezone
- Google Maps URL
- Qlub URL
- Booking URL or booking action
- Instagram profile URL/handle

### `events.ts`

Owns only meaningful current programming. If no current item exists, the UI should render the regular `Tonight at SOYL` fallback or hide the section according to the final product decision.

Never ship fake dates, empty cards, or `Coming soon` copy.

### `featured-food.ts`

Owns appetite-building content, not the full menu. Each item should have:

- Stable `id`
- Short display label
- Optional description
- Curated image reference
- Optional menu destination

### `culture.ts`

Owns one strong current feature at most. The section is omitted when no approved feature is active.

## Copy rules

Preserve the approved baseline voice:

- Come hungry. Stay a little longer.
- Middle Eastern roots. Mediterranean curiosity.
- Good food. Good company. No rush.
- Your table is waiting.

Write short, warm, confident sentences. Avoid generic luxury language, corporate storytelling, and unsupported claims.

## Asset naming

Rename only after confirming source ownership and selecting final crops. Use descriptive lowercase names:

```text
hero-dining-room.jpg
food-mezze-01.jpg
food-fire-01.jpg
space-olive-tree.jpg
space-terrace.jpg
visit-entrance.jpg
```

Do not overwrite the supplied WhatsApp files during asset preparation.
