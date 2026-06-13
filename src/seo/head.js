// AI-Generated Code - 2026-06-04 - Composer
import { socialLinks } from '../data/content'
import { DEFAULT_OG_IMAGE, SITE_NAME, getSiteUrl } from './config'

export function buildHeadData({ title, description }, pathname) {
  const siteUrl = getSiteUrl()
  const canonicalPath = pathname === '/' ? '' : pathname
  const canonical = siteUrl ? `${siteUrl}${canonicalPath || '/'}` : undefined
  const pageTitle = `${title} | ${SITE_NAME}`
  const ogImage = siteUrl ? `${siteUrl}${DEFAULT_OG_IMAGE}` : DEFAULT_OG_IMAGE

  const sameAs = socialLinks
    .map((s) => s.href)
    .filter((href) => href && href !== '#' && href.startsWith('http'))

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    ...(siteUrl && { url: siteUrl }),
    ...(siteUrl && { logo: `${siteUrl}${DEFAULT_OG_IMAGE}` }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  const tags = [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ]
  if (canonical) {
    tags.push({ property: 'og:url', content: canonical })
  }

  const html = [
    `<title>${escapeHtml(pageTitle)}</title>`,
    ...tags.map((t) => metaTagHtml(t)),
    canonical ? `<link rel="canonical" href="${escapeAttr(canonical)}" />` : '',
    `<script type="application/ld+json">${JSON.stringify(organizationJsonLd)}</script>`,
  ].filter(Boolean).join('\n    ')

  return { pageTitle, description, canonical, ogImage, tags, jsonLd: organizationJsonLd, html }
}

function metaTagHtml({ name, property, content }) {
  const attr = name ? `name="${escapeAttr(name)}"` : `property="${escapeAttr(property)}"`
  return `<meta ${attr} content="${escapeAttr(content)}" />`
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}
