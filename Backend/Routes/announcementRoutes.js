import express from "express";
const router = express.Router();

import {postAnnouncement} from "../controllers/announcementController.js"
import {getAnnouncement} from "../controllers/announcementController.js"
import {deleteAnnouncement} from "../controllers/announcementController.js"
import {updateAnnouncement} from "../controllers/announcementController.js"


router.post("/post", postAnnouncement);
router.get("/post", getAnnouncement);
router.delete("/post/:id", deleteAnnouncement);
router.put("/post/:id", updateAnnouncement);

export default router;