export type ProjectImage = {
  src?: string
  alt: string
  caption?: string
}

export type Project = {
  title: string
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

const makeProjectImages = (slug: string, title: string) => ({
  hero: {
    src: `/images/projects/${slug}/hero.jpg`,
    alt: `${title} — hero`,
  },
  card: {
    src: `/images/projects/${slug}/card.jpg`,
    alt: `${title} — card`,
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
    title: 'Barrel Vault Framing',
    role: 'Builder',
    focus: 'Vault Geometry + Clean Integration',
    slug: 'barrel-vault-framing',
    scope: 'Structural Framing + Finish',
    overview:
      'Curved framing package executed from engineer drawings with clean integration across finish planes.',
    notes: [
      'Scope — Structural framing with finish alignment.',
      'Technical challenge — Curved geometry and precise layout.',
      'Materials / method — Engineered framing with staged sequencing.',
      'Outcome — Code-compliant structure with clean sight lines.',
    ],
    constraints: [
      'Load-bearing requirements tied to structural calculations.',
      'Fire code compliance for exposed framing members.',
      'Sequencing with HVAC and electrical rough-ins.',
      'Material selection for long-term stability.',
    ],
    gallery: makeGallery('barrel-vault-framing', [
      'Structural framing layout',
      'In-progress installation',
    ]),
    result:
      'Completed structural vault system meets code requirements while maintaining clean architectural intent.',
    images: makeProjectImages('barrel-vault-framing', 'Barrel Vault Framing'),
  },
  {
    title: 'Custom Skylight Ceiling',
    role: 'Build + Execution',
    focus: 'Detail + Integration',
    slug: 'custom-skylight-ceiling',
    scope: 'Structural Framing + Finish Integration',
    overview:
      'Skylight integration executed with precise framing, waterproofing coordination, and clean ceiling transitions.',
    notes: [
      'Scope — Structural modifications and finish integration.',
      'Technical challenge — Load redistribution and waterproofing coordination.',
      'Materials / method — Framing adjustments with curb alignment.',
      'Outcome — Clean daylight integration with stable ceiling plane.',
    ],
    constraints: [
      'Structural load redistribution reviewed by engineer.',
      'Waterproofing integration with roofing contractor.',
      'Coordination of finish ceiling plane with skylight curb.',
      'Daylighting and thermal bridge considerations.',
    ],
    gallery: makeGallery('custom-skylight-ceiling', [
      'Structural opening framing',
      'Detail of curb integration',
    ]),
    result:
      'Skylight installation complete with clean integration at all finish planes and verified structural performance.',
    images: makeProjectImages('custom-skylight-ceiling', 'Custom Skylight Ceiling'),
  },
  {
    title: 'Outdoor Structural Stair',
    role: 'Builder',
    focus: 'Structure + Craft',
    slug: 'outdoor-structural-stair',
    scope: 'Structural Design + Construction',
    overview:
      'Exterior stair system built for exposure with engineered connections and code-compliant guardrails.',
    notes: [
      'Scope — Structural stair build with guardrail integration.',
      'Technical challenge — Weather exposure and connection detailing.',
      'Materials / method — Durable exterior-rated materials and hardware.',
      'Outcome — Clean, code-compliant access with long-term durability.',
    ],
    constraints: [
      'Structural connection to existing foundation.',
      'Code compliance for rise/run and guardrail height.',
      'Material durability for exterior exposure.',
      'Coordination with site drainage and grading.',
    ],
    gallery: makeGallery('outdoor-structural-stair', [
      'Foundation connection detail',
      'Structural framing in progress',
    ]),
    result:
      'Completed stair system meets code requirements with clean detailing suitable for exterior exposure.',
    images: makeProjectImages('outdoor-structural-stair', 'Outdoor Structural Stair'),
  },
  {
    title: 'Groin Vault Detail Work',
    role: 'Builder / Finish Carpentry',
    focus: 'Historical Detail + Precision',
    slug: 'groin-vault-detail-work',
    scope: 'Finish Carpentry + Detail',
    overview:
      'Detail carpentry executed to align with existing geometry and maintain clean transitions.',
    notes: [
      'Scope — Finish carpentry and detail alignment.',
      'Technical challenge — Tight tolerances across intersecting planes.',
      'Materials / method — Measured layout with consistent sight lines.',
      'Outcome — Seamless transitions and clean finish continuity.',
    ],
    constraints: [
      'Tight tolerances across intersecting planes.',
      'Sequencing with finish schedule.',
      'Material stability for long-term performance.',
    ],
    gallery: makeGallery('groin-vault-detail-work', [
      'Detail layout',
      'In-progress trim work',
    ]),
    result:
      'Completed detail work maintains consistent geometry and clean transitions across finish planes.',
    images: makeProjectImages('groin-vault-detail-work', 'Groin Vault Detail Work'),
  },
  {
    title: 'Architectural Framing System',
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
    title: 'Custom Timber Framework',
    role: 'Builder / Structural Framing',
    focus: 'Material + Craft',
    slug: 'custom-timber-framework',
    scope: 'Structural Framing',
    overview:
      'Timber framework installed with clean joinery, accurate alignment, and stable long-term performance.',
    notes: [
      'Scope — Timber structural framing and erection.',
      'Technical challenge — Joinery tolerances and field fitting.',
      'Materials / method — Timber selection with staged assembly.',
      'Outcome — Clean, stable framework with precise alignment.',
    ],
    constraints: [
      'Timber selection and moisture considerations.',
      'Joinery tolerances and field fitting.',
      'Staged installation for safe assembly.',
    ],
    gallery: makeGallery('custom-timber-framework', [
      'Timber selection',
      'Joinery layout',
    ]),
    result:
      'Framework installed with tight joinery and clean alignment across primary members.',
    images: makeProjectImages('custom-timber-framework', 'Custom Timber Framework'),
  },
]

export const featuredProjectSlugs = [
  'barrel-vault-framing',
  'custom-skylight-ceiling',
  'outdoor-structural-stair',
]

export const getProjects = () => projects

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
  return projects.find((project) => project.slug === normalized)
}

