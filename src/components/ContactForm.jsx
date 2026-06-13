// AI-Generated Code - 2026-06-04 - Composer
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="contact-form">
        <p>Thank you! Your request has been received. We will respond with information and stock offers ASAP.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Request For Quotation</h3>
      <p style={{ marginBottom: '1rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
        Share your inquiries below. We shall provide information &amp; stock offers ASAP!
      </p>
      <label htmlFor="phone">Phone *</label>
      <input id="phone" name="phone" type="tel" required />
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="email">Email *</label>
      <input id="email" name="email" type="email" required />
      <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginBottom: '1rem' }}>
        This form is for demonstration. Connect a backend or mail service for production use.
      </p>
      <button type="submit" className="btn-primary">Send</button>
    </form>
  )
}
