import express from "express";
const router = express.Router();

//demo logic routes
import {demo, getDemo , deletedemo, updatedemo } from "../controllers/demoController.js";
import {authorizeRoles} from "../middlewares/roleMiddleware.js"
import {varifyToken} from "../middlewares/varifyToken.js";

router.post("/demotest",  varifyToken,  authorizeRoles("admin", "Instructor"), demo);
router.get("/demotest", getDemo);
router.put("/demotest/:id",  varifyToken,  authorizeRoles("admin", "Instructor"), updatedemo);
router.delete("/demotest/:id",  varifyToken,  authorizeRoles("admin", "Instructor"), deletedemo);


export default router