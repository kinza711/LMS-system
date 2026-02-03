import Announcement from "../model/announcementModel.js"

export const postAnnouncement = async (req, res) => {
    try {
        const { title, message, target } = req.body;
        const createAnnouncement = await Announcement.create({
            title, message, target
        })
        res.status(201).json({
            message: "Announcement posted successfully",
            data: createAnnouncement
        })
    } catch (err) {
        console.log("Announcement not posted");
        res.status(500).json({
            message: "Announcement not posted",
            error: err.message
        })

    }

}

export const getAnnouncement = async (req, res) => {
    try {
        const allposts = await Announcement.find()
        res.status(200).json({
            message: "all post founded",
            data: allposts

        })
    } catch (err) {
        console.log("posts not found");
        res.status(500).json({
            message: "post not found",
            error: err.message
        })

    }

}

export const deleteAnnouncement = async (req, res) => {
    try {
        // 1️⃣ req.user is set by verifyToken middleware
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // 2️⃣ check role
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "You are not allowed to delete this post" });
        }

        const { id } = req.params;
        const deletepost = await Announcement.findByIdAndDelete({ _id: id })
        res.status(200).json({
            message: "post deleted successfully",
            data: deletepost
        })
    } catch (err) {
        console.log("post not deleted");
        res.status(500).json({
            message: "post not deleted",
            error: err.message
        })

    }

}

export const updateAnnouncement = async (req, res) => {
    try {
        // 1️⃣ req.user is set by verifyToken middleware
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // 2️⃣ check role
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "You are not allowed to edit this post" });
        }
        const { id } = req.params;
        const updatepost = await Announcement.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).json({
            message: "post updated successfully",
            data: updatepost
        })
    } catch (err) {
        res.status(500).json({
            message: "post not updated",
            error: err.message
        })
    }

}