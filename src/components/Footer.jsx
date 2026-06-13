// AI-Generated Code - 2026-06-04 - Composer
import { Link } from 'react-router-dom'
import { socialLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-social">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.href} aria-label={s.label}>{s.name}</a>
          ))}
        </div>
        <p className="footer-copy">
          Copyright © 2026 Lenxtech — All Rights Reserved.{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
