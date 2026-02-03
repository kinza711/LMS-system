import express from "express";
const router = express.Router();

import {demo} from "../controllers/adminController.js";
import {getDemo} from "../controllers/adminController.js"
import {deletedemo} from "../controllers/adminController.js"
import {updatedemo} from "../controllers/adminController.js"

import {Questions} from "../controllers/adminController.js"
import {getQuestions} from "../controllers/adminController.js"
import {deleteQuestions} from "../controllers/adminController.js"
import {updatequestions} from "../controllers/adminController.js"

import {stdUsers} from "../controllers/adminController.js"
import {deleteStd} from "../controllers/adminController.js"
import {updataStd} from "../controllers/adminController.js"

import {InstUsers} from "../controllers/adminController.js"
import {deleteInst} from "../controllers/adminController.js"
import {updataInst} from "../controllers/adminController.js"

import {postCourse} from '../controllers/adminController.js';
import {getCourse} from "../controllers/adminController.js"
import {deleteCourse} from "../controllers/adminController.js"
import {updateCourse} from "../controllers/adminController.js"
import {getBasicCourse} from "../controllers/adminController.js"
import {AllUsers} from "../controllers/adminController.js"
import {updateUser} from "../controllers/adminController.js"
import {getProCourse} from "../controllers/adminController.js"
import { getSingleCourse , getQuestionsByCourse, } from "../controllers/adminController.js";
//import {showQuestions} from "../controllers/adminController.js"

import {varifyToken} from "../middlewares/varifyToken.js";

router.post("/demotest", demo);
router.get("/demotest", getDemo);
router.put("/demotest/:id", updatedemo);
router.delete("/demotest/:id", deletedemo);

// admin questions post
router.post("/questions", varifyToken,  Questions);
router.get("/questions", varifyToken, getQuestions);
//router.get("/questions/:courseId", showQuestions);
router.get("/questions/course/:courseId", varifyToken,  getQuestionsByCourse);
router.delete("/questions/:id", varifyToken, deleteQuestions);
router.put("/questions/:courseId/:id", varifyToken,  updatequestions);


// manage students 
router.get("/students", varifyToken, stdUsers);
router.delete("/students/:id", varifyToken, deleteStd);
router.put("/students/:id", varifyToken, updataStd)
// manage instructor
router.get("/inst", varifyToken, InstUsers);
router.delete("/inst/:id", varifyToken, deleteInst);
router.put("/inst/:id", varifyToken,  updataInst);

//all users data 
router.get("/allusers", varifyToken,  AllUsers)
router.put("/allusers/:id",varifyToken, updateUser)
//course management
router.post("/course", varifyToken, postCourse)
router.get("/course",  getCourse)
router.get("/course/:id", varifyToken, getSingleCourse); 

router.get("/basic", varifyToken, getBasicCourse);
router.get("/pro", varifyToken,  getProCourse);
router.delete("/course/:id", varifyToken, deleteCourse)
router.put("/course/:id", varifyToken , updateCourse)


export default router;