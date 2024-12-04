import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest updates and special offers directly in your inbox!</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;