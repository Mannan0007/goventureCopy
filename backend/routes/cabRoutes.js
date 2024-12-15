// import express from 'express';
// import { getCabDetails } from '../controllers/cabController.js';

// const router = express.Router();

// router.get('/', getCabDetails); // Define a GET route for fetching cab details

// export default router;

import express from 'express';
import { getCabDetails } from '../controllers/cabController.js';

const router = express.Router();

// Add logging here to see if the route is being hit
router.get('/', (req, res, next) => {
  console.log("GET /api/cabs route hit");
  next(); // Pass control to the next handler (getCabDetails)
});

router.get('/', getCabDetails); // Define a GET route for fetching cab details

export default router;
