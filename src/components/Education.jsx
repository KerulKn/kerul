import { education, activities } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap edu__grid">
        <div>
          <p className="eyebrow">05 / Education</p>
          <h2 className="section-title">Academic background</h2>
          <ul className="edu__list">
            {education.map((e) => (
              <li key={e.program}>
                <div className="edu__row">
                  <h3>{e.school}</h3>
                  <span>{e.period}</span>
                </div>
                <p>{e.program}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">06 / Beyond the desk</p>
          <h2 className="section-title">Extracurricular</h2>
          <ul className="activities">
            {activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
