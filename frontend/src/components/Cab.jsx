import React, { useState } from "react";
import axios from "axios";
import "./Cab.css"; // Import Cab CSS
import videoBg from "../images/cabbooking.mp4"; // Replace with the correct path to your video
import Navbar from "./Navbar"; // Import the Navbar component

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
        />
        <button onClick={fetchCabDetails}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {cabData.length > 0 && (
          <div>
            <h2 style={{ textAlign: "center" }}>Available Locations</h2>
            <div>
              {cabData.map((cab, index) => (
                <div
                  key={index}
                  className="cab-details"
                >
                  <div>
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
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cab;
