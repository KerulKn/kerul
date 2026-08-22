import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const LINES = [
  { cmd: 'whoami', out: profile.fullName },
  { cmd: 'cat role.txt', out: `${profile.role} · Lahad Datu, Sabah` },
  { cmd: 'status --check', out: 'Available for new opportunities' },
]

const STATS = [
  { num: '1+', label: 'Yr Experience' },
  { num: '10+', label: 'Total projects' },
  { num: '15+', label: 'Tech stacks' },
  { num: '100%', label: 'Commitment' },
]

export default function Hero() {
  const [step, setStep] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (step >= LINES.length) return
    const full = LINES[step].cmd
    if (charIdx < full.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 38)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setStep((s) => s + 1)
      setCharIdx(0)
    }, 420)
    return () => clearTimeout(t)
  }, [step, charIdx])

  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left copy */}
          <div className="hero__copy">
            <div className="hero__eyebrow-row">
              <p className="eyebrow">Portfolio · v2.0</p>
              <span className="hero__status">
                <span className="hero__status-dot" />
                Open to work
              </span>
            </div>

            <h1 className="hero__title">
              Hi, I'm {profile.name}.
              <br />
              <span className="hero__title-dim">Full-stack developer,</span>
              <br />
              <span className="hero__title-dim">based in Sabah.</span>
            </h1>

            <p className="hero__desc">{profile.summary}</p>

            <div className="hero__actions">
              <a className="btn btn--solid" href="#projects">View my work</a>
              <a className="btn btn--ghost" href="#contact">Get in touch</a>
            </div>
          </div>

          {/* Right panel — Terminal */}
          <div className="hero__panel">
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__path">kahirul@portfolio — zsh</span>
              </div>
              <div className="terminal__body">
                {LINES.slice(0, step).map((l, i) => (
                  <div className="terminal__row" key={i}>
                    <p><span className="terminal__prompt">❯</span> {l.cmd}</p>
                    <p className="terminal__out">{l.out}</p>
                  </div>
                ))}
                {step < LINES.length && (
                  <p>
                    <span className="terminal__prompt">❯</span>{' '}
                    {LINES[step].cmd.slice(0, charIdx)}
                    <span className="terminal__cursor" />
                  </p>
                )}
                {step >= LINES.length && (
                  <p><span className="terminal__prompt">❯</span> <span className="terminal__cursor" /></p>
                )}
              </div>
            </div>
            <div className="hero__coords">
              <span>Location · {profile.location}</span>
              <span>Status · Active</span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          {STATS.map((s) => (
            <div className="hero__stat" key={s.label}>
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
