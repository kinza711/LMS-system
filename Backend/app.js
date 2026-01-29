import express from "express";
const app = express();
import userRoutes from "../Backend/Routes/authRoutes.js"
import cors from "cors"
import adminRoutes from "../Backend/Routes/adminRoutes.js"
import instRoutes from "../Backend/Routes/instRoutes.js";
import announcementRoutes from "../Backend/Routes/announcementRoutes.js";
import resultRoutes from "../Backend/Routes/resultRoutes.js";

// to fech and store data
app.use(express.urlencoded({extended: true }))
app.use(express.json());

//connect cors 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
  
//import routes 
app.use("/", userRoutes);
app.use("/", adminRoutes);
app.use("/", instRoutes);
app.use("/", announcementRoutes);
app.use("/", resultRoutes);

// default page
app.get("/", (req, res)=>{
    res.send("welcoms ppzl")
})
//404 page 
app.use( (req, res)=>{
    res.send("404 page not found")
})

export default app