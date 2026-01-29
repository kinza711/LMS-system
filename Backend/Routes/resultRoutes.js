import express from "express";
import { submitResult } from "../controllers/resultController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/submit", authMiddleware, submitResult);
router.post("/submit", submitResult);

export default router;