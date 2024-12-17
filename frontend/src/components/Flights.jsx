import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState("");

  const handleFlightSearch = async () => {
    setError("");
    setFlightDetails(null);

    if (!flightNumber) {
      setError("Please enter a flight number.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/flights?flightNumber=${flightNumber}`
      );
    
      console.log("API Response:", response.data);
    
      if (response.data && response.data.length > 0) {
        setFlightDetails(response.data[0]); // Adjusted to handle the array
      } else {
        setError("No details found for the provided flight number.");
      }
    } catch (error) {
      console.error("Error fetching flight details:", error);
      setError(
        error.response?.data?.message ||
        "Failed to fetch flight details. Please try again."
      );
    }
    
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", marginTop: "130px" }}>
        <h1>Flight Search</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter Flight Number (e.g., AI2928)"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleFlightSearch}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Search Flight
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {flightDetails && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>Flight Details</h2>
            <p>
              <strong>Flight:</strong> {flightDetails.airline_name} ({flightDetails.flnr})
            </p>
            <p>
              <strong>Departure:</strong> {flightDetails.departure_name} ({flightDetails.departure_city})
            </p>
            <p>
              <strong>Departure Time:</strong> {flightDetails.scheduled_departure_local}
            </p>
            <p>
              <strong>Arrival:</strong> {flightDetails.arrival_name} ({flightDetails.arrival_city})
            </p>
            <p>
              <strong>Arrival Time:</strong> {flightDetails.scheduled_arrival_local}
            </p>
            <p>
              <strong>Status:</strong> {flightDetails.status}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FlightSearch;