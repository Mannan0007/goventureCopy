import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">GoVenture</div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#packages">Packages</a>
        <a href="#hotels">Hotels</a>
        <a href="#transport">Transport</a>

        <Link to={"/login"}>
        
        <button className="login-btn">Login</button>
        </Link>
        <button className="register-btn">ASK AI</button>
      </div>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;