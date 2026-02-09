// basic use of multer

// import multer from "multer"

// const upload = multer({
// dest: ("uploads/")
// }
// )

// export default upload


// multer for prof use
import multer from "multer";
import path from "path";

// =======================
// ✅ STORAGE CONFIG
// =======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Folder where files will be saved
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    // Unique filename: timestamp + original name
   const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// =======================
// ✅ FILE FILTER
// =======================
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // ✅ accept file
  } else {
    cb(new Error("Only JPEG and PNG files are allowed"), false); // ❌ reject file
  }
};

// =======================
// ✅ MULTER UPLOAD
// =======================
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: fileFilter,
});

export default upload;
