import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDb atles is connected successfully")
    } catch (err) {
        console.error("error coonecting database", err)
    }
}
export default connectDB;