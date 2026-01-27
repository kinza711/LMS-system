import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,  //userId = ObjectId
        ref: "Users",
        required: true
    },
    username: { type: String, required: true },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    testType: {
        type: String,
        enum: ["objective", "subjective"],
        required: true
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    },
    totalMarsk: { type: Number, required: true },
    objMarks: { type: Number, required: true },
    percentage: Number,
    totalQuestion: { type: Number, required: true },
    attmpQuestions: { type: Number, required: true }

}, { timestamps: true })

export default mongoose.model("Result", resultSchema);