import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/BookShowcase3D.css';

// Sample books data with non-licensable images
const booksData = [
  {
    id: 1,
    title: "Bhagavad Gita As It Is",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    cover: "https://m.media-amazon.com/images/I/51tiopcLhuL._SY445_SX342_.jpg",
    description: "The definitive English edition of Bhagavad Gita with word-for-word transliteration, Sanskrit-English equivalents, translation and elaborate purports by Srila Prabhupada.",
    price: "₹350",
    category: "scripture"
  },
  {
    id: 2,
    title: "Srimad Bhagavatam",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    cover: "https://m.media-amazon.com/images/I/51HKN2XzH-L._SY445_SX342_.jpg",
    description: "The complete set of Srimad Bhagavatam (Bhagavata Purana) with original Sanskrit text, roman transliteration, English equivalents, translation and elaborate purports.",
    price: "₹12,000",
    category: "scripture"
  },
  {
    id: 3,
    title: "Sri Chaitanya Charitamrita",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    cover: "https://m.media-amazon.com/images/I/51Gy-WJQbQL._SY445_SX342_.jpg",
    description: "The biography and teachings of Sri Chaitanya Mahaprabhu, the golden avatar who inaugurated the congregational chanting of the holy names of God.",
    price: "₹8,500",
    category: "scripture"
  },
  {
    id: 4,
    title: "Krishna Book",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    cover: "https://m.media-amazon.com/images/I/51jnZU6DvHL._SY445_SX342_.jpg",
    description: "A summary study of Srila Vyasadeva's Srimad-Bhagavatam, Tenth Canto, describing the transcendental pastimes of Lord Krishna.",
    price: "₹450",
    category: "general"
  },
  {
    id: 5,
    title: "Science of Self Realization",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    cover: "https://m.media-amazon.com/images/I/51Gy-WJQbQL._SY445_SX342_.jpg",
    description: "A collection of interviews, lectures, and essays by Srila Prabhupada, covering topics ranging from bhakti-yoga to Western philosophy and science.",
    price: "₹300",
    category: "general"
  },
  {
    id: 6,
    title: "Nectar of Devotion",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    cover: "https://m.media-amazon.com/images/I/51jnZU6DvHL._SY445_SX342_.jpg",
    description: "A summary study of Srila Rupa Goswami's Bhakti-rasamrta-sindhu, describing the science of devotional service to Lord Krishna.",
    price: "₹350",
    category: "general"
  }
];

// Book categories
const categories = [
  { id: 'all', label: 'All Books' },
  { id: 'scripture', label: 'Scriptures' },
  { id: 'general', label: 'General Books' }
];

const BookShowcase3D = () => {
  const [books, setBooks] = useState(booksData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookRefs = useRef([]);

  // Filter books based on selected category
  useEffect(() => {
    if (activeCategory === 'all') {
      setBooks(booksData);
    } else {
      setBooks(booksData.filter(book => book.category === activeCategory));
    }
  }, [activeCategory]);

  // Set up book refs
  useEffect(() => {
    bookRefs.current = bookRefs.current.slice(0, books.length);
  }, [books]);

  // Handle 3D effect on mouse move
  const handleMouseMove = (e, index) => {
    const book = bookRefs.current[index];
    if (!book) return;

    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 10;
    const rotateX = (centerY - y) / 10;

    book.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Reset book rotation on mouse leave
  const handleMouseLeave = (index) => {
    const book = bookRefs.current[index];
    if (!book) return;

    book.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  // Open book details modal
  const openBookDetails = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close book details modal
  const closeBookDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="book-showcase-3d">
      <div className="book-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
            {activeCategory === category.id && (
              <motion.div
                className="active-indicator"
                layoutId="activeBookCategory"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        className="books-grid"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {books.map((book, index) => (
          <motion.div
            layout
            key={book.id}
            className="book-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openBookDetails(book)}
          >
            <div
              className="book-card"
              ref={el => bookRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
                <div className="book-shine"></div>
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-price">{book.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Book Details Modal */}
      {isModalOpen && selectedBook && (
        <motion.div
          className="book-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookDetails}
        >
          <motion.div
            className="book-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeBookDetails}>×</button>

            <div className="book-modal-content">
              <div className="book-modal-cover">
                <div
                  className="book-3d"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateY = (x - centerX) / 5;
                    const rotateX = (centerY - y) / 10;

                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                  }}
                >
                  <img src={selectedBook.cover} alt={selectedBook.title} />
                  <div className="book-spine"></div>
                  <div className="book-shine"></div>
                </div>
              </div>

              <div className="book-modal-details">
                <h2>{selectedBook.title}</h2>
                <p className="book-author">By {selectedBook.author}</p>
                <div className="book-price-tag">{selectedBook.price}</div>

                <div className="book-description">
                  <h3>Description</h3>
                  <p>{selectedBook.description}</p>
                </div>

                <div className="book-actions">
                  <button className="book-action primary">Add to Cart</button>
                  <button className="book-action secondary">Add to Wishlist</button>
                </div>

                <div className="book-meta">
                  <div className="meta-item">
                    <span className="meta-label">Category:</span>
                    <span className="meta-value">{selectedBook.category === 'scripture' ? 'Scripture' : 'General'}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Publisher:</span>
                    <span className="meta-value">Bhaktivedanta Book Trust</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Language:</span>
                    <span className="meta-value">English</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BookShowcase3D;
