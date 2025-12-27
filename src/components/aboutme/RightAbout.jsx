import React from 'react'

const RightAbout = () => {
  return (
       <div className="bg-white/5 backdrop-blur-xl 
          border border-white/10 rounded-3xl p-8 md:p-10">

          <h2 className="text-3xl font-bold mb-4">About me</h2>

          <p className="text-white/70 leading-relaxed mb-4">
            Welcome to my portfolio! I’m <span className="text-green-400">Your Name</span>, 
            a passionate UI/UX designer dedicated to creating seamless and visually
            engaging digital experiences. With 2 years of experience, I specialize
            in designing intuitive interfaces that enhance usability and user satisfaction.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
            My skills include wireframing, prototyping, and user research, ensuring
            that each design is both aesthetically pleasing and functionally efficient.
            I’ve worked on diverse projects including mobile apps, web platforms, and
            interactive dashboards.
          </p>

          {/* Highlight box */}
          <div className="flex gap-3 items-start bg-green-400/10 
            border border-green-400/30 rounded-xl p-4 mb-8">

            <div className="w-8 h-8 rounded-full bg-green-400/30" />

            <p className="text-sm text-white/80">
              I am deeply committed to my work, investing creativity and precision
              into every project to ensure a unique and effective user experience.
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Skills</h3>

            <div className="flex flex-wrap gap-3">
              {["Figma", "XD", "Illustrator", "Photoshop", "UI", "UX"].map(
                (skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full 
                    bg-white/10 border border-white/20 
                    text-sm hover:border-green-400 transition"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      
  )
}

export default RightAbout
