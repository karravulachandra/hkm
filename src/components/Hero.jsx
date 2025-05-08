import '../styles/Hero.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  const carouselImages = [
    {
      url: './assets/images/deities/krishnaradha.jpg',
      alt: 'Radha Krishna Deities'
    },
    {
      url: './assets/images/deities/nitay.jpg',
      alt: 'Lord Venkateshwara'
    },
    {
      url: './assets/images/puri-temple.jpg',
      alt: 'Temple Architecture'
    },
    {
      url: './assets/images/deities/srilaprabhupada.jpg',
      alt: 'Srila Prabhupada'
    },
    {
      url: './assets/images/deities/Chaitanya-Mahaprabhu.jpg',
      alt: 'Sri Chaitanya Mahaprabhu'
    },
    {
      url: './assets/images/deities/prahalada.jpg',
      alt: 'Lord Narasimha and Prahlada'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              <div
                className="carousel-image"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image.url})` }}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hero-content">
        <div className="hero-decoration top"></div>
        <h1>हरे कृष्ण कल्चरल सेंटर</h1>
        <h2>Hare Krishna Cultural Centre - Guntur</h2>
        <div className="hero-mantra">
          <p>हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे</p>
          <p>हरे राम हरे राम राम राम हरे हरे</p>
        </div>
        <p className="hero-tagline">Spiritual Knowledge | Cultural Education | Community Service</p>
        <div className="hero-buttons">
          <a href="#about" className="cta-button primary">Learn More</a>
          <a href="#contact" className="cta-button secondary">Visit Us</a>
        </div>
        <div className="hero-quote">
          <p>"In this age of quarrel and hypocrisy, the only means of deliverance is chanting the holy name of the Lord. There is no other way. There is no other way. There is no other way."</p>
          <span>- Brhan-naradiya Purana</span>
        </div>
        <div className="hero-decoration bottom"></div>
      </div>
    </section>
  );
};

export default Hero;
