import express from 'express';
import { getFlightDetailsByNumber } from '../controllers/flightController.js';

const router = express.Router();

// Route to fetch flight details by flight number
router.get('/', getFlightDetailsByNumber);

export default router;
