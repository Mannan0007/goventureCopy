import mongoose from 'mongoose';

// Define the schema for cabs based on the API response
const cabSchema = new mongoose.Schema(
  {
    providerName: { type: String, required: true }, // Assuming providerName comes from the API or your logic
    destination: { type: String, required: true }, // e.g., "Mumbai", derived from entity_name or hierarchy
    vehicleType: { type: String, required: true }, // Assuming you map 'class' to 'vehicleType'
    location: { type: String, required: true }, // Store coordinates as a string (latitude, longitude)
    entityId: { type: String, required: true }, // entity_id from API response
    entityName: { type: String, required: true }, // entity_name from API response
    hierarchy: { type: String, required: true }, // hierarchy info from API
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the model from the schema
const Cab = mongoose.model('Cab', cabSchema);

export default Cab;
