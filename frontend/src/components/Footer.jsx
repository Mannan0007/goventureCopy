import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GoVenture</h3>
          <p>Your trusted travel companion for unforgettable adventures.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@goventure.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Travel Street, Adventure City</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#about">About Us</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GoVenture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;