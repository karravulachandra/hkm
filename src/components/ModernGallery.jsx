import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ModernGallery.css';

// Gallery images - using local images from assets folder
const galleryImages = [
  {
    id: 1,
    src: './assets/images/deities/krishnaflute.webp',
    alt: 'Lord Krishna',
    category: 'deity'
  },
  {
    id: 2,
    src: './assets/images/deities/krishnaradha.jpg',
    alt: 'Radha Krishna',
    category: 'deity'
  },
  {
    id: 3,
    src: './assets/images/deities/nitay.jpg',
    alt: 'Lord Venkateshwara',
    category: 'deity'
  },
  {
    id: 4,
    src: './assets/images/deities/Chaitanya-Mahaprabhu.jpg',
    alt: 'Lord Chaitanya Mahaprabhu',
    category: 'deity'
  },
  {
    id: 5,
    src: './assets/images/deities/srilaprabhupada.jpg',
    alt: 'Srila Prabhupada',
    category: 'guru'
  },
  {
    id: 6,
    src: './assets/images/deities/prahalada.jpg',
    alt: 'Prahlada Maharaja',
    category: 'deity'
  },
  {
    id: 7,
    src: './assets/images/food-distribution.png',
    alt: 'Hare Krishna Cultural Centre',
    category: 'temple'
  },
  {
    id: 8,
    src: './assets/images/puri-jagannath.jpg',
    alt: 'Kirtan Session',
    category: 'event'
  },
  {
    id: 9,
    src: './assets/images/food-distribution.png',
    alt: 'Prasadam Distribution',
    category: 'event'
  },
  {
    id: 10,
    src: './assets/images/puri-temple.jpg',
    alt: 'Temple Architecture',
    category: 'temple'
  },
  {
    id: 11,
    src: './assets/images/radhadevi.jpg',
    alt: 'Devotees Chanting',
    category: 'event'
  },
  {
    id: 12,
    src: './assets/images/logo.png',
    alt: 'Hare Krishna Cultural Centre Logo',
    category: 'temple'
  }
];

const categories = ['all', 'deity', 'event', 'temple', 'guru'];

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeCategory));
    }
  }, [activeCategory]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="modern-gallery">
      <div className="gallery-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            {activeCategory === category && (
              <motion.div
                className="active-indicator"
                layoutId="activeIndicator"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        className="gallery-grid"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredImages.map((image) => (
          <motion.div
            layout
            key={image.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(image)}
          >
            <div className="gallery-image-container">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="image-overlay">
                <div className="image-info">
                  <h3>{image.alt}</h3>
                  <span className="image-category">{image.category}</span>
                </div>
                <div className="zoom-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>‹</button>
            <div className="lightbox-image-container">
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>›</button>
            <div className="lightbox-caption">
              <h3>{selectedImage.alt}</h3>
              <span className="image-category">{selectedImage.category}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ModernGallery;
