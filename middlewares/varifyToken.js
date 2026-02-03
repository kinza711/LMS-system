import jwt from "jsonwebtoken"

// export const varifyToken = (req, res, next) => {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token)
//         return res.status(401).json({ message: "user not varify" })

//     try {
//         const decode = jwt.verify(token, process.env.JWT_SECRET)
//         console.log(decode);
//         next();

//     } catch (err) {
//         console.log("error varify token ", err);
//         res.status(401).json({ message: "user not varify broo" })

//     }

// }


//-------both logics working perfectly fine now-----------
import Users from "../model/userModel.js";

export const varifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔴 THIS IS THE KEY PART
    const user = await Users.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // ✅ VERY IMPORTANT
    next();

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Invalid token" });
  }
};


// export const varifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1]; // Bearer <token>

//   if (!token) {
//     return res.status(401).json({ message: "Token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // decoded info store in request for later use
//     next();
//   } catch (err) {
//     console.log("JWT verify error:", err.message);
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };
