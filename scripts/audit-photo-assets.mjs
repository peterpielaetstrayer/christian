/**
 * Portfolio photo integrity audit — read-only.
 * Run: node scripts/audit-photo-assets.mjs [--json]
 * Source-photo matches do NOT verify project authorship or technical claims.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, resolve, relative } from 'node:path'
import { createHash } from 'node:crypto'

const root = resolve(import.meta.dirname, '..')
const projectDir = join(root, 'public', 'images', 'projects')
const source = readFileSync(join(root, 'data', 'projects.ts'), 'utf8')
const slugs = [...source.matchAll(/\bslug:\s*'([^']+)'/g)].map(m => m[1])
const extensions = /\.(jpe?g|png|webp|avif|gif)$/i

const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(item => {
  const path = join(dir, item.name)
  return item.isDirectory() ? walk(path) : extensions.test(path) ? [path] : []
})
const files = walk(projectDir).map(path => {
  const data = readFileSync(path)
  return {
    path: relative(root, path).replaceAll('\\', '/'),
    project: relative(projectDir, path).split(/[\\/]/)[0],
    bytes: data.byteLength,
    digest: createHash('sha256').update(data).digest('hex'),
  }
})
const byDigest = Map.groupBy(files, f => f.digest)
const crossProjectDuplicates = [...byDigest.values()]
  .filter(g => g.length > 1 && new Set(g.map(f => f.project)).size > 1)
  .map(g => g.map(f => f.path))
const oversized = files.filter(f => f.bytes > 5 * 1024 * 1024)
  .map(f => ({ path: f.path, mib: +(f.bytes / 1048576).toFixed(1) }))
const folders = [...new Set(files.map(f => f.project))]
const result = {
  declaredProjects: slugs.length,
  projectImageFiles: files.length,
  crossProjectDuplicates,
  oversized,
  missingProjectImageFolders: slugs.filter(x => !folders.includes(x)),
  imageFoldersOutsideProjectList: folders.filter(x => !slugs.includes(x)),
}
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(result, null, 2))
} else {
  console.log(`Projects: ${result.declaredProjects}; image files: ${result.projectImageFiles}`)
  console.log(`Duplicate image groups across project categories: ${crossProjectDuplicates.length}`)
  crossProjectDuplicates.forEach((g, i) => console.log(`  ${i + 1}: ${g.join(' == ')}`))
  console.log(`Assets larger than 5 MiB: ${oversized.length}`)
  oversized.forEach(f => console.log(`  ${f.mib} MiB: ${f.path}`))
  if (result.missingProjectImageFolders.length)
    console.log(`Missing image folders: ${result.missingProjectImageFolders.join(', ')}`)
  if (result.imageFoldersOutsideProjectList.length)
    console.log(`Unlisted image folders: ${result.imageFoldersOutsideProjectList.join(', ')}`)
  console.log('Review image reuse before publication. This does not verify authorship, roles, or licensure.')
}
