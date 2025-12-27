import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto flex items-center justify-between 
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-full px-6 py-3">

        <div className="text-lg font-bold text-green-400">
          LOGO
        </div>

        <ul className="flex gap-8 text-sm text-white/80">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Skills</li>
          <li className="hover:text-white cursor-pointer">Certificates</li>
          <li className="hover:text-white cursor-pointer">projects</li>
        </ul>

        <button className="bg-green-400 text-black px-5 py-2 
          rounded-full text-sm font-medium hover:scale-105 transition">
          Contact Us
        </button>
      </nav>

    </div>
  )
}

export default Navbar
