import React, { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef();

useGSAP(() => {
  gsap.from(navRef.current, {
    y: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <nav  ref={navRef}
      className="max-w-7xl mx-auto flex items-center justify-between
      bg-white/5 backdrop-blur-xl border border-white/10
      rounded-full px-4 sm:px-6 py-3 relative"
    >
      {/* LOGO */}
      <div className="text-lg font-bold text-green-400">
        RizD
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-6 text-sm text-white/80">
        <li className="hover:text-white cursor-pointer" onClick={() => scrollTo("about")}>About</li>
        <li className="hover:text-white cursor-pointer" onClick={() => scrollTo("skillscertificate")}>Skills</li>
        <li className="hover:text-white cursor-pointer" onClick={() => scrollTo("skillscertificate")}>Certificates</li>
        <li className="hover:text-white cursor-pointer" onClick={() => scrollTo("projects")}>Projects</li>
      </ul>

      {/* DESKTOP CTA */}
      <button
        className="hidden md:block bg-green-400 text-black px-5 py-2
        rounded-full text-sm font-medium hover:scale-105 transition"
        onClick={() => scrollTo("contact")}
      >
        Contact Us
      </button>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="absolute top-full mt-4 left-0 w-full
          bg-black/90 backdrop-blur-xl border border-white/10
          rounded-2xl py-4 flex flex-col items-center gap-4
          text-white/80 md:hidden"
        >
          <span className="hover:text-white cursor-pointer" onClick={() => scrollTo("about")}>About</span>
          <span className="hover:text-white cursor-pointer" onClick={() => scrollTo("skillscertificate")}>Skills</span>
          <span className="hover:text-white cursor-pointer" onClick={() => scrollTo("skillscertificate")}>Certificates</span>
          <span className="hover:text-white cursor-pointer" onClick={() => scrollTo("projects")}>Projects</span>

          <button
            className="bg-green-400 text-black px-6 py-2 rounded-full text-sm font-medium"
            onClick={() => scrollTo("contact")}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
