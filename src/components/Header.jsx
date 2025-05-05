import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
// Import the logo directly
import logoImage from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-decoration"></div>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <div className="logo-image">
              <img 
                src={logoImage} 
                alt="Hare Krishna Cultural Centre Temple" 
                className="logo-image"
              />
            </div>
            <div className="logo-text">
              <h1>Hare Krishna Cultural Centre</h1>
              <p>Guntur</p>
            </div>
          </Link>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
            <li><NavLink to="/activities" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Activities</NavLink></li>
            <li><NavLink to="/events" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
            <li><NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
            <li><NavLink to="/books" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink></li>
            <li><NavLink to="/donate" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Donate</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
