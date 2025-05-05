import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Address</h3>
              <p>Hare Krishna Cultural Centre-Guntur</p>
              <p>Opp. Orion Hotel, Near RTO Office</p>
              <p>JKC College Road, Guntur</p>
              <p>Andhra Pradesh</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+91 9849994873</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@hkcguntur.org</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
