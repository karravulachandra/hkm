import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernPageBanner from '../components/ModernPageBanner';
import ModernEventsCalendar from '../components/ModernEventsCalendar';
import DecorativeDivider from '../components/DecorativeDivider';
import '../styles/ModernEventsCalendar.css';

const EventsPage = () => {
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
        title="Divine Events"
        subtitle="Join us for spiritual celebrations and gatherings throughout the year"
        backgroundImage="/src/assets/images/gauripaurnima.jpg"
      />

      <div className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">Events Calendar</h2>
          <p className="section-description">
            Explore our upcoming events and festivals. Click on any event to see more details.
            You can filter events by category or select a specific date to see what's happening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ModernEventsCalendar />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DecorativeDivider type="lotus" />
      </motion.div>

      <div className="events-additional">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Annual Major Festivals</h2>
            <p className="section-description">
              These are the major festivals we celebrate every year according to the Vedic calendar.
              Join us for these special occasions filled with spiritual bliss and devotion.
            </p>
          </motion.div>

          <div className="festivals-grid">
            {[
              {
                name: "Gaura Purnima",
                description: "Appearance day of Lord Chaitanya Mahaprabhu",
                date: "March (varies yearly)",
                image: "/src/assets/images/deities/Chaitanya-Mahaprabhu.jpg"
              },
              {
                name: "Ram Navami",
                description: "Appearance day of Lord Ramachandra",
                date: "April (varies yearly)",
                image: "/src/assets/images/rama-navami.jpg"
              },
              {
                name: "Narasimha Chaturdashi",
                description: "Appearance day of Lord Narasimhadeva",
                date: "May (varies yearly)",
                image: "/src/assets/images/deities/prahalada.jpg"
              },
              {
                name: "Ratha Yatra",
                description: "The chariot festival of Lord Jagannath",
                date: "July (varies yearly)",
                image: "/src/assets/images/deities/puri-jagannath.jpg"
              },
              {
                name: "Janmashtami",
                description: "Appearance day of Lord Krishna",
                date: "August/September (varies yearly)",
                image: "/src/assets/images/deities/krishnaflute.webp"
              },
              {
                name: "Radhastami",
                description: "Appearance day of Srimati Radharani",
                date: "September (varies yearly)",
                image: "/src/assets/images/deities/radhadevi.jpg"
              }
            ].map((festival, index) => (
              <motion.div
                className="festival-card"
                key={festival.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="festival-image">
                  <img src={festival.image} alt={festival.name} />
                </div>
                <div className="festival-content">
                  <h3>{festival.name}</h3>
                  <p className="festival-desc">{festival.description}</p>
                  <p className="festival-date">{festival.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default EventsPage;
