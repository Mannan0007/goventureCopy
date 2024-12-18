import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import videoBg from '../images/3015510-hd_1920_1080_24fps.mp4'; // Adjust path to match your folder structure
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to dashboard or home page after successful login
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className="login-page">
        <video autoPlay loop muted className="video-background">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Login Container */}
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="headingmain">Login</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="ok">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="loginlabel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="ok">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="passwordlabel"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
