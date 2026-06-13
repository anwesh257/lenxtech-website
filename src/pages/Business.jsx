// AI-Generated Code - 2026-06-04 - Composer
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import PdfButton from '../components/PdfButton'
import { industries, pdfPlaceholders } from '../data/content'

export default function Business() {
  const lineCard = pdfPlaceholders.find((p) => p.title === 'Line Card')

  return (
    <>
      <section className="page-hero"><div className="container"><h1>Line Card</h1></div></section>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          {lineCard && <PdfButton title={lineCard.title} />}
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionTitle>Industries</SectionTitle>
          <div className="card-grid">
            {industries.map((ind) => (
              <div className="card" key={ind}><h3>{ind}</h3></div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/portfolio" className="btn-primary btn-link">Explore Portfolio</Link>
          </p>
        </div>
      </section>
    </>
  )
}
