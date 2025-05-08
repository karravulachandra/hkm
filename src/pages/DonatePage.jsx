import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernPageBanner from '../components/ModernPageBanner';
import DonationProgress from '../components/DonationProgress';
import DecorativeDivider from '../components/DecorativeDivider';
import '../styles/DonationProgress.css';

const DonatePage = () => {
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
        title="Support Our Mission"
        subtitle="Your generous contributions help us spread Krishna consciousness and serve the community"
        backgroundImage="https://www.iskconbangalore.org/wp-content/uploads/2016/07/iskcon-bangalore-temple.jpg"
      />

      <div className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DonationProgress />
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

      <div className="donate-additional">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Your Support Matters</h2>
          </motion.div>

          <motion.div
            className="support-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="support-quote">
              <blockquote>
                "The Supreme Personality of Godhead said: If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it."
                <cite>— Bhagavad Gita 9.26</cite>
              </blockquote>
            </div>

            <p>
              Your generous contributions help us maintain and expand our temple facilities, conduct regular worship services,
              organize spiritual programs, distribute prasadam (sanctified food), and spread the message of Krishna consciousness
              throughout the community.
            </p>

            <div className="support-benefits">
              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-image">
                  <img src="https://www.iskconbangalore.org/wp-content/uploads/2016/07/krishna-balaram.jpg" alt="Temple Worship" />
                </div>
                <div className="benefit-content">
                  <h3>Temple Worship</h3>
                  <p>Your donations help maintain daily worship services and festivals for the deities.</p>
                </div>
              </motion.div>

              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-image">
                  <img src="https://www.iskconbangalore.org/wp-content/uploads/2016/07/prasadam.jpg" alt="Prasadam Distribution" />
                </div>
                <div className="benefit-content">
                  <h3>Prasadam Distribution</h3>
                  <p>We distribute free sanctified vegetarian meals to thousands of people in need.</p>
                </div>
              </motion.div>

              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-image">
                  <img src="https://www.iskconbangalore.org/wp-content/uploads/2016/07/sri-chaitanya-mahaprabhu.jpg" alt="Spiritual Education" />
                </div>
                <div className="benefit-content">
                  <h3>Spiritual Education</h3>
                  <p>We conduct regular classes on Bhagavad Gita, Srimad Bhagavatam, and other Vedic texts.</p>
                </div>
              </motion.div>

              <motion.div
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="benefit-image">
                  <img src="/logo.png" alt="Book Distribution" />
                </div>
                <div className="benefit-content">
                  <h3>Book Distribution</h3>
                  <p>We distribute transcendental literature to spread the message of Krishna consciousness.</p>
                </div>
              </motion.div>
            </div>

            <div className="tax-benefits">
              <h3>Tax Benefits</h3>
              <p>
                All donations to Hare Krishna Cultural Centre-Guntur are eligible for tax exemption under Section 80G of the Income Tax Act.
                You will receive an official receipt for your donation that can be used for tax purposes.
              </p>
              <div className="tax-note">
                <strong>Note:</strong> For donations above ₹10,000, please provide your PAN card details for tax exemption purposes.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default DonatePage;
