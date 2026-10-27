# Portfolio curation — client review handoff (27 October 2026)

**Status:** Private review proposal. Do not merge this into production until Christian verifies the photographs, specific contribution on each job, permissions, and launch/licensing claims.

**Design direction:** Craft-first, architectural, restrained, and documentation-led, following *Craft, Direction & Site Foundation*.

## Eight selected studies

| Study shown on site | Source archive | What the images support | Still verify with Christian |
| --- | --- | --- | --- |
| Barrel Vault Framing | [Barrel vault](https://drive.google.com/drive/folders/1GAXx_w-yx9SntwIL1XmeWmxZsnknzPop) | Curved timber rib geometry during framing | Actual role, job boundaries, final conditions |
| Groin Vault Framing | [Groin Vault](https://drive.google.com/drive/folders/1X5K9dRpiwB-geLLDbPtWZjX1IVAeJSRo) | Intersecting curves and rib assemblies | Actual contribution, finish scope |
| Custom Skylight Ceiling | [Custom skylight ceiling](https://drive.google.com/drive/folders/1M1eFxnzl5Yy4mXfY-GHU9UMQBf_7EZHQ) | Skylight openings, timber surface details, construction process | Distinct job vs phases, final installation |
| Custom Residential Framing | [Custom Timber Framework](https://drive.google.com/drive/folders/1mAvX3rSNUn_Pj4TCUNaOeIjs3yrI5WXP) | Wall, stair-adjacent, and roof framing | Whether all photos are one job, actual scope |
| Outdoor Structural Stair | [Outdoor Structural Stair](https://drive.google.com/drive/folders/1lk6nJof-q51D0p7rgHXuT946wJebAV8f) | Exterior staircase framing in context | Final connections, handrail and code assertions |
| Decks, Pergolas & Walkways | [Decks & Pergolas](https://drive.google.com/drive/folders/1LFljXrSA9YMfgfhummGp-8poBI8Yr2jG) | Outdoor carpentry, walking paths, pergola structure | **Treat as collection, not one documented job** |
| Architectural Arches | [Arches](https://drive.google.com/drive/folders/1CorsazqJBIVh6OEuCpPjj-Rp_rUibLeh) | Curved opening geometry in unfinished timber | Project identity and his work |
| Custom Outdoor Shed | [Outdoor Shed](https://drive.google.com/drive/folders/1f96lrCSbZHPMJ2hNoJPQqt4TEUWbeS_W) | Timber-clad outdoor structure within its site | Design versus build responsibility and final photo choice |

**Photo provenance highlights:** Residential framing hero `IMG_7809`, card `IMG_7812`, galleries `IMG_7811` and `IMG_7810`. Groin vault corrected detail `IMG_8201`. Shed hero `IMG_8520`, card `IMG_8519`, context gallery `IMG_8515`. Other core assets were selected earlier from the project-named folders; review source mapping before asserting they all belong to one job.

## Held back from the private portfolio listing

- Architectural Framing System
- Finish Carpentry Installation
- Structural Modification + Rebuild

These are **not deleted**; the source entries remain flagged `reviewStatus: 'hold'`. They reused identical images from unrelated project folders and contained uncorroborated technical outcomes. Restore only with accurate photographs and verified project descriptions.

## Implemented in this review branch

- The Work page now shows eight photograph-supported studies rather than nine indistinct template-like entries.
- Six distinct craft areas are featured on the homepage.
- New Architectural Arches and Custom Outdoor Shed studies; existing photos repurposed by source context, and additional shed photos added to Git.
- Project overviews and notes rewritten to describe what is visible, without unverified inspection/engineering/completion claims.
- Larger two-column detail galleries; consistent "Discipline" and "Seen in the photographs" language.
- About copy grounded in the original discovery rather than unchecked licensure marketing.
- Responsive image optimization enabled; the homepage hero original (~19.8 MiB) was replaced with an existing ~0.91 MiB version of the same photograph.
- Accessible, subject-specific alternative text for featured/hero photos.
- `npm run audit:photos` scans visible image path references and cross-project duplicate assets. This is an integrity check, **not** a proof of authorship.

## Requested quick client reaction (no questionnaire required)

Open the preview together and focus on these questions in conversation: Which bodies of work most represent your skill? Do the images for each case belong together? Which photos show your actual contribution? Are there stronger finished photographs for these? Are any important project types missing? Can we publish the photographs with the described attribution?

## Remaining launch checks

1. Obtain client's corrections to work attributions, scope, and project grouping. Avoid unverified "engineered", "inspected", and "code compliant" project claims.
2. Confirm official California licensing and any advertised insurance status before public release.
3. Verify contact-form delivery and redirect on the final custom domain without sending unsolicited test messages.
4. Test actual mobile cropping and accessible contrast visually, and run a production-like performance check; a successful build alone is not full QA.
5. If more photos are needed, offer a no-account-required upload request; the existing shared archive is sufficient to review now.
6. Merge only after client review and production approval.

**Original repository:** `peterpielaetstrayer/christian`. **Work branch:** `review/2026-10-27-photo-curation`. **Review PR:** #2, opened against `review/2026-10-27-site-quality`.
