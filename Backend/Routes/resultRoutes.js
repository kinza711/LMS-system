import express from "express";
import { submitResult, findResult, deleteResult, getResultAnalytics,StdResult } from "../controllers/resultController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
import {varifyToken} from "../middlewares/varifyToken.js"
//import { isAdmin, isInstructor,  isStudent} from "../middlewares/isAdmin.js";
import {authorizeRoles} from "../middlewares/roleMiddleware.js"

const router = express.Router();

// router.post("/submit", authMiddleware, submitResult);
router.post("/submit", varifyToken,  authorizeRoles("admin", "Instructor", "Student"),  submitResult); // adm & std & inst
router.get("/submit", varifyToken,   authorizeRoles("admin", "Instructor", "Student"), findResult)  // adm & std & inst
router.delete("/submit/:id", varifyToken,  authorizeRoles("admin", "Instructor"),  deleteResult); // adm & inst
router.get("/submit/analytics", varifyToken, authorizeRoles("admin", "Instructor"), getResultAnalytics)  // adm & inst 


// user result
router.get("/result/:id", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), StdResult)

export default router;