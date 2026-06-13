// AI-Generated Code - 2026-06-04 - Composer
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo-link" onClick={() => setOpen(false)}>
          <img src="/assets/logo.svg" alt="Lenxtech" className="logo-img" width="160" height="40" />
        </Link>
        <nav className="nav-desktop" aria-label="Main navigation">
          {navLinks.map((l) => (
            <NavLink key={l.path} to={l.path} end={l.path === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span className={`bar ${open ? 'open' : ''}`} />
            <span className={`bar ${open ? 'open' : ''}`} />
            <span className={`bar ${open ? 'open' : ''}`} />
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`nav-overlay ${open ? 'visible' : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <nav
        id="mobile-nav"
        className={`nav-mobile container ${open ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {navLinks.map((l) => (
          <NavLink key={l.path} to={l.path} end={l.path === '/'} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
