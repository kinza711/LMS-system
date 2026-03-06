
import express from "express";
const router = express.Router();

//demo logic routes
import {getProfile, updateProfile} from "../controllers/profileController.js"

import {authorizeRoles} from "../middlewares/roleMiddleware.js"
import upload from "../middlewares/upload.js"
import {varifyToken} from "../middlewares/varifyToken.js";


//user profile routes
router.get("/profile", varifyToken ,  authorizeRoles("Student", "Instructor", "admin"), getProfile)
router.put("/profile", varifyToken ,  authorizeRoles("Student", "Instructor", "admin"), upload.single("profile"), updateProfile)


export default router