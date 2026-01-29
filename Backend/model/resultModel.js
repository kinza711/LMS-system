// import mongoose from "mongoose";

// const resultSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,  //userId = ObjectId
//         ref: "Users",
//         required: true
//     },
//     username: { type: String, required: true },
//     course: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Course",
//         required: true
//     },
//     testType: {
//         type: String,
//         enum: ["objective", "subjective"],
//         required: true
//     },
//     difficulty: {
//         type: String,
//         enum: ["easy", "medium", "hard"],
//         required: true
//     },
//     totalMarsk: { type: Number, required: true },
//     objMarks: { type: Number, required: true },
//     percentage: Number,
//     totalQuestion: { type: Number, required: true },
//     attmpQuestions: { type: Number, required: true }

// }, { timestamps: true })

// export default mongoose.model("Result", resultSchema);


// models/Result.js
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },

  courseTitle: String,

  questionType: String,
  difficulty: String,

  totalQuestions: Number,
  attempted: Number,
  correct: Number,
  wrong: Number,

  score: Number,
  percentage: Number,

  status: {
    type: String,
    enum: ["pass", "fail"]
  },

  answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
      },
      selectedAnswer: String,
      correctAnswer: String,
      isCorrect: Boolean
    }
  ],
  marks: {
    type: Number,
    default: 1   // har question 1 mark by default
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Result", resultSchema);