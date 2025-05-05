import { useEffect } from 'react';
import AOS from 'aos';
import Gallery from '../components/Gallery';
import DecorativeDivider from '../components/DecorativeDivider';

const GalleryPage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Gallery</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Gallery />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="chakra" />
      </div>
      
      <div className="gallery-additional" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Festival Highlights</h2>
          <div className="festival-highlights">
            <p>
              Throughout the year, we celebrate various Vaishnava festivals according to the Vedic calendar. 
              These festivals are vibrant celebrations filled with kirtan, spiritual discourses, 
              elaborate deity decorations, and delicious prasadam.
            </p>
            <div className="highlights-list">
              <div className="highlight-item">
                <h3>Janmashtami</h3>
                <p>The appearance day of Lord Krishna</p>
              </div>
              <div className="highlight-item">
                <h3>Gaura Purnima</h3>
                <p>The appearance day of Lord Chaitanya Mahaprabhu</p>
              </div>
              <div className="highlight-item">
                <h3>Rama Navami</h3>
                <p>The appearance day of Lord Ramachandra</p>
              </div>
              <div className="highlight-item">
                <h3>Ratha Yatra</h3>
                <p>The chariot festival of Lord Jagannath</p>
              </div>
              <div className="highlight-item">
                <h3>Diwali</h3>
                <p>The festival of lights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
