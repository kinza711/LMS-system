import express from "express";
const router = express.Router();

// users logic routes
import {
  AllUsers,
  updateUser,
  getSingleUser,
} from "../controllers/adminController.js";

import { varifyToken } from "../middlewares/varifyToken.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

import upload from "../middlewares/upload.js";

//all users data
router.get(
  "/allusers/:id",
  varifyToken,
  authorizeRoles("admin", "Instructor", "Student"),
  getSingleUser,
);
router.get(
  "/allusers",
  varifyToken,
  authorizeRoles("admin", "Instructor"),
  AllUsers,
); // adm & inst
router.put(
  "/allusers/:id",
  varifyToken,
  authorizeRoles("admin", "Instructor"),
  upload.single("profile"),
  updateUser,
); // adm & inst

export default router;
