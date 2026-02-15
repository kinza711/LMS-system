import questions from "../model/questionModel.js";
import Users from "../model/userModel.js";
import Course from "../model/courseModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const demo = async (req, res) => {
    try {
        const {
            title, disc, questionType, Difficulty, marks,
            options, isPublic, correctAnswer } = req.body;

        const createDemo = await questions.create({
            title, disc,
            questionType,
            Difficulty,
            marks,
            options,
            isPublic,
            correctAnswer
        })

        res.status(200).json({
            message: "Demo task created successfully",
            data: createDemo
        });
    } catch (err) {
        console.error("Demo test not created:", err);
        res.status(500).json({
            message: "Demo task not created",
            error: err.message
        });
    }
}

export const getDemo = async (req, res) => {
    try {
        const alldemotasks = await questions.find({ isPublic: true });
        res.status(200).json({
            message: " all demo tasks",
            data: alldemotasks
        })
    } catch (err) {
        console.log("demo tasks not found", err)
        res.status(500).json({
            message: "Demo task not foundsss",
            error: err.message
        });
    }

}

export const editDemo = async (req, res) => {
    const { id } = req.params;
    const editdemo = await questions.findById({ _id: id })

}


export const updatedemo = async (req, res) => {
    try {
        const { id } = req.params;
        const updateDemo = await questions.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).json({
            message: " demo text updated successfully",
            data: updateDemo
        })
    } catch (err) {
        console.log("demo task not updated");
        res.status(500).json({
            message: " demo task not updated",
            error: err.message
        })

    }
}

export const deletedemo = async (req, res) => {

    try {

        const { id } = req.params;

        const deleteDemo = await questions.findOneAndDelete({ _id: id })
        res.status(200).json({
            message: "demo task deleted",
            data: deleteDemo
        })

    } catch (err) {
        console.log("demmo test not deletes", err);
        res.status(500).json({
            message: " demo task not deleted",
            error: err.message
        })

    }

}

// admin objective  + subjectives type 

export const Questions = async (req, res) => {
    try {
        const {
            title, disc, course, questionType, Difficulty, marks,
            options, keywords, isPublic, correctAnswer } = req.body;

        const createQuestions = await questions.create({
            title, disc, course,
            questionType,
            Difficulty,
            marks,
            options, keywords,
            isPublic,
            correctAnswer
        })

        res.status(200).json({
            message: "questions created successfully",
            data: createQuestions
        });
    } catch (err) {
        console.error("questions not created:", err);
        res.status(500).json({
            message: "questions not created",
            error: err.message
        });
    }
}

export const getQuestions = async (req, res) => {

    try {
        const allQuestions = await questions.find();
        res.status(200).json({
            message: " all questions tasks",
            data: allQuestions
        })
    } catch (err) {
        console.log("question tasks not found", err)
        res.status(500).json({
            message: "questions task not foundsss",
            error: err.message
        });
    }

}

export const getQuestionsByCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { title, type, difficulty } = req.query;

        if (!courseId || !title || !type || !difficulty) {
            return res.status(400).json({ message: "Missing filters" });
        }

        const getQuestions = await questions.find({
            course: courseId,
            title,               // ✅ course match
            questionType: type.toLowerCase(), // ✅ objective / subjective
            Difficulty: difficulty.toLowerCase(), // ✅ easy / medium / hard
            isPublic: false
        });

        res.status(200).json({ data: getQuestions });

    } catch (err) {
        res.status(500).json({ message: err.message });
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
            message: "Error fetching question",
            error: err.message,
        });
    }
};


export const deleteQuestions = async (req, res) => {

    try {

        const { id } = req.params;

        const deletequestions = await questions.findOneAndDelete({ _id: id })
        res.status(200).json({
            message: "questions deleted",
            data: deletequestions
        })

    } catch (err) {
        console.log("questions not deletes", err);
        res.status(500).json({
            message: " questions not deleted",
            error: err.message
        })

    }

}

// im using this code for edit current dataa
export const updatequestions = async (req, res) => {
    try {
        const { id, courseId } = req.params;

        const updated = await questions.findOneAndUpdate(
            { _id: id, course: courseId },
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Question updated successfully",
            data: updated,
        });
    } catch (err) {
        res.status(500).json({
            message: "Question not updated",
            error: err.message,
        });
    }
};

// find users ( instructor + students )

// all users data 

export const AllUsers = async (req, res) => {
    try {
        const findUser = await Users.find()
        res.status(200).json({
            message: "all users founded successfully",
            data: findUser
        })
    } catch (err) {
        console.log("users not found");
        res.status(500).json({
            message: "usera not found",
            error: err.message
        })
    }

}

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
            message: "User fetch error",
            error: err.message,
        });
    }
};

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updateuser = await Users.findByIdAndUpdate({ _id: id, }, req.body, { new: true })
//         res.status(200).json({
//             message: "users record updated successfully",
//             data: updateuser
//         })
//     } catch (err) {
//         console.log("users record not updated");
//         res.status(500).json({
//             mesasge: "users records not upadted",
//             error: err.message
//         })
//     }

// }

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await Users.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (req.file) user.pic = req.file.filename; // multer file

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({ message: "Profile updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//  and manage (in frontend => user maagmanage & instructor )

export const stdUsers = async (req, res) => {
    try {
        const findStd = await Users.find({ role: "Student" })
        res.status(200).json({
            message: "all students founded successfully",
            data: findStd
        })
    } catch (err) {
        console.log("studenst not found");
        res.status(500).json({
            message: "studenst not found",
            error: err.message
        })
    }

}

export const deleteStd = async (req, res) => {
    try {

        const { id } = req.params;
        const deletestd = await Users.findByIdAndDelete({ _id: id });
        res.status(200).json({
            message: "student deleted successfully",
            data: deletestd
        })
    } catch (err) {
        console.log("student not deleted");
        res.status(500).json({
            message: "studenst not deleted",
            error: err.message
        })

    }
}

export const updataStd = async (req, res) => {
    try {

        const { id } = req.params;
        const updatestd = await Users.findByIdAndUpdate({ _id: id, }, req.body)
        res.status(200).json({
            message: "student record updated successfully",
            data: updatestd
        })
    } catch (err) {
        console.log("student record not updated");
        res.status(500).json({
            mesasge: "studenst records not upadted",
            error: err.message
        })
    }

}

// find Instructor 
export const InstUsers = async (req, res) => {
    try {
        const findInst = await Users.find({ role: "Instructor" })
        res.status(200).json({
            message: "all instructor founded successfully",
            data: findInst
        })
    } catch (err) {
        console.log("instructor not found");
        res.status(500).json({
            message: "instructor not found",
            error: err.message
        })
    }

}

export const deleteInst = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteinst = await Users.findByIdAndDelete({ _id: id });
        res.status(200).json({
            message: "instructor deleted successfully",
            data: deleteinst
        })
    } catch (err) {
        console.log("Instructor not deleted");
        res.status(500).json({
            message: "Instructor not deleted",
            error: err.message
        })

    }
}

export const updataInst = async (req, res) => {
    try {

        const { id } = req.params;
        const updateinst = await Users.findByIdAndUpdate({ _id: id, }, req.body)
        res.status(200).json({
            message: "instructor record updated successfully",
            data: updateinst
        })
    } catch (err) {
        console.log("instructor record not updated");
        res.status(500).json({
            mesasge: "instructor records not upadted",
            error: err.message
        })
    }

}

// create course book description

export const postCourse = async (req, res) => {
    try {
        const { title, disc, level } = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "Course image is required"
            });
        }
        const postcourse = await Course.create({
            title, disc, level, pic: req.file.filename
        })
        res.status(200).json({
            message: "course created successfully",
            data: postcourse
        })
    } catch (err) {
        console.log("course not created");
        res.status(500).json({
            message: "course not careted",
            error: err.message
        })

    }

}

export const getCourse = async (req, res) => {
    try {
        const allcourses = await Course.find();
        res.status(200).json({
            message: "all courses",
            data: allcourses
        })

    } catch (err) {
        console.log("courses not found");
        res.status(500).json({
            message: "courses not found",
            error: err.message
        })

    }

}

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
            data: allcourses
        })

    } catch (err) {
        console.log("courses not found");
        res.status(500).json({
            message: "courses not found",
            error: err.message
        })

    }

}

export const getProCourse = async (req, res) => {
    try {
        const allcourses = await Course.find({ level: "pro" });
        res.status(200).json({
            message: "all pro courses",
            data: allcourses
        })

    } catch (err) {
        console.log("courses not found");
        res.status(500).json({
            message: "courses not found",
            error: err.message
        })

    }

}

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletecourse = await Course.findByIdAndDelete({ _id: id })
        res.status(200).json({
            message: "course deleted succssfully",
            data: deletecourse
        })
    } catch (err) {
        console.log("course not deleted");
        res.status(500).json({
            message: "course not deletd",
            error: err.message
        })

    }

}

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
      course.pic = req.file.filename;
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


//user profile logic

// export const getProfile = async (req, res) => {
//     try {
//         const userId = req.user.id; // set by JWT middleware
//         const user = await Users.findById(userId);

//         if (req.file) {
//             user.pic = req.file.filename;
//         }

//         if (!user) return res.status(404).json({ message: "User not found" });

//         res.status(200).json({
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//                 pic: user.pic || "", // optional

//             },
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//     }
// };
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // JWT middleware
    const user = await Users.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        pic: user.pic || "", // Cloudinary URL from DB
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id; // decoded from JWT middleware
        const { name, email, password } = req.body;

        const user = await Users.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        if (req.file) {
            user.pic = req.file.path; // multer sets req.file
        }

        // Update fields
        if (name) user.name = name;
        if (email) user.email = email;
       

        // If password is provided, hash it
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();

        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                pic: user.pic
            },
        });
    } catch (err) {
        console.error("Update profile error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};



