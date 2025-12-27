import React from 'react'
import imageEnhancer from'../../assets/imgEnhance.png'
import ems from'../../assets/ems.png'
const Projects = () => {
  return (
    <section  id="projects" className="min-h-screen w-full bg-gradient-to-br from-black via-green-950 to-black text-white px-6 py-24 flex items-center">
      
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My Projects
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Discover the projects that showcase my passion for development
            and problem-solving.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PROJECT 1 — EMS */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 hover:border-green-400 transition">

            {/* 16:9 IMAGE */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={ems} // replace with your image
                alt="RizEmp EMS"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full 
              bg-green-400/10 text-green-400 border border-green-400/30">
              Full Stack Project
            </span>

            <h3 className="text-xl font-semibold mb-3">
              RizEmp – Employee Management System
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              A role-based Employee Management System that allows admins
              to manage employees, tasks, and workflows efficiently.
            </p>

            <div className="text-sm text-white/70 mb-6">
              <p>
                <span className="text-green-400">Demo Admin ID:</span>{" "}
                admin@example.com
              </p>
              <p>
                <span className="text-green-400">Password:</span>{" "}
                admin123
              </p>
            </div>

            <a
              href="https://employee-management-system-chi-six.vercel.app/"
          
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-full bg-green-400 text-black 
                font-medium hover:scale-105 transition">
                View Project
              </button>
            </a>
          </div>

          {/* PROJECT 2 — AI IMAGE ENHANCER */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 hover:border-green-400 transition">

            {/* 16:9 IMAGE */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={imageEnhancer} // replace with your image
                alt="Enhanso AI Image Enhancer"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full 
              bg-green-400/10 text-green-400 border border-green-400/30">
              AI + Full Stack
            </span>

            <h3 className="text-xl font-semibold mb-3">
              Enhanso – AI Image Enhancer
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              An AI-powered image enhancement platform that improves image
              quality using AI APIs. Users can upload images, enhance them,
              and download high-quality results.
            </p>

            <a
              href="https://enhanso-ai-image-enhancer.vercel.app/"
            
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-full bg-green-400 text-black 
                font-medium hover:scale-105 transition">
                View Project
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
