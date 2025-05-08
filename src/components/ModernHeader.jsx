import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ModernHeader.css';

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Add or remove body class when menu state changes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function to ensure body class is removed when component unmounts
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Navigation items with dropdowns
  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'Our Mission', path: '/about#mission' },
        { name: 'Temple History', path: '/about#history' },
        { name: 'Spiritual Lineage', path: '/about#lineage' }
      ]
    },
    {
      name: 'Activities',
      path: '/activities',
      dropdown: [
        { name: 'Bhagavad Gita Classes', path: '/activities#classes' },
        { name: 'Kirtan & Bhajans', path: '/activities#kirtan' },
        { name: 'Prasadam Distribution', path: '/activities#prasadam' }
      ]
    },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    // { name: 'Books', path: '/books' }, // Commented out temporarily
    { name: 'Contact', path: '/contact' }
  ];

  // Animation variants
  const headerVariants = {
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    hidden: {
      y: -100,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const dropdownItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const mobileMenuItemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.header
      className={`modern-header ${isScrolled ? 'scrolled' : ''} ${theme}`}
      variants={headerVariants}
      initial="visible"
      animate="visible"
    >
      <div className="header-decoration"></div>
      <div className="container">
        <Link to="/" className="logo">
          <motion.div
            className="logo-image"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/assets/images/logo.png"
              alt="Hare Krishna Cultural Centre Temple"
            />
          </motion.div>
          <div className="logo-text">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hare Krishna Cultural Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Guntur
            </motion.p>
          </div>
        </Link>

        <motion.div
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={item.dropdown ? 'has-dropdown' : ''}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`nav-link dropdown-toggle ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <span className={`dropdown-arrow ${activeDropdown === item.name ? 'active' : ''}`}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="dropdown-menu"
                          variants={dropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <motion.div
                              key={dropdownItem.name}
                              variants={dropdownItemVariants}
                            >
                              <Link
                                to={dropdownItem.path}
                                className="dropdown-item"
                              >
                                {dropdownItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="navIndicator"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </NavLink>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mobile-nav"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    variants={mobileMenuItemVariants}
                    className={item.dropdown ? 'has-dropdown' : ''}
                  >
                    {item.dropdown ? (
                      <>
                        <button
                          className={`nav-link dropdown-toggle ${location.pathname === item.path ? 'active' : ''}`}
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {item.name}
                          <span className={`dropdown-arrow ${activeDropdown === item.name ? 'active' : ''}`}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="dropdown-menu"
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <motion.div
                                  key={dropdownItem.name}
                                  variants={dropdownItemVariants}
                                >
                                  <Link
                                    to={dropdownItem.path}
                                    className="dropdown-item"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default ModernHeader;
