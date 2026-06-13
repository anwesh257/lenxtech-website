// AI-Generated Code - 2026-06-04 - Composer
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTE_PATHS } from '../src/seo/config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

function loadEnvFile(name) {
  const envPath = path.resolve(__dirname, '..', name)
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq)
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!(key in process.env)) process.env[key] = value
  }
}

;['.env.production.local', '.env.production', '.env.local', '.env'].forEach(loadEnvFile)

const siteUrl = (process.env.VITE_SITE_URL || '').replace(/\/$/, '')
if (!siteUrl) {
  console.warn('VITE_SITE_URL not set — sitemap and robots will use relative paths only in robots comment.')
}

const lastmod = new Date().toISOString().slice(0, 10)

const urls = ROUTE_PATHS.map((route) => {
  const loc = siteUrl ? `${siteUrl}${route === '/' ? '/' : route}` : route
  const priority = route === '/' ? '1.0' : '0.8'
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('Wrote dist/sitemap.xml')

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl ? `${siteUrl}/sitemap.xml` : '/sitemap.xml'}
`

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots)
console.log('Wrote dist/robots.txt')
