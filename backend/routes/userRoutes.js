import express from "express";
import path from "path";
import {
  changePassword,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
} from "../controllers/userController.js";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

// Email Verification
router.get("/verify/:userId/:token", verifyEmail);

// Password Reset Routes
router.post("/request-passwordreset", requestPasswordReset);
router.get("/reset-password/:userId/:token", resetPassword);
router.post("/reset-password", changePassword);

// Serve static files for verification and reset password pages
router.get("/verified", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/build", "index.html"));  // Serve email verification page
});

router.get("/resetpassword", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/build", "index.html"));  // Serve reset password page
});

export default router;
