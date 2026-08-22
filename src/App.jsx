import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Heatmap from './components/Heatmap.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BottomRunner from './components/BottomRunner.jsx'
import './components/components.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Heatmap />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BottomRunner />
    </>
  )
}
