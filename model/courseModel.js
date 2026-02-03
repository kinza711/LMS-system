import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
title:{type:String, required: true},
disc:{type:String, required: true},
level:{type: String, enum:["basic","pro"] , required: true},
// role:{
//      type: mongoose.Schema.Types.ObjectId,
//      ref: "Users",
//      required: true
// },
//pic:{type:file, required:true}

});

export default mongoose.model("Course",courseSchema )