import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernPageBanner from '../components/ModernPageBanner';
import About from '../components/About';
import ParallaxAboutSection from '../components/ParallaxAboutSection';
import AnimatedTimeline from '../components/AnimatedTimeline';
import DecorativeDivider from '../components/DecorativeDivider';
import '../styles/ParallaxAboutSection.css';
import '../styles/AnimatedTimeline.css';

const AboutPage = () => {
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
        title="About Our Centre"
        subtitle="Discover the spiritual sanctuary of Hare Krishna Cultural Centre in Guntur"
        backgroundImage="/src/assets/images/temple.jpg"
      />

      <div className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <About />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DecorativeDivider type="om" />
      </motion.div>

      {/* Parallax About Section with Philosophy, Mission, Vision */}
      <ParallaxAboutSection />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DecorativeDivider type="chakra" />
      </motion.div>

      {/* Animated Timeline */}
      <AnimatedTimeline />

      <div className="about-additional">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Spiritual Lineage</h2>
          </motion.div>

          <motion.div
            className="philosophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              The Hare Krishna movement, formally known as the International Society for Krishna Consciousness (ISKCON),
              was founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966. The movement is based on the
              ancient Vedic scriptures of India, particularly the Bhagavad-gita and Srimad-Bhagavatam.
            </p>
            <p>
              We follow the teachings of Lord Krishna, who appeared on this planet 5,000 years ago and gave the essence
              of Vedic knowledge to His friend and disciple, Arjuna. This conversation, known as the Bhagavad-gita,
              forms the philosophical foundation of our spiritual practice.
            </p>
            <p>
              Our primary spiritual practice is bhakti-yoga, or devotional service to Lord Krishna. This includes chanting
              the Hare Krishna mantra, studying Vedic scriptures, worshiping the Deity forms of the Lord, and engaging in
              various devotional activities.
            </p>

            <div className="guru-parampara">
              <motion.div
                className="guru-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="guru-image">
                  <img src="/src/assets/images/last-day-of-srilaprabhupada.jpg" alt="Srila Prabhupada" />
                </div>
                <div className="guru-info">
                  <h3>Srila Prabhupada</h3>
                  <p>Founder-Acharya of ISKCON</p>
                </div>
              </motion.div>

              <motion.div
                className="guru-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="guru-image">
                  <img src="/src/assets/images/Chaitanya-Mahaprabhu.jpg" alt="Lord Chaitanya" />
                </div>
                <div className="guru-info">
                  <h3>Lord Chaitanya</h3>
                  <p>The Golden Avatar</p>
                </div>
              </motion.div>

              <motion.div
                className="guru-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="guru-image">
                  <img src="/src/assets/images/krishnaflute.webp" alt="Lord Krishna" />
                </div>
                <div className="guru-info">
                  <h3>Lord Krishna</h3>
                  <p>The Supreme Personality of Godhead</p>
                </div>
              </motion.div>
            </div>

            <h3 className="lineage-subtitle">Our Journey in Images</h3>

            <div className="lineage-gallery">
              <motion.div
                className="lineage-image-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="lineage-image">
                  <img src="/src/assets/images/temple.jpg" alt="Temple" />
                </div>
                <div className="lineage-caption">
                  <p>Our Temple</p>
                </div>
              </motion.div>

              <motion.div
                className="lineage-image-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="lineage-image">
                  <img src="/src/assets/images/first-Iskcon-temple.jpg" alt="First ISKCON Temple" />
                </div>
                <div className="lineage-caption">
                  <p>First ISKCON Temple</p>
                </div>
              </motion.div>

              <motion.div
                className="lineage-image-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="lineage-image">
                  <img src="/src/assets/images/last-day-of-srilaprabhupada.jpg" alt="Last Days of Srila Prabhupada" />
                </div>
                <div className="lineage-caption">
                  <p>Last Days of Srila Prabhupada</p>
                </div>
              </motion.div>

              <motion.div
                className="lineage-image-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="lineage-image">
                  <img src="/src/assets/images/guntur-temple.jpg" alt="Guntur Temple" />
                </div>
                <div className="lineage-caption">
                  <p>Guntur Temple</p>
                </div>
              </motion.div>

              <motion.div
                className="lineage-image-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="lineage-image">
                  <img src="/src/assets/images/food-distribution.png" alt="Food Distribution" />
                </div>
                <div className="lineage-caption">
                  <p>Food Distribution</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default AboutPage;
