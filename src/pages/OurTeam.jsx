// AI-Generated Code - 2026-06-04 - Composer
import SectionTitle from '../components/SectionTitle'
import { teamMembers } from '../data/content'

export default function OurTeam() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Our Team</h1></div></section>
      <section className="section">
        <div className="container">
          <SectionTitle>Meet Lenxtech</SectionTitle>
          <div className="team-grid">
            {teamMembers.map((m) => (
              <div className="team-card" key={m.name}>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
