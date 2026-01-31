import jwt from "jsonwebtoken"

export const varifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "user not varify" })

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode);
        next();

    } catch (err) {
        console.log("error varify token ", err);
        res.status(401).json({ message: "user not varify broo" })

    }

}


//-------both logics working perfectly fine now-----------


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
