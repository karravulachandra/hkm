import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import '../styles/ModernEventsCalendar.css';

// Sample events data with local images
const eventsData = [
  {
    id: 1,
    title: "Janmashtami Celebration",
    date: new Date(2024, 7, 26), // August 26, 2024
    time: "6:00 PM - 12:00 AM",
    description: "Celebration of Lord Krishna's appearance day with abhishekam, bhajans, and midnight arati.",
    location: "Main Temple Hall",
    image: "/src/assets/images/deities/krishnaflute.webp",
    category: "festival"
  },
  {
    id: 2,
    title: "Bhagavad Gita Study Group",
    date: new Date(2024, 5, 15), // June 15, 2024
    time: "5:30 PM - 7:00 PM",
    description: "Weekly study and discussion of Bhagavad Gita As It Is with senior devotees.",
    location: "Library Hall",
    image: "/src/assets/images/deities/srilaprabhupada.jpg",
    category: "class"
  },
  {
    id: 3,
    title: "Sunday Feast Program",
    date: new Date(2024, 5, 16), // June 16, 2024
    time: "4:00 PM - 7:00 PM",
    description: "Weekly Sunday program with kirtan, lecture, and prasadam feast.",
    location: "Main Temple Hall",
    image: "/src/assets/images/food-distribution.png",
    category: "regular"
  },
  {
    id: 4,
    title: "Ratha Yatra Festival",
    date: new Date(2024, 6, 7), // July 7, 2024
    time: "3:00 PM - 8:00 PM",
    description: "Annual chariot festival with procession through the main streets of Guntur.",
    location: "Starting from Temple, ending at City Park",
    image: "/src/assets/images/deities/puri-jagannath.jpg",
    category: "festival"
  },
  {
    id: 5,
    title: "Kirtan Mela",
    date: new Date(2024, 5, 22), // June 22, 2024
    time: "5:00 PM - 9:00 PM",
    description: "Special kirtan event with guest kirtaniyas from various ISKCON centers.",
    location: "Main Temple Hall",
    image: "/src/assets/images/deities/Chaitanya-Mahaprabhu.jpg",
    category: "special"
  },
  {
    id: 6,
    title: "Children's Spiritual Program",
    date: new Date(2024, 5, 23), // June 23, 2024
    time: "10:00 AM - 12:00 PM",
    description: "Fun spiritual activities for children including stories, arts and crafts, and prasadam.",
    location: "Community Hall",
    image: "/src/assets/images/deities/prahalada.jpg",
    category: "youth"
  }
];

// Event categories
const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'festival', label: 'Festivals' },
  { id: 'regular', label: 'Regular Programs' },
  { id: 'class', label: 'Classes' },
  { id: 'special', label: 'Special Events' },
  { id: 'youth', label: 'Youth Programs' }
];

const ModernEventsCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [highlightedDates, setHighlightedDates] = useState([]);

  // Filter events based on selected category
  useEffect(() => {
    if (activeCategory === 'all') {
      setEvents(eventsData);
      setHighlightedDates(eventsData.map(event => event.date));
    } else {
      const filtered = eventsData.filter(event => event.category === activeCategory);
      setEvents(filtered);
      setHighlightedDates(filtered.map(event => event.date));
    }
  }, [activeCategory]);

  // Filter events for selected date
  const getEventsForDate = (selectedDate) => {
    return events.filter(event =>
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Open event details modal
  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close event details modal
  const closeEventDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Custom tile content to highlight dates with events
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hasEvent = highlightedDates.some(eventDate =>
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );

      return hasEvent ? <div className="event-indicator"></div> : null;
    }
    return null;
  };

  // Get events for the selected date
  const selectedDateEvents = getEventsForDate(date);

  return (
    <div className="modern-events-calendar">
      <div className="events-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
            {activeCategory === category.id && (
              <motion.div
                className="active-indicator"
                layoutId="activeEventIndicator"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="calendar-container">
        <motion.div
          className="calendar-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileContent={tileContent}
            className="modern-calendar"
          />
        </motion.div>

        <motion.div
          className="events-list"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="selected-date">
            {date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </h3>

          {selectedDateEvents.length > 0 ? (
            <div className="date-events">
              {selectedDateEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="event-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={() => openEventDetails(event)}
                >
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-category">{event.category}</div>
                  </div>
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <p className="event-time">{event.time}</p>
                    <p className="event-location">{event.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <p>No events scheduled for this date.</p>
              <p className="suggestion">Please select another date or category.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            className="event-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEventDetails}
          >
            <motion.div
              className="event-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={closeEventDetails}>×</button>

              <div className="modal-image">
                <img src={selectedEvent.image} alt={selectedEvent.title} />
              </div>

              <div className="modal-content">
                <h2>{selectedEvent.title}</h2>

                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span className="detail-text">
                      {selectedEvent.date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon">⏰</span>
                    <span className="detail-text">{selectedEvent.time}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span className="detail-text">{selectedEvent.location}</span>
                  </div>
                </div>

                <p className="event-description">{selectedEvent.description}</p>

                <div className="event-actions">
                  <button className="action-button primary">Add to Calendar</button>
                  <button className="action-button secondary">Share Event</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernEventsCalendar;
