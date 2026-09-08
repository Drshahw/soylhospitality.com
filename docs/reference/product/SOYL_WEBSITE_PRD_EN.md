# SOYL Website — Product Requirements Document

**Version:** 1.1  
**Status:** Implementation Baseline  
**Project:** SOYL Restaurant Website  
**Production Domain:** https://soylhospitality.com/  
**Current Design/Content Preview:** https://soyl-hospitality-preview.stahamtan.chatgpt.site/  
**Primary Location:** Dubai Design District (d3), Dubai, UAE  
**Product Type:** Single-page restaurant website  
**Primary Platform:** Mobile web  
**Stack:** Next.js + TypeScript + Tailwind CSS + Vercel

---

## 1. Product Summary

SOYL needs a complete replacement of its current production website with a modern, high-quality, single-page digital experience.

The website should not behave like a traditional corporate restaurant website with multiple shallow pages. It should work as a digital extension of the restaurant itself: warm, visual, current, easy to navigate, and optimized around a small number of high-value guest actions.

The website must quickly answer:

1. What is SOYL?
2. What does it feel like to be there?
3. What kind of food is served?
4. What is happening at SOYL now?
5. Where can I see the full menu?
6. How do I book?
7. Where is the restaurant?
8. How do I call, message, or get directions?

The primary design principle is:

> **Show the experience. Reduce the friction. Keep SOYL alive.**

---

## 2. Existing Preview — Content Baseline

The current preview already establishes a much stronger voice than the existing production site and should be treated as the **content and tone baseline**, not discarded.

Source:

https://soyl-hospitality-preview.stahamtan.chatgpt.site/

### 2.1 Copy worth preserving

The following short lines capture the desired tone and should be considered approved or near-approved baseline copy:

> **Come hungry. Stay a little longer.**

> **Middle Eastern roots. Mediterranean curiosity.**

> **Good food. Good company. No rush.**

> **Your table is waiting.**

These lines are simple, conversational, human, and noticeably better than generic luxury-restaurant language.

### 2.2 Tone to preserve

The preview establishes the correct voice:

- Warm rather than formal
- Confident rather than promotional
- Contemporary rather than “luxury cliché”
- Short sentences
- Hospitality-focused
- Relaxed
- Slightly playful
- Minimal marketing jargon
- No long corporate story
- No exaggerated claims

Future copy should remain consistent with this voice.

### 2.3 Existing visual/content assets represented in the preview

The preview already demonstrates useful content categories that should remain part of the final experience:

- A SOYL team member presenting food
- Hero food imagery
- The light-filled dining room
- The central olive tree / signature interior feature
- Open-kitchen context
- Grilled food / signature dishes
- Outdoor terrace imagery
- Restaurant location and contact information

The final implementation should build on these assets rather than replacing them with generic stock imagery.

---

## 3. Product Vision

SOYL should feel like a living part of Dubai Design District.

The website should communicate three connected dimensions:

### Food

Middle Eastern cuisine with Iranian and Lebanese roots, interpreted in a contemporary way.

### Space

A relaxed, design-conscious place where guests can stay rather than simply eat and leave.

### Culture

A venue connected to the creative character of d3 through events, collaborations, music, art, and community activity when relevant.

The website should sell the combination of these three dimensions, not merely the menu.

---

## 4. Core Product Decision: One Page

Version 1 will be intentionally **single-page**.

All primary content will live on the homepage.

Navigation will use section anchors plus external actions.

Separate content pages are not required for launch.

Possible future routes may include:

```text
/events
/private-dining
/journal
/menu
```

but they are not part of Version 1.

---

## 5. Primary User Actions

The website should optimize for the following actions, in this order:

1. **Book / contact for a table**
2. **View the menu**
3. **Get directions**
4. **Call**
5. **WhatsApp**
6. **Visit Instagram**
7. **Understand what is happening at SOYL**

Every design decision should make these actions easier rather than adding decorative complexity.

---

## 6. Proposed Information Architecture

```text
01. Navigation
02. Dynamic Hero
03. Now at SOYL
04. Brand / The SOYL
05. From the Kitchen
06. The Space
07. SOYL × Culture
08. SOYL, Lately — Instagram
09. Come Find Us
10. Final Reservation CTA
11. Footer
```

Not every optional section must be shown at all times.

If there is no meaningful current Culture or Event content, the relevant section should disappear cleanly rather than display filler.

---

# 7. Navigation

The navigation should be minimal.

Recommended structure:

```text
SOYL

NOW
FOOD
SPACE
VISIT

MENU ↗
BOOK
```

### Requirements

- Sticky or intelligently semi-sticky
- Strong mobile behavior
- Smooth anchor navigation
- Minimal visual weight
- `MENU` opens the external Qlub menu
- `BOOK` triggers the active reservation/contact flow
- The SOYL wordmark/logo returns to the top
- Mobile navigation must never cover key actions unnecessarily

---

# 8. Hero

The Hero is the highest-priority section of the website.

The current preview copy is strong enough to remain the default baseline:

> **Come hungry. Stay a little longer.**

Supporting line:

> **Middle Eastern roots. Mediterranean curiosity.**

Primary actions:

```text
BOOK A TABLE
VIEW THE MENU
```

The preview's appetite-led language can be retained for secondary menu links.

---

## 8.1 Day / Night Enhancement

The final site should support a subtle time-aware experience based on Dubai local time.

This is an enhancement to the existing brand concept, not a reason to replace the successful baseline copy.

### Day mode

Possible characteristics:

- Light interior or terrace imagery
- Brighter palette
- Lunch / daytime atmosphere
- Calm, airy visual treatment

### Night mode

Possible characteristics:

- Warmer or darker imagery
- Dinner atmosphere
- People, light, music, social context
- Darker supporting theme

Optional night copy may include:

```text
SOYL AFTER DARK
```

but it should not replace the main brand voice unless the final design demonstrates a clear improvement.

### Technical requirements

- Determine time using Dubai timezone
- Avoid visible hydration flicker
- Provide deterministic fallback
- Do not require a database
- Do not make core content inaccessible if JavaScript fails

---

# 9. Now at SOYL

A traditional static Events page is not required.

Instead, use a living section called:

```text
NOW AT SOYL
```

Purpose:

- Give the site a reason to feel current
- Promote active events or experiences
- Surface lunch, dinner, collaborations, music, or special programming
- Encourage repeat visits to the website

Example structure:

```text
NOW AT SOYL

THU
Dinner Session
7 PM → Late

FRI
SOYL Nights
Dinner / Music / Drinks

SAT
Slow Lunch
12 PM → 4 PM
```

If there is no special event:

```text
TONIGHT AT SOYL

Dinner
6 PM → Close
```

### V1 content source

Use a simple typed content file:

```text
content/events.ts
```

No CMS is required.

### Empty-state rule

Never show:

- “Coming soon”
- Empty cards
- Fake events
- Placeholder dates

If there is no meaningful content, reduce or hide the section.

---

# 10. The SOYL / Brand Statement

Do not create a traditional long “About Us” section.

The purpose is to explain SOYL emotionally and quickly.

The current preview already uses the right approach.

Recommended content length:

- One headline
- Two or three short lines
- Optional paragraph of no more than approximately 50–70 words

The narrative should reinforce:

- Middle Eastern roots
- Iranian and Lebanese influence
- Mediterranean curiosity
- Contemporary Dubai
- Hospitality
- Gathering
- d3 creative context

Avoid generic language such as:

- “culinary journey”
- “unforgettable gastronomic experience”
- “where tradition meets innovation”
- “luxurious dining destination”

unless there is a specific, defensible reason.

---

# 11. From the Kitchen

The website will **not duplicate the full menu**.

The operational menu remains on Qlub.

The website should instead create appetite and communicate the character of the food.

Possible structure:

```text
FROM THE KITCHEN

01 — MEZZE
02 — FIRE
03 — GRILL
04 — RICE
05 — SWEET
```

Exact categories should be derived from the real menu and available photography.

Each feature may include:

- Strong image
- Short category or dish title
- Optional one-line description
- Subtle scroll transition

Primary CTA:

```text
SEE THE FULL MENU ↗
```

---

# 12. Qlub Menu Integration

The preview already links to the live Qlub menu.

Current menu destination observed in the preview:

```text
https://app.qlub.io/qr/ae/soyl-d3/422/_/_/0b31d40521/qsr/E2BYj?lang=en&qsr=dm
```

### Requirements

- Qlub remains the operational source of truth for the menu
- Do not rebuild the full menu inside the site in V1
- Menu opens in a new tab
- Menu link appears in:
  - Navigation
  - Hero
  - From the Kitchen
  - Final CTA
- Track all menu clicks
- External-link behavior must be accessible and secure

### Non-goal

No custom menu CMS or restaurant menu database in V1.

---

# 13. The Space

The preview already has strong language around staying, gathering, and settling in. The final design should keep that idea.

The section should communicate that SOYL is somewhere to spend time, not only somewhere to consume a meal.

Visual themes:

- Signature central olive tree
- Natural light
- Open kitchen
- Seating details
- Pattern and material
- Terrace
- Tables with guests
- Evening atmosphere
- Entrance / exterior

### Layout principles

Do not use a generic equal-size Instagram grid.

Prefer:

- Editorial image composition
- Large image moments
- Mixed aspect ratios
- Strong negative space
- Small amounts of copy
- Subtle reveal or parallax

---

# 14. SOYL × Culture

SOYL's location in Dubai Design District gives the brand an opportunity beyond food.

This section should only exist when there is real programming or collaboration to show.

Possible content:

- Music
- Art
- Fashion
- Design
- Photography
- Ceramics
- Chef collaborations
- Community events
- d3 partnerships
- Private cultural dinners

Example:

```text
SOYL × CULTURE

THIS MONTH

MUSIC
Current collaboration

TABLE
Current experience
```

### Rule

One strong current feature is better than a calendar of weak content.

If no current item exists, hide the section.

---

# 15. SOYL, Lately — Instagram Integration

Instagram should be integrated as a living content layer, but it should **not look like a third-party Instagram widget**.

Working Instagram profile from the preview:

```text
https://www.instagram.com/soylrestaurant/
```

Display label:

```text
@soylrestaurant
```

Recommended section title:

```text
SOYL, LATELY.
```

### Content

Display approximately 4–6 recent media items.

Possible composition:

- One larger image
- Several smaller images
- Optional recent Reel if technically and visually appropriate

CTA:

```text
FOLLOW SOYL ↗
```

---

## 15.1 Instagram Technical Architecture

Preferred flow:

```text
Instagram Professional Account
        ↓
Official Meta / Instagram API
        ↓
Next.js server-side integration
        ↓
Cache / revalidation
        ↓
SOYL homepage
```

### Requirements

- Access token stored only in server environment variables
- No token exposed to browser JavaScript
- Server-side fetching
- Cache responses
- Revalidate periodically rather than request Instagram on every page view
- Graceful failure state
- Instagram outage must not break the page
- Core site photography must remain independent of Instagram

### Suggested refresh behavior

A refresh interval between approximately 1 and 6 hours is sufficient.

Exact interval can be selected during implementation.

---

# 16. Come Find Us

This is the operational information section.

Recommended section language:

```text
COME ON OVER
```

and/or the existing baseline:

> **Your table is waiting.**

Required information:

- SOYL
- Dubai Design District
- Building / ground-floor details
- Opening hours
- Phone
- WhatsApp if available
- Directions
- Parking guidance if genuinely useful

Primary actions:

```text
GET DIRECTIONS
CALL
WHATSAPP
```

### Visual recommendation

Use a recognizable real image of:

- The entrance
- Exterior signage
- Terrace/exterior context

This helps first-time visitors identify the venue when arriving.

---

# 17. Contact Data Verification Requirement

Contact information found across public sources is not fully consistent.

The preview currently displays:

```text
+971 4 244 1331
```

Dubai Design District's public directory has also listed a different contact number.

Therefore, before production launch the project owner must explicitly confirm:

- Primary public phone number
- WhatsApp number
- Exact address/unit
- Current opening hours
- Preferred booking method
- Google Maps destination
- Instagram handle

The implementation should keep these values centralized in one config/content file.

Recommended:

```text
content/restaurant.ts
```

---

# 18. Reservation Flow

`BOOK` must be one of the two strongest site actions.

The final booking destination must be confirmed before launch.

Possible implementation:

- External reservation platform
- Direct WhatsApp reservation
- Phone call
- Existing booking URL

### Required placements

- Navigation
- Hero
- Final CTA

Potential optional placement:

- Sticky mobile action bar

### Important

The current preview appears to use an on-page visit/contact destination for booking. Before launch, confirm whether this is intentional or whether a dedicated external booking destination exists.

---

# 19. Final CTA

The final section should be extremely simple.

Recommended baseline:

> **Your table is waiting.**

Actions:

```text
BOOK A TABLE
VIEW THE MENU
```

Secondary links:

```text
INSTAGRAM
DIRECTIONS
WHATSAPP
```

---

# 20. Footer

Keep the footer minimal.

Include as needed:

- Instagram
- Directions
- Phone
- WhatsApp
- Copyright
- Privacy
- Terms

Do not turn the footer into a sitemap for pages that do not exist.

---

# 21. Visual Direction

The visual direction should emerge from SOYL's actual space and existing photography.

Keywords:

```text
Warm
Earthy
Architectural
Contemporary
Relaxed
Editorial
Human
Design-conscious
Dubai / d3
```

Suggested conceptual palette:

- Warm cream
- Sand
- Charcoal
- Deep olive
- Terracotta accent

Exact colors should be selected during design based on real photography and brand assets.

### Avoid

- Generic black-and-gold luxury restaurant design
- Over-designed cards
- Excess glassmorphism
- Stock food photography
- Excess gradients
- Corporate hospitality layouts
- Dense text
- Decorative UI without purpose

---

# 22. Typography

Recommended system:

- Characterful editorial serif or display type for major headlines
- Modern sans-serif for navigation, buttons, details, and functional information

Typography should contribute heavily to brand personality because the site intentionally uses little copy.

---

# 23. Motion Design

Motion should create atmosphere without turning the website into an agency demo.

Allowed:

- Gentle image reveal
- Crossfade
- Very subtle parallax
- Scroll-based text entrances
- Day/night visual transition
- Smooth section transitions
- Small hover states on desktop

Avoid in V1:

- Three.js
- Heavy WebGL
- 3D food models
- Custom cursor gimmicks
- Continuous decorative animation
- Motion that compromises mobile performance

Always support:

```text
prefers-reduced-motion
```

---

# 24. Technical Stack

Required:

```text
Next.js
App Router
TypeScript
Tailwind CSS
Vercel
```

Prefer:

- Server Components by default
- Client Components only where interaction requires them
- Native browser capabilities before adding libraries
- Small dependency surface

Not required for V1:

```text
Supabase
Railway
Database
Authentication
Custom backend
CMS
Admin panel
```

---

# 25. Suggested Repository Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts

components/
  navigation.tsx
  dynamic-hero.tsx
  now-at-soyl.tsx
  brand-story.tsx
  from-the-kitchen.tsx
  the-space.tsx
  soyl-culture.tsx
  instagram-feed.tsx
  visit.tsx
  reservation-cta.tsx
  footer.tsx

content/
  restaurant.ts
  events.ts
  featured-food.ts

lib/
  dubai-time.ts
  instagram.ts
  analytics.ts

public/
  images/
  video/
```

This is a guideline, not a constraint.

---

# 26. Content Management

No CMS in Version 1.

Use typed local content.

Example:

```text
content/restaurant.ts
content/events.ts
content/featured-food.ts
```

This is preferable while content volume is low because it provides:

- Simpler code
- Fewer failure points
- Faster development
- No extra platform
- No admin authentication
- Easy source control

### Add a CMS later only if:

- Non-technical staff need to edit content frequently
- Events change several times per week
- Editorial content becomes substantial
- Multiple locations are introduced

---

# 27. Photography

Photography is a core product requirement, not decoration.

Preferred asset set:

- 1–2 hero assets
- 6–8 food images
- 3–5 interior images
- 2–4 guest / people images
- 2–3 evening images
- 1 recognizable entrance/exterior image
- 2–3 close detail images

The existing preview images may be used where source quality is sufficient.

Instagram media should supplement, not replace, the curated core photography.

---

# 28. Video

Hero video is optional.

Use only if there is genuinely strong footage.

Requirements:

- Short loop
- No autoplay audio
- Poster image
- Aggressive compression
- Mobile fallback
- Reduced-motion fallback
- Must not materially damage LCP

A strong still image is preferable to mediocre video.

---

# 29. Performance

The site must remain fast despite large photography.

Requirements:

- `next/image`
- Responsive image sizes
- AVIF/WebP where appropriate
- Lazy-load below-the-fold images
- Optimize/preload only critical hero assets
- Font optimization
- Minimal client JavaScript
- Avoid unnecessary animation libraries
- Cache external API responses

Target experience should aim for good Core Web Vitals on real mobile devices.

Performance takes priority over decorative effects.

---

# 30. Mobile-First Requirements

The design process starts with mobile.

Requirements:

- Hero actions visible without confusion
- Large touch targets
- Clean mobile navigation
- No horizontal page overflow
- Readable typography
- Easy Qlub access
- Easy booking
- One-tap directions
- One-tap call / WhatsApp
- Fast image delivery
- No hover-dependent information

Desktop should expand the mobile concept rather than redefine it.

---

# 31. SEO

Even as a single-page website, technical and local SEO must be implemented correctly.

Required:

- HTML title
- Meta description
- Canonical URL
- Open Graph metadata
- Social preview image
- Sitemap
- robots.txt
- Semantic HTML
- Descriptive image alt text

---

# 32. Structured Data

Implement appropriate Restaurant structured data.

Use verified information only.

Potential fields:

```text
name
url
image
telephone
address
openingHoursSpecification
servesCuisine
sameAs
hasMap
priceRange
```

Do not fabricate missing values.

---

# 33. Local SEO

The content should naturally make the restaurant relevant to searches involving:

- SOYL Dubai
- SOYL Restaurant
- Dubai Design District restaurant
- d3 restaurant
- Middle Eastern restaurant in Dubai Design District
- Iranian / Lebanese influenced dining in Dubai
- contemporary Middle Eastern dining in Dubai

Do not keyword-stuff visible copy.

Brand voice takes priority.

---

# 34. Analytics

Track meaningful conversion actions from launch.

Minimum event set:

```text
reservation_click
menu_click
directions_click
whatsapp_click
call_click
instagram_click
```

Optional:

```text
event_click
culture_click
```

If GA4 is selected, the implementation should document the exact event names and trigger locations.

---

# 35. Accessibility

Minimum requirements:

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Useful alt text
- Adequate contrast
- Correct button/link semantics
- Large touch targets
- Reduced-motion support
- No essential content available only through animation

---

# 36. Security

- Keep API secrets in Vercel environment variables
- Never expose Instagram tokens client-side
- No secrets committed to Git
- Use safe external-link attributes where appropriate
- Keep dependencies current
- Avoid unsafe HTML injection
- Store no personal guest data in V1

---

# 37. Deployment

Hosting:

```text
Vercel
```

Recommended flow:

```text
feature branch
      ↓
Pull Request
      ↓
Vercel Preview
      ↓
Review
      ↓
main
      ↓
Production
```

Every meaningful UI change should be reviewed through a preview deployment before production.

---

# 38. Non-Goals — Version 1

Do not add the following unless separately approved:

- Custom online ordering
- Payment processing
- User login
- Loyalty program
- Full menu CMS
- Database
- Admin panel
- Blog
- Large journal/editorial system
- Custom reservation engine
- E-commerce
- Multiple restaurant locations
- Heavy 3D / WebGL
- Complex animation framework
- AI chatbot
- Generic newsletter pop-up

---

# 39. Implementation Priorities

Order of importance:

```text
1. Brand voice
2. Photography
3. Mobile UX
4. Reservation/contact
5. Menu access
6. Location
7. Performance
8. Current/live content
9. Instagram
10. Motion
11. Extra features
```

A feature should not ship simply because it is technically possible.

---

# 40. Suggested Delivery Phases

## Phase 1 — Foundation

- Next.js setup
- Global design system
- Content configuration
- Navigation
- Hero
- Visit/contact
- Qlub integration
- Mobile foundations

## Phase 2 — Brand Experience

- The SOYL
- From the Kitchen
- The Space
- Photography implementation
- Final CTA
- Motion polish

## Phase 3 — Living Content

- Now at SOYL
- Instagram integration
- SOYL × Culture
- Day/night enhancement

## Phase 4 — Launch Quality

- SEO
- Structured data
- Analytics
- Accessibility
- Performance optimization
- Responsive QA
- Real-device testing
- Content verification
- Production deployment

---

# 41. Pre-Launch Data Checklist

The following values must be confirmed by the project owner before production deployment:

```text
[ ] Final Qlub URL
[ ] Final booking method / URL
[ ] Primary phone
[ ] WhatsApp number
[ ] Exact address
[ ] Building / unit
[ ] Opening hours
[ ] Google Maps link
[ ] Instagram handle
[ ] Reservation policy if relevant
[ ] Parking guidance if relevant
```

Do not infer these values from third-party listings if first-party confirmation is available.

---

# 42. Definition of Done

Version 1 is complete when:

- [ ] The production experience is a polished single-page site.
- [ ] Mobile and desktop layouts are complete.
- [ ] Existing preview brand voice is preserved or improved, not replaced by generic copy.
- [ ] Hero has strong real SOYL imagery.
- [ ] Day/night behavior works if included for launch.
- [ ] Qlub menu works from every intended CTA.
- [ ] Booking/contact flow works.
- [ ] `Now at SOYL` is editable and has a clean empty state.
- [ ] The Space uses high-quality real restaurant photography.
- [ ] Instagram feed works or fails gracefully.
- [ ] Culture content can be hidden when inactive.
- [ ] Address, hours, phone, and directions are verified.
- [ ] Analytics events fire correctly.
- [ ] Metadata is complete.
- [ ] Restaurant structured data validates.
- [ ] Sitemap and robots.txt exist.
- [ ] No secrets are exposed.
- [ ] Production build is clean.
- [ ] No major responsive defects exist.
- [ ] No major accessibility defects exist.
- [ ] Real mobile performance is acceptable.

---

# 43. Acceptance Criteria

## Navigation

- [ ] All section links reach the correct section.
- [ ] `MENU` opens the active Qlub menu.
- [ ] `BOOK` reaches the approved booking/contact flow.
- [ ] Mobile navigation is fully usable.

## Hero

- [ ] Brand proposition is immediately understandable.
- [ ] Booking and menu actions are prominent.
- [ ] Hero imagery is real SOYL photography.
- [ ] No material layout shift.
- [ ] Day/night treatment, if enabled, uses Dubai local time.

## From the Kitchen

- [ ] Uses real dishes or real food categories.
- [ ] Does not duplicate the entire Qlub menu.
- [ ] Full-menu CTA works.

## The Space

- [ ] Uses real restaurant photography.
- [ ] Communicates the actual character of the venue.
- [ ] Avoids a generic equal-tile gallery.

## Now at SOYL

- [ ] Current content can be updated centrally.
- [ ] Old events do not remain indefinitely.
- [ ] Empty state does not show filler.

## Instagram

- [ ] Access token is server-only.
- [ ] Feed is cached.
- [ ] API failure does not break page rendering.
- [ ] Instagram content is displayed in SOYL's own layout.
- [ ] Follow link works.

## Visit

- [ ] Address is verified.
- [ ] Phone is verified.
- [ ] Hours are verified.
- [ ] Directions work.
- [ ] WhatsApp works if enabled.
- [ ] Entrance/exterior context is available if suitable photography exists.

## SEO

- [ ] Metadata is correct.
- [ ] Canonical points to production domain.
- [ ] Open Graph image exists.
- [ ] Restaurant schema validates.
- [ ] Sitemap works.
- [ ] robots.txt works.

## Analytics

- [ ] Menu clicks are measured.
- [ ] Booking clicks are measured.
- [ ] Direction clicks are measured.
- [ ] Call clicks are measured.
- [ ] WhatsApp clicks are measured.
- [ ] Instagram clicks are measured.

---

# 44. Product Principle

The final SOYL website should not feel like a catalogue of restaurant information.

It should feel like entering the first few moments of the restaurant:

**food, space, people, atmosphere, and an easy invitation to come over.**
