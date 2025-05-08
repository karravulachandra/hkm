import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { fadeIn, textVariant, staggerContainer } from '../utils/animations';
import '../styles/ModernHero.css';

const ModernHero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the hero background
    gsap.to(heroRef.current, {
      backgroundPosition: '100% 50%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Floating animation for the deity image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Text reveal animation
    const textElements = textRef.current.querySelectorAll('.animate-text');
    gsap.fromTo(textElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      }
    );
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="modern-hero"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          ref={textRef}
          variants={fadeIn('right', 0.2)}
        >
          <h1 className="animate-text">
            <span className="text-highlight">Hare Krishna</span> Cultural Centre
          </h1>
          <h2 className="animate-text">Guntur</h2>

          <div className="hero-mantra animate-text">
            <p>Hare Krishna Hare Krishna Krishna Krishna Hare Hare</p>
            <p>Hare Rama Hare Rama Rama Rama Hare Hare</p>
          </div>

          <p className="hero-description animate-text">
            Experience the divine wisdom of Vedic knowledge and embark on a spiritual journey of self-realization through Bhakti Yoga.
          </p>

          <div className="hero-buttons animate-text">
            <Link to="/about" className="cta-button primary">
              Discover Our Centre
              <span className="button-icon">→</span>
            </Link>
            <Link to="/activities" className="cta-button secondary">
              Join Our Activities
              <span className="button-icon">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={fadeIn('left', 0.5)}
        >
          <div className="image-container" ref={imageRef}>
            <img
              src="./assets/images/krishnaflute.webp"
              alt="Lord Krishna with flute"
              className="deity-image"
            />
            <div className="image-glow"></div>
          </div>

          <motion.div
            className="floating-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="floating-element lotus-1"></div>
            <div className="floating-element lotus-2"></div>
            <div className="floating-element chakra-1"></div>
            <div className="floating-element chakra-2"></div>
            <div className="floating-element om-1"></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        >
          <span>Scroll Down</span>
          <i className="scroll-arrow"></i>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ModernHero;
