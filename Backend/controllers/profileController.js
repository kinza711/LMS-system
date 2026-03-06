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
import Users from "../model/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user._id; // JWT middleware
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
        const userId = req.user._id; // decoded from JWT middleware
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