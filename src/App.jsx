import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './App.css'
import './styles/Responsive.css'
import './styles/Animations.css'
import './styles/Pages.css'
import './styles/ModernHero.css'
import './styles/DeityCarousel.css'
import './styles/DevotionalQuote.css'
import './styles/ActivitiesShowcase.css'
import './styles/ModernGallery.css'
import './styles/ModernPageBanner.css'
import './styles/ModernEventsCalendar.css'
import './styles/ParallaxAboutSection.css'
import './styles/AnimatedTimeline.css'
import './styles/ModernContactForm.css'
import './styles/InteractiveMap.css'
// import './styles/BookShowcase3D.css' // Commented out temporarily
import './styles/ModernHeader.css'
import './styles/ModernFooter.css'
import './styles/Theme.css'
import './styles/ThemeToggle.css'
import { ThemeProvider } from './context/ThemeContext'
import ModernHeader from './components/ModernHeader'
import ModernFooter from './components/ModernFooter'
import ThemeToggle from './components/ThemeToggle'

// Import page components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ActivitiesPage from './pages/ActivitiesPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
// import BooksPage from './pages/BooksPage' // Commented out temporarily

import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ModernHeader />
        <ThemeToggle />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            {/* <Route path="/books" element={<BooksPage />} /> */}

            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <ModernFooter />
      </Router>
    </ThemeProvider>
  )
}

export default App
