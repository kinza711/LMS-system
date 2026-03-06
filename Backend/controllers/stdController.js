import Users from "../model/userModel.js";

export const stdUsers = async (req, res) => {
  try {
    const findStd = await Users.find({ role: "Student" });
    res.status(200).json({
      message: "all students founded successfully",
      data: findStd,
    });
  } catch (err) {
    console.log("studenst not found");
    res.status(500).json({
      message: "studenst not found",
      error: err.message,
    });
  }
};

export const deleteStd = async (req, res) => {
  try {
    const { id } = req.params;
    const deletestd = await Users.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "student deleted successfully",
      data: deletestd,
    });
  } catch (err) {
    console.log("student not deleted");
    res.status(500).json({
      message: "studenst not deleted",
      error: err.message,
    });
  }
};

export const updataStd = async (req, res) => {
  try {
    const { id } = req.params;
    const updatestd = await Users.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({
      message: "student record updated successfully",
      data: updatestd,
    });
  } catch (err) {
    console.log("student record not updated");
    res.status(500).json({
      mesasge: "studenst records not upadted",
      error: err.message,
    });
  }
};
