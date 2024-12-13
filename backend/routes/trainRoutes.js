import express from 'express';
import { getTrainDetails } from '../controllers/trainController.js';

const router = express.Router();

// Route to fetch train details
router.get('/', getTrainDetails);

export default router;
