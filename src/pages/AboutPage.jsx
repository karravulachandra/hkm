import { useEffect } from 'react';
import AOS from 'aos';
import About from '../components/About';
import DecorativeDivider from '../components/DecorativeDivider';

const AboutPage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>About Us</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <About />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="om" />
      </div>
      
      <div className="about-additional" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="philosophy-content">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
