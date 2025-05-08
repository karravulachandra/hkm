import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/DeityCarousel.css';

const deities = [
  {
    id: 1,
    name: 'Lord Krishna',
    image: './assets/images/deities/krishnaflute.webp',
    description: 'The Supreme Personality of Godhead, known for His enchanting form with a peacock feather and divine flute.'
  },
  {
    id: 2,
    name: 'Radha Krishna',
    image: './assets/images/deities/krishnaradha.jpg',
    description: 'The divine couple representing the perfect union of the supreme masculine and feminine energies.'
  },
  {
    id: 3,
    name: 'Lord Venkateshwara',
    image: './assets/images/deities/nitay.jpg', // Using nitay.jpg as a placeholder for Venkateshwara
    description: 'An incarnation of Lord Vishnu, highly revered in South India, especially in Tirupati.'
  },
  {
    id: 4,
    name: 'Lord Chaitanya Mahaprabhu',
    image: './assets/images/deities/Chaitanya-Mahaprabhu.jpg',
    description: 'The golden avatar of Lord Krishna who appeared in Bengal to spread the chanting of the holy names.'
  },
  {
    id: 5,
    name: 'Srila Prabhupada',
    image: './assets/images/deities/srilaprabhupada.jpg',
    description: 'The founder-acharya of ISKCON who brought Krishna Consciousness to the Western world.'
  },
  {
    id: 6,
    name: 'Prahlada Maharaja',
    image: './assets/images/deities/prahalada.jpg',
    description: 'The great devotee of Lord Vishnu who demonstrated unwavering faith despite persecution by his father Hiranyakashipu.'
  }
];

const DeityCarousel = () => {

  return (
    <motion.div
      className="deity-carousel-section"
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Divine Deities</h2>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="deity-swiper"
        >
          {deities.map((deity) => (
            <SwiperSlide key={deity.id} className="deity-slide">
              <div className="deity-card">
                <div className="deity-image-container">
                  <img src={deity.image} alt={deity.name} className="deity-image" />
                  <div className="deity-glow"></div>
                </div>
                <div className="deity-info">
                  <h3 className="deity-name">{deity.name}</h3>
                  <p className="deity-description">{deity.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="carousel-decoration left"></div>
      <div className="carousel-decoration right"></div>
    </motion.div>
  );
};

export default DeityCarousel;
