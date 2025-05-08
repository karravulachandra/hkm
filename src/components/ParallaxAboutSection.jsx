import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/ParallaxAboutSection.css';

const ParallaxAboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 1]);
  
  return (
    <div className="parallax-about-section" ref={sectionRef}>
      <div className="parallax-background"></div>
      <div className="parallax-overlay"></div>
      
      <div className="container">
        <div className="parallax-content">
          <motion.div 
            className="parallax-item"
            style={{ y: y1, opacity: opacity1 }}
          >
            <div className="parallax-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V4" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20V22" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.93 4.93L6.34 6.34" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.66 17.66L19.07 19.07" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H4" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12H22" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.93 19.07L6.34 17.66" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.66 6.34L19.07 4.93" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Philosophy</h3>
            <p>
              The Hare Krishna Cultural Centre follows the philosophy of Achintya Bheda Abheda Tattva, 
              the simultaneous oneness and difference with the Supreme Lord, as taught by Lord Chaitanya Mahaprabhu. 
              We believe in the practice of Bhakti Yoga, the path of devotional service, as the most effective means 
              of spiritual realization in this age of Kali.
            </p>
          </motion.div>
          
          <motion.div 
            className="parallax-item"
            style={{ y: y2, opacity: opacity2 }}
          >
            <div className="parallax-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 21V7L12 3L19 7V21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V15H15V21" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to promote the teachings of Bhagavad Gita and Srimad Bhagavatam as presented by 
              Srila Prabhupada, to establish Krishna consciousness as a way of life, and to help people 
              understand their eternal relationship with God. We aim to create a spiritual sanctuary where 
              everyone can experience the bliss of devotional service.
            </p>
          </motion.div>
          
          <motion.div 
            className="parallax-item"
            style={{ y: y3, opacity: opacity3 }}
          >
            <div className="parallax-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              We envision a world where the teachings of Lord Krishna are accessible to everyone, 
              where spiritual values guide human society, and where people live in harmony with nature, 
              themselves, and God. We strive to create a community of devotees dedicated to personal 
              spiritual growth and compassionate service to all living beings.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="parallax-decoration left"></div>
      <div className="parallax-decoration right"></div>
    </div>
  );
};

export default ParallaxAboutSection;
