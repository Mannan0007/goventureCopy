import React, { useState } from "react";
import axios from "axios";
import "./flight.css"; // Import CSS file
import videoBg from "../images/flightbooking.mp4"; // Replace with correct path to your flight video background
import Navbar from "./Navbar"; // Import the Navbar component

const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFlightSearch = async () => {
    setError("");
    setFlightDetails(null);
    setLoading(true);

    if (!flightNumber.trim()) {
      setError("Please enter a flight number.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/flights?flightNumber=${flightNumber}`
      );

      console.log("API Response:", response.data);

      if (response.data && response.data.length > 0) {
        setFlightDetails(response.data[0]);
      } else {
        setError("No details found for the provided flight number.");
      }
    } catch (error) {
      console.error("Error fetching flight details:", error);
      setError(
        error.response?.data?.message ||
          "Failed to fetch flight details. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="flight-container">
        <h1 className="flight-heading">Flight Search</h1>
        <input
          type="text"
          placeholder="Enter Flight Number (e.g., AI2928)"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
        <button onClick={handleFlightSearch}>Search Flight</button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {flightDetails && (
          <div className="flight-details">
            <h2>Flight Details</h2>
            <p>
              <strong>Flight:</strong> {flightDetails.airline_name} (
              {flightDetails.flnr})
            </p>
            <p>
              <strong>Departure:</strong> {flightDetails.departure_name} (
              {flightDetails.departure_city})
            </p>
            <p>
              <strong>Departure Time:</strong>{" "}
              {flightDetails.scheduled_departure_local}
            </p>
            <p>
              <strong>Arrival:</strong> {flightDetails.arrival_name} (
              {flightDetails.arrival_city})
            </p>
            <p>
              <strong>Arrival Time:</strong>{" "}
              {flightDetails.scheduled_arrival_local}
            </p>
            <p>
              <strong>Status:</strong> {flightDetails.status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearch;
