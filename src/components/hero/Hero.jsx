import React from 'react'
import Navbar from '../others/Navbar'
import LeftHeroSection from './LeftHeroSection'
import HeroSection from './HeroSection'

const Hero = () => {
  return <>
    <div id='home' className="page-section min-h-screen bg-gradient-to-br from-black via-[#04130c] to-black text-white px-6 py-6">
  <Navbar></Navbar>
    
    <HeroSection></HeroSection>
  
   </div>
  </>

  
}

export default Hero
