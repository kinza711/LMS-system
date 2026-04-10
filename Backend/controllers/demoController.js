import questions from "../model/questionModel.js";

export const demo = async (req, res) => {
  try {
    const {
      title,
      disc,
      questionType,
      Difficulty,
      marks,
      options,
      isPublic,
      correctAnswer,
    } = req.body;

    const createDemo = await questions.create({
      title,
      disc,
      questionType,
      Difficulty,
      marks,
      options,
      isPublic,
      correctAnswer,
    });

    res.status(200).json({
      message: "Demo task created successfully",
      data: createDemo,
    });
  } catch (err) {
    console.error("Demo test not created:", err);
    res.status(500).json({
      message: "server error Demo task not created",
      error: err.message,
    });
  }
};

export const getDemo = async (req, res) => {
  try {
    const alldemotasks = await questions.find({ isPublic: true });
    res.status(200).json({
      message: " all demo tasks",
      data: alldemotasks,
    });
  } catch (err) {
    console.log("demo tasks not found", err);
    res.status(500).json({
      message: "server error Demo task not foundsss",
      error: err.message,
    });
  }
};

export const editDemo = async (req, res) => {
  const { id } = req.params;
  const editdemo = await questions.findById({ _id: id });
};

export const updatedemo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateDemo = await questions.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({
      message: " demo text updated successfully",
      data: updateDemo,
    });
  } catch (err) {
    console.log("demo task not updated");
    res.status(500).json({
      message: "server error demo task not updated",
      error: err.message,
    });
  }
};

export const deletedemo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteDemo = await questions.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: "demo task deleted",
      data: deleteDemo,
    });
  } catch (err) {
    console.log("demmo test not deletes", err);
    res.status(500).json({
      message: "server error demo task not deleted",
      error: err.message,
    });
  }
};
