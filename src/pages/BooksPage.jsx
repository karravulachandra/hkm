/*
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernPageBanner from '../components/ModernPageBanner';
import BookShowcase3D from '../components/BookShowcase3D';
import DecorativeDivider from '../components/DecorativeDivider';
import '../styles/BookShowcase3D.css';

const BooksPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModernPageBanner
        title="Sacred Literature"
        subtitle="Explore the timeless wisdom of Vedic knowledge through our collection of books"
        backgroundImage="/assets/images/puri-temple.jpg"
      />

      <div className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">Bhaktivedanta Book Trust Publications</h2>
          <p className="section-description">
            Discover the profound spiritual wisdom in these transcendental literatures translated and
            commented by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the Founder-Acharya of ISKCON.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BookShowcase3D />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DecorativeDivider type="chakra" />
      </motion.div>

      <div className="books-additional">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Importance of Transcendental Literature</h2>
          </motion.div>

          <motion.div
            className="importance-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="importance-quote">
              <blockquote>
                "If you want to know me, then you must know me through my books."
                <cite>— Srila Prabhupada</cite>
              </blockquote>
            </div>

            <p>
              The Vedic literature is the oldest and most comprehensive spiritual knowledge available to humanity.
              These sacred texts contain profound wisdom on the nature of consciousness, the purpose of life,
              and our relationship with the Supreme.
            </p>

            <p>
              Srila Prabhupada translated and commented on many important Vedic texts, making this ancient wisdom
              accessible to the modern world. His books have been translated into over 80 languages and distributed
              in the millions worldwide.
            </p>

            <div className="book-benefits">
              <motion.div
                className="benefit-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Knowledge</h3>
                <p>Gain profound spiritual knowledge that has been preserved for thousands of years.</p>
              </motion.div>

              <motion.div
                className="benefit-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Devotion</h3>
                <p>Develop pure devotional service to the Supreme Lord through the study of these sacred texts.</p>
              </motion.div>

              <motion.div
                className="benefit-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 1V4" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 1V4" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 1V4" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Liberation</h3>
                <p>Find freedom from material suffering through the application of spiritual knowledge.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default BooksPage;
*/

// Placeholder component for BooksPage (commented out for now)
const BooksPage = () => {
  return null;
};

export default BooksPage;
