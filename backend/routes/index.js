import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import trainRoute from "./trainRoutes.js";
import flightRoute from "./flightRoutes.js";
import cabRoute from "./cabRoutes.js";
import bookingRoute from "./bookingRoutes.js";

const router = express.Router();

router.use(`/auth`, authRoute);
router.use(`/users`, userRoute);
router.use(`/trains`, trainRoute);
router.use('/flights', flightRoute);
router.use(`/cabs`, cabRoute); 
router.use(`/cabs/book`, bookingRoute);

export default router;
