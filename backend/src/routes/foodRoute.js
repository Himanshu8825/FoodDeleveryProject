const express = require("express");
require("dotenv").config();
const {
  addFood,
  listFood,
  removeFood,
} = require("../controllers/foodController.js");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const foodRouter = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use Multer's memory storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

//! Middleware to upload images to Cloudinary
const uploadToCloudinary = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Specify the folder name in upload options
  const uploadOptions = {
    folder: "foodie",
  };

  // Upload file directly from memory buffer
  cloudinary.uploader
    .upload_stream(uploadOptions, (error, result) => {
      if (error) {
        return res
          .status(500)
          .json({ message: "Upload to Cloudinary failed", error: error });
      }

      // Add Cloudinary URL to req.body
      req.body.image = result.secure_url;

      next();
    })
    .end(req.file.buffer);
};

foodRouter.post("/add", upload.single("image"), uploadToCloudinary, addFood);
foodRouter.get("/lists", listFood);
foodRouter.delete("/remove/:id", removeFood);


module.exports = foodRouter;
