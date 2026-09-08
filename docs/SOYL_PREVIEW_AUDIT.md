# SOYL Preview Audit

Source reviewed:

`https://soyl-hospitality-preview.stahamtan.chatgpt.site/`

## Confirmed current output

The Preview is a working single-page experience titled `SOYL — Come hungry. Stay a little longer.` It currently contains:

- Sticky-style navigation with Menu, The space, Find us, and Book a table.
- Hero copy: `Come hungry. Stay a little longer.`
- Supporting copy: `Middle Eastern roots. Mediterranean curiosity.`
- Qlub menu link.
- Hero image of a SOYL team member.
- Food image with the line `A little curiosity. A lot of flavour.`
- Brand line: `GOOD FOOD. GOOD COMPANY. NO RUSH.`
- Space section: `A place to settle in.`
- Three space moments: interior/olive tree, grilled food, and terrace.
- Visit section: `Your table is waiting.`
- Call and Google Maps actions.
- Instagram profile link to `@soylrestaurant`.
- Accessible skip link and descriptive image alt text.

## Strong parts to preserve

- The page opens with an invitation and appetite rather than a corporate explanation.
- The copy is short, warm, and confident.
- The editorial serif headline and blue/cream contrast align with the Brand Book.
- The content rhythm moves from food to space to visit without unnecessary navigation depth.
- Real restaurant photography is used throughout.
- The central olive tree is treated as a recognizable spatial signature.
- The menu URL currently matches the Qlub URL documented in the PRD.

## Gaps against the implementation baseline

These are not defects in the Preview; they are items to decide when turning it into the production implementation:

- No visible `Now at SOYL` content model or editable event state.
- No `From the Kitchen` feature/category structure beyond the appetite CTA.
- No conditional `SOYL x Culture` section.
- No Instagram media feed; only a profile link.
- No visible WhatsApp CTA.
- Booking currently points to the Visit anchor, while the PRD leaves the final booking destination open.
- Hero currently uses a fixed visual treatment; Dubai-time day/night behavior is not visible.
- Only one phone number is exposed in the Preview and it must be confirmed before production.

## Asset mapping observed in the Preview

```text
/assets/logo.svg       SOYL wordmark
/assets/tree.svg       olive/tree brand motif
/assets/welcome.jpg    team member / welcome hero
/assets/platter.jpg    rice and grilled food
/assets/interior.jpg   dining room, tree, and open kitchen
/assets/grill.jpg      grilled dish
/assets/terrace.jpg    terrace seating
```

These URLs are useful references for content selection, but the production project should use approved local copies or an approved asset pipeline rather than depend on the Preview deployment.

## Decision for implementation

Use the Preview as the first design direction and copy baseline. Extend it carefully with the PRD's editable content model, verified contact data, analytics, SEO, accessibility, and launch-quality behavior. Keep the visual language quiet and editorial; do not turn the page into a dense feature catalogue.
