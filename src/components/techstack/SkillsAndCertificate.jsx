import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SkillsAndCertificate = () => {
  const cardsRef = useRef();

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.children; 
    gsap.from(cards, {
     
      y: 30,
      scale: 0.98,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 85%',
      },
    });
  }, []);

  return (

    <section id='skillscertificate' className="min-h-screen w-full bg-gradient-to-br from-black via-green-950 to-black text-white px-6 py-24">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Skills & Certificates
        </h2>
        <p className="mt-3 text-white/70 max-w-xl mx-auto">
          Technologies I work with and certifications that validate my skills.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          ref={cardsRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >

          {/* CARD 1 — Frontend */}
          <div className="skill-card min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Frontend Development
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Building responsive and interactive user interfaces using
              React, Tailwind CSS, HTML5, CSS3, and JavaScript.
              Focused on performance, accessibility, and clean UI.
            </p>
          </div>

          {/* CARD 2 — Backend */}
          <div className="skill-card min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Backend Development
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Developing scalable server-side applications using
              Node.js and Express.js with REST APIs, authentication,
              authorization, and business logic handling.
            </p>
          </div>

          {/* CARD 3 — Database */}
          <div className="skill-card min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Database Management
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Experience with MongoDB for designing schemas,
              managing collections, performing CRUD operations,
              and integrating databases with backend services.
            </p>
          </div>

          {/* CARD 4 — Gen AI */}
          <div className="skill-card min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Generative AI (Basics)
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Understanding of Generative AI foundations including
              LLM basics, prompt engineering, API usage, and
              practical AI integration into web applications.
            </p>
          </div>

          {/* CARD 5 — Full Stack Certificate */}
          <div className="skill-card min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Full Stack Development Certificate
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Certified Full Stack Developer covering frontend,
              backend, database, authentication, and deployment.
            </p>
            <a
              href="https://drive.google.com/file/d/1c5hmgyoLw5KpwDEC_cl2Ymv5MgmvTL5U/view?usp=drive_link"
              className="text-sm text-green-400 underline hover:text-green-300"
            >
              View Certificate
            </a>
          </div>

          {/* CARD 6 — Gen AI Certificate */}
          <div className="min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Gen AI Foundation Certificate
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Certification focused on Generative AI fundamentals,
              use cases, ethical AI, and real-world applications.
            </p>
            <a
              href="https://drive.google.com/file/d/1yGtkmMlhnC8VpNh7D02AD268KYGBIvuM/view?usp=drive_link"
              className="text-sm text-green-400 underline hover:text-green-300"
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}


  


export default SkillsAndCertificate
