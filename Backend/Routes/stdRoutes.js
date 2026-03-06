import express from "express";
const router = express.Router();

//demo logic routes
import {stdUsers,deleteStd, updataStd} from "../controllers/stdController.js"

import {authorizeRoles} from "../middlewares/roleMiddleware.js"
import {varifyToken} from "../middlewares/varifyToken.js";

// manage students 
router.get("/students", varifyToken,  authorizeRoles("admin", "Instructor"), stdUsers); // adm & inst
router.delete("/students/:id", varifyToken,  authorizeRoles("admin", "Instructor"), deleteStd);  // adm & inst
router.put("/students/:id", varifyToken,  authorizeRoles("admin", "Instructor"), updataStd) // adm & inst


export default router