import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernHero from '../components/ModernHero';
import DeityCarousel from '../components/DeityCarousel';
import DevotionalQuote from '../components/DevotionalQuote';
import ActivitiesShowcase from '../components/ActivitiesShowcase';
import DecorativeDivider from '../components/DecorativeDivider';
import { initScrollAnimations } from '../utils/animations';

const HomePage = () => {
  useEffect(() => {
    // Initialize all scroll animations
    initScrollAnimations();

    // Add scroll reveal classes to elements
    const welcomeSection = document.querySelector('.home-welcome');
    if (welcomeSection) {
      welcomeSection.classList.add('reveal-bottom');
    }
  }, []);

  return (
    <main className="home-page">
      {/* Modern Hero Section with Animations */}
      <ModernHero />

      {/* Decorative Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DecorativeDivider type="chakra" />
      </motion.div>

      {/* Welcome Section */}
      <div className="home-welcome">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Welcome to Hare Krishna Cultural Centre</h2>
          </motion.div>

          <motion.div
            className="welcome-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              The Hare Krishna Cultural Centre in Guntur is dedicated to promoting the timeless wisdom of Vedic knowledge and culture.
              We offer a spiritual sanctuary for those seeking higher knowledge and self-realization through the practice of Bhakti Yoga.
            </p>
            <p>
              Our centre provides a variety of spiritual and cultural programs designed to help individuals
              develop their relationship with God (Krishna) and lead a balanced, purposeful life based on
              spiritual principles.
            </p>
            <div className="welcome-buttons">
              <a href="/about" className="cta-button primary">
                Learn More
                <span className="button-icon">→</span>
              </a>
              <a href="/contact" className="cta-button secondary">
                Visit Us
                <span className="button-icon">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Deity Carousel */}
      <DeityCarousel />

      {/* Devotional Quote */}
      <DevotionalQuote />

      {/* Activities Showcase */}
      <ActivitiesShowcase />
    </main>
  );
};

export default HomePage;
