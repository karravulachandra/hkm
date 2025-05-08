import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/DonationProgress.css';

// Sample donation campaigns data - using ISKCON official images and logo
const donationCampaigns = [
  {
    id: 1,
    title: "Temple Expansion Project",
    description: "Help us expand our temple facilities to accommodate more devotees and visitors.",
    target: 5000000,
    raised: 3250000,
    image: "https://www.iskconbangalore.org/wp-content/uploads/2016/07/iskcon-bangalore-temple.jpg",
    endDate: "2024-12-31"
  },
  {
    id: 2,
    title: "Prasadam Distribution Program",
    description: "Support our food distribution program to serve nutritious prasadam to those in need.",
    target: 1000000,
    raised: 750000,
    image: "https://www.iskconbangalore.org/wp-content/uploads/2016/07/prasadam.jpg",
    endDate: "2024-09-30"
  },
  {
    id: 3,
    title: "Vedic Library Development",
    description: "Help us build a comprehensive library of Vedic literature for spiritual education.",
    target: 800000,
    raised: 320000,
    image: "/logo.png",
    endDate: "2024-10-15"
  }
];

const DonationProgress = () => {
  const [selectedAmount, setSelectedAmount] = useState(1001);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(donationCampaigns[0].id);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate percentage
  const calculatePercentage = (raised, target) => {
    return Math.min(Math.round((raised / target) * 100), 100);
  };

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setIsCustom(false);
  };

  // Handle custom amount
  const handleCustomAmount = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(parseInt(value) || 0);
    setIsCustom(true);
  };

  // Handle campaign selection
  const handleCampaignSelect = (campaignId) => {
    setSelectedCampaign(campaignId);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donorName || !donorEmail || selectedAmount <= 0) {
      alert('Please fill in all required fields and enter a valid donation amount.');
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
        setDonorName('');
        setDonorEmail('');
        setDonorPhone('');
        setSelectedAmount(1001);
        setCustomAmount('');
        setIsCustom(false);
      }, 3000);
    }, 1500);
  };

  // Calculate days remaining
  const calculateDaysRemaining = (endDate) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Get selected campaign
  const campaign = donationCampaigns.find(c => c.id === selectedCampaign);

  return (
    <div className="donation-progress" ref={ref}>
      <div className="campaigns-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Current Donation Campaigns
        </motion.h2>

        <div className="campaigns-grid">
          {donationCampaigns.map((campaign, index) => {
            const percentage = calculatePercentage(campaign.raised, campaign.target);
            const daysRemaining = calculateDaysRemaining(campaign.endDate);

            return (
              <motion.div
                key={campaign.id}
                className={`campaign-card ${selectedCampaign === campaign.id ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => handleCampaignSelect(campaign.id)}
              >
                <div className="campaign-image">
                  <img src={campaign.image} alt={campaign.title} />
                  {daysRemaining > 0 && (
                    <div className="days-remaining">
                      <span>{daysRemaining}</span> days left
                    </div>
                  )}
                </div>

                <div className="campaign-content">
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>

                  <div className="progress-container">
                    <div className="progress-stats">
                      <span className="raised">{formatCurrency(campaign.raised)}</span>
                      <span className="target">of {formatCurrency(campaign.target)}</span>
                    </div>

                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                      ></motion.div>
                    </div>

                    <div className="progress-percentage">{percentage}% Complete</div>
                  </div>

                  <button
                    className={`select-campaign-btn ${selectedCampaign === campaign.id ? 'selected' : ''}`}
                  >
                    {selectedCampaign === campaign.id ? 'Selected' : 'Select Campaign'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="donation-form-section">
        {!isSubmitted ? (
          <motion.div
            className="donation-form-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Make a Donation</h3>
            <p className="donation-subtitle">
              Your generous contribution helps us continue our spiritual mission.
              All donations are tax-exempt under Section 80G.
            </p>

            <form className="donation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Selected Campaign</label>
                <div className="selected-campaign">
                  <span>{campaign.title}</span>
                </div>
              </div>

              <div className="form-group">
                <label>Donation Amount</label>
                <div className="amount-options">
                  {[501, 1001, 2001, 5001, 11001].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-option ${selectedAmount === amount && !isCustom ? 'selected' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ₹{amount}
                    </button>
                  ))}
                  <div className={`custom-amount ${isCustom ? 'selected' : ''}`}>
                    <span className="currency-symbol">₹</span>
                    <input
                      type="text"
                      placeholder="Other"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      onClick={() => setIsCustom(true)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name <span className="required">*</span></label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className="donate-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : `Donate ${formatCurrency(selectedAmount)}`}
                </button>

                <div className="secure-payment">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5V21H19V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Secure Payment</span>
                </div>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            className="donation-success"
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
            <h3>Thank You for Your Donation!</h3>
            <p>Your generous contribution of {formatCurrency(selectedAmount)} to the {campaign.title} campaign has been received.</p>
            <p>A confirmation email has been sent to {donorEmail}.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DonationProgress;
