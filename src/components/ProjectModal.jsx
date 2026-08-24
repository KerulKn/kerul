import React, { useEffect, useState } from 'react'

export function getAssetUrl(url) {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url
  }
  const clean = url.replace(/^\.?\//, '')
  const base = import.meta.env.BASE_URL || './'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}${clean}`
}

export default function ProjectModal({ project, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const screenshots = project?.screenshots || []
  const hasScreenshots = screenshots.length > 0
  const activeScreen = hasScreenshots ? screenshots[activeIdx] : null

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false)
        } else {
          onClose()
        }
      } else if (hasScreenshots) {
        if (e.key === 'ArrowRight') {
          setActiveIdx((prev) => (prev + 1) % screenshots.length)
        } else if (e.key === 'ArrowLeft') {
          setActiveIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)
        }
      }
    }

    const origOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = origOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasScreenshots, isZoomed, onClose, screenshots.length])

  if (!project) return null

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev + 1) % screenshots.length)
  }

  return (
    <>
      <div className="project-modal-backdrop" onClick={onClose}>
        <div className="steam-modal" onClick={(e) => e.stopPropagation()}>
          
          {/* Header */}
          <div className="steam-modal__header">
            <div className="steam-modal__header-left">
              <span className="steam-modal__index">{project.index}</span>
              <span className="steam-modal__tag">{project.tag}</span>
              <h2 className="steam-modal__title">{project.name}</h2>
            </div>

            <div className="steam-modal__header-right">
              {hasScreenshots && (
                <span className="steam-modal__count-badge">
                  {screenshots.length} Screens Album
                </span>
              )}
              <button
                type="button"
                className="steam-modal__close-btn"
                onClick={onClose}
                aria-label="Close modal"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Steam Grid: Left Media + Right Details */}
          <div className="steam-modal__grid">
            
            {/* Left Media Stage & Album */}
            <div className="steam-modal__media-col">
              {hasScreenshots ? (
                <>
                  {/* Big Featured Screen Viewer */}
                  <div className="steam-modal__main-viewport">
                    <button
                      type="button"
                      className="steam-nav-btn steam-nav-btn--prev"
                      onClick={handlePrev}
                      title="Previous screen (←)"
                      aria-label="Previous image"
                    >
                      ❮
                    </button>

                    <div
                      className="steam-modal__main-img-wrap"
                      onClick={() => setIsZoomed(true)}
                      title="Click to expand fullscreen"
                    >
                      <img
                        src={getAssetUrl(activeScreen.url)}
                        alt={activeScreen.title}
                        className="steam-modal__main-img"
                      />
                      <div className="steam-modal__overlay-actions">
                        <span className="steam-modal__zoom-hint">⤢ Click to Fullscreen</span>
                        <span className="steam-modal__counter-pill">
                          {activeIdx + 1} / {screenshots.length}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="steam-nav-btn steam-nav-btn--next"
                      onClick={handleNext}
                      title="Next screen (→)"
                      aria-label="Next image"
                    >
                      ❯
                    </button>
                  </div>

                  {/* Album Thumbnail Slider with Custom Scrollbar */}
                  <div className="steam-modal__album-container">
                    <div className="steam-modal__album-track">
                      {screenshots.map((item, idx) => (
                        <button
                          key={item.url}
                          type="button"
                          className={`steam-thumb ${idx === activeIdx ? 'steam-thumb--active' : ''}`}
                          onClick={() => setActiveIdx(idx)}
                        >
                          <img src={getAssetUrl(item.url)} alt={item.title} />
                          <span className="steam-thumb__label">{item.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="steam-modal__placeholder">
                  <div className="steam-placeholder-icon">▤</div>
                  <h3>UI/UX Showcase Coming Soon</h3>
                  <p>Screenshots for {project.name} are currently being compiled.</p>
                </div>
              )}
            </div>

            {/* Right Column: Project Description, Selected Screen Info, Architecture & Stack */}
            <div className="steam-modal__sidebar-col">
              
              {/* Project Description */}
              <div className="steam-sidebar__panel">
                <p className="steam-sidebar__label">Project Overview</p>
                <p className="steam-sidebar__desc">{project.description}</p>
              </div>

              {/* Dynamic Screen Spotlight */}
              {hasScreenshots && activeScreen && (
                <div className="steam-sidebar__panel steam-sidebar__panel--spotlight">
                  <div className="steam-spotlight__head">
                    <span className="steam-spotlight__dot" />
                    <p className="steam-sidebar__label">Active Screen View</p>
                  </div>
                  <h4 className="steam-spotlight__title">{activeScreen.title}</h4>
                  <p className="steam-spotlight__caption">{activeScreen.caption}</p>
                </div>
              )}

              {/* Architecture Phases */}
              {project.phases && (
                <div className="steam-sidebar__panel">
                  <p className="steam-sidebar__label">Architecture & Lifecycle</p>
                  <div className="steam-tags-wrap">
                    {project.phases.map((phase) => (
                      <span key={phase} className="steam-phase-tag">
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="steam-sidebar__panel">
                <p className="steam-sidebar__label">Technologies & Stack</p>
                <div className="steam-tags-wrap">
                  {project.stack.map((s) => (
                    <span key={s} className="steam-tech-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Zoom Overlay */}
      {isZoomed && hasScreenshots && (
        <div className="steam-zoom-overlay" onClick={() => setIsZoomed(false)}>
          <div className="steam-zoom-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="steam-zoom-close"
              onClick={() => setIsZoomed(false)}
              title="Close Fullscreen (Esc)"
            >
              ✕ Close Fullscreen
            </button>
            <img
              src={getAssetUrl(activeScreen.url)}
              alt={activeScreen.title}
              className="steam-zoom-img"
            />
            <p className="steam-zoom-caption">{activeScreen.title} — {activeScreen.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
