import React from 'react';
import './Packages.css';

const packages = [
  {
    id: 1,
    title: 'European Adventure',
    description: '10 days exploring Paris, Rome, and Barcelona',
    price: '$2499',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8'
  },
  {
    id: 2,
    title: 'Asian Discovery',
    description: '12 days in Tokyo, Seoul, and Bangkok',
    price: '$2199',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd'
  },
  {
    id: 3,
    title: 'Island Paradise',
    description: '7 days in Maldives with water activities',
    price: '$1899',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8'
  }
];

const Packages = () => {
  return (
    <section className="packages">
      <div className="section-title">
        <h2>Featured Packages</h2>
      </div>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>
            <div className="package-content">
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-details">{pkg.description}</p>
              <div className="package-price">From {pkg.price}</div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;