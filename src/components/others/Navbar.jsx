import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto flex items-center justify-between 
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-full px-6 py-3">

        <div className="text-lg font-bold text-green-400">
        RizD
        </div>

        <ul className="flex gap-8 text-sm text-white/80">
          <li className="hover:text-white cursor-pointer"  onClick={() => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}>Home</li>
          <li className="hover:text-white cursor-pointer"  onClick={() => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}>About</li>
          <li className="hover:text-white cursor-pointer" onClick={() => {
    const skillscertificate = document.getElementById("skillscertificate");
    if (skillscertificate) {
      skillscertificate.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}>Skills</li>
          <li className="hover:text-white cursor-pointer"onClick={() => {
    const skillscertificate = document.getElementById("skillscertificate");
    if (skillscertificate) {
      skillscertificate.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}>Certificates</li>
          <li className="hover:text-white cursor-pointer"onClick={() => {
    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}>projects</li>
        </ul>

        <button className="bg-green-400 text-black px-5 py-2 
          rounded-full text-sm font-medium hover:scale-105 transition"onClick={() => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}>
          Contact Us
        </button>
      </nav>

    </div>
  )
}

export default Navbar
