import React, { useState } from 'react'
import { projects } from '../data.js'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow">03 / Systems & Platforms</p>
        <h2 className="section-title">Featured Systems</h2>
        <p style={{ color: 'var(--ink-dim)', fontSize: '15px', marginTop: '12px', maxWidth: '56ch', fontWeight: 300 }}>
          End-to-end full-stack architectures — from requirement planning and RESTful API design to Flutter mobile apps and web platforms. Click any system to inspect the UI/UX screens and specs.
        </p>

        {/* Systems Grid */}
        <div className="projects-grid">
          {projects.map((p) => {
            const hasScreenshots = p.screenshots && p.screenshots.length > 0

            return (
              <article
                className={`project ${hasScreenshots ? 'project--has-gallery' : ''}`}
                key={p.name}
                onClick={() => setSelectedProject(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedProject(p)
                  }
                }}
              >
                <div className="project__top">
                  <span className="project__index">{p.index}</span>
                  <div className="project__badges">
                    {hasScreenshots && (
                      <span className="project__gallery-badge">
                        ✦ {p.screenshots.length} UI Screens
                      </span>
                    )}
                    <span className="project__tag">{p.tag}</span>
                  </div>
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

                {/* Bottom CTA trigger */}
                <div className="project__cta-bar">
                  <span className="project__cta-text">
                    {hasScreenshots ? 'View UI/UX Screens' : 'View Architecture'}
                  </span>
                  <span className="project__cta-icon">↗</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
