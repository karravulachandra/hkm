import { useEffect } from 'react';
import AOS from 'aos';
import Books from '../components/Books';
import DecorativeDivider from '../components/DecorativeDivider';

const BooksPage = () => {
  useEffect(() => {
    AOS.refresh();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Books</h1>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Books />
      </div>
      
      <div data-aos="fade-up">
        <DecorativeDivider type="chakra" />
      </div>
      
      <div className="books-additional" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Featured Publications</h2>
          <div className="featured-books">
            <div className="featured-book">
              <div className="book-image-placeholder">
                <span>Bhagavad Gita As It Is</span>
              </div>
              <div className="book-details">
                <h3>Bhagavad Gita As It Is</h3>
                <p className="book-author">By His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
                <p className="book-description">
                  The definitive English edition of the Bhagavad-gita, with word-for-word Sanskrit-to-English 
                  translation, authentic commentary, and beautiful illustrations.
                </p>
                <button className="book-button">Learn More</button>
              </div>
            </div>
            
            <div className="featured-book">
              <div className="book-image-placeholder">
                <span>Srimad Bhagavatam</span>
              </div>
              <div className="book-details">
                <h3>Srimad Bhagavatam</h3>
                <p className="book-author">By His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
                <p className="book-description">
                  The Srimad-Bhagavatam is the most prominent of the Puranas, or histories of the Ancient World. 
                  The original Sanskrit text of the work is 18,000 verses long.
                </p>
                <button className="book-button">Learn More</button>
              </div>
            </div>
            
            <div className="featured-book">
              <div className="book-image-placeholder">
                <span>Sri Chaitanya Charitamrita</span>
              </div>
              <div className="book-details">
                <h3>Sri Chaitanya Charitamrita</h3>
                <p className="book-author">By His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
                <p className="book-description">
                  A biography of the life of Sri Chaitanya Mahaprabhu, written by Krishna das Kaviraja Goswami in the 
                  16th century, with translation and commentary by Srila Prabhupada.
                </p>
                <button className="book-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BooksPage;
