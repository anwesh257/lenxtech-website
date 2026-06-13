// AI-Generated Code - 2026-06-04 - Composer
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import { stockImages } from '../data/content'

export default function StockBuy() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Stock Buy</h1></div></section>
      <section className="section">
        <div className="container">
          <div className="stock-banner">
            <h2>Ready Stock &amp; Surplus Inventory</h2>
            <p>Contact Lenxtech for current stock availability, surplus buys, and competitive offers.</p>
          </div>
          <SectionTitle>Available Stock Highlights</SectionTitle>
          <ImageGrid images={stockImages} />
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn-primary btn-link">Request Quote</Link>
          </p>
        </div>
      </section>
    </>
  )
}
