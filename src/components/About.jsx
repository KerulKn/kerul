import { profile } from '../data.js'

const FACTS = [
  { label: 'Based in',  value: 'Lahad Datu, Sabah' },
  { label: 'Role',      value: 'Junior Software Developer' },
  { label: 'Focus',     value: 'Web · Mobile · Database' },
  { label: 'Education', value: 'B.Sc Computer Graphics' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow">01 / About</p>
        <div className="about__grid">
          <h2 className="section-title">
            A mathematics graduate who builds<br className="hide-mobile" /> software people actually use.
          </h2>

          <div className="about__body">
            <p>{profile.summary}</p>
            <p>
              My work spans admin dashboards, client-facing apps and internal tools — from
              a coffee-ordering platform with three separate user modules, to a store
              management system built inside a government IT department.
            </p>

            <dl className="about__facts">
              {FACTS.map((f) => (
                <div className="about__fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
