import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/DevotionalQuote.css';

const quotes = [
  {
    text: "The Supreme Lord said: Fearlessness, purification of one's existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the Vedas, austerity, simplicity, nonviolence, truthfulness, freedom from anger, renunciation, tranquility, aversion to faultfinding, compassion for all living entities, freedom from covetousness, gentleness, modesty, steady determination, vigor, forgiveness, fortitude, cleanliness, and freedom from envy and from the passion for honor—these transcendental qualities belong to godly men endowed with divine nature.",
    source: "Bhagavad Gita 16.1-3",
    author: "Lord Krishna"
  },
  {
    text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.",
    source: "Bhagavad Gita 6.6",
    author: "Lord Krishna"
  },
  {
    text: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.",
    source: "Bhagavad Gita 3.21",
    author: "Lord Krishna"
  },
  {
    text: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog and a dog-eater [outcaste].",
    source: "Bhagavad Gita 5.18",
    author: "Lord Krishna"
  },
  {
    text: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.",
    source: "Bhagavad Gita 2.56",
    author: "Lord Krishna"
  }
];

const DevotionalQuote = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Random quote selection
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <div className="devotional-quote-container" ref={containerRef}>
      <div className="quote-background"></div>
      <div className="quote-overlay"></div>
      
      <motion.div 
        className="quote-content"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="quote-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19H5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <blockquote className="quote-text">
          {quote.text}
        </blockquote>
        
        <div className="quote-attribution">
          <p className="quote-source">{quote.source}</p>
          <p className="quote-author">{quote.author}</p>
        </div>
        
        <div className="quote-decoration left"></div>
        <div className="quote-decoration right"></div>
      </motion.div>
    </div>
  );
};

export default DevotionalQuote;
