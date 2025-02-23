import React from 'react';

const Order = () => {
  return (
    <div className="orders">
      <h2>My Orders</h2>
      <div className="order-list">
        {[1, 2].map((order) => (
          <div key={order} className="order-card">
            <div className="order-header">
              <h3>Order #{order}23456</h3>
              <span className="order-status">Delivered</span>
            </div>
            <div className="order-items">
              <div className="order-item">
                <div className="order-item-image"></div>
                <div className="order-item-details">
                  <h4>Product Name</h4>
                  <p>Size: M</p>
                  <p>$99.99</p>
                </div>
              </div>
            </div>
            <div className="order-footer">
              <p>Order Date: March 15, 2024</p>
              <p>Total: $209.98</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;