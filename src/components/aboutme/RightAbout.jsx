import React from 'react'

const RightAbout = () => {
  return (
       <div className="bg-white/5 backdrop-blur-xl 
          border border-white/10 rounded-3xl p-8 md:p-10">

          <h2 className="text-3xl font-bold mb-4">About me</h2>

          <p className="text-white/70 leading-relaxed mb-4">
            Welcome to my portfolio! I’m <span className="text-green-400">Rizakdeep Singh</span>, 
          I am a Full-Stack Developer skilled in building scalable and maintainable web applications using the MERN stack, RESTful APIs, and modern UI frameworks. I focus on writing clean, efficient code while ensuring performance, security, and reliability across both frontend and backend systems.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
        I am passionate about creating user-focused digital experiences and continuously improving my technical skills. I enjoy learning new technologies, solving real-world problems, and delivering production-ready solutions that create real impact.
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
        
        </div>
      
  )
}

export default RightAbout
