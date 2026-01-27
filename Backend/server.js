import app from "./app.js"
import connectDB from './config/db.js';

const port = process.env.Port || 3000;


connectDB();

app.listen(port, (req, res)=>{
    console.log(`server is runnin on port ${port}`);
})