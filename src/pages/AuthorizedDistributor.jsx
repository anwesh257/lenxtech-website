// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import PdfButton from '../components/PdfButton'
import { pdfPlaceholders } from '../data/content'

export default function AuthorizedDistributor() {
  const dist = pdfPlaceholders.filter((p) => p.category === 'distributor')

  return (
    <>
      <section className="page-hero"><div className="container"><h1>Authorized Distributor</h1></div></section>
      <section className="section">
        <div className="container">
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: 'var(--color-muted)' }}>
            Lenxtech is an authorized distributor for leading EU and Asian brands. View our certifications and partnership documents below.
          </p>
          <div className="pdf-grid">{dist.map((p) => <PdfButton key={p.title} title={p.title} />)}</div>
        </div>
      </section>
    </>
  )
}
