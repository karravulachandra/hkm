import '../styles/Books.css';

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Bhagavad Gita As It Is",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      cover: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      description: "The definitive guide to understanding the essence of Bhagavad Gita with original Sanskrit text, Roman transliteration, English equivalents, translation and elaborate purports.",
      price: "₹250"
    },
    {
      id: 2,
      title: "Srimad Bhagavatam",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      cover: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      description: "A comprehensive scripture that narrates the pastimes of Lord Krishna and various incarnations of God, with detailed explanations of spiritual philosophy.",
      price: "₹350 per volume"
    },
    {
      id: 3,
      title: "Krishna: The Supreme Personality of Godhead",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      cover: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      description: "A summary study of Srila Vyasadeva's Srimad-Bhagavatam, Tenth Canto, describing the pastimes of Lord Krishna.",
      price: "₹300"
    },
    {
      id: 4,
      title: "The Science of Self-Realization",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      cover: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      description: "A collection of interviews, lectures, and essays covering topics ranging from yoga and meditation to the origin of life and the quest for inner peace.",
      price: "₹200"
    },
    {
      id: 5,
      title: "Chant and Be Happy",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      cover: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      description: "An introduction to the practice of mantra meditation and the spiritual benefits of chanting the Hare Krishna mantra.",
      price: "₹150"
    },
    {
      id: 6,
      title: "The Journey of Self-Discovery",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      cover: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      description: "A collection of transcribed conversations and lectures by Srila Prabhupada on the science of spiritual self-discovery.",
      price: "₹180"
    }
  ];

  return (
    <section id="books" className="books">
      <div className="container">
        <h2 className="section-title">Spiritual Literature</h2>
        <p className="section-description">
          Explore our collection of spiritual books that provide profound insights into Vedic knowledge, 
          philosophy, and the science of self-realization. These timeless works offer guidance for 
          spiritual growth and understanding.
        </p>
        
        <div className="books-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">By {book.author}</p>
                <p className="book-description">{book.description}</p>
                <div className="book-footer">
                  <span className="book-price">{book.price}</span>
                  <button className="book-button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="books-cta">
          <p>Visit our center to explore our complete collection of spiritual literature.</p>
          <a href="#contact" className="cta-button primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Books;
