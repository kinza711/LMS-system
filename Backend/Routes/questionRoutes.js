import express from "express";
const router = express.Router();

//demo logic routes
import {
  getQuestions,
  getSingleQuestion,
  deleteQuestions,
  updatequestions,
  Questions,
  getQuestionsByCourse,
} from "../controllers/questionsController.js";

import { authorizeRoles } from "../middlewares/roleMiddleware.js";
import { varifyToken } from "../middlewares/varifyToken.js";

// admin questions post
router.post(
  "/questions",
  varifyToken,
  authorizeRoles("admin", "Instructor"),
  Questions,
); // adm & inst
router.get(
  "/questions",
  varifyToken,
  authorizeRoles("admin", "Instructor", "Student"),
  getQuestions,
); // adm & inst
//router.get("/questions/:courseId", showQuestions);
router.get(
  "/questions/course/:courseId",
  varifyToken,
  authorizeRoles("admin", "Instructor", "Student"),
  getQuestionsByCourse,
); // all role allow
router.delete(
  "/questions/:id",
  varifyToken,
  authorizeRoles("admin", "Instructor"),
  deleteQuestions,
); // admin & inst
router.put(
  "/questions/:courseId/:id",
  varifyToken,
  authorizeRoles("admin", "Instructor"),
  updatequestions,
); // adm & inst
router.get(
  "/questions/:id",
  varifyToken,
  authorizeRoles("admin", "Instructor"),
  getSingleQuestion,
);

export default router;
