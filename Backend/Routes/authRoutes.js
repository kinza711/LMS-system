import express from "express";
const router = express.Router();
import {Register} from "../controllers/authController.js"
import {Login} from "../controllers/authController.js"
import {Logout} from "../controllers/authController.js"
import upload from "../middlewares/upload.js"

router.post("/register" , Register, upload.single("profile"));
router.post("/login",  Login);
router.get("/logout", Logout)

export default router;