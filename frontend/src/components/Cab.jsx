import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cab = () => {
  const [destination, setDestination] = useState(''); // User input for destination
  const [cabData, setCabData] = useState([]); // Fetched cab data
  const [error, setError] = useState(''); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  const fetchCabDetails = async () => {
    setError('');
    setLoading(true);
    setCabData([]);

    if (!destination.trim()) {
      setError('Please enter a destination.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/cabs`, {
        params: { destination },
      });
      setCabData(response.data); // Save data to state
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching cab details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Cab Search</h1>
      <input
        type="text"
        placeholder="Enter Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={fetchCabDetails}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {cabData.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Available Locations</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cabData.map((cab, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '15px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <p><strong>Name:</strong> {cab.name}</p>
                <p><strong>Type:</strong> {cab.type}</p>
                <p><strong>City:</strong> {cab.city}</p>
                <p><strong>Country:</strong> {cab.country}</p>
                <p><strong>Latitude:</strong> {cab.latitude}</p>
                <p><strong>Longitude:</strong> {cab.longitude}</p>
                <p><strong>Google Place ID:</strong> {cab.googlePlaceId}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cab;
