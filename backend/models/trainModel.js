import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
    trainNumber: { type: String, required: true, unique: true },
    trainName: { type: String },
    source: { type: String },
    destination: { type: String },
    departureTime: { type: String },
    arrivalTime: { type: String },
    schedule: { type: String },
    availableSeats: { type: Number },
}, { timestamps: true });

const Train = mongoose.model('Train', trainSchema);

export default Train;
