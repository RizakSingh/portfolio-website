import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero/Hero.jsx'
import AboutMe from './components/aboutme/AboutMe.jsx'
import SkillsAndCertificate from './components/techstack/SkillsAndCertificate.jsx'
import Projects from './components/myprojects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero ></Hero>
     <AboutMe></AboutMe>
     <SkillsAndCertificate></SkillsAndCertificate>
     <Projects></Projects>
   <Contact></Contact>
    </>
  )
}

export default App
