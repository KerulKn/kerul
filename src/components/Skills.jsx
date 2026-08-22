import { skills } from '../data.js'

function ClaudeLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M13.8 2.5a1.2 1.2 0 0 0-1.6.4L5.3 14.7a1.2 1.2 0 0 0 .3 1.6l4 2.8a1.2 1.2 0 0 0 1.6-.4l6.9-11.8a1.2 1.2 0 0 0-.3-1.6l-4-2.8z"
        fill="#D97757"
      />
      <path
        d="M4.2 8.7a1.2 1.2 0 0 0-.4 1.6l4.2 7.2a1.2 1.2 0 0 0 1.6.4l3.2-1.8-6.8-9.4-1.8 2z"
        fill="#D97757"
        opacity="0.8"
      />
      <circle cx="18.5" cy="17.5" r="2.5" fill="#D97757" />
    </svg>
  )
}

function GeminiLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"
        fill="url(#gemini-grad)"
      />
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B72CF" />
          <stop offset="0.5" stopColor="#29B6F6" />
          <stop offset="1" stopColor="#D97757" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CodexLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.28 10.5a5.5 5.5 0 0 0-.48-4.66 5.6 5.6 0 0 0-4.14-2.73 5.5 5.5 0 0 0-4.52.88 5.6 5.6 0 0 0-3.32-1.92 5.6 5.6 0 0 0-5.3 2.65 5.5 5.5 0 0 0-.82 4.62 5.6 5.6 0 0 0-.82 5.39 5.6 5.6 0 0 0 3.32 3.16 5.5 5.5 0 0 0 4.52-.88 5.6 5.6 0 0 0 3.32 1.92 5.6 5.6 0 0 0 5.3-2.65 5.5 5.5 0 0 0 .82-4.62 5.6 5.6 0 0 0 .82-5.39z"
        stroke="#10A37F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" fill="#10A37F" />
    </svg>
  )
}

function UnityLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ffffff' }}>
      <path d="M10.4 12l2.4-4.2H7.9L5.5 12l2.4 4.2h4.9L10.4 12zm3.2 0l-2.4 4.2h4.9l2.4-4.2-2.4-4.2h-4.9l2.4 4.2zM12 2L2 7.8v10.4L12 24l10-5.8V7.8L12 2zm7.6 15.1L12 21.6l-7.6-4.5V8.9L12 4.4l7.6 4.5v9.2z" />
    </svg>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="eyebrow">04 / Skills & Stack</p>
        <h2 className="section-title">Tools & Technologies</h2>
        <p style={{ color: 'var(--ink-dim)', fontSize: '15px', marginTop: '12px', maxWidth: '56ch', fontWeight: 300 }}>
          Core languages, frameworks, AI agents, and architectures I work with daily.
        </p>

        <div className="skills-icon-section">
          {skills.map((group) => (
            <div className="skills-cat" key={group.label}>
              <div className="skills-cat__label">{group.label}</div>
              <div className="skills-cat__icons">
                {group.items.map((item) => (
                  <div className="skill-icon" key={item.name} title={item.name}>
                    <div className="skill-icon__graphic">
                      {item.icon === 'svg-claude' ? (
                        <ClaudeLogo />
                      ) : item.icon === 'svg-gemini' ? (
                        <GeminiLogo />
                      ) : item.icon === 'svg-openai' ? (
                        <CodexLogo />
                      ) : item.icon === 'svg-unity' ? (
                        <UnityLogo />
                      ) : item.icon.startsWith('devicon-') ? (
                        <i className={item.icon} style={{ color: item.color }} />
                      ) : (
                        <i className="devicon-code-plain" />
                      )}
                    </div>
                    <span className="skill-icon__name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
