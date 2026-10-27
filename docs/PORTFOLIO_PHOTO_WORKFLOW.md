# Portfolio photo curation workflow

The website is portfolio-first and must represent Christian's work accurately.

## Curate → preview → react → refine

1. **Curate:** choose cohesive hero, process, and detail images from the named [Website Photos](https://drive.google.com/drive/folders/1kmE3vimOxvuvk7H5SdBO7_D0YeQcWbeg) archive. A folder name is a useful lead, not proof that all images are one job.
2. **Preview:** make photo/caption changes on review branches, never directly on production.
3. **React:** ask Christian to correct job identity, work performed, and any project claims based on a concrete visual preview. A formal review questionnaire is not a prerequisite for improving the draft.
4. **Refine:** update project copy, photography, alt text, order and cropping once his contributions are understood.
5. **Publish:** verify client attributions, media permissions, licensing/current claims, and contact functionality before merging/releasing.

## Asset integrity check

Run `node scripts/audit-photo-assets.mjs` or add `--json` for structured output. This is a read-only check for repeated byte-identical images across project categories, oversized assets, and declared/missing project folders. It does not verify the subject or author of a photo.

## Known review priorities (October 2026)

- **Source-aligned candidates:** Barrel Vault Framing, Custom Skylight Ceiling, Outdoor Structural Stair, Groin Vault Detail Work, Custom Timber Framework, Deck + Pergola + Walkway.
- **Project/image assignments to verify:** Architectural Framing System, Finish Carpentry Installation, Structural Modification + Rebuild. Some current images are byte-identical to photos used in unrelated categories.
- **Performance:** the deck/pergola original hero is over 20 MB. A reduced-size candidate file exists; test its visual quality in preview before swapping it.
- **Accuracy:** statements about engineered, code-compliant, inspected, or verified performance are content claims requiring confirmation; imagery alone is not evidence.
- **Licensure:** public website licensure and insurance claims must remain accurate to the current official record.

The user-facing goal is a smaller, stronger, truthful portfolio—not filling every template card.
