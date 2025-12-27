import React from 'react'
import LeftAbout from './LeftAbout'
import RightAbout from './RightAbout'
import BottomDivider from './BottomDivider'

const AboutMe = () => {
  return (
    <section id='about' className="relative w-full bg-gradient-to-br from-black via-green-950 to-black text-white px-6 py-24">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <LeftAbout></LeftAbout>
            <RightAbout></RightAbout>
           </div>
           <BottomDivider></BottomDivider>
    </section>
  )
}

export default AboutMe
