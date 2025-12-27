import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'
const HeroSection = () => {
  return (
    <section className="max-w-full mx-auto mt-16 ml-35 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <LeftHeroSection></LeftHeroSection>
       <RightHeroSection></RightHeroSection>
    </section>
  )
}

export default HeroSection
