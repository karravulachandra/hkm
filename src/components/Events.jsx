import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Events.css';

const Events = () => {
  const [date, setDate] = useState(new Date());
  const [viewType, setViewType] = useState('list'); // 'list' or 'calendar'

  const events = [
    {
      id: 1,
      title: "Janmashtami Celebration",
      date: new Date(2024, 7, 15), // August 15, 2024
      time: "6:00 PM onwards",
      description: "Join us for the grand celebration of Lord Krishna's appearance day with abhishek, kirtan, cultural programs, and midnight arati followed by feast."
    },
    {
      id: 2,
      title: "Ratha Yatra Festival",
      date: new Date(2024, 6, 7), // July 7, 2024
      time: "4:00 PM - 8:00 PM",
      description: "Annual chariot festival through the main streets of Guntur, followed by cultural program and prasadam distribution."
    },
    {
      id: 3,
      title: "Gita Jayanti",
      date: new Date(2024, 11, 12), // December 12, 2024
      time: "5:30 PM - 8:30 PM",
      description: "Celebration of the day when Bhagavad Gita was spoken by Lord Krishna to Arjuna. Special discourse, kirtan and prasadam."
    },
    {
      id: 4,
      title: "Gaura Purnima",
      date: new Date(2024, 2, 24), // March 24, 2024
      time: "5:00 PM - 9:00 PM",
      description: "Celebration of the appearance day of Lord Chaitanya Mahaprabhu with abhishek, kirtan, and special feast."
    },
    {
      id: 5,
      title: "Nrsimha Chaturdasi",
      date: new Date(2024, 4, 22), // May 22, 2024
      time: "6:00 PM - 8:30 PM",
      description: "Celebration of the appearance of Lord Nrsimhadeva with special abhishek, arati, and discourse."
    },
    {
      id: 6,
      title: "Radhashtami",
      date: new Date(2024, 8, 12), // September 12, 2024
      time: "5:30 PM - 8:00 PM",
      description: "Celebration of the appearance day of Srimati Radharani with special puja, kirtan, and prasadam."
    }
  ];

  // Format date for display
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Filter events by month
  const filteredEvents = events.filter(event => {
    return event.date.getMonth() === date.getMonth() &&
           event.date.getFullYear() === date.getFullYear();
  });

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => a.date - b.date);

  // Check if a date has events
  const hasEvents = (date) => {
    return events.some(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Custom tile content for calendar
  const tileContent = ({ date, view }) => {
    if (view === 'month' && hasEvents(date)) {
      return <div className="event-dot"></div>;
    }
    return null;
  };

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>

        <div className="view-toggle">
          <button
            className={`view-toggle-btn ${viewType === 'list' ? 'active' : ''}`}
            onClick={() => setViewType('list')}
          >
            List View
          </button>
          <button
            className={`view-toggle-btn ${viewType === 'calendar' ? 'active' : ''}`}
            onClick={() => setViewType('calendar')}
          >
            Calendar View
          </button>
        </div>

        {viewType === 'calendar' ? (
          <div className="calendar-view">
            <Calendar
              onChange={setDate}
              value={date}
              tileContent={tileContent}
              className="events-calendar"
            />

            <div className="calendar-events">
              <h3>{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} Events</h3>
              {filteredEvents.length > 0 ? (
                <div className="calendar-events-list">
                  {filteredEvents.map((event) => (
                    <div className="calendar-event-item" key={event.id}>
                      <div className="calendar-event-date">
                        {event.date.getDate()}
                      </div>
                      <div className="calendar-event-details">
                        <h4>{event.title}</h4>
                        <p>{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-events">No events scheduled for this month.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="events-container">
            {sortedEvents.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-date-container">
                  <div className="event-date">
                    {formatDate(event.date)}
                  </div>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-time">{event.time}</p>
                  <p className="event-description">{event.description}</p>
                  <button className="event-button">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
