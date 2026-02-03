import express from "express";
const router = express.Router();

import {postAnnouncement} from "../controllers/announcementController.js"
import {getAnnouncement} from "../controllers/announcementController.js"
import {deleteAnnouncement} from "../controllers/announcementController.js"
import {updateAnnouncement} from "../controllers/announcementController.js"
import {varifyToken} from "../middlewares/varifyToken.js"

router.post("/post", varifyToken,  postAnnouncement);
router.get("/post", varifyToken,  getAnnouncement);
router.delete("/post/:id", varifyToken, deleteAnnouncement);
router.put("/post/:id", varifyToken,  updateAnnouncement);

export default router;