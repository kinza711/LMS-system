import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },

  // ✅  user name 
  userName: {
    type: String,
    required: true
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },

  // ✅ NEW FIELD
  courseTitle: {
    type: String,
    required: true
  },

  questionType: String,
  difficulty: String,

  totalQuestions: Number,
  attempted: Number,
  correct: Number,
  wrong: Number,

  totalMarks: Number,
  obtainedMarks: Number,

  percentage: Number,

  status: {
    type: String,
    enum: ["pass", "fail"]
  },

  answers: Array,

  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Result", resultSchema);