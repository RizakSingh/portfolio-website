import React from 'react'
import Navbar from '../others/Navbar'
import LeftHeroSection from '../others/LeftHeroSection'
import HeroSection from '../others/HeroSection'

const Hero = () => {
  return <>
    <div className="min-h-screen bg-gradient-to-br from-black via-[#04130c] to-black text-white px-6 py-6">
  <Navbar></Navbar>
    
    <HeroSection></HeroSection>
  
   </div>
  </>

  
}

export default Hero
