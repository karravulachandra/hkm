import { useEffect } from 'react';
import AOS from 'aos';
import Contact from '../components/Contact';
import Map from '../components/Map';
import DecorativeDivider from '../components/DecorativeDivider';

const ContactPage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Contact Us</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Contact />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="om" />
      </div>
      
      <div data-aos="fade-up">
        <Map />
      </div>
      
      <div data-aos="fade-up">
        <div className="container visit-info">
          <h2 className="section-title">Visit Us</h2>
          <div className="visit-details">
            <div className="address-details">
              <h3>Address</h3>
              <p>Hare Krishna Cultural Centre</p>
              <p>Opp. Orion Hotel, Near RTO Office</p>
              <p>JKC College Road, Guntur</p>
              <p>Andhra Pradesh, India</p>
            </div>
            
            <div className="contact-details">
              <h3>Contact Information</h3>
              <p><strong>Phone:</strong> 9849994873</p>
              <p><strong>Email:</strong> info@hkmguntur.org</p>
            </div>
            
            <div className="timing-details">
              <h3>Temple Timings</h3>
              <p><strong>Morning Arati:</strong> 5:30 AM - 7:00 AM</p>
              <p><strong>Evening Arati:</strong> 6:30 PM - 8:00 PM</p>
              <p><strong>Temple Open:</strong> 5:30 AM - 8:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
