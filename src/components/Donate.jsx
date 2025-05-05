import { useState } from 'react';
import '../styles/Donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  
  const predefinedAmounts = [501, 1001, 2001, 5001, 11001];
  
  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };
  
  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the payment processing
    alert(`Thank you for your ${donationType} donation of ₹${donationAmount === 'custom' ? customAmount : donationAmount}`);
  };

  return (
    <section id="donate" className="donate">
      <div className="container">
        <h2 className="section-title">Support Our Mission</h2>
        <div className="donate-content">
          <div className="donate-info">
            <h3>Why Donate?</h3>
            <p>
              Your generous contributions help us maintain and expand our spiritual and cultural programs, 
              community services, and educational initiatives. By supporting Hare Krishna Cultural Centre, 
              you become a part of our mission to spread spiritual knowledge and cultural awareness.
            </p>
            <div className="donation-uses">
              <div className="donation-use-item">
                <h4>Temple Maintenance</h4>
                <p>Help us maintain our temple facilities and create a beautiful spiritual atmosphere for all visitors.</p>
              </div>
              <div className="donation-use-item">
                <h4>Food Distribution</h4>
                <p>Support our prasadam distribution programs that provide nutritious sanctified vegetarian meals to those in need.</p>
              </div>
              <div className="donation-use-item">
                <h4>Educational Programs</h4>
                <p>Contribute to our spiritual education initiatives, including classes, workshops, and literature distribution.</p>
              </div>
              <div className="donation-use-item">
                <h4>Cultural Events</h4>
                <p>Help us organize festivals and cultural programs that showcase the rich Vedic heritage and traditions.</p>
              </div>
            </div>
          </div>
          
          <div className="donate-form-container">
            <form className="donate-form" onSubmit={handleSubmit}>
              <h3>Make a Donation</h3>
              
              <div className="form-group">
                <label>Donation Type</label>
                <div className="donation-type-options">
                  <button 
                    type="button" 
                    className={`donation-type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                    onClick={() => handleDonationTypeChange('one-time')}
                  >
                    One-time
                  </button>
                  <button 
                    type="button" 
                    className={`donation-type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                    onClick={() => handleDonationTypeChange('monthly')}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label>Select Amount (₹)</label>
                <div className="amount-options">
                  {predefinedAmounts.map((amount) => (
                    <button 
                      key={amount} 
                      type="button" 
                      className={`amount-btn ${donationAmount === amount ? 'active' : ''}`}
                      onClick={() => handleAmountClick(amount)}
                    >
                      ₹{amount}
                    </button>
                  ))}
                  <div className={`custom-amount ${donationAmount === 'custom' ? 'active' : ''}`}>
                    <span>₹</span>
                    <input 
                      type="number" 
                      placeholder="Custom" 
                      value={customAmount} 
                      onChange={handleCustomAmountChange}
                      onClick={() => setDonationAmount('custom')}
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Personal Information</label>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" />
              </div>
              
              <div className="form-group">
                <label>Payment Method</label>
                <div className="payment-methods">
                  <div className="payment-method">
                    <input type="radio" id="upi" name="payment" value="upi" defaultChecked />
                    <label htmlFor="upi">UPI</label>
                  </div>
                  <div className="payment-method">
                    <input type="radio" id="card" name="payment" value="card" />
                    <label htmlFor="card">Credit/Debit Card</label>
                  </div>
                  <div className="payment-method">
                    <input type="radio" id="netbanking" name="payment" value="netbanking" />
                    <label htmlFor="netbanking">Net Banking</label>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="donate-submit-btn">Proceed to Donate</button>
              
              <p className="donation-note">
                All donations are tax-exempted under Section 80G of the Income Tax Act.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
