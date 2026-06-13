// AI-Generated Code - 2026-06-04 - Composer
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Business from './pages/Business'
import Portfolio from './pages/Portfolio'
import ProductGallery from './pages/ProductGallery'
import Library from './pages/Library'
import OurTeam from './pages/OurTeam'
import StockBuy from './pages/StockBuy'
import ContactUs from './pages/ContactUs'
import AuthorizedDistributor from './pages/AuthorizedDistributor'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="business" element={<Business />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="product-gallery" element={<ProductGallery />} />
        <Route path="library" element={<Library />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="stock-buy" element={<StockBuy />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="authorized-distributor" element={<AuthorizedDistributor />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}
