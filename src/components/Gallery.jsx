import '../styles/Gallery.css';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Deity images from local assets
  const deityImages = [
    {
      id: 1,
      url: './assets/images/deities/krishnaflute.webp',
      title: 'Lord Krishna',
      description: 'The Supreme Personality of Godhead'
    },
    {
      id: 2,
      url: './assets/images/deities/krishnaradha.jpg',
      title: 'Srimati Radharani',
      description: 'The embodiment of divine love and devotion'
    },
    {
      id: 3,
      url: './assets/images/deities/nitay.jpg',
      title: 'Lord Venkateshwara',
      description: 'The Lord of Seven Hills'
    },
    {
      id: 4,
      url: './assets/images/deities/prahalada.jpg',
      title: 'Prahalada Maharaja',
      description: 'The great devotee of Lord Narasimha'
    },
    {
      id: 5,
      url: './assets/images/deities/srilaprabhupada.jpg',
      title: 'Srila Prabhupada',
      description: 'Founder-Acharya of ISKCON'
    },
    {
      id: 6,
      url: './assets/images/deities/Chaitanya-Mahaprabhu.jpg',
      title: 'Lord Chaitanya Mahaprabhu',
      description: 'The golden avatar of Lord Krishna'
    }
  ];

  const templeImages = [
    {
      id: 7,
      url: './assets/images/radhadevi.jpg',
      title: 'Janmashtami Celebration',
      description: 'Annual celebration of Lord Krishna\'s appearance day'
    },
    {
      id: 8,
      url: './assets/images/puri-jagannath.jpg',
      title: 'Evening Kirtan',
      description: 'Devotees engaged in congregational chanting'
    },
    {
      id: 9,
      url: './assets/images/food-distribution.png',
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
                <div className="gallery-image-container">
                  <img src={image.url} alt={image.title} className="gallery-image" />
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
                <div className="gallery-image-container">
                  <img src={image.url} alt={image.title} className="gallery-image" />
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
            <div className="lightbox-image">
              <img src={selectedImage.url} alt={selectedImage.title} />
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
