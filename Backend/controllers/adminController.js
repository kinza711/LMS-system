//import questions from "../model/questionModel.js";
import Users from "../model/userModel.js";

export const AllUsers = async (req, res) => {
  try {
    const findUser = await Users.find();
    res.status(200).json({
      message: "all users founded successfully",
      data: findUser,
    });
  } catch (err) {
    console.log("users not found");
    res.status(500).json({
      message: "usera not found",
      error: err.message,
    });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (err) {
    console.log("User not fetched");
    res.status(500).json({
      message: "server error User fetch error",
      error: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await Users.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (req.file) user.pic = req.file.path; // multer file

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({ message: "Profile updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
