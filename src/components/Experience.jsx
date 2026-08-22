import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="eyebrow">02 / Experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li className="timeline__item" key={job.org}>
              <div className="timeline__index">{String(i + 1).padStart(2, '0')}</div>
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__org">{job.org}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
