import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
  return (
    <>
        <div className="login-page">

    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className='labels'>
          {/* <label htmlFor="email">Email</label> */}
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className='labels'>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <div className="links">
        <Link to="/forgotpassword">Forgot Password?</Link>
        <Link to="/register">Sign Up</Link>
                            </div>
        <button type="submit">Login</button>
      </form>
    </div>
      <h1>A Strong Desire to Explore?</h1>
      </div>
    </>
  );
};

export default Login;
