import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name:{type:String, required: true},
email:{type:String, required: true, unique: true},
password:{type:String, required: true},
role:{type:String, required: true, enum:["Student", "Instructor","admin"]},
//pic: {type: file, required:true}

},{timestamps: true})

export default  mongoose.model("Users", userSchema );
