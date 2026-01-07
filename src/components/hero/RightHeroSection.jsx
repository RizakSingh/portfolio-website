import React, { useRef, useState } from 'react'
import avatar from '../../assets/avtar.png'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const RightHeroSection = () => {
  const imageRef = useRef();
  const [flipped, setFlipped] = useState(false);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1,0.6)",
    });
  });

  const toggleFlip = () => setFlipped(v => !v);

  return (
    <div ref={imageRef} className="relative flex justify-center">
      <div
        onClick={toggleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFlip(); }}
        className="w-72 h-72 md:w-80 md:h-80 rounded-3xl 
            border border-white/20 bg-gradient-to-br 
            from-green-400/20 to-transparent 
            backdrop-blur-xl shadow-xl flex items-center justify-center
            flip-container cursor-pointer"
        aria-pressed={flipped}
      >
        <div className={`flipper w-full h-full ${flipped ? 'is-flipped' : ''}`}>
          <div className="front w-full h-full flex items-center justify-center rounded-3xl">
            <div className="w-48 h-48 rounded-full bg-black/40 border border-white/20 overflow-hidden flex items-center justify-center">
              <img src={avatar} alt="rizak" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="back w-full h-full flex items-center justify-center rounded-3xl">
            <div className="p-4 text-center text-sm text-white">
              <p className="font-medium">Rizak</p>
              <p className="text-xs mt-1">Frontend developer • React / GSAP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-green-400/30 blur-xl" />
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-green-400/20 blur-2xl" />
    </div>
  )
}

export default RightHeroSection
