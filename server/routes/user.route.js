import express from "express";
import {
  register,
  login,
  logout,
  refreshToken,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(authMiddleware, logout);
router.route("/refresh-token").post(refreshToken);

export default router;
