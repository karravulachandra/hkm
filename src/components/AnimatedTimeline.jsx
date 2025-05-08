import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/AnimatedTimeline.css';

const timelineEvents = [
  {
    year: "1966",
    title: "ISKCON Founded",
    description: "Srila Prabhupada established the International Society for Krishna Consciousness in New York City.",
    image: "https://i.imgur.com/Yd8MhUZ.png"
  },
  {
    year: "1971",
    title: "First Temple in India",
    description: "ISKCON established its first temple in India at Juhu, Mumbai.",
    image: "https://i.imgur.com/8NqKtJl.png"
  },
  {
    year: "1977",
    title: "Srila Prabhupada's Departure",
    description: "Srila Prabhupada departed from this world in Vrindavan, leaving a worldwide movement with over 108 temples.",
    image: "https://i.imgur.com/Oa6QYfH.png"
  },
  {
    year: "1998",
    title: "Guntur Centre Established",
    description: "The Hare Krishna Cultural Centre was established in Guntur to spread Krishna consciousness in Andhra Pradesh.",
    image: "https://i.imgur.com/Yd8MhUZ.png"
  },
  {
    year: "2005",
    title: "Temple Construction",
    description: "Construction of the main temple building was completed and deities were installed with a grand ceremony.",
    image: "https://i.imgur.com/8NqKtJl.png"
  },
  {
    year: "2015",
    title: "Expansion of Activities",
    description: "The centre expanded its outreach programs, food distribution, and educational initiatives throughout the region.",
    image: "https://i.imgur.com/Oa6QYfH.png"
  },
  {
    year: "Present",
    title: "Continuing the Mission",
    description: "Today, the centre continues to grow, serving the community through spiritual education, prasadam distribution, and cultural programs.",
    image: "https://i.imgur.com/Yd8MhUZ.png"
  }
];

const AnimatedTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div className="animated-timeline" ref={ref}>
      <motion.div 
        className="timeline-intro"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Our Journey</h2>
        <p className="timeline-description">
          Explore the history and milestones of the Hare Krishna Cultural Centre in Guntur and the 
          worldwide ISKCON movement founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.
        </p>
      </motion.div>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {timelineEvents.map((event, index) => (
          <motion.div 
            className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <div className="timeline-image">
                <img src={event.image} alt={event.title} />
                <div className="timeline-year">{event.year}</div>
              </div>
              <div className="timeline-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
