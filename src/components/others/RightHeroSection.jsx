import React from 'react'

const RightHeroSection = () => {
  return (
     <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl 
            border border-white/20 bg-gradient-to-br 
            from-green-400/20 to-transparent 
            backdrop-blur-xl shadow-xl flex items-center justify-center">

            {/* Avatar placeholder */}
            <div className="w-48 h-48 rounded-full 
              bg-black/40 border border-white/20" />
          </div>

          {/* Decorative blobs */}
          <div className="absolute -top-6 -left-6 w-16 h-16 
            rounded-full bg-green-400/30 blur-xl" />

          <div className="absolute -bottom-6 -right-6 w-20 h-20 
            rounded-full bg-green-400/20 blur-2xl" />
        </div>
  )
}

export default RightHeroSection
