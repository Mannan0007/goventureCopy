import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CustomizePackage = () => {
  const { state } = useLocation(); // Package details passed via state
  const selectedPackage = state?.package;

  // Extract price and clean it
  const basePrice = selectedPackage?.price
    ? parseInt(selectedPackage.price.replace(/[₹,]/g, ""), 10)
    : 0;

  const [numPeople, setNumPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  // Update total price based on number of guests
  const handlePeopleChange = (e) => {
    const peopleCount = parseInt(e.target.value, 10);
  
    // Ensure guest count is at least 1, else set totalPrice to 0
    if (isNaN(peopleCount) || peopleCount < 1) {
      setNumPeople(0);
      setTotalPrice(0);
    } else {
      setNumPeople(peopleCount);
      setTotalPrice(peopleCount * basePrice);
    }
  };
  

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", marginTop: "130px" }}>
        <h1>Customize Your Package</h1>
        {selectedPackage ? (
          <div>
            <img src={selectedPackage.image} alt={selectedPackage.city} style={{ width: "100%" }} />
            <h2>{selectedPackage.city}</h2>
            <p>{selectedPackage.description}</p>
            <p><strong>Price per person: ₹{basePrice.toLocaleString()}</strong></p>

            {/* Number of People Input */}
            <div style={{ margin: "20px 0" }}>
              <label htmlFor="numPeople">Number of Guests:</label>
              <input
                type="number"
                id="numPeople"
                min="1"
                value={numPeople}
                onChange={handlePeopleChange}
                style={{
                  display: "block",
                  marginTop: "10px",
                  padding: "10px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>

            {/* Total Price */}
            <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
            <button
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm Booking
            </button>
          </div>
        ) : (
          <p>No package selected. Please go back and choose a package.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CustomizePackage;
