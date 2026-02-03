import Users from "../model/userModel.js";

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only access" });
  }
  next();
};

export const isInstructor = (req, res, next) => {
  if (req.user.role !== "Instructor") {
    return res.status(403).json({ message: "Instructor only access" });
  }
  next();
};

export const isStudent = (req, res, next) => {
  if (req.user.role !== "Student") {
    return res.status(403).json({ message: "Student only access" });
  }
  next();
};
