import React, { useState } from "react";
import axios from "axios";
import "./Train.css"; // CSS file for Train Details
import Navbar from "./Navbar"; // Import Navbar component
import videoBg from "../images/trainbooking.mp4"; // Replace with correct path to your video

const TrainDetails = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [trainData, setTrainData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTrainDetails = async () => {
    setError("");
    setTrainData(null);
    setLoading(true);

    if (!trainNumber.trim()) {
      setError("Please enter a train number.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/api/trains", {
        params: { trainNumber },
      });

      if (response.data?.body[0]?.trains) {
        setTrainData(response.data.body[0].trains[0]);
      } else {
        setError("No train details found.");
      }
    } catch (err) {
      setError("Failed to fetch train details. Please try again.");
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
      <div className="train-container">
        <h1 className="train-heading">Train Search</h1>
        <input
          type="text"
          placeholder="Enter Train Number"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
        <button onClick={fetchTrainDetails}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {trainData && (
          <div className="train-details">
            <h2>Train Details</h2>
            <p>
              <strong>Name:</strong> {trainData.trainName}
            </p>
            <p>
              <strong>From:</strong> {trainData.origin} ({trainData.stationFrom})
            </p>
            <p>
              <strong>To:</strong> {trainData.destination} ({trainData.stationTo})
            </p>
            <p>
              <strong>Running On:</strong> <span className="highlight">{trainData.runningOn}</span>
            </p>
            <p>
              <strong>Classes Available:</strong> {trainData.journeyClasses.join(", ")}
            </p>

            <h3>Schedule</h3>
            <ul>
              {trainData.schedule.map((station, index) => (
                <li key={index} className="schedule-item">
                  <div>
                    <strong>
                      {station.stationName} ({station.stationCode})
                    </strong>
                    <span>
                      Arrival: {station.arrivalTime}, Departure: {station.departureTime}, Distance:{" "}
                      {station.distance} km
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainDetails;
