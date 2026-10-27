export type ProjectImage = {
  src?: string
  alt: string
  caption?: string
}

export type Project = {
  title: string
  reviewStatus?: 'hold'
  role: string
  focus: string
  slug: string
  scope?: string
  overview: string
  notes?: string[]
  constraints: string[]
  gallery: ProjectImage[]
  result: string
  images: {
    hero: ProjectImage
    card: ProjectImage
  }
}

// Photo-specific descriptions make non-decorative portfolio imagery meaningful
// without asserting unverified authorship, engineering, or final conditions.
const photoDescriptions: Record<string, { hero: string; card: string }> = {
  'barrel-vault-framing': {
    hero: 'Exposed timber ribs forming a curved barrel vault ceiling during construction',
    card: 'Curved roof and vault framing shown before finishes',
  },
  'custom-skylight-ceiling': {
    hero: 'Timber-clad ceiling with skylight opening viewed from below',
    card: 'Detailed skylight and timber ceiling surface',
  },
  'outdoor-structural-stair': {
    hero: 'In-progress exterior timber stair at a residential building',
    card: 'Framed structural stair and adjoining exterior construction',
  },
  'groin-vault-detail-work': {
    hero: 'Intersecting vaulted timber framing down an unfinished interior passage',
    card: 'Wood framing forming intersecting curved vaults',
  },
  'custom-timber-framework': {
    hero: 'Residential wall and roof framing in progress',
    card: 'Close view of roof framing and structural timber members',
  },
  'deck-pergola-build': {
    hero: 'Residential exterior carpentry and outdoor structure photography',
    card: 'Deck and pergola construction details',
  },
  'circular-arch-window': {
    hero: 'Timber-framed curved arch opening under construction',
    card: 'Architectural arch framing detail',
  },
  'outdoor-shed': {
    hero: 'Timber-clad outdoor shed with exposed posts and an overhanging roof',
    card: 'Small outdoor timber structure with horizontal siding and double doors',
  },
}

const makeProjectImages = (slug: string, title: string) => ({
  hero: {
    src: `/images/projects/${slug}/hero.jpg`,
    alt: photoDescriptions[slug]?.hero ?? `${title} — construction view`,
  },
  card: {
    src: `/images/projects/${slug}/card.jpg`,
    alt: photoDescriptions[slug]?.card ?? `${title} — construction detail`,
  },
})

const makeGallery = (slug: string, captions: string[]) =>
  captions.map((caption, index) => ({
    src: `/images/projects/${slug}/gallery-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: caption,
    caption,
  }))

export const projects: Project[] = [
  {
    title: "Barrel Vault Framing",
    role: "Curved Framing",
    focus: "Geometry / Rhythm / Structure",
    slug: "barrel-vault-framing",
    scope: "Curved timber framing",
    overview: "Construction-stage photographs reveal the ribs, repetitive layout, and changing geometry behind a barrel-vaulted ceiling.",
    notes: [
      "A continuous curve formed by closely spaced framing members",
      "Views into the structure before finishes conceal the assembly",
      "Transitions between the curved ceiling and surrounding framing",
    ],
    constraints: [
      "Curved layout and alignment",
      "Transitions to adjacent structure",
    ],
    gallery: makeGallery("barrel-vault-framing", [
      "Curved ribs during framing",
      "Vault structure and adjoining members",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("barrel-vault-framing", "Barrel Vault Framing"),
  },
  {
    title: "Custom Skylight Ceiling",
    role: "Ceiling + Timber Detail",
    focus: "Daylight / Openings / Finish",
    slug: "custom-skylight-ceiling",
    scope: "Skylight openings and ceiling detailing",
    overview: "A documented sequence of skylight openings and timber-clad ceiling surfaces, showing how daylight, structure, and finish planes meet.",
    notes: [
      "Skylight openings viewed from within the room",
      "Timber surfaces shaped around edges and transitions",
      "Detail photography of the ceiling assembly as work progresses",
    ],
    constraints: [
      "Opening proportions and ceiling alignment",
      "Continuity of surrounding timber surfaces",
    ],
    gallery: makeGallery("custom-skylight-ceiling", [
      "Skylight opening and adjacent timber ceiling",
      "Ceiling-to-opening transition",
      "Close-up of timber surface detail",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("custom-skylight-ceiling", "Custom Skylight Ceiling"),
  },
  {
    title: "Outdoor Structural Stair",
    role: "Exterior Carpentry",
    focus: "Access / Structure / Layout",
    slug: "outdoor-structural-stair",
    scope: "Exterior stair framing",
    overview: "Construction photographs document an exterior stair serving an elevated entrance, including its supporting framing, treads, and developing rail structure.",
    notes: [
      "Stair run and landing in the context of the house",
      "Visible tread, stringer, and guard framing",
      "Connections to surrounding exterior construction",
    ],
    constraints: [
      "Stair geometry and attachment",
      "Exposure to outdoor conditions",
    ],
    gallery: makeGallery("outdoor-structural-stair", [
      "Framing and landing detail",
      "Exterior stair structure from another viewpoint",
      "In-progress exterior framing",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("outdoor-structural-stair", "Outdoor Structural Stair"),
  },
  {
    title: "Groin Vault Framing",
    role: "Complex Framing",
    focus: "Intersecting Curves / Precision",
    slug: "groin-vault-detail-work",
    scope: "Groin vault framing",
    overview: "Intersecting curved timber members form a complex vaulted ceiling. The photographs show the framing geometry while its structure is still visible.",
    notes: [
      "Intersections between perpendicular vaulted forms",
      "Repetitive framing members establishing the curved surfaces",
      "Careful alignment where vault ribs meet",
    ],
    constraints: [
      "Geometry at intersecting curves",
      "Accurate meeting points between framing members",
    ],
    gallery: makeGallery("groin-vault-detail-work", [
      "Groin vault framing from below",
      "Intersection of curved timber ribs",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("groin-vault-detail-work", "Groin Vault Framing"),
  },
  {
    title: 'Architectural Framing System',
    reviewStatus: 'hold',
    role: 'Builder / Structural Framing',
    focus: 'Complex Geometry + Engineering',
    slug: 'architectural-framing-system',
    scope: 'Structural Framing',
    overview:
      'Complex framing system executed to align with structural drawings and field conditions.',
    notes: [
      'Scope — Primary structural framing system.',
      'Technical challenge — Multi-plane geometry and long-span accuracy.',
      'Materials / method — Engineered layout and staged sequencing.',
      'Outcome — Clean alignment across complex structural planes.',
    ],
    constraints: [
      'Engineer-reviewed connection details.',
      'Field verification for tolerances and alignment.',
      'Sequencing to support downstream trades.',
    ],
    gallery: makeGallery('architectural-framing-system', [
      'Layout and set-out',
      'Primary framing',
    ]),
    result:
      'Framing system executed to specification with clean alignment across complex geometry.',
    images: makeProjectImages('architectural-framing-system', 'Architectural Framing System'),
  },
  {
    title: 'Finish Carpentry Installation',
    reviewStatus: 'hold',
    role: 'Builder / Finish Carpentry',
    focus: 'Millwork + Detail',
    slug: 'finish-carpentry-installation',
    scope: 'Finish Carpentry',
    overview:
      'Millwork and finish installation executed to match design intent with tight tolerances.',
    notes: [
      'Scope — Millwork installation and finish coordination.',
      'Technical challenge — Long-run alignment and clean joints.',
      'Materials / method — Controlled acclimation and precise fit.',
      'Outcome — Consistent reveals and durable finish quality.',
    ],
    constraints: [
      'Material acclimation and stability.',
      'Tight alignment across long runs.',
      'Surface protection during remaining construction.',
    ],
    gallery: makeGallery('finish-carpentry-installation', [
      'Millwork layout',
      'Install in progress',
    ]),
    result:
      'Finish installation completed with clean joints, consistent alignment, and durable execution.',
    images: makeProjectImages('finish-carpentry-installation', 'Finish Carpentry Installation'),
  },
  {
    title: 'Structural Modification + Rebuild',
    reviewStatus: 'hold',
    role: 'Builder',
    focus: 'Code Compliance + Execution',
    slug: 'structural-modification-rebuild',
    scope: 'Structural Modification',
    overview:
      'Existing structure modified to support new load paths with careful sequencing and inspections.',
    notes: [
      'Scope — Structural modification and rebuild sequence.',
      'Technical challenge — Temporary shoring and load transfer.',
      'Materials / method — Engineer-aligned framing adjustments.',
      'Outcome — Stable structure meeting code requirements.',
    ],
    constraints: [
      'Code compliance for structural changes.',
      'Temporary shoring and sequencing.',
      'Coordination with inspections.',
    ],
    gallery: makeGallery('structural-modification-rebuild', [
      'Existing conditions',
      'Shoring and prep',
    ]),
    result:
      'Structural modifications completed with verified alignment to drawings and code requirements.',
    images: makeProjectImages('structural-modification-rebuild', 'Structural Modification + Rebuild'),
  },
  {
    title: "Custom Residential Framing",
    role: "Structural Carpentry",
    focus: "Posts / Beams / Roof Framing",
    slug: "custom-timber-framework",
    scope: "Residential timber and roof framing",
    overview: "A sequence of residential framing photographs showing structural members, upper-level construction, and the connections between roof and supporting walls.",
    notes: [
      "Framed spaces reveal how structural elements meet",
      "Roof framing, openings, and post-and-beam details",
      "Construction-stage perspectives from different levels",
    ],
    constraints: [
      "Field alignment of structural members",
      "Coordinating framing across adjoining spaces",
    ],
    gallery: makeGallery("custom-timber-framework", [
      "Upper-level stair and roof framing",
      "Exterior framing installation in progress",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("custom-timber-framework", "Custom Residential Framing"),
  },
  {
    title: "Decks, Pergolas & Walkways",
    role: "Exterior Carpentry",
    focus: "Outdoor Living / Material / Access",
    slug: "deck-pergola-build",
    scope: "Selected exterior construction work",
    overview: "A selection of exterior-work photographs from decks, pergolas, and site walkways. These images document related carpentry and landscape-adjacent construction, not yet a confirmed single project.",
    notes: [
      "Deck surfaces, steps, and changes in level",
      "Overhead timber framing and outdoor structures",
      "Paths and transitions between built and landscaped areas",
    ],
    constraints: [
      "Outdoor material exposure",
      "Connections between buildings and the site",
    ],
    gallery: makeGallery("deck-pergola-build", [
      "Deck and exterior step detailing",
      "Walkway and site context",
      "Overhead timber structure",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("deck-pergola-build", "Decks, Pergolas & Walkways"),
  },
  {
    title: "Architectural Arches",
    role: "Curved Framing",
    focus: "Openings / Layout / Form",
    slug: "circular-arch-window",
    scope: "Architectural arch framing",
    overview: "Photographs of shaped timber openings and arch assemblies capture the layout and construction of curved architectural elements.",
    notes: [
      "Segmented timber framing establishes the arc",
      "Close views make the geometry and workmanship visible",
      "Different curved openings documented during construction",
    ],
    constraints: [
      "Repeatable curved layout",
      "Connections between straight and curved elements",
    ],
    gallery: makeGallery("circular-arch-window", [
      "Framing detail at a curved opening",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("circular-arch-window", "Architectural Arches"),
  },
  {
    title: "Custom Outdoor Shed",
    role: "Exterior Carpentry",
    focus: "Timber / Siding / Outdoor Structure",
    slug: "outdoor-shed",
    scope: "Outdoor accessory structure",
    overview: "An outdoor storage structure documented with exposed timber posts, a projecting roof, and horizontal timber cladding against a landscaped hillside.",
    notes: [
      "Simple roof geometry with exposed supporting members",
      "Contrasting tones between timber frame and cladding",
      "A small structure considered in its landscape setting",
    ],
    constraints: [
      "Exterior material exposure",
      "Site integration and roof overhang",
    ],
    gallery: makeGallery("outdoor-shed", [
      "Outdoor structure photographed within the surrounding landscape",
    ]),
    result: "Construction photographs on file; exact role, project grouping and final conditions require client confirmation.",
    images: makeProjectImages("outdoor-shed", "Custom Outdoor Shed"),
  },
]

export const featuredProjectSlugs = [
  'barrel-vault-framing',
  'groin-vault-detail-work',
  'custom-skylight-ceiling',
  'custom-timber-framework',
  'outdoor-structural-stair',
  'deck-pergola-build',
]

export const getProjects = () => projects.filter((project) => project.reviewStatus !== 'hold')

export const getFeaturedProjects = () =>
  featuredProjectSlugs.map((slug) => {
    const project = projects.find((item) => item.slug === slug)
    if (!project) {
      throw new Error(`Featured project not found: ${slug}`)
    }
    return project
  })

const normalizeSlug = (slug: string) =>
  decodeURIComponent(slug).trim().toLowerCase()

export const getProjectBySlug = (slug: string) => {
  const normalized = normalizeSlug(slug)
  return getProjects().find((project) => project.slug === normalized)
}

