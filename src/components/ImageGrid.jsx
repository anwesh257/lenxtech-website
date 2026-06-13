// AI-Generated Code - 2026-06-04 - Composer
import { assetUrl } from '../base-path.js'

export default function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((img) => (
        <figure key={img.id} className="image-grid-item">
          <img src={assetUrl(img.src)} alt={img.alt} loading="lazy" decoding="async" />
          <figcaption>{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}
