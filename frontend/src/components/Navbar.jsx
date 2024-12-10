import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to={"/home"}>
      <div className="logo">GoVenture</div>
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to={"/packages"}>
        <a href="#packages">Packages</a>
        </Link>
        <a href="#hotels">Hotels</a>

        <Link  to={"/transport"}>
        
        <a href="#transport">Transport</a>
        </Link>

        <Link to={"/login"}>
        
        <button className="login-btn">Login</button>
        </Link>
        <Link to={"/register"}>
        
        <button className="login-btn">Register</button>
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