import React from 'react'
import Projects from '../myprojects/Projects';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const LeftHeroSection = () => {
  return (
            <div>
          <span className="text-xs tracking-widest text-green-400 uppercase">
            Welcome to my world ✨
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-green-400">RIZAKDEEP SINGH</span>
          </h1>

          <h2 className="mt-2 text-3xl font-semibold text-white/90">
            FULLSTACK DEVELOPER
          </h2>

          <p className="mt-5 text-white/70 max-w-lg leading-relaxed">
            Passionate fullstack developer.I love to Create beautiful interfaces and UI. I transform ideas into seamless designs that
            meet users’ expectations.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
<button
  type="button"
  onClick={() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}
  className="bg-green-400 text-black px-6 py-3 rounded-full font-medium hover:shadow-lg transition"
>
  My Projects
</button>


            <button className="border border-green-400 text-green-400 
              px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition">
              <a href="">Hire Me</a>
            </button>
          </div>

          {/* SOCIAL PLACEHOLDERS */}
          <div className="mt-10 flex gap-4">
            <FaGithub className='h-10 text-4xl' />
         <FaLinkedin className='h-10 text-4xl' />
         <FaInstagram className='h-10 text-4xl' />
         <FaSquareXTwitter  className='h-10 text-4xl'/>
        </div>
        </div>
  )
}

export default LeftHeroSection
