import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

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
                src="src/assets/images/logo.png"
                alt="Hare Krishna Cultural Centre Temple"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23FFD700' stroke='%23800020' stroke-width='2'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' text-anchor='middle' fill='%23800020'%3E☸%3C/text%3E%3C/svg%3E";
                }}
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
