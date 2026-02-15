import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
console.log("Cloudinary Name:", process.env.CLOUD_NAME);
console.log("Cloudinary Key:", process.env.CLOUD_API_KEY);
console.log("Cloudinary Secret:", process.env.CLOUD_API_SECRET);

export default cloudinary;
