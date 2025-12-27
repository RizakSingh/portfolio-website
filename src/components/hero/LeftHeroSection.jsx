import React from 'react'

const LeftHeroSection = () => {
  return (
            <div>
          <span className="text-xs tracking-widest text-green-400 uppercase">
            Welcome to my world ✨
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-green-400">Your Name</span>
          </h1>

          <h2 className="mt-2 text-3xl font-semibold text-white/90">
            UI & UX Designer
          </h2>

          <p className="mt-5 text-white/70 max-w-lg leading-relaxed">
            Passionate UI/UX designer. I create intuitive and visually appealing
            digital experiences. I transform ideas into seamless designs that
            meet users’ expectations.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <button className="bg-green-400 text-black px-6 py-3 
              rounded-full font-medium hover:shadow-lg transition">
              My Projects
            </button>

            <button className="border border-green-400 text-green-400 
              px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition">
              Download CV
            </button>
          </div>

          {/* SOCIAL PLACEHOLDERS */}
          <div className="mt-10 flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full 
                border border-white/20 bg-white/5 
                hover:border-green-400 transition"
              />
            ))}
          </div>
        </div>
  )
}

export default LeftHeroSection
