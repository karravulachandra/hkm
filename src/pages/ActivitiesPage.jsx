import { useEffect } from 'react';
import AOS from 'aos';
import Activities from '../components/Activities';
import DecorativeDivider from '../components/DecorativeDivider';

const ActivitiesPage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Our Activities</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Activities />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="lotus" />
      </div>
      
      <div className="activities-additional" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Weekly Schedule</h2>
          <div className="schedule-content">
            <div className="schedule-item">
              <div className="schedule-day">Sunday</div>
              <div className="schedule-details">
                <h3>Sunday Feast Program</h3>
                <p>5:00 PM - 8:00 PM</p>
                <ul>
                  <li>Bhajans & Kirtan</li>
                  <li>Discourse on Bhagavad Gita</li>
                  <li>Arati Ceremony</li>
                  <li>Prasadam (Vegetarian Feast)</li>
                </ul>
              </div>
            </div>
            
            <div className="schedule-item">
              <div className="schedule-day">Monday</div>
              <div className="schedule-details">
                <h3>Bhagavad Gita Study Group</h3>
                <p>6:30 PM - 8:00 PM</p>
              </div>
            </div>
            
            <div className="schedule-item">
              <div className="schedule-day">Wednesday</div>
              <div className="schedule-details">
                <h3>Bhakti Vriksha Program</h3>
                <p>6:30 PM - 8:30 PM</p>
              </div>
            </div>
            
            <div className="schedule-item">
              <div className="schedule-day">Friday</div>
              <div className="schedule-details">
                <h3>Youth Program</h3>
                <p>6:00 PM - 8:00 PM</p>
              </div>
            </div>
            
            <div className="schedule-item">
              <div className="schedule-day">Saturday</div>
              <div className="schedule-details">
                <h3>Nama Hatta Program</h3>
                <p>5:00 PM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ActivitiesPage;
