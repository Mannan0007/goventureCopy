import React, { useState } from 'react';
import '../styles/forgotpassword.css';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle the form submission, like calling an API to send the OTP
    console.log('Email submitted:', email);
  };

  return (
    <>
      <div className='forgot-background'>
        <div className='main-container'>
          <form className='password-form' onSubmit={handleSubmit}>
            <h2 className='forgot-heading'>Reset Password</h2>
            <div className='labels-forgotpassword'>
              {/* <label htmlFor="email">Email</label> */}
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Please enter your email'
                className='registermail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit">Send OTP</button>
            <Link to='/login'>Back to Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
