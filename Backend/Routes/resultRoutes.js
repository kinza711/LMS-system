import express from "express";
import { submitResult, findResult, deleteResult, getResultAnalytics } from "../controllers/resultController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/submit", authMiddleware, submitResult);
router.post("/submit", submitResult);
router.get("/submit", findResult)
router.delete("/submit/:id", deleteResult);
router.get("/submit/analytics", getResultAnalytics)

export default router;