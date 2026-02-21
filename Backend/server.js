import dotenv from "dotenv";
//dotenv.config(); // sabse upar
dotenv.config({ path: "./.env" }); // root me hai to ye enough

import app from "./app.js";
import connectDB from "./config/db.js";
import cloudinary from "./config/cloudinary.js";

const port = process.env.PORT || 3000;

console.log("Cloudinary Key:", process.env.CLOUD_API_KEY); // <-- test here 

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
 

// both  working fine 
// this { top } is new code with cloudinary



// import app from "./app.js"
// import connectDB from './config/db.js';

// const port = process.env.Port || 3000;


// connectDB();

// app.listen(port, (req, res)=>{
//     console.log(`server is runnin on port ${port}`);
// })


