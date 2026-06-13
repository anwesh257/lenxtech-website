// AI-Generated Code - 2026-06-04 - Composer
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTE_PATHS } from '../src/seo/config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const templatePath = path.join(distDir, 'index.html')
const serverEntry = path.join(distDir, 'server', 'entry-server.js')

if (!fs.existsSync(templatePath)) {
  console.error('Missing dist/index.html — run vite build first.')
  process.exit(1)
}
if (!fs.existsSync(serverEntry)) {
  console.error('Missing dist/server/entry-server.js — run vite build --ssr first.')
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf-8')
const { render } = await import(serverEntry)

function injectPage(html, head) {
  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  if (head) {
    page = page.replace('</head>', `    ${head}\n  </head>`)
  }
  return page
}

function outputPath(route) {
  if (route === '/') return path.join(distDir, 'index.html')
  const segment = route.slice(1)
  return path.join(distDir, segment, 'index.html')
}

for (const route of ROUTE_PATHS) {
  const { html, head } = render(route)
  const out = outputPath(route)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, injectPage(html, head))
  console.log(`prerendered ${route} → ${path.relative(distDir, out)}`)
}

console.log(`Prerendered ${ROUTE_PATHS.length} routes.`)
