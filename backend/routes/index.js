import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import trainRoute from "./trainRoutes.js";
import flightRoute from "./flightRoutes.js";
import cabRoute from "./cabRoutes.js";

const router = express.Router();

router.use(`/auth`, authRoute);
router.use(`/users`, userRoute);
router.use(`/trains`, trainRoute);
router.use('/flights', flightRoute);
router.use(`/cabs`, cabRoute); 

export default router;
