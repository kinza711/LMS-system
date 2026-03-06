import express from "express";
const router = express.Router();

//demo logic routes
import {postCourse,getCourse, deleteCourse, updateCourse, getBasicCourse,getProCourse,  getSingleCourse } from '../controllers/courseController.js';

import {authorizeRoles} from "../middlewares/roleMiddleware.js"
import upload from "../middlewares/upload.js"
import {varifyToken} from "../middlewares/varifyToken.js";

//course management
router.post("/course", varifyToken, authorizeRoles("admin", "Instructor"),upload.single("courseImage"), postCourse) // adm & inst
router.get("/course",  getCourse) // everyone its public page route
router.get("/course/:id", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), getSingleCourse);  // adm & std & inst
 
router.get("/basic", varifyToken, authorizeRoles("admin", "Instructor", "Student"), getBasicCourse); // adm & std & inst
router.get("/pro", varifyToken,  authorizeRoles("admin", "Instructor", "Student"),  getProCourse); // adm & std & inst
router.delete("/course/:id", varifyToken,  authorizeRoles("admin", "Instructor"), deleteCourse)  // adm & inst
router.put("/course/:id", varifyToken ,  authorizeRoles("admin", "Instructor"), upload.single("courseImage"), updateCourse) // adm & inst


export default router