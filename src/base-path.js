// AI-Generated Code - 2026-06-13 - Composer
export function getBasename() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return base || undefined
}

export function assetUrl(path) {
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${clean}`
}
