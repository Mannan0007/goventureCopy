import React from 'react';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with beautiful beaches and rich culture',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4'
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    description: 'Stunning white architecture and Mediterranean beauty',
    price: '$1299',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8'
  },
  {
    id: 3,
    name: 'Swiss Alps',
    description: 'Majestic mountains and scenic landscapes',
    price: '$1499',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7'
  }
];

const Destinations = () => {
  return (
    <section className="destinations">
      <div className="section-title">
        <h2>Popular Destinations</h2>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <div className="destination-info">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <span className="destination-price">From {dest.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;