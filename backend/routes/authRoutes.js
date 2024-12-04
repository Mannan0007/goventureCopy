import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

// Define your routes
router.post("/api/register", register);
router.post("/api/login", login);

export default router;
