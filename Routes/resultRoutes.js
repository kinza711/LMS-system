import express from "express";
import { submitResult, findResult, deleteResult, getResultAnalytics } from "../controllers/resultController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
import {varifyToken} from "../middlewares/varifyToken.js"

const router = express.Router();

// router.post("/submit", authMiddleware, submitResult);
router.post("/submit", varifyToken,  submitResult);
router.get("/submit", varifyToken,  findResult)
router.delete("/submit/:id", varifyToken,  deleteResult);
router.get("/submit/analytics", varifyToken,  getResultAnalytics)

export default router;