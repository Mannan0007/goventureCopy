import React, { useState } from "react";
import axios from "axios";
import "../styles/train.css"; // Add this import to use the CSS
import Navbar from "./Navbar";
import Footer from "./Footer";

const TrainDetails = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [trainData, setTrainData] = useState(null);
  const [error, setError] = useState("");

  const fetchTrainDetails = async () => {
    try {
      setError(""); // Clear any previous errors
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
    }
  };

  return (
    <>
    <Navbar/>
    <div className="train-details-container">
      <h1>Search Train Details</h1>
      <input
        type="text"
        placeholder="Enter Train Number"
        value={trainNumber}
        onChange={(e) => setTrainNumber(e.target.value)}
        />
      <button onClick={fetchTrainDetails}>Search</button>

      {error && <p className="error">{error}</p>}

      {trainData && (
        <div>
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
              <li key={index}>
                <div className="schedule-item">
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
    <Footer/>
          </>
  );
};

export default TrainDetails;
