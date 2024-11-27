import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/Register';
import Forgotpassword from '../components/ForgotPassword';
import Registration from '../components/Register';

const Path = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path='/register' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Path;
