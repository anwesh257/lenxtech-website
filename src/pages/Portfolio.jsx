// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import { productLines, portfolioCatalog } from '../data/content'

export default function Portfolio() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Product Lines</h1></div></section>
      <section className="section">
        <div className="container">
          <ol className="product-lines">
            {productLines.map((line) => <li key={line}>{line}</li>)}
          </ol>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionTitle>Products (A-Z)</SectionTitle>
          {portfolioCatalog.map((cat) => (
            <details className="catalog-item" key={cat.title}>
              <summary>{cat.title}</summary>
              <ul>{cat.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
