// create course book description
import Course from "../model/courseModel.js";

export const postCourse = async (req, res) => {
  try {
    const { title, disc, level } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Course image is required",
      });
    }
    const postcourse = await Course.create({
      title,
      disc,
      level,
      pic: req.file.path,
    });
    res.status(200).json({
      message: "course created successfully",
      data: postcourse,
    });
  } catch (err) {
    console.log("course not created");
    res.status(500).json({
      message: "course not careted",
      error: err.message,
    });
  }
};

export const getCourse = async (req, res) => {
  try {
    const allcourses = await Course.find();
    res.status(200).json({
      message: "all courses",
      data: allcourses,
    });
  } catch (err) {
    console.log("courses not found");
    res.status(500).json({
      message: "courses not found",
      error: err.message,
    });
  }
};

export const getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "single course",
      data: course,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      error: err.message,
    });
  }
};

export const getBasicCourse = async (req, res) => {
  try {
    const allcourses = await Course.find({ level: "basic" });
    res.status(200).json({
      message: "all basic courses",
      data: allcourses,
    });
  } catch (err) {
    console.log("courses not found");
    res.status(500).json({
      message: "courses not found",
      error: err.message,
    });
  }
};

export const getProCourse = async (req, res) => {
  try {
    const allcourses = await Course.find({ level: "pro" });
    res.status(200).json({
      message: "all pro courses",
      data: allcourses,
    });
  } catch (err) {
    console.log("courses not found");
    res.status(500).json({
      message: "courses not found",
      error: err.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletecourse = await Course.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "course deleted succssfully",
      data: deletecourse,
    });
  } catch (err) {
    console.log("course not deleted");
    res.status(500).json({
      message: "course not deletd",
      error: err.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Find course first
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // 2️⃣ Update text fields manually
    if (req.body.title) course.title = req.body.title;
    if (req.body.disc) course.disc = req.body.disc;
    if (req.body.level) course.level = req.body.level;

    // 3️⃣ Update image if new file uploaded
    if (req.file) {
      course.pic = req.file.path;
    }

    // 4️⃣ Save updated course
    await course.save();

    res.status(200).json({
      message: "Course updated successfully",
      data: course,
    });
  } catch (err) {
    console.log("Course not updated:", err);

    res.status(500).json({
      message: "Course not updated",
      error: err.message,
    });
  }
};
