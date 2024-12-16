import axios from 'axios';

export const bookCab = async (req, res) => {
  const { cabId } = req.body;
  const { userId } = req.body.user;  // Access the userId from the authenticated user

  if (!cabId) {
    return res.status(400).json({ message: 'Cab ID is required' });
  }

  // For demonstration purposes, log the userId and cabId
  console.log(`User ID: ${userId}, Cab ID: ${cabId}`);

  try {
    // Example: You can store the booking information in the database or make an API call to a payment gateway, etc.

    // For now, we'll just return a success response with the userId and cabId
    res.status(200).json({ message: 'Booking successful', userId, cabId });
  } catch (error) {
    console.error('Error processing booking:', error.message);
    res.status(500).json({ message: 'Error processing booking' });
  }
};
