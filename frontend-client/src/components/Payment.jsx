import React from 'react';

const Payment = () => {
  return (
    <div className="payment">
      <h2>Payment Details</h2>
      <div className="payment-container">
        <form className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <button className="btn-primary">Pay Now</button>
        </form>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Total Amount</span>
            <span>$209.98</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;