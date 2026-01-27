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
import { getSingleCourse , getQuestionsByCourse} from "../controllers/adminController.js";
//import {showQuestions} from "../controllers/adminController.js"


router.post("/demotest", demo);
router.get("/demotest", getDemo);
router.put("/demotest/:id", updatedemo);
router.delete("/demotest/:id", deletedemo);

// admin questions post
router.post("/questions", Questions);
router.get("/questions", getQuestions);
//router.get("/questions/:courseId", showQuestions);
router.get("/questions/course/:courseId", getQuestionsByCourse);
router.delete("/questions/:id", deleteQuestions);
router.put("/questions/:courseId/:id", updatequestions);


// manage students 
router.get("/students", stdUsers);
router.delete("/students/:id", deleteStd);
router.put("/students/:id", updataStd)
// manage instructor
router.get("/inst",InstUsers);
router.delete("/inst/:id", deleteInst);
router.put("/inst/:id", updataInst);

//all users data 
router.get("/allusers", AllUsers)
router.put("/allusers/:id", updateUser)
//course management
router.post("/course", postCourse)
router.get("/course", getCourse)
router.get("/course/:id", getSingleCourse); 

router.get("/basic", getBasicCourse);
router.get("/pro", getProCourse);
router.delete("/course/:id", deleteCourse)
router.put("/course/:id", updateCourse)
export default router;