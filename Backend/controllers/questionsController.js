import questions from "../model/questionModel.js";

export const Questions = async (req, res) => {
  try {
    const {
      title,
      disc,
      course,
      questionType,
      Difficulty,
      marks,
      options,
      keywords,
      isPublic,
      correctAnswer,
    } = req.body;

    const createQuestions = await questions.create({
      title,
      disc,
      course,
      questionType,
      Difficulty,
      marks,
      options,
      keywords,
      isPublic,
      correctAnswer,
    });

    res.status(200).json({
      message: "questions created successfully",
      data: createQuestions,
    });
  } catch (err) {
    console.error("questions not created:", err);
    res.status(500).json({
      message: "server error questions not created",
      error: err.message,
    });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const allQuestions = await questions.find();
    res.status(200).json({
      message: " all questions tasks",
      data: allQuestions,
    });
  } catch (err) {
    console.log("question tasks not found", err);
    res.status(500).json({
      message: "server error questions task not foundsss",
      error: err.message,
    });
  }
};

export const getQuestionsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, type, difficulty } = req.query;

    if (!courseId || !title || !type || !difficulty) {
      return res.status(400).json({ message: "Missing filters" });
    }

    const getQuestions = await questions.find({
      course: courseId,
      title, // ✅ course match
      questionType: type.toLowerCase(), // ✅ objective / subjective
      Difficulty: difficulty.toLowerCase(), // ✅ easy / medium / hard
      isPublic: false,
    });

    res.status(200).json({ data: getQuestions });
  } catch (err) {
    res.status(500).json({
      message: "server error question not found",
      error: err.message,
    });
  }
};
// to edit questions with current data
export const getSingleQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await questions.findById(id);

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json({
      message: "Single question fetched successfully",
      data: question, // ✅ object return
    });
  } catch (err) {
    res.status(500).json({
      message: "server Error fetching question",
      error: err.message,
    });
  }
};

export const deleteQuestions = async (req, res) => {
  try {
    const { id } = req.params;

    const deletequestions = await questions.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: "questions deleted",
      data: deletequestions,
    });
  } catch (err) {
    console.log("questions not deletes", err);
    res.status(500).json({
      message: "server error questions not deleted",
      error: err.message,
    });
  }
};

// im using this code for edit current dataa
export const updatequestions = async (req, res) => {
  try {
    const { id, courseId } = req.params;

    const updated = await questions.findOneAndUpdate(
      { _id: id, course: courseId },
      req.body,
      { new: true },
    );

    res.status(200).json({
      message: "Question updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error Question not updated",
      error: err.message,
    });
  }
};
