import { useMemo, useState } from 'react'

const MONTHS = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
const WEEKS_PER_MONTH = [4, 4, 5, 4, 5, 4, 4, 5, 4, 5, 4, 4, 1]
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', '']
const TOTAL_COLS = 53
const TOTAL_ROWS = 7
const LEGEND = [0, 1, 2, 3, 4]

// Generate realistic distribution matching the screenshot:
function generateContributions() {
  return Array.from({ length: TOTAL_COLS }, (_, col) =>
    Array.from({ length: TOTAL_ROWS }, (_, row) => {
      const val = Math.sin(col * 17.3 + row * 9.7) * 10000
      const rand = val - Math.floor(val)

      if (col < 16) {
        if (col === 12 && row === 4) return 2
        return rand > 0.94 ? 1 : 0
      } else if (col < 26) {
        if (rand > 0.82) return 4
        if (rand > 0.65) return 3
        if (rand > 0.45) return 2
        if (rand > 0.25) return 1
        return 0
      } else {
        if (rand > 0.80) return 4
        if (rand > 0.60) return 3
        if (rand > 0.40) return 2
        if (rand > 0.20) return 1
        return 0
      }
    })
  )
}

export default function Heatmap() {
  const [activeYear, setActiveYear] = useState('2026')
  const grid = useMemo(() => generateContributions(), [])

  return (
    <section className="heatmap-section" style={{ padding: '80px 0', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
          GitHub Activity
        </p>

        {/* Outer GitHub-style Container */}
        <div className="gh-card">
          {/* Header Row */}
          <div className="gh-card__header">
            <div>
              <h2 className="gh-card__title">344 contributions in the last year</h2>
              <p className="gh-card__subtitle">Synced from github.com/KerulKn</p>
            </div>
            
            {/* Year Filters */}
            <div className="gh-card__years">
              {['2026', '2025', '2024'].map((yr) => (
                <button
                  key={yr}
                  className={`gh-year-btn ${activeYear === yr ? 'gh-year-btn--active' : ''}`}
                  onClick={() => setActiveYear(yr)}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Heatmap Box */}
          <div className="gh-heatmap-scroll">
            <div className="heatmap" style={{ margin: '0 auto' }}>
              {/* Month labels */}
              <div className="heatmap__months">
                {MONTHS.map((m, i) => (
                  <div
                    key={`${m}-${i}`}
                    className="heatmap__month"
                    style={{ width: `${WEEKS_PER_MONTH[i] * (11 + 3)}px` }}
                  >
                    {m}
                  </div>
                ))}
              </div>

              {/* Grid + day labels */}
              <div className="heatmap__body">
                <div className="heatmap__days">
                  {DAY_LABELS.map((label, i) => (
                    <div
                      key={i}
                      className={`heatmap__day-label${label ? '' : ' heatmap__day-label--empty'}`}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <div className="heatmap__grid">
                  {grid.map((col, ci) => (
                    <div className="heatmap__col" key={ci}>
                      {col.map((level, ri) => (
                        <div
                          key={ri}
                          className={`heatmap__cell heatmap__cell--${level}`}
                          title={`Week ${ci + 1}, Day ${ri + 1}: ${level > 0 ? level * 2 + 1 + ' contributions' : 'No contributions'}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer / Legend */}
              <div className="gh-heatmap-footer">
                <a
                  href="https://github.com/KerulKn"
                  target="_blank"
                  rel="noreferrer"
                  className="gh-count-link"
                >
                  Learn how we count contributions
                </a>
                <div className="heatmap__footer" style={{ margin: 0 }}>
                  <span>Less</span>
                  <div className="heatmap__legend-cells">
                    {LEGEND.map((l) => (
                      <div
                        key={l}
                        className={`heatmap__legend-cell heatmap__cell--${l}`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
