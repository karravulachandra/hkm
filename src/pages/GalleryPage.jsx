import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernGallery from '../components/ModernGallery';
import ModernPageBanner from '../components/ModernPageBanner';
import DecorativeDivider from '../components/DecorativeDivider';
import '../styles/ModernGallery.css';
import '../styles/ModernPageBanner.css';

const GalleryPage = () => {
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
        title="Divine Gallery"
        subtitle="Explore the beauty of devotional art and sacred moments"
        backgroundImage="/src/assets/images/krishnaradha.jpg"
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ModernGallery />
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

      <div className="gallery-additional">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Festival Highlights</h2>
          </motion.div>

          <motion.div
            className="festival-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="highlight-intro">
              Throughout the year, we celebrate various Vaishnava festivals according to the Vedic calendar.
              These festivals are vibrant celebrations filled with kirtan, spiritual discourses,
              elaborate deity decorations, and delicious prasadam.
            </p>

            <div className="highlights-list">
              {[
                { name: "Janmashtami", description: "The appearance day of Lord Krishna" },
                { name: "Gaura Purnima", description: "The appearance day of Lord Chaitanya Mahaprabhu" },
                { name: "Rama Navami", description: "The appearance day of Lord Ramachandra" },
                { name: "Ratha Yatra", description: "The chariot festival of Lord Jagannath" },
                { name: "Diwali", description: "The festival of lights" }
              ].map((festival, index) => (
                <motion.div
                  className="highlight-item"
                  key={festival.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3>{festival.name}</h3>
                  <p>{festival.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default GalleryPage;
