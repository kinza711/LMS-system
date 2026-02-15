// import app from "./app.js"
// import connectDB from './config/db.js';

// const port = process.env.Port || 3000;


// connectDB();

// app.listen(port, (req, res)=>{
//     console.log(`server is runnin on port ${port}`);
// })

// top working fine 
// this is new code with

import dotenv from "dotenv";
dotenv.config(); // sabse upar

import app from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
 