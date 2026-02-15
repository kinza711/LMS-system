// // basic use of multer

// // import multer from "multer"

// // const upload = multer({
// // dest: ("uploads/")
// // }
// // )

// // export default upload


// // multer for ================prof use=========
// import multer from "multer";
// import path from "path";

// // =======================
// //  STORAGE CONFIG
// // =======================
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) { 
//     // Folder where files will be saved
//     cb(null, "uploads/"); 
//   },
// filename: function (req, file, cb) {
//   const uniqueName =
//     Date.now() + "-" + file.originalname.replaceAll(" ", "_"); // unique name with original name

//   cb(null, uniqueName);
// }

// });

// // =======================
// //  FILE FILTER
// // =======================
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true); //  accept file
//   } else {
//     cb(new Error("Only JPEG and PNG files are allowed"), false); //  reject file
//   }
// };

// // =======================
// //  MULTER UPLOAD
// // =======================
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
//   fileFilter: fileFilter,
// });

// export default upload;



// for cloudnary production purpose
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "profiles",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;

