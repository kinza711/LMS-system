import express from "express";
const router = express.Router();

//demo logic routes
import {InstUsers, deleteInst, updataInst} from "../controllers/instructorController.js"

import {authorizeRoles} from "../middlewares/roleMiddleware.js"
import {varifyToken} from "../middlewares/varifyToken.js";

// manage instructor
router.get("/inst", varifyToken,  authorizeRoles("admin", "Instructor"), InstUsers);  // adm & inst
router.delete("/inst/:id", varifyToken, authorizeRoles("admin"), deleteInst); // adm
router.put("/inst/:id", varifyToken, authorizeRoles("admin"), updataInst); // adm 


export default router