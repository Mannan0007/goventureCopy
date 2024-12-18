import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import hotelData from "../../src/hotelData.js";
import "../styles/hotelPage.css";
import NavBar from "./Navbar.jsx";
import BookingPopup from "./BookingPopup.jsx";
const HotelPage = () => {
  const [hotels, setHotels] = useState(hotelData);
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null); // State for selected hotel
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  // Filter hotels by location
  useEffect(() => {
    const filteredHotels = hotelData.filter((hotel) =>
      hotel.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setHotels(filteredHotels);
  }, [searchLocation]);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setShowPopup(true);
  };

  return (
    <>
      <NavBar />
      <div className="hotel-page">
        {/* Header */}
        <header className="hotel-header">
          <h1>Find Your Perfect Stay</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search hotels by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="search-input"
            />
          </div>
        </header>

        {/* Hotel List */}
        <div className="hotel-list">
          {hotels.length > 0 ? (
            hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onBookNow={() => handleBookNow(hotel)}
              />
            ))
          ) : (
            <p className="no-hotels">No hotels found. Please try again.</p>
          )}
        </div>
        {showPopup && selectedHotel && (
          <BookingPopup
            hotel={selectedHotel}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    </>
  );
};

export default HotelPage;
