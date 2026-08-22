import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const composed = `Hi Kahirul, my name is ${name || '...'}.

${message || '...'}`

  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    'Portfolio enquiry'
  )}&body=${encodeURIComponent(composed)}`

  const waHref = `${profile.whatsappLink}?text=${encodeURIComponent(composed)}`

  return (
    <section id="contact">
      <div className="wrap">
        {/* Big-type header */}
        <div className="contact__hero">
          <p className="eyebrow">07 / Contact</p>
          <h2 className="contact__big">
            Let's work<br />
            <em>together.</em>
          </h2>
          <p className="contact__lede">
            Open to junior / software developer roles and freelance web or mobile projects.
            The fastest reply is WhatsApp.
          </p>
        </div>

        {/* Form + cards */}
        <div className="contact__grid">
          <div className="contact__form">
            <label>
              Name
              <input
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label>
              Message
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you looking to build?"
              />
            </label>
            <div className="contact__form-actions">
              <a className="btn btn--solid" href={waHref} target="_blank" rel="noreferrer">
                Send via WhatsApp
              </a>
              <a className="btn btn--ghost" href={mailHref}>Email instead</a>
            </div>
            <p className="contact__note">
              Opens WhatsApp or your email app with the message pre-filled — nothing is sent automatically.
            </p>
          </div>

          <div className="contact__cards">
            <a className="contact__card" href={profile.whatsappLink} target="_blank" rel="noreferrer">
              <span className="eyebrow">WhatsApp</span>
              <p>{profile.whatsapp}</p>
            </a>
            <a className="contact__card" href={`mailto:${profile.email}`}>
              <span className="eyebrow">Email</span>
              <p>{profile.email}</p>
            </a>
            <a className="contact__card" href={profile.github} target="_blank" rel="noreferrer">
              <span className="eyebrow">GitHub</span>
              <p>github.com/KerulKn</p>
            </a>
            <div className="contact__card contact__card--static">
              <span className="eyebrow">Based in</span>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
