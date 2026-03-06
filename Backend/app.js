import express from "express";
const app = express();
import authRoutes from "./Routes/authRoutes.js";
import cors from "cors";
import adminRoutes from "./Routes/adminRoutes.js";
import instructorRoutes from "./Routes/instructorRoutes.js";
import announcementRoutes from "./Routes/announcementRoutes.js";
import resultRoutes from "./Routes/resultRoutes.js";
import courseRoutes from "./Routes/courseRoutes.js";
import demoRoutes from "./Routes/demoRoutes.js";
import profileRoutes from "./Routes/profileRoutes.js";
import questionRoutes from "./Routes/questionRoutes.js";
import stdRoutes from "./Routes/stdRoutes.js";

// to fech and store data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect cors for remote device or local

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }));

// conennect for both local nad production project
const allowedOrigin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : "http://localhost:5173";
app.use(
  cors({
    origin: allowedOrigin, // frontend live URL
    credentials: true,
  }),
);

app.use("/uploads", express.static("uploads"));
//import routes
app.use("/", authRoutes);
app.use("/", adminRoutes);
app.use("/", instructorRoutes);
app.use("/", announcementRoutes);
app.use("/", resultRoutes);
app.use("/", courseRoutes);
app.use("/", demoRoutes);
app.use("/", profileRoutes);
app.use("/", questionRoutes);
app.use("/", stdRoutes);

// default page
app.get("/", (req, res) => {
  res.send("welcoms ppzl");
});
//404 page
app.use((req, res) => {
  res.send("404 page not found");
});

export default app;
