import React from 'react';

const Cart = () => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {[1, 2].map((item) => (
          <div key={item} className="cart-item">
            <div className="cart-item-image"></div>
            <div className="cart-item-details">
              <h3>Product Name</h3>
              <p>Size: M</p>
              <p>$99.99</p>
            </div>
            <div className="cart-item-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="remove-btn">Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$199.98</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>$209.98</span>
        </div>
        <button className="btn-primary">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;