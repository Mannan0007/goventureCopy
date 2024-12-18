import React from "react";
import "../styles/hotelCard.css";

const HotelCard = ({ hotel,onBookNow }) => {
  return (
    <div className="hotel-card">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="hotel-image"
      />
      <div className="hotel-info">
        <h2 className="hotel-name">{hotel.name}</h2>
        <p className="hotel-location">{hotel.location}</p>
        <p className="hotel-price">{hotel.price}</p>
        <p className="hotel-rating">⭐ {hotel.rating}</p>
        <button className="book-now-button" onClick={onBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
