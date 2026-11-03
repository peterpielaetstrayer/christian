# Contrast & typography polish — 2026-11-03

**Scope:** conservative review-only refinements based on the existing craft-first / architectural / precise / clean / modern direction in *Craft, Direction & Site Foundation*. No redesign, new photography, or public deployment.

## Findings

- The previous photograph overlay used a black gradient from 55% at the lower edge through 15% around the middle to transparent at the top. The supporting hero paragraph was set to 80%-opacity white. Because the underlying photograph changes in luminance and crops responsively, no single contrast ratio can honestly describe the hero; bright pixels behind the text can create poor readability.
- WCAG 2.2 AA minimum contrast: **4.5:1 for ordinary text**, **3:1 for large text**, and generally **3:1 for meaningful UI boundaries**. Text overlays need evaluation at their actual rendered positions and viewports.
- On the stable `#F6F4EF` page background: old `#6B6B6B` supporting text ≈ **4.85:1**; old bronze `#7D6549` ≈ **4.99:1**. Those nominally pass ordinary-text AA but offer little extra buffer for small UI labels.
- Existing `#E6E2DA` input underline is ≈ **1.18:1** against the page; that is faint when it is used as the sole boundary cue.

## Preview changes

1. Replace the very light middle of the photo gradient with a progressive dark veil (18% at top, 64% by 30% height, 76% by 70% height, 82% at bottom). Top of the image stays open; contrast strengthens where title, supporting copy, and actions sit. **This does not certify every responsive image crop**.
2. Increase mobile hero breathing space, slightly refine small-screen headline sizing, and give the text consistent lateral padding. Supporting paragraph now uses 95%-opacity white; the secondary button gains a translucent dark backing, stronger border, and full-width mobile tap target.
3. Darken neutral supporting text *slightly*, retaining the existing warm palette: `#5C5954` is **6.34:1** and `#615E58` is **5.88:1** on the page.
4. Set the input underline to `#8D8479`, **3.35:1**, without changing subtle decorative section dividers. Restore visible keyboard-focus treatment on controls and make the form's Send action easier to distinguish.
5. Add subtle always-visible underlines on homepage inline contact links, so they do not depend on color/hover to appear interactive.
6. Automatically check solid-token ratios via `npm run audit:contrast` alongside the existing photograph integrity audit in the prebuild step.

## Review boundaries

- Keep current typography families, brand identity, warm paper background, image layout, editorial grid, and restrained zero-radius corners.
- This branch is a **private preview**, not approved for release. Compare homepage mobile (~320/375/430px), desktop, project-detail heroes, contact form and keyboard navigation before merging.
- The automated script checks *specified solid-color pairings only*. It cannot check composite colors on photographs, keyboard state appearance, touch ergonomics, actual crop positions, or screen-reader behavior.
- If the stronger gradient is visually too dark on real devices, alternative A: a more localized vignette behind the title/body; alternative B: a translucent text scrim or a caption below the photograph. Do not claim AA until the selected treatment is actually tested against mobile/desktop screenshot pixels.

WCAG criteria: https://www.w3.org/WAI/WCAG22/#contrast-minimum and https://www.w3.org/WAI/WCAG22/#non-text-contrast

## Mobile hero revision — overlay restored

The initial attempt to preserve the central wooden walkway placed mobile copy on a separate charcoal section. After viewing it on a phone, the user requested that the heading **remain over the image**. The current preview restores the absolute overlay on mobile and keeps the image and words within a single visual hero.

- Mobile photo uses an approximately 740px-tall image area on narrow screens, easing to ~660px on medium devices. The photo remains center-focused so the wooden walkway runs down the frame.
- The words sit near the **top** of the photo; an unboxed top-to-bottom dark gradient is strong at the upper text position and fades out by 78% height, preserving the lower timber foreground.
- Desktop retains the existing left-to-right, text-side dark gradient and left-aligned overlay.
- The image itself and the copy are unchanged. This is **not** a separate caption panel, and it is **not** an assertion that every responsive image-and-text combination has been screenshot-tested to WCAG AA.
- Review specifically at 320px, 375px, 430px and common desktop widths. Verify no text/button clipping, that the foreground walkway is clearly visible, and that white text sits over sufficiently dark pixels throughout the mobile content block. A browser-based contrast check is still required before claiming photo-overlay WCAG conformance.
