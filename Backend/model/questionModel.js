import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    title: { type: String, required: true }, // for both
    disc: { type: String, required: true }, // for both
    
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     default: null
    //   }, 
    
      course: {  //for both
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    questionType: {
        type: String,
        enum: ["objective", "subjective"],
        required: true
    }, // for both
    Difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    }, //for both
    marks: { type: Number }, // for both
    options: [String], // objectives
    keywords: [String], // subjective
    isPublic: { // for demo
        type: Boolean,
        default: false
    },

    correctAnswer: { type: String, required: true } // for both

},{timestamps: true})
export default mongoose.model("questions", QuestionSchema)