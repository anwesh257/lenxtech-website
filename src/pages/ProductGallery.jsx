// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import { galleryImages } from '../data/content'

export default function ProductGallery() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Product Gallery</h1></div></section>
      <section className="section">
        <div className="container">
          <SectionTitle>Components &amp; Equipment</SectionTitle>
          <ImageGrid images={galleryImages} />
        </div>
      </section>
    </>
  )
}
