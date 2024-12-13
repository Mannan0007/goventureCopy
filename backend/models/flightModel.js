import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema(
  {
    airlineCode: { type: String, required: true, unique: true }, // Unique code for the airline
    airlineName: { type: String, required: true }, // Airline name
    iataCode: { type: String, required: true }, // IATA Code for the airline
    icaoCode: { type: String, required: true }, // ICAO Code for the airline
    country: { type: String }, // Country where the airline is based
    logoUrl: { type: String }, // URL for the airline logo (optional)
    active: { type: Boolean, default: true }, // Whether the airline is currently active
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create model from schema
const Flight = mongoose.model('Flight', flightSchema);

export default Flight;
