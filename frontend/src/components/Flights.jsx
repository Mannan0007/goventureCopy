import React, { useState } from "react";
import flightsData from "../flightsData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./flights.css";
import videoBg from "../images/flightbooking.mp4"; // Import video file

const FlightSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState([]);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [error, setError] = useState("");

  // Unique suggestions
  const uniqueOrigins = [...new Set(flightsData.map((flight) => flight.origin))];
  const uniqueDestinations = [
    ...new Set(flightsData.map((flight) => flight.destination)),
  ];

  const handleOriginChange = (e) => {
    const input = e.target.value;
    setOrigin(input);
    setOriginSuggestions(
      input
        ? uniqueOrigins.filter((city) =>
            city.toLowerCase().includes(input.toLowerCase())
          )
        : []
    );
  };

  const handleDestinationChange = (e) => {
    const input = e.target.value;
    setDestination(input);
    setDestinationSuggestions(
      input
        ? uniqueDestinations.filter((city) =>
            city.toLowerCase().includes(input.toLowerCase())
          )
        : []
    );
  };

  const searchFlights = () => {
    setError("");
    const filteredFlights = flightsData.filter(
      (flight) =>
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );

    setResults(filteredFlights.length > 0 ? filteredFlights : []);
    if (filteredFlights.length === 0)
      setError("No flights available between these cities.");
  };

  const clearResults = () => {
    setOrigin("");
    setDestination("");
    setResults([]);
    setError("");
  };

  return (
    <>
      <Navbar />

      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="flight-container" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div className="flight-card" style={{ maxWidth: '600px', background: '#333', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              padding: "15px",
              backgroundColor: "#222", // Dark background for the heading
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
              marginBottom: "20px", // Space below the heading
            }}
          >
            Flight Search
          </h1>
          <input
            type="text"
            placeholder="Enter Origin City"
            value={origin}
            onChange={handleOriginChange}
            className="input-box"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="Enter Destination City"
            value={destination}
            onChange={handleDestinationChange}
            className="input-box"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={searchFlights}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#FF4C4C", // Red color
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Search Flights
          </button>
          <button
            onClick={clearResults}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#ccc",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear Results
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {results.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <h2 style={{ color: "white" }}>AVAILABLE FLIGHTS</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {results.map((flight, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "15px",
                      padding: "15px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      backgroundColor: "#444", // Slightly darker background
                    }}
                  >
                    <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                      <strong>Flight:</strong> {flight.airline} (
                      {flight.flightNumber})
                    </div>
                    <div>
                      <strong>From:</strong> {flight.origin} to{" "}
                      {flight.destination}
                    </div>
                    <div>
                      <strong>Departure:</strong> {flight.departureTime},{" "}
                      <strong>Arrival:</strong> {flight.arrivalTime}
                    </div>
                    <div>
                      <strong>Duration:</strong> {flight.duration},{" "}
                      <strong>Price:</strong> ₹{flight.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default FlightSearch;
