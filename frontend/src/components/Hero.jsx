import React from 'react';
import './Hero.css';

const Hero = () => {

  const scroll=()=>{
    const section=document.getElementById('explore-section');
    if(section){
      section.scrollIntoView({ behavior: 'smooth' });
    }

  }
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Explore the World with GoVenture</h1>
        <p>Discover amazing destinations and create unforgettable memories</p>
        <button className="explore-btn" onClick={scroll}>Start Exploring</button>
      </div>
      <div className="image-slider">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="Nature" />
      </div>
    </div>
  );
};

export default Hero;
