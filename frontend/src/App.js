import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import TravelPackages from './components/TravelPackages';
import Transport from './components/Transport';
// import './App.css';


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/packages' element={<TravelPackages/>}/>
      <Route path='/transport' element={<Transport/>}/>
    </Routes>
  );
};

export default App;
