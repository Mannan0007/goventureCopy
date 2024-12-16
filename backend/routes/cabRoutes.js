import express from 'express';
import { getCabDetails } from '../controllers/cabController.js'; // Import the controller

const router = express.Router();

// Define the GET route for fetching cab details
router.get('/', getCabDetails);

export default router;
