// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <Link to={"/home"}>
//       <div className="logo">GoVenture</div>
//       </Link>
//       <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//         <Link to={"/packages"}>
//         <a href="#packages">Packages</a>
//         </Link>
//         <a href="#hotels">Hotels</a>

//         <Link  to={"/transport"}>
        
//         <a href="#transport">Transport</a>
//         </Link>


        
//         <Link  to={"/contact"}>
        
//         <a href="#contact">Contact</a>
//         </Link>

//         <Link  to={"/BlogPge"}>
        
//         <a href="#blogpage">Blogs</a>
//         </Link>

//         <Link to={"/login"}>
        
//         <button className="login-btn">Login</button>
//         </Link>
//         <Link to={"/register"}>
        
//         <button className="login-btn">Register</button>
//         </Link>
//         <button className="register-btn">ASK AI</button>
//       </div>
//       <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/home">
        <div className="logo">GoVenture</div>
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/packages">
          <span>Packages</span>
        </Link>
        <Link to="/hotels">
          <span>Hotels</span>
        </Link>
        <Link to="/transport">
          <span>Transport</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
        <Link to="/BlogPge">
          <span>Blogs</span>
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
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
