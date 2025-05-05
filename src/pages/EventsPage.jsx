import { useEffect } from 'react';
import AOS from 'aos';
import Events from '../components/Events';
import DecorativeDivider from '../components/DecorativeDivider';

const EventsPage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Events</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Events />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="lotus" />
      </div>
      
      <div className="events-additional" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Upcoming Festivals</h2>
          <div className="festivals-list">
            <div className="festival-item">
              <div className="festival-date">
                <span className="month">May</span>
                <span className="day">15</span>
                <span className="year">2023</span>
              </div>
              <div className="festival-details">
                <h3>Narasimha Chaturdashi</h3>
                <p>Appearance day of Lord Narasimhadeva</p>
                <p>Special abhisheka and arati at 6:00 PM</p>
              </div>
            </div>
            
            <div className="festival-item">
              <div className="festival-date">
                <span className="month">Jun</span>
                <span className="day">22</span>
                <span className="year">2023</span>
              </div>
              <div className="festival-details">
                <h3>Panihati Cida Dahi Festival</h3>
                <p>Celebration of Lord Nityananda's pastimes</p>
                <p>Special chipped rice and yogurt prasadam</p>
              </div>
            </div>
            
            <div className="festival-item">
              <div className="festival-date">
                <span className="month">Jul</span>
                <span className="day">3</span>
                <span className="year">2023</span>
              </div>
              <div className="festival-details">
                <h3>Ratha Yatra</h3>
                <p>The famous chariot festival of Lord Jagannath</p>
                <p>Procession starts at 4:00 PM from the temple</p>
              </div>
            </div>
            
            <div className="festival-item">
              <div className="festival-date">
                <span className="month">Aug</span>
                <span className="day">19</span>
                <span className="year">2023</span>
              </div>
              <div className="festival-details">
                <h3>Sri Krishna Janmashtami</h3>
                <p>Appearance day of Lord Krishna</p>
                <p>Fasting till midnight, abhisheka at 11:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventsPage;
