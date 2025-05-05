import { useEffect } from 'react';
import AOS from 'aos';
import Hero from '../components/Hero';
import DecorativeDivider from '../components/DecorativeDivider';

const HomePage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      
      <div data-aos="fade-up">
        <DecorativeDivider type="chakra" />
      </div>
      
      <div className="home-welcome" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Welcome to Hare Krishna Cultural Centre</h2>
          <div className="welcome-content">
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
              <a href="/about" className="cta-button primary">Learn More</a>
              <a href="/contact" className="cta-button secondary">Visit Us</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
