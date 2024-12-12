import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' },
    passengers: [{ name: String, age: Number, gender: String }],
    totalFare: Number,
    bookingDate: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
