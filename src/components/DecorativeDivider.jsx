import '../styles/DecorativeDivider.css';

const DecorativeDivider = ({ type = 'lotus' }) => {
  return (
    <div className={`decorative-divider ${type}`}>
      <div className="divider-line"></div>
      <div className="divider-symbol">
        {type === 'lotus' && (
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,0 C60,25 80,35 100,40 C80,45 60,45 50,50 C40,45 20,45 0,40 C20,35 40,25 50,0" fill="currentColor" />
          </svg>
        )}
        {type === 'chakra' && (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            {[...Array(8)].map((_, i) => (
              <line 
                key={i}
                x1="50" 
                y1="15" 
                x2="50" 
                y2="85" 
                stroke="currentColor" 
                strokeWidth="2"
                transform={`rotate(${i * 45} 50 50)`} 
              />
            ))}
          </svg>
        )}
        {type === 'om' && (
          <span className="om-symbol">ॐ</span>
        )}
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default DecorativeDivider;
