import {v2 as cloudinary} from 'cloudinary'; // Cloudinary module
import fs from 'fs'; // File system module

 // Configuration 
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload an image from cloudinary
      const response = await cloudinary.uploader.upload.upload(localFilePath,{
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("File uploaded successfully", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the local saved temporary file as the upload op[eration got failed
        return null;
    }
}

export { uploadOnCloudinary }


  // Upload an image
//  cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//     { public_id: "shoes" },
//     function(error, result) {console.log(result);});

