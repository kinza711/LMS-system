import express from "express";
const router = express.Router();

import {Questions} from "../controllers/adminController.js"
import {getQuestions} from "../controllers/adminController.js"
import {deleteQuestions} from "../controllers/adminController.js"
import {updatequestions} from "../controllers/adminController.js"

import {stdUsers} from "../controllers/adminController.js"
import {deleteStd} from "../controllers/adminController.js"
import {updataStd} from "../controllers/adminController.js"

import {postCourse} from '../controllers/adminController.js';
import {getCourse, getQuestionsByCourse} from "../controllers/adminController.js"
import {deleteCourse} from "../controllers/adminController.js"
import {updateCourse} from "../controllers/adminController.js"
import { varifyToken } from "../middlewares/varifyToken.js";
import {getBasicCourse} from "../controllers/adminController.js"
import {getProCourse} from "../controllers/adminController.js"
import { getSingleCourse } from "../controllers/adminController.js";

import { isAdmin} from "../middlewares/isAdmin.js";
import {authorizeRoles} from "../middlewares/roleMiddleware.js"

// admin questions post
router.post("/questions", varifyToken,  authorizeRoles("admin", "Instructor"), Questions);  // adm & inst
router.get("/questions", varifyToken, authorizeRoles("admin", "Instructor"), getQuestions); // adm & inst
//router.get("/questions/:courseId", showQuestions);
router.get("/questions/course/:courseId", varifyToken, authorizeRoles("admin", "Instructor", "Student"), getQuestionsByCourse); // all role allow 
router.delete("/questions/:id", varifyToken, authorizeRoles("admin", "Instructor"), deleteQuestions); // admin & inst
router.put("/questions/:courseId/:id", varifyToken, authorizeRoles("admin", "Instructor"),  updatequestions); // adm & inst ,

// manage students 
router.get("/students", varifyToken,authorizeRoles("admin", "Instructor"), stdUsers); // adm & inst
router.delete("/students/:id", varifyToken, authorizeRoles("admin", "Instructor"),  deleteStd);  // adm & inst
router.put("/students/:id", varifyToken, authorizeRoles("admin", "Instructor"),  updataStd) // adm & inst

//course management
router.post("/course", varifyToken, authorizeRoles("admin", "Instructor"), postCourse) // adm & inst
router.get("/course",  getCourse) // everyone its public page route
router.get("/course/:id", varifyToken, authorizeRoles("admin", "Instructor", "Student"), getSingleCourse);  // adm & std & inst
 
router.get("/basic", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), getBasicCourse); // adm & std & inst
router.get("/pro", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), getProCourse); // adm & std & inst
router.delete("/course/:id", varifyToken, authorizeRoles("admin", "Instructor"), deleteCourse)  // adm & inst
router.put("/course/:id", varifyToken , authorizeRoles("admin", "Instructor"), updateCourse) // adm & inst


export default router;