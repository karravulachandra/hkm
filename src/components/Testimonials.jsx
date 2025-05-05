import { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Regular Visitor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The Hare Krishna Cultural Centre has completely transformed my life. The spiritual knowledge and practices I've learned here have given me inner peace and a deeper understanding of life's purpose."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Bhakti Yoga Practitioner",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I've been attending the Sunday feast program for over a year now, and it's become the highlight of my week. The community is so welcoming, and the spiritual atmosphere is truly uplifting."
    },
    {
      id: 3,
      name: "Venkat Rao",
      role: "Local Business Owner",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "The centre's food distribution program is doing incredible work in our community. It's inspiring to see how they're putting spiritual principles into action through selfless service."
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      role: "Bhagavad Gita Student",
      image: "https://randomuser.me/api/portraits/women/58.jpg",
      quote: "The Bhagavad Gita classes have given me profound insights that I apply in my daily life. The teachers explain complex philosophical concepts in such a practical and relatable way."
    }
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Navigate to a specific testimonial
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  
  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        
        <div className="testimonials-slider">
          <div className="testimonials-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#e94e24" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                    </svg>
                    <p>{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                    <div className="author-info">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </button>
          <button className="testimonial-nav next" onClick={nextTestimonial}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
