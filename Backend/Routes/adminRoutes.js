import express from "express";
const router = express.Router();
//demo logic routes
import {demo, getDemo , deletedemo, updatedemo } from "../controllers/adminController.js";
//questions logic routes
import {getQuestions, getSingleQuestion, deleteQuestions, updatequestions, Questions} from "../controllers/adminController.js"
// std logic routes
import {stdUsers,deleteStd, updataStd} from "../controllers/adminController.js"
//inst logic routes
import {InstUsers, deleteInst, updataInst} from "../controllers/adminController.js"
//course logic routes
import {postCourse,getCourse, deleteCourse, updateCourse, getBasicCourse, } from '../controllers/adminController.js';
import { getSingleCourse , getProCourse, getQuestionsByCourse, } from "../controllers/adminController.js";
// users logic routes
import {AllUsers,updateUser, getSingleUser} from "../controllers/adminController.js"
//import {showQuestions} from "../controllers/adminController.js"

import {varifyToken} from "../middlewares/varifyToken.js";
import { isAdmin} from "../middlewares/isAdmin.js";
import {authorizeRoles} from "../middlewares/roleMiddleware.js"
import {getProfile, updateProfile} from "../controllers/adminController.js"
import upload from "../middlewares/upload.js"


router.post("/demotest",  varifyToken,  authorizeRoles("admin", "Instructor"), demo);
router.get("/demotest", getDemo);
router.put("/demotest/:id",  varifyToken,  authorizeRoles("admin", "Instructor"), updatedemo);
router.delete("/demotest/:id",  varifyToken,  authorizeRoles("admin", "Instructor"), deletedemo);

// admin questions post
router.post("/questions", varifyToken,  authorizeRoles("admin", "Instructor"), Questions);  // adm & inst
router.get("/questions", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), getQuestions); // adm & inst
//router.get("/questions/:courseId", showQuestions);
router.get("/questions/course/:courseId", varifyToken, authorizeRoles("admin", "Instructor", "Student"), getQuestionsByCourse); // all role allow 
router.delete("/questions/:id", varifyToken,  authorizeRoles("admin", "Instructor"), deleteQuestions); // admin & inst
router.put("/questions/:courseId/:id", varifyToken,  authorizeRoles("admin", "Instructor"), updatequestions); // adm & inst
router.get("/questions/:id",varifyToken, authorizeRoles("admin", "Instructor"),getSingleQuestion);


// manage students 
router.get("/students", varifyToken,  authorizeRoles("admin", "Instructor"), stdUsers); // adm & inst
router.delete("/students/:id", varifyToken,  authorizeRoles("admin", "Instructor"), deleteStd);  // adm & inst
router.put("/students/:id", varifyToken,  authorizeRoles("admin", "Instructor"), updataStd) // adm & inst

// manage instructor
router.get("/inst", varifyToken,  authorizeRoles("admin", "Instructor"), InstUsers);  // adm & inst
router.delete("/inst/:id", varifyToken, authorizeRoles("admin"), deleteInst); // adm
router.put("/inst/:id", varifyToken, authorizeRoles("admin"), updataInst); // adm 

//all users data 
router.get("/allusers/:id", varifyToken,   authorizeRoles("admin", "Instructor", "Student"), getSingleUser)
router.get("/allusers", varifyToken,   authorizeRoles("admin", "Instructor"), AllUsers) // adm & inst
router.put("/allusers/:id", varifyToken,  authorizeRoles("admin", "Instructor"), upload.single("profile"), updateUser) // adm & inst

//course management
router.post("/course", varifyToken, authorizeRoles("admin", "Instructor"),upload.single("courseImage"), postCourse) // adm & inst
router.get("/course",  getCourse) // everyone its public page route
router.get("/course/:id", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), getSingleCourse);  // adm & std & inst
 
router.get("/basic", varifyToken, authorizeRoles("admin", "Instructor", "Student"), getBasicCourse); // adm & std & inst
router.get("/pro", varifyToken,  authorizeRoles("admin", "Instructor", "Student"),  getProCourse); // adm & std & inst
router.delete("/course/:id", varifyToken,  authorizeRoles("admin", "Instructor"), deleteCourse)  // adm & inst
router.put("/course/:id", varifyToken ,  authorizeRoles("admin", "Instructor"), upload.single("courseImage"), updateCourse) // adm & inst


//user profile routes
router.get("/profile", varifyToken ,  authorizeRoles("Student", "Instructor", "admin"), getProfile)
router.put("/profile", varifyToken ,  authorizeRoles("Student", "Instructor", "admin"), upload.single("profile"), updateProfile)


export default router;