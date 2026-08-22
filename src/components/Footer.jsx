import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <p className="footer__name">
              <span className="footer__name-dot" />
              MK<span style={{ color: 'var(--ink-faint)' }}>.dev</span>
            </p>
            <p className="footer__tag">
              {profile.role} based in<br />{profile.location}.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="footer__col-label">Navigation</p>
            <nav className="footer__links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Work</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Social / contact */}
          <div>
            <p className="footer__col-label">Connect</p>
            <div className="footer__links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>

          <p className="footer__meta">
            © {new Date().getFullYear()} {profile.fullName}. Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}
