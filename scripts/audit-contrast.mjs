/**
 * Read-only WCAG contrast audit for solid-color design tokens.
 * Run: node scripts/audit-contrast.mjs
 *
 * This cannot certify dynamic photographic backgrounds, hover states,
 * zoom, or image-dependent text. Review those in a real browser.
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const css = readFileSync(resolve(import.meta.dirname, '..', 'app', 'globals.css'), 'utf8')
const tokenEntries = [...css.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)]
const colors = new Map(tokenEntries.map(([, name, color]) => [name, color]))

function luminance(hex) {
  const parts = hex.match(/[0-9a-f]{2}/gi).map((x) => parseInt(x, 16) / 255)
  const linear = parts.map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]
}

function contrast(a, b) {
  const x = luminance(a)
  const y = luminance(b)
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

const checks = [
  ['Main copy / paper', 'foreground', 'background', 4.5],
  ['Supporting copy / paper', 'secondary', 'background', 4.5],
  ['Muted labels / paper', 'muted-foreground', 'background', 4.5],
  ['Bronze links / paper', 'accent', 'background', 4.5],
  ['Body on primary dark control', 'background', 'foreground', 4.5],
  ['Light text on bronze', 'accent-foreground', 'accent', 4.5],
  ['Form-field boundary / paper', 'input', 'background', 3],
]

let failed = false
for (const [label, fg, bg, minimum] of checks) {
  if (!colors.has(fg) || !colors.has(bg)) {
    console.error('MISSING TOKEN:', fg, bg)
    failed = true
    continue
  }
  const ratio = contrast(colors.get(fg), colors.get(bg))
  const pass = ratio >= minimum
  console.log(`${pass ? 'PASS' : 'FAIL'} ${label}: ${ratio.toFixed(2)}:1 (required ${minimum}:1)`)
  if (!pass) failed = true
}
console.log('Note: photographic hero contrast requires browser-based testing at text locations.')
if (failed) process.exitCode = 1
