// AI-Generated Code - 2026-06-04 - Composer
export const SITE_NAME = 'Lenxtech'
export const DEFAULT_OG_IMAGE = '/assets/logo.svg'

export const ROUTE_PATHS = [
  '/',
  '/business',
  '/portfolio',
  '/product-gallery',
  '/library',
  '/our-team',
  '/stock-buy',
  '/contact-us',
  '/authorized-distributor',
  '/privacy-policy',
]

const SEO_BY_PATH = {
  '/': {
    title: 'Semiconductor & Industrial Parts Distribution',
    description:
      'Lenxtech distributes semiconductor chips, electronic components, and industrial, aerospace, automotive, and marine parts worldwide.',
  },
  '/business': {
    title: 'Line Card & Authorized Lines',
    description:
      'Explore Lenxtech business lines, industries served, and authorized distribution partnerships for electronic and industrial components.',
  },
  '/portfolio': {
    title: 'Product Lines Catalog',
    description:
      'Browse Lenxtech product lines including semiconductors, PCBs, cables, batteries, motors, alloys, and industrial automation parts.',
  },
  '/product-gallery': {
    title: 'Product Gallery',
    description:
      'View Lenxtech product gallery showcasing semiconductors, PCBs, cables, sensors, displays, and industrial component inventory.',
  },
  '/library': {
    title: 'Document Library',
    description:
      'Access Lenxtech catalogs, quality policies, shipping standards, and technical documentation for distribution partners.',
  },
  '/our-team': {
    title: 'Our Team',
    description:
      'Meet the Lenxtech leadership, supply chain, quality assurance, and customer success teams behind global parts distribution.',
  },
  '/stock-buy': {
    title: 'Stock Buy & Surplus Inventory',
    description:
      'Purchase ready stock and surplus inventory from Lenxtech — semiconductors, PCBs, cables, and industrial components available now.',
  },
  '/contact-us': {
    title: 'Global Offices & Contact',
    description:
      'Contact Lenxtech offices in Europe and Asia-Pacific. Find locations in Budapest, Hyderabad, Hong Kong, Mumbai, and Chennai.',
  },
  '/authorized-distributor': {
    title: 'Authorized Distributor',
    description:
      'Lenxtech authorized distributor certificates and partner credentials for semiconductor and industrial component supply.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description:
      'Lenxtech privacy policy — how we collect, use, and protect your information when you visit our website or contact us.',
  },
}

const DEFAULT_SEO = SEO_BY_PATH['/']

export function getSeoForPath(pathname) {
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname
  return SEO_BY_PATH[normalized] ?? DEFAULT_SEO
}

export function getSiteUrl() {
  const url = import.meta.env.VITE_SITE_URL
  if (!url) return ''
  return url.replace(/\/$/, '')
}
