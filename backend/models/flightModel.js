import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema(
  {
    flightNumber: { type: String, required: true }, // Flight number, e.g., "AI 2928"
    airline: { type: String }, // Airline name, e.g., "Air India"
    departure: {
      airport: { type: String }, // Departure airport name or code
      time: { type: Date }, // Departure time
    },
    arrival: {
      airport: { type: String }, // Arrival airport name or code
      time: { type: Date }, // Arrival time
    },
    status: { type: String }, // Flight status, e.g., "On Time", "Delayed"
    duration: { type: String }, // Flight duration, e.g., "2h 30m"
    stops: { type: Number, default: 0 }, // Number of stops, if applicable
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create model from schema
const Flight = mongoose.model('Flight', flightSchema);

export default Flight;
