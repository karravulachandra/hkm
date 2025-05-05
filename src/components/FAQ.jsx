import { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});
  
  const faqCategories = [
    { id: 'general', name: 'General' },
    { id: 'programs', name: 'Programs & Activities' },
    { id: 'visit', name: 'Visiting the Centre' },
    { id: 'involvement', name: 'Getting Involved' }
  ];
  
  const faqItems = {
    general: [
      {
        id: 'g1',
        question: 'What is the Hare Krishna Cultural Centre?',
        answer: 'The Hare Krishna Cultural Centre is a spiritual and cultural organization dedicated to promoting the teachings of Bhakti Yoga as presented by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. We offer various programs and activities focused on spiritual education, cultural awareness, and community service.'
      },
      {
        id: 'g2',
        question: 'What is the philosophy behind the Hare Krishna movement?',
        answer: 'The Hare Krishna movement is based on the ancient Vedic scriptures, particularly the Bhagavad Gita and Srimad Bhagavatam. It emphasizes the practice of Bhakti Yoga (devotional service to Krishna), which includes chanting the Hare Krishna mantra, studying spiritual literature, following regulative principles, and engaging in devotional activities.'
      },
      {
        id: 'g3',
        question: 'Do I need to be Hindu to participate in your programs?',
        answer: 'No, our programs are open to everyone regardless of religious background, nationality, or cultural heritage. We welcome anyone interested in exploring spiritual knowledge and practices.'
      }
    ],
    programs: [
      {
        id: 'p1',
        question: 'What programs do you offer at the centre?',
        answer: 'We offer a variety of programs including morning and evening arati ceremonies, Sunday feast programs, Bhagavad Gita classes, kirtan (devotional music) sessions, cultural festivals, youth programs, and community service activities.'
      },
      {
        id: 'p2',
        question: 'What is the Sunday Feast program?',
        answer: 'The Sunday Feast is our main weekly gathering that includes kirtan (devotional music), a spiritual discourse on Bhagavad Gita or other Vedic scriptures, and a free vegetarian feast (prasadam). It\'s a great opportunity to experience Krishna consciousness and meet like-minded individuals.'
      },
      {
        id: 'p3',
        question: 'Do you offer any programs for children?',
        answer: 'Yes, we have special programs for children that include storytelling from Vedic literature, arts and crafts, devotional music, and value-based education. These programs are designed to teach children about spiritual values and cultural heritage in an engaging way.'
      }
    ],
    visit: [
      {
        id: 'v1',
        question: 'What are the visiting hours of the centre?',
        answer: 'Our centre is open daily from 5:00 AM to 8:30 PM. The temple room is open for darshan (viewing of the deities) from 5:30 AM to 12:30 PM and from 4:30 PM to 8:30 PM.'
      },
      {
        id: 'v2',
        question: 'Is there a dress code for visiting the centre?',
        answer: 'We request visitors to dress modestly out of respect for the spiritual atmosphere. For men, shirts and pants or dhotis are appropriate. For women, saris, salwar kameez, or modest Western attire that covers the shoulders and knees is suitable.'
      },
      {
        id: 'v3',
        question: 'Can I take photographs inside the temple?',
        answer: 'Photography is generally allowed in most areas of the centre, but we request that you refrain from taking photos during arati ceremonies or in certain sacred areas. Please ask for permission from the temple authorities if you\'re unsure.'
      }
    ],
    involvement: [
      {
        id: 'i1',
        question: 'How can I volunteer at the centre?',
        answer: 'We welcome volunteers in various areas including kitchen service, temple maintenance, book distribution, festival organization, and more. Please speak to our volunteer coordinator during your visit or contact us through our website to explore volunteering opportunities.'
      },
      {
        id: 'i2',
        question: 'Do you offer any courses or classes for beginners?',
        answer: 'Yes, we offer introductory courses on Bhagavad Gita, meditation, and Vedic philosophy that are specifically designed for beginners. These courses provide a structured approach to understanding the basics of Krishna consciousness.'
      },
      {
        id: 'i3',
        question: 'How can I support the centre\'s activities?',
        answer: 'You can support our activities through donations, volunteering your time and skills, participating in our programs, and helping to spread awareness about our centre. Financial contributions help us maintain the temple, organize festivals, and conduct community service programs.'
      }
    ]
  };
  
  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };
  
  const changeCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenItems({});
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="faq-container">
          <div className="faq-categories">
            {faqCategories.map((category) => (
              <button 
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => changeCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="faq-items">
            {faqItems[activeCategory].map((item) => (
              <div 
                key={item.id} 
                className={`faq-item ${openItems[item.id] ? 'open' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleItem(item.id)}>
                  <h3>{item.question}</h3>
                  <span className="faq-icon">
                    {openItems[item.id] ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-cta">
          <p>Don't see your question here? Feel free to contact us directly.</p>
          <a href="#contact" className="contact-btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
