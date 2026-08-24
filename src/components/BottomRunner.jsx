import React, { useEffect, useState, memo } from 'react'

const DIGITAL_LOGS = [
  'system.init() -> status: active',
  'git:main $ compile --prod --fast',
  'POST /api/v1/deploy -> 200 OK',
  'λ (req) => flutter.render(app)',
  'SELECT * FROM solutions WHERE state = "shipped"',
  '[sabah.my] ping: 14ms | load: 0.04',
  'ai_agent.dispatch({ task: "optimize" })',
]

const TECH_STACK = [
  { icon: 'devicon-flutter-plain', color: '#54C5F8', name: 'Flutter' },
  { icon: 'devicon-dart-plain', color: '#0175C2', name: 'Dart' },
  { icon: 'devicon-react-original', color: '#61DAFB', name: 'React' },
  { icon: 'devicon-javascript-plain', color: '#F7DF1E', name: 'JavaScript' },
  { icon: 'devicon-laravel-plain', color: '#FF2D20', name: 'Laravel' },
  { icon: 'devicon-php-plain', color: '#777BB4', name: 'PHP' },
  { icon: 'devicon-python-plain', color: '#3776AB', name: 'Python' },
  { icon: 'devicon-mysql-plain', color: '#4479A1', name: 'MySQL' },
  { icon: 'devicon-postgresql-plain', color: '#4169E1', name: 'PostgreSQL' },
  { icon: 'devicon-fastapi-plain', color: '#009688', name: 'REST API' },
  { icon: 'devicon-git-plain', color: '#F05032', name: 'Git' },
  { icon: 'devicon-github-original', color: '#EDE8E3', name: 'GitHub' },
  { icon: 'devicon-figma-plain', color: '#F24E1E', name: 'Figma' },
  { icon: 'devicon-html5-plain', color: '#E34F26', name: 'HTML5' },
  { icon: 'devicon-css3-plain', color: '#1572B6', name: 'CSS3' },
  { icon: 'devicon-cplusplus-plain', color: '#00599C', name: 'C++' },
  { icon: 'devicon-wordpress-plain', color: '#21759B', name: 'WordPress' },
  { icon: 'devicon-vscode-plain', color: '#007ACC', name: 'VS Code' },
]

// Duplicate list inside group to ensure width easily exceeds any 4K/ultrawide screen width (>5000px)
const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK]

// Pure static memoized Marquee Strip — NEVER re-renders on state changes
const BottomMarquee = memo(function BottomMarquee() {
  return (
    <div className="bottom-strip" aria-label="Technology stack marquee">
      <div className="bottom-strip__track">
        {/* Group 1 */}
        <div className="bottom-strip__group">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div className="bottom-strip__item" key={`g1-${idx}`}>
              <i className={item.icon} style={{ color: item.color }} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Group 2 (Exact Duplicate for Continuous Zero-Stutter Loop) */}
        <div className="bottom-strip__group" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div className="bottom-strip__item" key={`g2-${idx}`}>
              <i className={item.icon} style={{ color: item.color }} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

// Isolated Typewriter badge
function TypewriterBadge({ text }) {
  const [typedChars, setTypedChars] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const currentText = DIGITAL_LOGS[currentIdx]

    if (!isDeleting) {
      if (typedChars < currentText.length) {
        const t = setTimeout(() => setTypedChars((c) => c + 1), 45)
        return () => clearTimeout(t)
      } else {
        const pause = setTimeout(() => setIsDeleting(true), 3500)
        return () => clearTimeout(pause)
      }
    } else {
      if (typedChars > 0) {
        const t = setTimeout(() => setTypedChars((c) => Math.max(0, c - 2)), 20)
        return () => clearTimeout(t)
      } else {
        setIsDeleting(false)
        setCurrentIdx((prev) => (prev + 1) % DIGITAL_LOGS.length)
      }
    }
  }, [typedChars, isDeleting, currentIdx])

  const handleNext = (e) => {
    e.stopPropagation()
    setIsDeleting(false)
    setTypedChars(0)
    setCurrentIdx((prev) => (prev + 1) % DIGITAL_LOGS.length)
  }

  const displayText = DIGITAL_LOGS[currentIdx].slice(0, typedChars)

  return (
    <div
      className="digital-walker__badge"
      onClick={handleNext}
      title="Click to write next command"
    >
      <span className="digital-walker__prompt">❯</span>
      <span className="digital-walker__text">{displayText}</span>
      <span className="digital-walker__cursor" />
    </div>
  )
}

export default function BottomRunner() {
  return (
    <div className="bottom-ticker-wrap">
      {/* Pinned Bottom-Left Cyber Coder Bot */}
      <div className="digital-walker-fixed">
        <TypewriterBadge />

        {/* Standing Idle Cyber Bot */}
        <div className="cyber-bot cyber-bot--idle">
          <svg
            className="cyber-bot__svg"
            width="40"
            height="48"
            viewBox="0 0 44 52"
            fill="none"
          >
            {/* Back Arm */}
            <g className="cyber-arm-idle cyber-arm-idle--back">
              <rect x="26" y="22" width="4" height="10" rx="2" fill="#5C5550" />
              <circle cx="28" cy="33" r="2.5" fill="#DA7756" />
            </g>

            {/* Back Leg (Standing Solid) */}
            <g className="cyber-leg-idle">
              <rect x="24" y="34" width="4.5" height="10" rx="2" fill="#3D3835" />
              <rect x="22" y="44" width="8" height="4" rx="1.5" fill="#DA7756" />
            </g>

            {/* Torso / Computer Chassis */}
            <g className="cyber-torso-idle">
              <line x1="22" y1="8" x2="22" y2="2" stroke="#DA7756" strokeWidth="2" strokeLinecap="round" />
              <circle cx="22" cy="2" r="2" fill="#E8896A" className="antenna-glow" />

              <rect x="10" y="8" width="24" height="18" rx="4" fill="#181614" stroke="#DA7756" strokeWidth="1.5" />
              <rect x="13" y="11" width="18" height="12" rx="2" fill="#0C0B0A" />
              <text x="15" y="20" fill="#DA7756" fontSize="8" fontFamily="monospace" fontWeight="bold">
                &lt;/&gt;
              </text>
              <circle cx="27.5" cy="17" r="1.2" fill="#E8896A" className="screen-led" />

              <rect x="13" y="27" width="18" height="9" rx="2.5" fill="#252220" stroke="#4A4440" strokeWidth="1" />
              <line x1="16" y1="31" x2="28" y2="31" stroke="#DA7756" strokeWidth="1" strokeDasharray="2 1" />
            </g>

            {/* Front Leg (Standing Solid) */}
            <g className="cyber-leg-idle">
              <rect x="15" y="34" width="4.5" height="10" rx="2" fill="#5C5550" />
              <rect x="14" y="44" width="8" height="4" rx="1.5" fill="#E8896A" />
            </g>

            {/* Front Arm */}
            <g className="cyber-arm-idle cyber-arm-idle--front">
              <rect x="14" y="22" width="4" height="10" rx="2" fill="#9A9088" />
              <circle cx="16" cy="33" r="2.5" fill="#E8896A" />
            </g>
          </svg>
        </div>
      </div>

      {/* Memoized 100% Zero-Stutter Marquee Strip */}
      <BottomMarquee />
    </div>
  )
}
