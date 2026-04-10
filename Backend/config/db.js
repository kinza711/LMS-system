import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb atles is connected successfully");
  } catch (err) {
    console.error("error coonecting database", err);
    res.status(500).json({
      message: "server error database not connected",
      error: err.message,
    });
  }
};
export default connectDB;
