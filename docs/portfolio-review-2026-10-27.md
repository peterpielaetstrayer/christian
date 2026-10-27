# Portfolio image and publication review — October 27, 2026

**Status:** Working review. Not approved for production.  
**Canonical code:** `peterpielaetstrayer/christian`  
**Photo archive:** [Website Photos](https://drive.google.com/drive/folders/1kmE3vimOxvuvk7H5SdBO7_D0YeQcWbeg)  
**Source direction:** *Craft, Direction & Site Foundation*; contractor identity first, design capability second; architectural, precise, clean, modern, craft-forward. Keep the approved minimalist layout.

## Decision rule

Treat a project page as an **actual identifiable job**, not a general skill category. Use only photos belonging to that job, state the person's actual contribution, and don't infer project leadership, permit/inspection results, materials, scope, engineering sign-off, or finished performance from attractive photos alone.

Folder names are leads rather than final proof of project identity. Shared site photo bytes are verified from Git object identities; comparisons with Google Drive were made by matching stored byte lengths and names/context, followed by visual sampling. A same-size match by itself is not cryptographic verification.

## First-pass archive

The Drive archive currently includes **244 still images and six videos**, with more photographs in the "In progress photos" folder than any other folder. Not every individual photograph was inspected. Some skylight images were uploaded as both original and copies. There are zero files in "Finished photos" and "Drawings/Plans" at the time of the inventory; other folders do contain finished-looking photos.

| Drive folder | Files | Note |
| --- | ---: | --- |
| In progress photos | 119 | Mixed jobs; sort visually before reuse |
| Custom skylight ceiling | 58 | Several originals and copies |
| Custom Timber Framework | 24 | Dedicated candidate set |
| Barrel vault | 19 | Strong framing sequence |
| Decks & Pergolas | 9 | 8 HEIC images + 1 video |
| Outdoor Structural Stair | 6 | Coherent candidate set |
| Outdoor Shed | 6 | Candidate separate project |
| Groin Vault | 5 | Distinctive geometry |
| Arches | 4 | Potential craft detail |

## Existing nine site entries

| Published entry | Photo evidence | Editorial action |
| --- | --- | --- |
| Barrel Vault Framing | Dedicated folder; hero/card/gallery photos trace to it | Retain pending job and role confirmation; choose a coherent gallery |
| Custom Skylight Ceiling | Dedicated folder, including build stages | Retain; select opening-to-finish narrative |
| Outdoor Structural Stair | Dedicated folder | Retain; verify role and condition of completed work |
| Groin Vault Detail Work | Groin-vault images in card/hero; gallery image from Barrel vault | Replace mismatched gallery image *after* project confirmation |
| Architectural Framing System | Images from Stair, Barrel vault, Outdoor Shed, reused elsewhere | Hold as a capability, not a separate case study, until a real job is identified |
| Finish Carpentry Installation | Hero/card from Arches; gallery frames from Barrel vault | Hold; check mixed in-progress photos for a genuine finish job |
| Structural Modification + Rebuild | Images sourced from Stair, Barrel vault, and Shed | Hold; requires a cohesive actual job with role verified |
| Custom Timber Framework | Currently uses Groin Vault and Barrel vault images despite dedicated timber folder | Priority photographic correction after verifying which timber images belong together |
| Deck + Pergola + Walkway | Dedicated site images and a Drive exterior folder | Retain conditionally; confirm whether decking, pergola, and walkway are one project and what role was performed |

**Caution:** The current home hero image is the same source asset used on the Deck + Pergola case, while `data/home.ts` describes it as barrel-vault framing. Revise description when the final hero photo is agreed.

## Possible image references for the screen-share

All image links below point to existing Drive originals, not newly uploaded or edited site assets.

- Barrel Vault: [IMG_8270](https://drive.google.com/file/d/16XfXWGYFdapvK58pZ49UTNA7ZZbvW5XF/view), [IMG_8429](https://drive.google.com/file/d/1Rb-1lbgUpS2m6IB1MDaUqjVMey3Pnlck/view)
- Groin Vault: [IMG_8266](https://drive.google.com/file/d/1U5qQurwUtsqhTj0Hh5sLaNzasWD3B3qS/view), [IMG_8240](https://drive.google.com/file/d/13mvUiBUznidUdb5dDKQjzjLmxeMIcG4v/view)
- Skylight: [IMG_7266](https://drive.google.com/file/d/11Nf2DdhNDof8vHGJlRgtbnBa9C76iStt/view), [IMG_7235](https://drive.google.com/file/d/1ahnhQLj5mmehYBzIAHi_o-T-OK-JFRFq/view)
- Exterior stair: [IMG_7004](https://drive.google.com/file/d/1i84u5Z2eRs4TtriA9fQBS8qf1odDAGeC/view)
- Outdoor Shed: [IMG_8520](https://drive.google.com/file/d/1CyEpibnbq3QxCtQQIsXuJsWvqD-2JF8N/view)
- Timber Framework: [IMG_7738](https://drive.google.com/file/d/1ZY3ZBXUeR1VxkA-QP62xEebumwY1QrOd/view), [IMG_8015](https://drive.google.com/file/d/16SCjUmkZepu7OWDr5hvkzcM2wg4FjVVL/view)
- Possible finish work: [IMG_7499](https://drive.google.com/file/d/1DyMXgdeXJHR5_9Ae-R68vfTV7BlzfVvY/view)

## Low-effort questions for Christian

During a short screen-share, show the image shortlist and ask:
1. Which pictured jobs best represent the work you want more of?
2. Do these photos belong to the same job, or should they be separated?
3. On each job, what exactly was your role (carpenter, framing subcontractor, general contractor, design support, etc.)?
4. Are you comfortable showing the images publicly? Is one essential finished photo missing?

Do not ask him to categorize hundreds of photos. He can send individual missing images by text after the shortlist is agreed.

## Launch verification, distinct from photo review

- Confirm **CA CSLB #1153030** belongs to the intended business, is current and correctly classified, and that the site's insurance language is justified. Verification through CSLB official records is still outstanding.
- Confirm the published service area, email, phone, and preferred mode of inquiry.
- Submit an end-to-end FormSubmit test and confirm the message actually reaches the intended inbox (and activation was completed).
- Optimize the final approved photo set: several current JPEG files exceed 10 MiB, and `next.config.mjs` currently disables Next image optimization.
- Check build/type safety, mobile layout, contrast, keyboard navigation, broken images, metadata, and 404s before merging to `main`.

## Editorial guardrails

Retain the existing approved visual system and headline. No embellished outcomes, verified-structural-performance claims, invented specs, or permit assertions. Concise verified copy is better than a generic detailed case study.

**Current implementation branch:** `review/2026-10-27-site-quality`. Do not merge until preview review and business facts are validated.
