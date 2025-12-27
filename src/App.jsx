import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero/Hero.jsx'
import AboutMe from './components/aboutme/AboutMe.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <AboutMe></AboutMe>
    </>
  )
}

export default App
