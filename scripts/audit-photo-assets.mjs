/**
 * Read-only portfolio photo integrity audit.
 * Run: node scripts/audit-photo-assets.mjs [--json]
 * Folder provenance does not establish the builder's role, job grouping, or code compliance.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve, relative } from 'node:path'
import { createHash } from 'node:crypto'

const root = resolve(import.meta.dirname, '..')
const projectDir = join(root, 'public', 'images', 'projects')
const code = readFileSync(join(root, 'data', 'projects.ts'), 'utf8')
const sections = code.split(/(?=\n  \{\n    title:)/)
const entries = sections.flatMap((part) => {
  const slug = part.match(/\bslug:\s*['"]([^'"]+)['"]/)?.[1]
  if (!slug) return []
  const galleryText = part.match(/gallery:\s*makeGallery\(['"][^'"]+['"],\s*\[([\s\S]*?)\]\)/)?.[1] ?? ''
  const galleryCount = (galleryText.match(/^\s*['"][^'"]+['"],?\s*$/gm) ?? []).length
  return [{ slug, galleryCount, hold: /reviewStatus:\s*['"]hold['"]/.test(part) }]
})
const active = entries.filter((item) => !item.hold)
const imagePattern = /\.(jpe?g|png|webp|avif|gif)$/i
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
  const path = join(dir, d.name)
  return d.isDirectory() ? walk(path) : imagePattern.test(path) ? [path] : []
})
const imageFiles = walk(projectDir).map((path) => ({
  path: relative(root, path).replaceAll('\\', '/'),
  project: relative(projectDir, path).split(/[\\/]/)[0],
  bytes: statSync(path).size,
  sha256: createHash('sha256').update(readFileSync(path)).digest('hex'),
}))
const allPaths = new Set(imageFiles.map((f) => f.path))
const expected = active.flatMap((p) => [
  `public/images/projects/${p.slug}/hero.jpg`,
  `public/images/projects/${p.slug}/card.jpg`,
  ...Array.from({ length: p.galleryCount }, (_, i) =>
    `public/images/projects/${p.slug}/gallery-${String(i + 1).padStart(2, '0')}.jpg`),
])
const missingActiveImagePaths = expected.filter((p) => !allPaths.has(p))
const visibleImages = imageFiles.filter((f) => active.some((p) => p.slug === f.project))
const hashGroups = Map.groupBy(visibleImages, (f) => f.sha256)
const reusedActiveImageGroups = [...hashGroups.values()]
  .filter((g) => new Set(g.map((f) => f.project)).size > 1)
  .map((g) => g.map((f) => f.path))
const oversized = visibleImages.filter((f) => f.bytes > 5 * 1048576)
  .map((f) => ({ path: f.path, mib: +(f.bytes / 1048576).toFixed(1) }))
const hero = join(root, 'public', 'images', 'home', 'hero.jpg')
const result = {
  candidateEntries: entries.length,
  visibleStudies: active.length,
  heldForAttribution: entries.filter((item) => item.hold).map((x) => x.slug),
  expectedVisibleImages: expected.length,
  missingActiveImagePaths,
  reusedActiveImageGroups,
  oversized,
  homeHeroMiB: existsSync(hero) ? +(statSync(hero).size / 1048576).toFixed(2) : null,
}
if (process.argv.includes('--json')) console.log(JSON.stringify(result, null, 2))
else {
  console.log(`Portfolio: ${result.visibleStudies} visible studies, ${result.heldForAttribution.length} held for review`)
  console.log(`Referenced image paths: ${expected.length}; missing: ${missingActiveImagePaths.length}`)
  missingActiveImagePaths.forEach((p) => console.log(`  MISSING ${p}`))
  console.log(`Cross-study identical photo groups: ${reusedActiveImageGroups.length}`)
  reusedActiveImageGroups.forEach((g) => console.log(`  DUPLICATE ${g.join(' = ')}`))
  console.log(`Large source images > 5 MiB: ${oversized.length}`)
  oversized.forEach((f) => console.log(`  ${f.mib} MiB: ${f.path}`))
  console.log(`Homepage hero: ${result.homeHeroMiB} MiB`)
  console.log('Photo integrity does not verify authorship, permitted publication, or licensing.')
}
if (missingActiveImagePaths.length || reusedActiveImageGroups.length) process.exitCode = 1
