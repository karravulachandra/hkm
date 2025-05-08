// Animation utilities for the Hare Krishna Cultural Centre website
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from 'scrollreveal';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize ScrollReveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false
});

// Common animation variants for Framer Motion
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

// GSAP animations
export const initScrollAnimations = () => {
  // Reveal elements on scroll
  const revealElements = () => {
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    sr.reveal('.reveal-rotate', { 
      origin: 'bottom',
      rotate: { x: 0, y: 0, z: 10 },
      duration: 1500
    });
    sr.reveal('.reveal-scale', { 
      origin: 'center',
      scale: 0.8,
      duration: 1500
    });
  };

  // Parallax effect
  const createParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const depth = element.dataset.depth || 0.2;
      
      gsap.to(element, {
        y: `${depth * 100}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  };

  // Text reveal animation
  const textRevealAnimation = () => {
    const textElements = document.querySelectorAll('.text-reveal');
    
    textElements.forEach(element => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  };

  // Initialize all animations
  revealElements();
  createParallax();
  textRevealAnimation();
};

export default {
  fadeIn,
  staggerContainer,
  textVariant,
  slideIn,
  zoomIn,
  initScrollAnimations
};
