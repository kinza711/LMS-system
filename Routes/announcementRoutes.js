import express from "express";
const router = express.Router();

import {postAnnouncement} from "../controllers/announcementController.js"
import {getAnnouncement} from "../controllers/announcementController.js"
import {deleteAnnouncement} from "../controllers/announcementController.js"
import {updateAnnouncement} from "../controllers/announcementController.js"
import {varifyToken} from "../middlewares/varifyToken.js"
import { isAdmin} from "../middlewares/isAdmin.js";
import {authorizeRoles} from "../middlewares/roleMiddleware.js"


router.post("/post", varifyToken, authorizeRoles("admin", "Instructor"),  postAnnouncement); // adm & inst
router.get("/post", varifyToken,  authorizeRoles("admin", "Instructor", "Student"), getAnnouncement); // adm & std & inst
router.delete("/post/:id", varifyToken, isAdmin, deleteAnnouncement); // adm 
router.put("/post/:id", varifyToken, isAdmin,  updateAnnouncement);  // adm 

export default router;