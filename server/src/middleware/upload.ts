import multer from 'multer';
import cloudinary  from 'cloudinary';

const storage =multer.memoryStorage();
export const upload =multer(
    {
        storage,
        limits:{
            fieldSize:1*1024*1024 //5
        },
    }
)

export const uploadImagesToCloudinary = async (files: Express.Multer.File[]): Promise<string[]> => {
    try {
        const uploadPromises = files.map(async (img) => {
        const b64 = Buffer.from(img.buffer).toString('base64');
        const dataURL = "data:" + img.mimetype + ";base64," + b64;
        const cloudinaryResponse = await cloudinary.v2.uploader.upload(dataURL);
        return cloudinaryResponse.url;
        });

        const imageUrls = await Promise.all(uploadPromises);
        return imageUrls;
    } catch (error) {
        console.error("Error uploading images to Cloudinary:", error);
        throw error;
    }
};