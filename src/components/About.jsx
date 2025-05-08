import '../styles/About.css';
import DecorativeDivider from './DecorativeDivider';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">About Us</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <span className="om-symbol">ॐ</span>
              <p>
                Hare Krishna Cultural Centre, Guntur is dedicated to promoting the timeless wisdom of Vedic knowledge and culture.
                Founded on the principles of Bhakti Yoga as taught by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada,
                we offer a spiritual sanctuary for those seeking higher knowledge and self-realization.
              </p>
            </div>

            <DecorativeDivider type="lotus" />

            <p>
              Our centre provides a variety of spiritual and cultural programs designed to help individuals
              develop their relationship with God (Krishna) and lead a balanced, purposeful life based on
              spiritual principles.
            </p>
            <p>
              The centre was established with the vision to create a spiritual hub in Guntur where people from all walks of life
              can come together to learn about the ancient Vedic culture, philosophy, and lifestyle. We conduct regular programs
              including bhajan sessions, spiritual discourses, cultural events, and community service activities.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Spiritual Education</h3>
                  <p>Regular classes on Bhagavad Gita, Srimad Bhagavatam, and other Vedic scriptures</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,3v10.55c-0.59-0.34-1.27-0.55-2-0.55c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4V7h4V3H12z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Cultural Activities</h3>
                  <p>Traditional festivals, music, dance, and art programs celebrating Vedic heritage</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z M15,6.5V9h-4v2h4v2.5l3.5-3.5L15,6.5z M9,10.5L5.5,14L9,17.5V15h4v-2H9 V10.5z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Community Service</h3>
                  <p>Food distribution, educational initiatives, and welfare activities for the community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <img src="/src/assets/images/guntur-temple.jpg" alt="Krishna Temple Entrance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
