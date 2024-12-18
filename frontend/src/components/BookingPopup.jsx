import React, { useState, useEffect } from "react";
import '../styles/bookingportal.css'

const BookingPopup = ({ hotel, onClose }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [totalPrice, setTotalPrice] = useState("$0.00");

  // Calculate total price
  const calculatePrice = () => {
    const priceString = hotel.price.replace(/[^0-9.]/g, ""); // Remove non-numeric characters
    const pricePerNight = parseFloat(priceString);
    const nights =
      checkIn && checkOut
        ? (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        : 0;
    const total = nights * rooms * pricePerNight;
    setTotalPrice(total > 0 ? `₹${total.toFixed(2)}` : "$0.00");
  };

  useEffect(() => {
    calculatePrice();
  }, [checkIn, checkOut, rooms]);

  return (
    <div className="booking-popup">
      <div className="popup-content">
        <h2>Book {hotel.name}</h2>
        <label>
          Check-In Date:
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>
        <label>
          Check-Out Date:
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </label>
        <label>
          Number of Rooms:
          <input
            type="number"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </label>
        <p>Total Price: {totalPrice}</p>
        <button onClick={onClose}>Close</button>
        <button
          onClick={() => {
            alert("Booking Confirmed!");
            onClose();
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPopup;
