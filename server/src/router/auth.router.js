import express from "express";
const router = express.Router();

import authController from "../controllers/auth.controller.js";
import tryCatch from "../utils/tryCatchDecorator.js";

router.post("/register", tryCatch(authController.register));
router.post("/login", tryCatch(authController.login));
router.post("/logout", tryCatch(authController.logout));
router.post("/forgot-password", tryCatch(authController.forgotPassword));
router.post("/reset-password", tryCatch(authController.resetPassword));
router.post("/refresh-token", tryCatch(authController.refreshToken));
router.post("/activate-account", tryCatch(authController.activateAccount));

export default router;
