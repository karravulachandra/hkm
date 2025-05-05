import '../styles/Gallery.css';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // These will be replaced with actual deity images once downloaded
  const deityImages = [
    {
      id: 1,
      placeholder: 'Krishna',
      color: '#3f51b5',
      title: 'Lord Krishna',
      description: 'The Supreme Personality of Godhead'
    },
    {
      id: 2,
      placeholder: 'Radha',
      color: '#e91e63',
      title: 'Srimati Radharani',
      description: 'The embodiment of divine love and devotion'
    },
    {
      id: 3,
      placeholder: 'Venkateshwara',
      color: '#673ab7',
      title: 'Lord Venkateshwara',
      description: 'The Lord of Seven Hills'
    },
    {
      id: 4,
      placeholder: 'Prahalada',
      color: '#009688',
      title: 'Prahalada Maharaja',
      description: 'The great devotee of Lord Narasimha'
    },
    {
      id: 5,
      placeholder: 'Prabhupada',
      color: '#ff9800',
      title: 'Srila Prabhupada',
      description: 'Founder-Acharya of ISKCON'
    },
    {
      id: 6,
      placeholder: 'Chaitanya Mahaprabhu',
      color: '#ffc107',
      title: 'Lord Chaitanya Mahaprabhu',
      description: 'The golden avatar of Lord Krishna'
    }
  ];

  const templeImages = [
    {
      id: 7,
      placeholder: 'Temple Celebration',
      color: '#4caf50',
      title: 'Janmashtami Celebration',
      description: 'Annual celebration of Lord Krishna\'s appearance day'
    },
    {
      id: 8,
      placeholder: 'Kirtan Performance',
      color: '#2196f3',
      title: 'Evening Kirtan',
      description: 'Devotees engaged in congregational chanting'
    },
    {
      id: 9,
      placeholder: 'Prasadam Distribution',
      color: '#ff5722',
      title: 'Sunday Feast',
      description: 'Weekly feast program with spiritual food distribution'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-category">
          <h3 className="category-title">Divine Deities</h3>
          <div className="gallery-grid">
            {deityImages.map((image) => (
              <div className="gallery-item" key={image.id} onClick={() => openLightbox(image)}>
                <div className="gallery-image-container" style={{ backgroundColor: image.color }}>
                  {/* This will be replaced with actual images */}
                  <div className="placeholder-text">{image.placeholder}</div>
                </div>
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-category">
          <h3 className="category-title">Temple Activities</h3>
          <div className="gallery-grid">
            {templeImages.map((image) => (
              <div className="gallery-item" key={image.id} onClick={() => openLightbox(image)}>
                <div className="gallery-image-container" style={{ backgroundColor: image.color }}>
                  {/* This will be replaced with actual images */}
                  <div className="placeholder-text">{image.placeholder}</div>
                </div>
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image" style={{ backgroundColor: selectedImage.color }}>
              <div className="placeholder-text">{selectedImage.placeholder}</div>
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
