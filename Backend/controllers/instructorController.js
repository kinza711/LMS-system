import Users from "../model/userModel.js";

// find Instructor
export const InstUsers = async (req, res) => {
  try {
    const findInst = await Users.find({ role: "Instructor" });
    res.status(200).json({
      message: "all instructor founded successfully",
      data: findInst,
    });
  } catch (err) {
    console.log("instructor not found");
    res.status(500).json({
      message: "instructor not found",
      error: err.message,
    });
  }
};

export const deleteInst = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteinst = await Users.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "instructor deleted successfully",
      data: deleteinst,
    });
  } catch (err) {
    console.log("Instructor not deleted");
    res.status(500).json({
      message: "Instructor not deleted",
      error: err.message,
    });
  }
};

export const updataInst = async (req, res) => {
  try {
    const { id } = req.params;
    const updateinst = await Users.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({
      message: "instructor record updated successfully",
      data: updateinst,
    });
  } catch (err) {
    console.log("instructor record not updated");
    res.status(500).json({
      mesasge: "instructor records not upadted",
      error: err.message,
    });
  }
};
