import questions from "../model/questionModel.js";
import Users from "../model/userModel.js";
import Course from "../model/courseModel.js"

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
        res.status(500).json({
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
        res.status(500).json({
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
        res.status(500).json({
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

// export const showQuestions = async (req, res) => {
//     try {
//         const { title, type, difficulty } = req.query;

//         const questionsData = await Questions.find({
//             title: { $regex: new RegExp(`^${title}$`, "i") },
//             questionType: type.toLowerCase(), // make sure it matches "objective" / "subjective"
//             Difficulty: difficulty.toLowerCase(), // match DB field name
//             isPublic: false
//         });

//         res.status(200).json({
//             message: "Questions fetched",
//             data: questionsData
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: "Questions not found",
//             error: err.message
//         });
//     }
// };



// adminRoutes.js میں
 // ✅ یہ route add کریں



// export const showQuestions = async (req, res) => {
//   try {
//     let {courseId, title, type, difficulty } = req.query;

//     if (!courseId || !title || !type || !difficulty) {

//       return res.status(400).json({ message: "Missing title, type, or difficulty" });
//     }

//     type = type.toLowerCase(); // objective / subjective
//     difficulty = difficulty.toLowerCase(); // easy / medium / hard

//     const questionsData = await questions.find({
//       course: courseId,
//         title,  // case-insensitive match
//       questionType: type,                                 // must match enum
//       Difficulty: difficulty,                             // must match enum
//       isPublic: false
//     });

//     return res.status(200).json({
//       message: "Questions fetched",
//       data: questionsData
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Questions not found",
//       error: err.message
//     });
//   }
// };

export const getQuestionsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const {title, type, difficulty } = req.query;

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

export const updatequestions = async (req, res) => {
    try {
        const { id, courseId } = req.params;
        const updatequestion = await questions.findByIdAndUpdate({ _id: id , course: courseId}, req.body)
        res.status(200).json({
            message: " question updated successfully",
            data: updatequestion
        })
    } catch (err) {
        console.log("question not updated");
        res.status(500).json({
            message: " question not updated",
            error: err.message
        })

    }
}

// export const editquestions = async (req, res) => {
//   const { id, courseId } = req.params;

//   const question = await questions.findOne({
//     _id: id,
//     course: courseId
//   });

//   res.status(200).json({
//     data: question
//   });
// };



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

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateuser = await Users.findByIdAndUpdate({ _id: id, }, req.body, { new: true })
        res.status(200).json({
            message: "users record updated successfully",
            data: updateuser
        })
    } catch (err) {
        console.log("users record not updated");
        res.status(500).json({
            mesasge: "users records not upadted",
            error: err.message
        })
    }

}
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
        const postcourse = await Course.create({
            title, disc, level
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
        const updatecourse = await Course.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).json({
            message: "course updated successfully",
            data: updatecourse
        })
    } catch (err) {
        console.log("course not updated");
        res.status(500).json({
            message: "course not updated",
            error: err.message

        })
    }

}