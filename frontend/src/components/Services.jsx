import React from 'react';
import './Services.css';
import { FaClock, FaShieldAlt, FaTag, FaMapMarkedAlt } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaClock size={40} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs'
  },
  {
    id: 2,
    icon: <FaShieldAlt size={40} />,
    title: 'Secure Booking',
    description: 'Safe and encrypted transactions guaranteed'
  },
  {
    id: 3,
    icon: <FaTag size={40} />,
    title: 'Best Prices',
    description: 'Guaranteed best rates and exclusive deals'
  },
  {
    id: 4,
    icon: <FaMapMarkedAlt size={40} />,
    title: 'Curated Destinations',
    description: 'Hand-picked locations for unforgettable experiences'
  },
//   {
//     id: 5,
//     icon: <FaHeadset size={40} />,
//     title: 'Expert Guidance',
//     description: 'Professional travel advisors at your service'
//   },
//   {
//     id: 6,
//     icon: <FaHotel size={40} />,
//     title: 'Luxury Stays',
//     description: 'Premium accommodations worldwide'
//   }
 ];

const Services = () => {
  return (
    <section className="services" id='explore-section'>
      <div className="section-title" >
        <h2>Why Choose Us</h2>
        <p>Experience the best in travel with our premium services</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;