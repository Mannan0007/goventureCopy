import express from 'express';
import { bookCab } from '../controllers/bookController.js';  // Import your bookCab controller
import userAuth from '../middleware/authMiddleware.js';  // Import the authMiddleware

const router = express.Router();

// Protect the booking route by verifying the token (user authentication)
router.post('/', userAuth, bookCab);  // Changed from '/book' to '/' since it's already under `/cabs/book`

export default router;
