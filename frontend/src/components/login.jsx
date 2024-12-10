import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import videoBg from '../images/3015510-hd_1920_1080_24fps.mp4'; // Adjust path to match your folder structure


const Login = () => {
  return (
    <>
      <div className="login-page">
      <video autoPlay loop muted className="video-background">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Login Container */}
        <div className="login-container">
          <form className="login-form">
            <h2 className="headingmain">Login</h2>
            <div className="ok">
              <input type="email" id="email" name="email" placeholder="Enter your email" className="loginlabel" />
            </div>
            <div className="ok">
              <input type="password" id="password" name="password" placeholder="Enter your password" className="passwordlabel" />
            </div>
            <div className="links">
              <Link to="/forgotpassword">Forgot Password?</Link>
              <Link to="/register">Sign Up</Link>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <h1 className='login-heading1'>A Strong Desire to Explore?</h1>
      </div>
    </>
  );
};

export default Login;
