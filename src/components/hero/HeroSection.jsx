import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'
const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-15">
        <LeftHeroSection></LeftHeroSection>
       <RightHeroSection></RightHeroSection>
    </section>
  )
}

export default HeroSection
