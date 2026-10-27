# Pielaet Construction & Design — Final review and release handoff

Updated October 27, 2026. **This is a completed private-review candidate, not an approved public launch.** The discovery document *Craft, Direction & Site Foundation* governs identity, tone, and launch conditions.

## Deliverable

- Eight visible photographic studies: [Barrel Vault Framing](/work/barrel-vault-framing), [Groin Vault Framing](/work/groin-vault-detail-work), [Custom Skylight Ceiling](/work/custom-skylight-ceiling), [Custom Residential Framing](/work/custom-timber-framework), [Outdoor Structural Stair](/work/outdoor-structural-stair), [Decks, Pergolas & Walkways](/work/deck-pergola-build), [Architectural Arches](/work/circular-arch-window), and [Custom Outdoor Shed](/work/outdoor-shed).
- Three unsupported legacy entries retained as `reviewStatus: 'hold'`: Architectural Framing System, Finish Carpentry Installation, Structural Modification + Rebuild.
- Reworked source-backed captions, descriptive project text, visual sequencing, mobile navigation, enlarged responsive galleries, and About page.
- Homepage hero source reduced from ~19.8 MiB to ~0.91 MiB; Next responsive WebP optimization enabled.
- Accessible subject-specific alternative text and higher-contrast bronze accent; preview noindex metadata.
- Review-specific safeguard: contact form disabled in preview so accidental tests do not email a live recipient; preview footer explicitly withholds licensing and insurance claims pending verification.
- `npm run audit:photos` now runs automatically before Next's production build; checks referenced visible images exist and that no active project families reuse byte-identical photos.

## Evidence checked

- GitHub reference: `peterpielaetstrayer/christian` at `review/2026-10-27-photo-curation`.
- Source archive: [Website Photos](https://drive.google.com/drive/folders/1kmE3vimOxvuvk7H5SdBO7_D0YeQcWbeg), with individual folder mapping in `PORTFOLIO_CURATION_REVIEW_2026-10-27.md`.
- Asset audit: **8 visible studies; 33 expected active image paths; 0 missing; 0 cross-study duplicate groups** (checked from current Git tree and repeated during Vercel build).
- Known remaining performance candidates: `deck-pergola-build/card.jpg` (7.8 MiB), `gallery-01.jpg` (7.9 MiB), plus two unused unoptimized source files in that folder. Next currently serves responsive optimized variants; a separate original compression pass is still desirable.
- Vercel READY status proves compile/deploy health, not actual visual QA or correct mail delivery.
- Static color check: bronze `#7D6549` on page background `#F6F4EF` is approximately 4.99:1 contrast.

## External release blockers — not prerequisites for design improvements

1. **Christian's factual verification.** Are the project groupings correct? Do the photos show his actual contribution? Are they authorized for publication? The deck/pergola set is explicitly a collection, not one assumed job.
2. **Licensing and insurance.** The existing public site states `CA CSLB #1153030 · Licensed & Insured`. Confirm business, holder, classification, active standing and accurate insurance status from official records; the discovery explicitly conditions launch on valid licensure. A generic CSLB lookup page is **not** confirmation of status.
3. **Contact form.** The production branch uses FormSubmit. Verify account recipient/activation, test with Christian's permission, confirm delivery and `/contact/thanks` redirect, decide anti-spam policy. No test submissions were sent.
4. **Human visual QA.** Inspect the latest private preview on at least one ~375px mobile viewport and a desktop viewport, including image crops/overlay legibility, menu expansion, gallery load, and tap targets. The protected preview couldn't be rendered in this connector environment, so this is not claimed as passed.
5. **Publication approval.** Only after the above, merge PR #1 (`review/2026-10-27-site-quality` into `main`) followed by PR #2 (`review/2026-10-27-photo-curation`; retarget as needed). Verify production custom domain after merge.

## Two-minute client review, not a required questionnaire

Send a concrete site preview. Ask him to browse *Work* and react verbally: **Which three bodies of work best represent your craft? Are any photographs mismatched or not your work? Do you have finished photos we should replace the in-progress ones with?** He may simply text photos back, or use a no-account upload request after that is connected. A formal project worksheet is not a prerequisite.

## Suggested short message

> Hey! I've pulled together a much stronger draft of the website using the photos you already sent. The work section now highlights vaults, arches, skylights, framing, stairs, and exterior projects. Can you look through it on your phone and tell me which projects feel strongest, whether any photos are grouped incorrectly, and if you have better finished photos for any of them? I can make the final adjustments from that. I'm keeping it in preview until we confirm the descriptions and licensing information.

**Status language:** "Private site ready for client review" is justified. "Public site fully verified and launched" is not.
