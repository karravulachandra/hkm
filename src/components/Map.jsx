import '../styles/Map.css';

const Map = () => {
  return (
    <section id="map" className="map">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        
        <div className="map-content">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1839901068!2d80.4381!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzI0LjEiTiA4MMKwMjYnMTcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hare Krishna Cultural Centre Guntur Location"
            ></iframe>
          </div>
          
          <div className="location-info">
            <div className="location-card">
              <div className="location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#e94e24" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
              </div>
              <div className="location-details">
                <h3>Our Address</h3>
                <p>Hare Krishna Cultural Centre-Guntur</p>
                <p>Opp. Orion Hotel, Near RTO Office</p>
                <p>JKC College Road, Guntur</p>
                <p>Andhra Pradesh</p>
              </div>
            </div>
            
            <div className="location-card">
              <div className="location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#e94e24" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
              </div>
              <div className="location-details">
                <h3>Visiting Hours</h3>
                <p><strong>Temple Room:</strong> 5:30 AM - 12:30 PM, 4:30 PM - 8:30 PM</p>
                <p><strong>Office:</strong> 10:00 AM - 6:00 PM (Monday to Saturday)</p>
                <p><strong>Book Store:</strong> 10:00 AM - 7:00 PM (Daily)</p>
              </div>
            </div>
            
            <div className="location-card">
              <div className="location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#e94e24" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                </svg>
              </div>
              <div className="location-details">
                <h3>Getting Here</h3>
                <p><strong>By Bus:</strong> City bus routes 5, 8, and 12 stop near JKC College</p>
                <p><strong>By Auto:</strong> Ask for "Hare Krishna Temple near RTO Office"</p>
                <p><strong>Landmarks:</strong> Orion Hotel, RTO Office, JKC College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
