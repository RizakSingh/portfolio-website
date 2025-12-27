import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className="min-h-screen w-full bg-gradient-to-br from-black via-green-950 to-black text-white px-6 py-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Me
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Let’s build something impactful together.  
            Open to internships, full-time roles, and remote opportunities.
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

          {/* Name & Role */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-400">
              Rizakdeep Singh
            </h3>
            <p className="text-white/70 mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

            <div className="flex flex-col gap-1">
              <span className="text-white/50">Email</span>
              <span className="text-white">
                srizak95@gmail.com
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white/50">Location</span>
              <span className="text-white">
                Ludhiana, India (Open to Remote)
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white/50">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/rizakdeep-singh-8013681a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                linkedin.com/in/rizakdeep-singh
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white/50">GitHub</span>
              <a
                href="https://github.com/RizakSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                github.com/RizakSingh
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-10 p-4 rounded-xl bg-green-400/10 border border-green-400/30">
            <p className="text-sm text-white/80">
              Currently available for internships, full-time roles, and
              remote opportunities. Ready to contribute, learn, and grow
              with a strong team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
