import React, { useState } from "react";
import axios from "axios";
import "./Cab.css";
import videoBg from "../images/cabbooking.mp4"; // Correct import path
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cab = () => {
  const [destination, setDestination] = useState("");
  const [cabData, setCabData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCabDetails = async () => {
    setError("");
    setLoading(true);
    setCabData([]);

    if (!destination.trim()) {
      setError("Please enter a destination.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/cabs`, {
        params: { destination },
      });
      setCabData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching cab details.");
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
      <div className="cab-container">
        <h1 className="cab-heading">Cab Search</h1>
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={fetchCabDetails}
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
          Search
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {cabData.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ textAlign: "center" }}>AVAILABLE LOCATIONS</h2>
            <div>
              {cabData.map((cab, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "15px",
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                    <strong>Name:</strong> {cab.name}
                  </div>
                  <div>
                    <strong>Type:</strong> {cab.type}
                  </div>
                  <div>
                    <strong>City:</strong> {cab.city}
                  </div>
                  <div>
                    <strong>Country:</strong> {cab.country}
                  </div>
                  <div>
                    <strong>Latitude:</strong> {cab.latitude}
                  </div>
                  <div>
                    <strong>Longitude:</strong> {cab.longitude}
                  </div>
                  <div>
                    <strong>Google Place ID:</strong> {cab.googlePlaceId}
                  </div>
                  {/* Book Button */}
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "10px 15px",
                      backgroundColor: "#007BFF", // Blue color
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => alert(`Booked: ${cab.name}`)}
                  >
                    Book
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cab;
