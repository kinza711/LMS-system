
import mongoose from "mongoose";
import Result from "../model/resultModel.js";
import questions from "../model/questionModel.js";
import Course from "../model/courseModel.js"
import Users from "../model/userModel.js"

export const submitResult = async (req, res) => {
  try {

    console.log("REQ BODY:", req.body);

    const { courseId, questionType, difficulty, answers } = req.body; // remove userId from hare

    // this is the reason user test was nit submites to db and showing user not found
    const userId = req.user._id;

    // ✅ check if questionType exists
    if (!questionType || !difficulty || !courseId) {
      return res.status(400).json({
        message: "courseId, questionType and difficulty are required"
      });
    }

    // ✅ GET COURSE TITLE FROM DB
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    // ✅ GET user name  FROM DB
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "user not found"
      });
    }

    const Question = await questions.find({
      course: new mongoose.Types.ObjectId(courseId),
      questionType: questionType.trim(),
      Difficulty: { $regex: new RegExp(`^${difficulty}$`, "i") }
    });


    console.log("FOUND QUESTIONS:", Question.length);

    if (!Question.length) {
      return res.status(404).json({
        message: "No questions found",
        debug: {
          courseId,
          questionType,
          difficulty
        }
      });
    }

    let correct = 0;
    let wrong = 0;
    let attempted = 0;
    let totalMarks = 0;
    let obtainedMarks = 0;

    const answerSheet = [];

    Question.forEach(q => {
      const marks = q.marks || 1;
      totalMarks += marks;

      const userAnswer = answers[q._id.toString()];

      if (userAnswer !== undefined) {
        attempted++;

        const isCorrect =
          userAnswer === q.correctAnswer;

        if (isCorrect) {
          correct++;
          obtainedMarks += marks;
        } else {
          wrong++;
        }

        answerSheet.push({
          question: q._id,
          selectedAnswer: userAnswer,
          correctAnswer: q.correctAnswer,
          marks,
          obtainedMarks: isCorrect ? marks : 0,
          isCorrect
        });
      }
    });

    const percentage =
      (obtainedMarks / totalMarks) * 100;

    const status = percentage >= 60 ? "pass" : "fail";

    const result = await Result.create({
      user: userId,
      userName: user ? user.name : "Guest Student",
      course: courseId,
      courseTitle: course.title,   // 🔥 HERE
      questionType,
      difficulty,
      totalQuestions: Question.length,
      attempted,
      correct,
      wrong,
      totalMarks,
      obtainedMarks,
      percentage: Number(percentage.toFixed(2)),
      status,
      answers: answerSheet
    });

    res.status(201).json({
      message: "Result saved successfully",
      data: result
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }

};

// find result 

export const findResult = async (req, res) => {
  try {
    const allresults = await Result.find()
    res.status(200).json({
      message: "result data found sucessfully",
      data: allresults
    })
  } catch (err) {
    console.log("results not found", err);
  }
}


// delete result 
export const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteresult = await Result.findByIdAndDelete({ _id: id })
    res.status(200).json({
      message: "result deleted sucessfully",
      data: deleteresult
    })
  } catch (err) {
    console.log("results not deleted", err);
  }
}


// find max score 


export const getResultAnalytics = async (req, res) => {
  try {

    const results = await Result.find();

    if (!results.length) {
      return res.status(200).json({
        maxScore: 0,
        averageScore: 0,
        passingRate: 0,
        totalStudents: 0
      });
    }

    const totalStudents = results.length;

    let maxScore = 0;
    let totalPercentage = 0;
    let passCount = 0;

    results.forEach(result => {
      const percentage = result.percentage || 0;

      // 🔥 max score
      if (percentage > maxScore) {
        maxScore = percentage;
      }

      // 🔢 average
      totalPercentage += percentage;

      // ✅ passing
      if (result.status === "pass") {
        passCount++;
      }
    });

    const averageScore =
      totalPercentage / totalStudents;

    const passingRate =
      (passCount / totalStudents) * 100;

    res.status(200).json({
      totalStudents,
      maxScore: Number(maxScore.toFixed(2)),
      averageScore: Number(averageScore.toFixed(2)),
      passingRate: Number(passingRate.toFixed(2))
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
