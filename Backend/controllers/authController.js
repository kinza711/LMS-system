import userModel from "../model/userModel.js";
import Users from "../model/userModel.js";
import bcrypt from "bcryptjs"

export const Register = async (req, res) => {
    try {
        const { name, email, password, role, } = req.body;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is salt rounds

        const createUser = await Users.create({
            name, email, password: hashedPassword, role,
        })
        res.send("user craeted successfully", createUser);
        console.log("user craeted successfully", createUser);

    } catch (err) {
        console.log("user not careted", err);
        res.status(500).json({
            message: "Server error during login",
        });
    }
}

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


        // ✅ SEND ROLE BACK
        res.status(200).json({
            message: "Login successful",
            role: user.role,
            userId: user._id,
        });

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

export const Logout = (req, res) => {
    try {
        req.session.destroy(() => {
            res.clearcookie("connect.sid");
            res.send("logout")
        })
    } catch (err) {
        console.log("error logout", err)
    }
}