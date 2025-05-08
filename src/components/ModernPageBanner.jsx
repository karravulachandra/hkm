import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/ModernPageBanner.css';

const ModernPageBanner = ({ title, subtitle, backgroundImage, decorativeElements = true }) => {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Default background image if none provided
  const defaultBg = './assets/images/food-distribution.png';

  return (
    <div className="modern-page-banner" ref={bannerRef}>
      <motion.div
        className="banner-background"
        style={{
          y,
          backgroundImage: `url(${backgroundImage || defaultBg})`
        }}
      />

      <div className="banner-overlay"></div>

      {decorativeElements && (
        <>
          <div className="banner-decoration left"></div>
          <div className="banner-decoration right"></div>
          <div className="banner-decoration bottom"></div>
        </>
      )}

      <div className="container">
        <motion.div
          className="banner-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity }}
        >
          <h1>{title}</h1>
          {subtitle && <p className="banner-subtitle">{subtitle}</p>}

          <div className="banner-divider"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernPageBanner;
