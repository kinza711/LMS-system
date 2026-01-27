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
import {getCourse} from "../controllers/adminController.js"
import {deleteCourse} from "../controllers/adminController.js"
import {updateCourse} from "../controllers/adminController.js"


// admin questions post
router.post("/questions", Questions);
router.get("/questions", getQuestions);
router.delete("/questions/:id", deleteQuestions);
router.put("/questions/:id", updatequestions)

// manage students 
router.get("/students", stdUsers);
router.delete("/students/:id", deleteStd);
router.put("/students/:id", updataStd)


//course management
router.post("/course", postCourse)
router.get("/course", getCourse)
router.delete("/course/:id", deleteCourse)
router.put("/course/:id", updateCourse)

export default router;