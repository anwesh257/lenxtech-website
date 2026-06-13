// AI-Generated Code - 2026-06-04 - Composer
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { getSeoForPath } from '../seo/config'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

export default function Layout() {
  const { pathname } = useLocation()
  const seo = getSeoForPath(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Seo {...seo} />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
