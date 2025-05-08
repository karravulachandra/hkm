import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Hare Krishna Cultural Centre</h3>
            <p>Guntur</p>
            <p className="footer-address">
              Opp. Orion Hotel, Near RTO Office<br />
              JKC College Road, Guntur<br />
              Andhra Pradesh
            </p>
            <p className="footer-phone">Phone: 9849994873</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="footer-subscribe">
              <h4>Subscribe to Newsletter</h4>
              <form className="subscribe-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Hare Krishna Cultural Centre, Guntur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
