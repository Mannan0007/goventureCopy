import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState("");

  // Filter unique origins and destinations for suggestions
  const uniqueOrigins = [...new Set(flightsData.map((flight) => flight.origin))];
  const uniqueDestinations = [
    ...new Set(flightsData.map((flight) => flight.destination)),
  ];

  const handleOriginChange = (e) => {
    const input = e.target.value;
    setOrigin(input);
    if (input) {
      setOriginSuggestions(
        uniqueOrigins.filter((city) =>
          city.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setOriginSuggestions([]);
    }
  };

  const handleDestinationChange = (e) => {
    const input = e.target.value;
    setDestination(input);
    if (input) {
      setDestinationSuggestions(
        uniqueDestinations.filter((city) =>
          city.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setDestinationSuggestions([]);
    }
  };

  const selectOrigin = (city) => {
    setOrigin(city);
    setOriginSuggestions([]);
  };

  const selectDestination = (city) => {
    setDestination(city);
    setDestinationSuggestions([]);
  };

  const searchFlights = () => {
    setError("");
    const filteredFlights = flightsData.filter(
      (flight) =>
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );

    if (filteredFlights.length > 0) {
      setResults(filteredFlights);
    } else {
      setError("No flights available between these cities.");
      setResults([]);
    }
  };

  const clearResults = () => {
    setOrigin("");
    setDestination("");
    setResults([]);
    setError("");
  };

  return (
    <>
    <Navbar/>
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", marginTop:"130px"}}>
      <h1>Flight Search</h1>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Enter Origin City"
          value={origin}
          onChange={handleOriginChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {originSuggestions.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: "5px",
              margin: "0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              position: "absolute",
              zIndex: 10,
              width: "100%",
            }}
          >
            {originSuggestions.map((city, index) => (
              <li
                key={index}
                onClick={() => selectOrigin(city)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Enter Destination City"
          value={destination}
          onChange={handleDestinationChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {destinationSuggestions.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: "5px",
              margin: "0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              position: "absolute",
              zIndex: 10,
              width: "100%",
            }}
          >
            {destinationSuggestions.map((city, index) => (
              <li
                key={index}
                onClick={() => selectDestination(city)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={searchFlights}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Search Flights
      </button>
      <button
        onClick={clearResults}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#6c757d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Clear Results
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Available Flights</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((flight, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <p>
                  <strong>Flight:</strong> {flight.airline} ({flight.flightNumber})
                </p>
                <p>
                  <strong>From:</strong> {flight.origin} to {flight.destination}
                </p>
                <p>
                  <strong>Departure:</strong> {flight.departureTime},{" "}
                  <strong>Arrival:</strong> {flight.arrivalTime}
                </p>
                <p>
                  <strong>Duration:</strong> {flight.duration},{" "}
                  <strong>Price:</strong> ₹{flight.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <Footer/>
      
    </>
  );
};

export default FlightSearch;
