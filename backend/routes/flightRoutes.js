import express from 'express';
import { getAirlineData } from '../controllers/flightController.js';

const router = express.Router();

// Route to fetch flight details (airline data)
router.get('/airlines', getAirlineData);

export default router;
