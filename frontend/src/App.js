import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import TravelPackages from './components/TravelPackages';
import Transport from './components/Transport';
import Contact from './components/Contact';
import BlogPge from './components/BlogPge';
import FlightSearch from './components/Flights';
import TrainDetails from './components/Train';
import Cab from './components/Cab';
import CustomizePackage from './components/CustomizePackage';
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
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogpge' element={<BlogPge/>}/>
      <Route path='/flights' element={<FlightSearch/>}/>
      <Route path='/train' element={<TrainDetails/>}/>
      <Route path='/cabs' element={<Cab/>}/>
      <Route path='/customize-package' element={<CustomizePackage/>}/>
    </Routes>
  );
};

export default App;
