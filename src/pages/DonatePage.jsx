import { useEffect } from 'react';
import AOS from 'aos';
import Donate from '../components/Donate';
import DecorativeDivider from '../components/DecorativeDivider';

const DonatePage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Donate</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Donate />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="om" />
      </div>
      
      <div className="donate-additional" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Current Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <div className="project-image-placeholder">
                <span>Temple Expansion</span>
              </div>
              <div className="project-details">
                <h3>Temple Expansion Project</h3>
                <p className="project-description">
                  We are currently expanding our temple facilities to accommodate more devotees and provide 
                  better services to the community. The expansion includes a larger temple hall, additional 
                  classrooms for spiritual education, and improved prasadam facilities.
                </p>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '65%' }}></div>
                  </div>
                  <div className="progress-text">65% of ₹50,00,000 goal</div>
                </div>
                <button className="donate-button">Contribute Now</button>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image-placeholder">
                <span>Food For Life</span>
              </div>
              <div className="project-details">
                <h3>Food For Life Program</h3>
                <p className="project-description">
                  Our Food For Life program distributes free, nutritious vegetarian meals to those in need. 
                  Your donations help us provide prasadam to underprivileged children, the elderly, and 
                  disaster victims.
                </p>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '40%' }}></div>
                  </div>
                  <div className="progress-text">40% of ₹20,00,000 annual goal</div>
                </div>
                <button className="donate-button">Contribute Now</button>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image-placeholder">
                <span>Cow Protection</span>
              </div>
              <div className="project-details">
                <h3>Cow Protection Initiative</h3>
                <p className="project-description">
                  We are establishing a goshala (cow sanctuary) to provide shelter and care for cows. 
                  This project aligns with the Vedic principle of cow protection and demonstrates 
                  compassion for all living beings.
                </p>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '25%' }}></div>
                  </div>
                  <div className="progress-text">25% of ₹15,00,000 goal</div>
                </div>
                <button className="donate-button">Contribute Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonatePage;
