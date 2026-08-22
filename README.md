# Mohamad Kahirul — Portfolio

A React + Vite portfolio built from your resume, in a greyscale, terminal/coordinate-grid
visual style inspired by the structure of ilhamriski.com (hero, about, experience, work,
skills, education, contact).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`, which you can deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Structure

```
src/
  data.js              ← all your resume content lives here — edit this to update the site
  index.css            ← global tokens (greyscale palette, fonts, grid background)
  App.jsx
  components/
    Nav.jsx
    Hero.jsx           ← typed terminal intro
    About.jsx
    Experience.jsx      ← work history timeline
    Projects.jsx        ← ZUSCaffeine, Harmonic, Soundstech
    Skills.jsx
    Education.jsx       ← education + extracurricular
    Contact.jsx          ← WhatsApp / email prefilled actions
    Footer.jsx
    components.css
```

## Customizing

- **Content:** everything (name, experience, projects, skills) is in `src/data.js`.
- **Colors:** all greyscale tokens are defined at the top of `src/index.css` under `:root`.
- **Fonts:** Space Grotesk (headings), JetBrains Mono (labels/terminal), Inter (body) — loaded via Google Fonts in `index.html`.
