import React from 'react'

const Navbar = () => {
  return (
    <div>
           <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
        <div className="text-lg font-bold text-neonGreen">LOGO</div>

        <ul className="hidden md:flex gap-8 text-sm text-white/80">
          <li className="text-neonGreen">Home</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Our Works</li>
          <li className="hover:text-white cursor-pointer">Reviews</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>

        <button className="bg-neonGreen text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
          Contact Us
        </button>
      </nav>

    </div>
  )
}

export default Navbar
