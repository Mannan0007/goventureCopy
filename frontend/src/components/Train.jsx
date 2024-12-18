import React, { useState } from "react";
import axios from "axios";
import "../styles/train.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import videoBg from "../images/trainbooking.mp4"; 

const TrainDetails = () => {
  const [originStation, setOriginStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [trainData, setTrainData] = useState([]);
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null); 

  const fetchTrainDetails = async () => {
    try {
      setError(""); 
      setTrainData([]); 

      if (!originStation || !destinationStation) {
        setError("Please enter both origin and destination stations.");
        return;
      }

      const response = await axios.get("http://localhost:3000/api/trains", {
        params: { origin_station: originStation, destination_station: destinationStation },
      });

      setTrainData(response.data);
    } catch (err) {
      // Handle errors
      if (err.response && err.response.status === 404) {
        setError("No trains found for the specified stations.");
      } else {
        setError("Failed to fetch train details. Please try again.");
      }
    }
  };

  const handleBookNow = (train) => {
    setBookingDetails({
      train_number: train.train_number,
      train_name: train.train_name,
      price_per_person: train.price, 
      passengers: 1,
      date: "",
    });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotalPrice = () => {
    return bookingDetails.price_per_person * bookingDetails.passengers;
  };

  const confirmBooking = () => {
    alert(
      `Booking confirmed!\nTrain: ${bookingDetails.train_name}\nDate: ${bookingDetails.date}\nPassengers: ${bookingDetails.passengers}\nTotal Price: ₹${calculateTotalPrice()}`
    );
    setBookingDetails(null); 
  };

  const closeModal = () => {
    setBookingDetails(null); 
  };

  return (
    <>
      <Navbar />

      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="train-details-container">
        <h1>Search Train Details</h1>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Origin Station"
            value={originStation}
            onChange={(e) => setOriginStation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination Station"
            value={destinationStation}
            onChange={(e) => setDestinationStation(e.target.value)}
          />
        </div>
        <button onClick={fetchTrainDetails}>Search</button>

        {error && <p className="error">{error}</p>}

        {trainData.length > 0 && (
          <div>
            <h2>Train Details</h2>
            {trainData.map((train, index) => (
              <div key={index} className="train-card">
                <p>
                  <strong>Train Number:</strong> {train.train_number}
                </p>
                <p>
                  <strong>Name:</strong> {train.train_name}
                </p>
                <p>
                  <strong>From:</strong> {train.origin_station}
                </p>
                <p>
                  <strong>To:</strong> {train.destination_station}
                </p>
                <p>
                  <strong>Departure Time:</strong> {train.departure_time}
                </p>
                <p>
                  <strong>Arrival Time:</strong> {train.arrival_time}
                </p>
                <p>
                  <strong>Type:</strong> {train.train_type}
                </p>
                <p>
                  <strong>Price:</strong> ₹{train.price}
                </p>
                <button
                  className="book-now-button"
                  onClick={() => handleBookNow(train)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}

        {bookingDetails && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Book Your Tickets</h3>
              <div className="booking-inputs">
                <label>Date of Travel:</label>
                <input
                  type="date"
                  name="date"
                  value={bookingDetails.date}
                  onChange={handleBookingChange}
                />
                <label>Number of Passengers:</label>
                <input
                  type="number"
                  name="passengers"
                  min="1"
                  value={bookingDetails.passengers}
                  onChange={(e) =>
                    handleBookingChange({
                      target: { name: "passengers", value: parseInt(e.target.value) || 1 },
                    })
                  }
                />
              </div>
              <p>
                <strong>Total Price:</strong> ₹{calculateTotalPrice()}
              </p>
              <div className="modal-buttons">
                <button className="confirm-booking" onClick={confirmBooking}>
                  Confirm Booking
                </button>
                <button className="cancel-booking" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrainDetails;
