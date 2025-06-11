import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import dotenv from "dotenv";
dotenv.config(); // 👈 Load .env before anything else



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
 

const uploadOnCloudinary = async (localFilePath) => {
  // Check if the file path is valid
  if (!localFilePath) {
    console.error("No file path provided for upload.");
    return null;
  }

  try {
    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Automatically detect resource type
    });

    // If upload was successful, delete the local file
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
      console.log("Temporary file deleted successfully.");
    }

    return response; // Return the response from Cloudinary
  } catch (error) {
    // Log the error for debugging
    console.error("Error uploading to Cloudinary:", error);

    // Check if the file exists and delete it in case of failure
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
      console.log("Temporary file deleted due to upload failure.");
    }

    return null; // Return null if the upload failed
  }
};

export { uploadOnCloudinary };
