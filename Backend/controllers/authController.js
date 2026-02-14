import userModel from "../model/userModel.js";
import Users from "../model/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";



export const Register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "Profile image is required",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            name,
            email,
            password: hashedPassword,
            role,
            //pic: req.file.filename
            // ✅ Cloudinary URL
            pic: req.file.path,
        });

        res.status(201).json({
            message: "User created successfully",
            user,
        });

    } catch (err) {
        console.log("Register error:", err);

        res.status(500).json({
            message: "Server error during register",
        });
    }
};


export const Login = async (req, res) => {

    try {
        const { email, password, role } = req.body;

        const user = await Users.findOne({ email })

        if (!user) {
            return res.status(404).send("user not found go to register page")
        }

        // 2️⃣ Check role
        if (user.role !== role) {
            return res.status(403).json({ message: "Role mismatch" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
        }

        // im using JWT 
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        console.log(token);


        // ✅ SEND ROLE BACK
        res.status(200).json({
            message: "Login successful",
            user: {
                token: token,
                role: user.role,
                id: user._id,
                email: user.email,

            }
        });
        console.log(user);


        // if (role === "Student") {
        //     res.send("welcome to Student dashaord")
        //     //  return res.redirect('/Admindashboard');
        // } else if (role === "Instructor") {
        //     res.send("welcome to Instructor dashbaord")
        //     // return res.redirect('/userdashboard');
        // } else if (role === "admin") {
        //     res.send("welcome to admin dashaord")
        //     //  return res.redirect('/login');
        // } else {
        //     res.send("role not match plz register agian")
        // }


    } catch (err) {
        console.log("error loging user", err);
    }
}

// logout 
export const Logout = (req, res) => {
    try {
        // JWT me logout sirf client side se token delete karwana hota hai
        res.status(200).json({ message: "Logout successful" });
    } catch (err) {
        console.error("Logout error:", err);
        res.status(500).json({ message: "Logout failed" });
    }
};
