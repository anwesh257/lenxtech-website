// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { assetUrl } from '../base-path.js'
import { offices, addresses } from '../data/content'

export default function ContactUs() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Our Presence</h1></div></section>
      <section className="section">
        <div className="container">
          <div className="office-grid">
            {offices.map((o) => (
              <div className="office-card" key={o.location}>
                <img src={assetUrl(o.image)} alt={o.location} loading="lazy" />
                <h3>{o.region}</h3>
                <p><em>{o.location}</em></p>
              </div>
            ))}
          </div>
          {addresses.map((a) => (
            <div key={a.name} style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--color-primary)' }}>{a.name}</h3>
              {a.lines.map((l) => <p key={l} style={{ color: 'var(--color-muted)' }}>{l}</p>)}
            </div>
          ))}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
