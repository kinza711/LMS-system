// import Result from "../model/resultModel.js";
// import questions from "../model/questionModel.js";
// // import Users from "../model/userModel.js";
// // import Course from "../model/courseModel.js"

// export const submitResult = async (req, res) => {
//   try {
//     const userId = req.user._id; // JWT middleware
//     const { courseId, questionType, difficulty, answers } = req.body;

//     // 1️⃣ fetch questions
//     const Question = await questions.find({
//       course: courseId,
//       questionType,
//       Difficulty: difficulty
//     });

//     if (!Question.length) {
//       return res.status(404).json({ message: "No questions found" });
//     }

//     let correct = 0;
//     let wrong = 0;
//     let attempted = 0;

//     const answerSheet = [];

//     // 2️⃣ evaluate answers
//     Question.forEach(q => {
//       const userAnswer = answers[q._id];

//       if (userAnswer !== undefined) {
//         attempted++;

//         const isCorrect = userAnswer === q.correctAnswer;

//         if (isCorrect) correct++;
//         else wrong++;

//         answerSheet.push({
//           question: q._id,
//           selectedAnswer: userAnswer,
//           correctAnswer: q.correctAnswer,
//           isCorrect
//         });
//       }
//     });

//     const totalQuestions = Question.length;
//     const percentage = (correct / totalQuestions) * 100;

//     const status = percentage >= 40 ? "pass" : "fail";

//     // 3️⃣ save result
//     const result = await Result.create({
//       user: userId,
//       course: courseId,
//       courseTitle: questions[0].title,
//       questionType,
//       difficulty,
//       totalQuestions,
//       attempted,
//       correct,
//       wrong,
//       score: correct,
//       percentage,
//       status,
//       answers: answerSheet
//     });

//     // 4️⃣ response
//     res.status(201).json({
//       message: "Result submitted successfully",
//       data: result
//     });

//   } catch (err) {
//     res.status(500).json({
//       message: err.message
//     });
//   }
// };



import Result from "../model/resultModel.js";
import questions from "../model/questionModel.js";

export const submitResult = async (req, res) => {
  try {
    const userId = req.user._id;

    const {
      courseId,
      questionType,
      difficulty,
      answers
    } = req.body;

    // 1️⃣ Fetch questions
    const Question = await questions.find({
      course: courseId,
      questionType,
      difficulty
    });

    if (!Question.length) {
      return res.status(404).json({
        message: "No questions found"
      });
    }

    let correct = 0;
    let wrong = 0;
    let attempted = 0;

    let totalMarks = 0;
    let obtainedMarks = 0;

    const answerSheet = [];

    // 2️⃣ Evaluation
    Question.forEach(q => {

      totalMarks += q.marks || 1;

      const userAnswer = answers[q._id];

      if (userAnswer !== undefined) {
        attempted++;

        const isCorrect =
          userAnswer === q.correctAnswer;

        if (isCorrect) {
          correct++;
          obtainedMarks += q.marks || 1;
        } else {
          wrong++;
        }

        answerSheet.push({
          question: q._id,
          selectedAnswer: userAnswer,
          correctAnswer: q.correctAnswer,
          marks: q.marks || 1,
          obtainedMarks: isCorrect ? (q.marks || 1) : 0,
          isCorrect
        });
      }
    });

    const percentage =
      (obtainedMarks / totalMarks) * 100;

    const status = percentage >= 40 ? "pass" : "fail";

    // 3️⃣ Save result
    const result = await Result.create({
      user: userId,
      course: courseId,
      courseTitle: questions[0].title,

      questionType,
      difficulty,

      totalQuestions: Question.length,
      attempted,
      correct,
      wrong,

      totalMarks,
      obtainedMarks,

      score: obtainedMarks,
      percentage: Number(percentage.toFixed(2)),
      status,

      answers: answerSheet
    });

    // 4️⃣ Response
    res.status(201).json({
      message: "Result submitted successfully",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};