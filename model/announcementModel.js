import mongoose from "mongoose";

const AnouncementSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    postedByRole: {
        type: String,
        enum: ["admin", "instructor"],
        required: false
    },
    target: {
        type: String,
        enum: ["all", "students", "instructors"],
        default: "all"
    }
},{timestamps: true})

export default mongoose.model("Announcement", AnouncementSchema);