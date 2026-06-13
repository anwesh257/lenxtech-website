// AI-Generated Code - 2026-06-04 - Composer
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'
import { getBasename } from './base-path.js'
import { getSeoForPath } from './seo/config'
import { buildHeadData } from './seo/head'

export function render(url) {
  const basename = getBasename()
  const location = basename ? `${basename}${url === '/' ? '' : url}` : url
  const seo = getSeoForPath(url)
  const { html: head } = buildHeadData(seo, url)
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={location} basename={basename}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head }
}
