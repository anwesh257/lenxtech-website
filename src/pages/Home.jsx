// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import PdfButton from '../components/PdfButton'
import {
  heroTitle, productTags, intro, stockImages, pdfPlaceholders,
  sectors, commitment, socialLinks,
} from '../data/content'

export default function Home() {
  const certs = pdfPlaceholders.filter((p) => p.category === 'certification')
  const dist = pdfPlaceholders.filter((p) => p.category === 'distributor')
  const honors = pdfPlaceholders.filter((p) => p.category === 'honors')
  const about = pdfPlaceholders.filter((p) => p.category === 'about')

  return (
    <>
      <section className="hero">
        <div className="container hero-heading">
          <h1 className="hero-title">{heroTitle}</h1>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <span>{heroTitle} &nbsp;•&nbsp; </span>
          <span>{heroTitle} &nbsp;•&nbsp; </span>
        </div>
        <p className="hero-tags container"><em>{productTags}</em></p>
      </section>

      <section className="section">
        <div className="container intro-block">
          <h2>{intro.heading}</h2>
          {intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle>Stock Pics</SectionTitle>
          <ImageGrid images={stockImages} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle>Our Certification</SectionTitle>
          <div className="pdf-grid">{certs.map((p) => <PdfButton key={p.title} title={p.title} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle>Authorized Distributor</SectionTitle>
          <div className="pdf-grid">{dist.map((p) => <PdfButton key={p.title} title={p.title} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle>Honors &amp; Achievements</SectionTitle>
          <div className="pdf-grid">{honors.map((p) => <PdfButton key={p.title} title={p.title} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle>Sectors</SectionTitle>
          <div className="card-grid">
            {sectors.map((s) => (
              <div className="card" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle>Our Commitment</SectionTitle>
          <div className="commitment-grid">
            {commitment.map((c) => (
              <div className="commitment-col" key={c.title}>
                <h3>{c.title}</h3>
                {c.type === 'list' ? (
                  <>
                    {c.intro && <p><strong>{c.intro}</strong></p>}
                    <ul>{c.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    {c.footer && <p style={{ marginTop: '1rem' }}>{c.footer}</p>}
                  </>
                ) : (
                  <p>{c.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle>About Us</SectionTitle>
          <div className="pdf-grid">{about.map((p) => <PdfButton key={p.title} title={p.title} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionTitle>Follow Us</SectionTitle>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href}>{s.name}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
