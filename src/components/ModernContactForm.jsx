import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ModernContactForm.css';

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    purpose: 'general'
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = 'Phone number is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          purpose: 'general'
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="modern-contact-form">
      {!isSubmitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-header">
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
                placeholder="Enter your email address"
              />
              {formErrors.email && <div className="error-message">{formErrors.email}</div>}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={formErrors.phone ? 'error' : ''}
                placeholder="Enter your phone number (optional)"
              />
              {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="purpose">Purpose of Contact</label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="visit">Planning a Visit</option>
                <option value="donation">Donation Related</option>
                <option value="volunteer">Volunteering</option>
                <option value="spiritual">Spiritual Guidance</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject <span className="required">*</span></label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={formErrors.subject ? 'error' : ''}
              placeholder="Enter the subject of your message"
            />
            {formErrors.subject && <div className="error-message">{formErrors.subject}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={formErrors.message ? 'error' : ''}
              placeholder="Enter your message here..."
              rows="5"
            ></textarea>
            {formErrors.message && <div className="error-message">{formErrors.message}</div>}
          </div>
          
          <div className="form-footer">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.div 
          className="success-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
        </motion.div>
      )}
      
      <div className="contact-decoration left"></div>
      <div className="contact-decoration right"></div>
    </div>
  );
};

export default ModernContactForm;
