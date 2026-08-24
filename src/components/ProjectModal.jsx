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

    // Lock body scroll
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
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className={`project-modal ${isZoomed ? 'project-modal--zoomed' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="project-modal__header">
          <div className="project-modal__title-box">
            <div className="project-modal__meta">
              <span className="project-modal__index">{project.index}</span>
              <span className="project-modal__tag">{project.tag}</span>
              {hasScreenshots && (
                <span className="project-modal__screen-count">
                  {screenshots.length} UI Screens
                </span>
              )}
            </div>
            <h2 className="project-modal__title">{project.name}</h2>
          </div>

          <div className="project-modal__actions">
            {hasScreenshots && (
              <button
                type="button"
                className="project-modal__btn-zoom"
                onClick={() => setIsZoomed(!isZoomed)}
                title={isZoomed ? 'Exit Expanded View (Esc)' : 'Expand Image'}
              >
                {isZoomed ? '⤢ Normal View' : '⤢ Expand View'}
              </button>
            )}
            <button
              type="button"
              className="project-modal__btn-close"
              onClick={onClose}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="project-modal__body">
          {hasScreenshots ? (
            <div className="project-modal__gallery">
              {/* Main Image Viewer Stage */}
              <div className="project-modal__stage">
                <button
                  type="button"
                  className="project-modal__nav-btn project-modal__nav-btn--prev"
                  onClick={handlePrev}
                  title="Previous (Left Arrow)"
                  aria-label="Previous image"
                >
                  ❮
                </button>

                <div
                  className="project-modal__image-wrapper"
                  onClick={() => setIsZoomed(!isZoomed)}
                  title="Click to toggle expanded view"
                >
                  <img
                    src={getAssetUrl(activeScreen.url)}
                    alt={activeScreen.title}
                    className="project-modal__main-img"
                  />
                  <div className="project-modal__badge-counter">
                    {activeIdx + 1} / {screenshots.length}
                  </div>
                </div>

                <button
                  type="button"
                  className="project-modal__nav-btn project-modal__nav-btn--next"
                  onClick={handleNext}
                  title="Next (Right Arrow)"
                  aria-label="Next image"
                >
                  ❯
                </button>
              </div>

              {/* Caption / Feature Notes */}
              <div className="project-modal__caption-card">
                <div className="project-modal__caption-header">
                  <span className="project-modal__caption-dot" />
                  <h4 className="project-modal__caption-title">{activeScreen.title}</h4>
                </div>
                <p className="project-modal__caption-text">{activeScreen.caption}</p>
              </div>

              {/* Thumbnail Strip */}
              {screenshots.length > 1 && (
                <div className="project-modal__thumbs-track">
                  {screenshots.map((item, idx) => (
                    <button
                      type="button"
                      key={item.url}
                      className={`project-modal__thumb ${
                        idx === activeIdx ? 'project-modal__thumb--active' : ''
                      }`}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <img src={getAssetUrl(item.url)} alt={item.title} />
                      <span className="project-modal__thumb-title">{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="project-modal__empty">
              <div className="project-modal__empty-icon">▤</div>
              <h3>UI/UX Showcase Coming Soon</h3>
              <p>
                Screenshots for {project.name} are currently being compiled. You can review the system
                architecture, core technologies, and lifecycle phases below.
              </p>
            </div>
          )}

          {/* Project Details Footer */}
          <div className="project-modal__footer-info">
            <div className="project-modal__desc-box">
              <p className="project-modal__desc-label">System Overview</p>
              <p className="project-modal__desc">{project.description}</p>
            </div>

            {/* Lifecycle phases */}
            {project.phases && (
              <div className="project-modal__section-block">
                <p className="project-modal__meta-label">Architecture & Lifecycle</p>
                <div className="project__phases">
                  {project.phases.map((phase) => (
                    <span className="project__phase" key={phase}>
                      {phase}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="project-modal__section-block">
              <p className="project-modal__meta-label">Tech Stack</p>
              <div className="project__stack">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
