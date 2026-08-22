import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow">03 / Systems & Platforms</p>
        <h2 className="section-title">Featured Systems</h2>
        <p style={{ color: 'var(--ink-dim)', fontSize: '15px', marginTop: '12px', maxWidth: '56ch', fontWeight: 300 }}>
          End-to-end full-stack architectures — from requirement planning and RESTful API design to Flutter mobile apps and web platforms.
        </p>

        {/* Systems Grid */}
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <div className="project__top">
                <span className="project__index">{p.index}</span>
                <span className="project__tag">{p.tag}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              
              {/* Lifecycle phases */}
              {p.phases && (
                <div className="project__phases">
                  {p.phases.map((phase) => (
                    <span className="project__phase" key={phase}>{phase}</span>
                  ))}
                </div>
              )}

              {/* Stack items */}
              <div className="project__stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
