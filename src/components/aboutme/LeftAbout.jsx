import React from 'react'

const LeftAbout = () => {
  return (
    <div className="relative flex justify-center md:justify-start">
          
          {/* Blob background */}
          <div className="absolute w-72 h-72 rounded-full 
            bg-gradient-to-br from-green-400/40 to-emerald-500/10 
            blur-2xl" />

          {/* Avatar frame */}
          <div className="relative w-64 h-64 rounded-3xl 
            bg-black/40 border border-white/20 
            backdrop-blur-xl flex items-center justify-center">

            {/* Avatar placeholder */}
            <div className="w-40 h-40 rounded-full 
              bg-black/50 border border-white/20" />
          </div>

          {/* Floating dots */}
          <div className="absolute -top-8 left-10 w-3 h-3 rounded-full bg-green-400/60" />
          <div className="absolute top-10 -right-4 w-4 h-4 rounded-full bg-green-400/40" />
        </div>

  )
}

export default LeftAbout
