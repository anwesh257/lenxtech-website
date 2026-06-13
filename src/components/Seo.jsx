// AI-Generated Code - 2026-06-04 - Composer
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildHeadData } from '../seo/head'

function upsertMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function Seo({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const { pageTitle, canonical, tags, jsonLd } = buildHeadData({ title, description }, pathname)
    document.title = pageTitle
    for (const tag of tags) {
      if (tag.name) upsertMeta('name', tag.name, tag.content)
      if (tag.property) upsertMeta('property', tag.property, tag.content)
    }
    upsertCanonical(canonical)
    upsertJsonLd('lenxtech-org-jsonld', jsonLd)
  }, [title, description, pathname])

  return null
}
