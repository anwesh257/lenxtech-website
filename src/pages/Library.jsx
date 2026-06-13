// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import PdfButton from '../components/PdfButton'
import { libraryDocs } from '../data/content'

export default function Library() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Library</h1></div></section>
      <section className="section">
        <div className="container">
          <SectionTitle>Documents &amp; Resources</SectionTitle>
          <div className="pdf-grid">
            {libraryDocs.map((doc) => (
              <div key={doc.title} style={{ textAlign: 'center' }}>
                <PdfButton title={doc.title} />
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>{doc.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
