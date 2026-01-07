import { useEffect } from 'react'
import './App.css'
import Hero from './components/hero/Hero.jsx'
import AboutMe from './components/aboutme/AboutMe.jsx'
import SkillsAndCertificate from './components/techstack/SkillsAndCertificate.jsx'
import Projects from './components/myprojects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import { setupSectionScrollEffects } from './animations/useReaveal'
function App() {
  useEffect(() => {
    setupSectionScrollEffects();
  }, [])

  return (
    <>
      <Hero />
      <AboutMe />
      <SkillsAndCertificate />
      <Projects />
      <Contact />
    </>
  )
}

export default App
