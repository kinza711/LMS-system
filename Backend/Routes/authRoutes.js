import express from "express";
const router = express.Router();

import {Logout, Login, Register} from "../controllers/authController.js"
import upload from "../middlewares/upload.js"

router.post("/register", upload.single("profile") , Register);
router.post("/login",  Login);
router.get("/logout", Logout)

export default router;