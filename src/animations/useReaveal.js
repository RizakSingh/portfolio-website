import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reveal = (targets, options = {}) => {
  gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: targets,
        start: "top 85%",
      },
      ...options,
    }
  );
};

export const setupSectionScrollEffects = () => {
  const sections = document.querySelectorAll('section.page-section, div.page-section');
  sections.forEach((section) => {
    // Animate a CSS custom property used by the section pseudo-element
    // so only the background (backdrop) is blurred and section children
    // (cards, text) remain sharp.
    gsap.fromTo(
      section,
      { scale: 0.98, opacity: 0.9, '--section-bg-blur': '4px' },
      {
        scale: 1,
        opacity: 1,
        '--section-bg-blur': '0px',
        ease: 'power1.out',
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          scrub: true,
        },
      }
    );
  });
};
