import { Request, Response } from "express";
import Hotel from "../model/Hotel";
import { uploadImagesToCloudinary } from "../middleware/upload";


export const createApartment = async (req: Request, res: Response) => {
    try {
        const { title, price, city, address, description, authorizedUser, ...body } = req.body;
        if (title) {
            if (price) {
                if (city) {
                    if (address) {
                        if (description && description?.length >= 299) {
                            if (authorizedUser) {
                                // create a new instance of the model and save it to the database
                                const imageFiles = req.files as Express.Multer.File[];
                                if (Array.isArray(imageFiles)) {
                                    const imageUrls = await uploadImagesToCloudinary(imageFiles);
                                    const hotel = await Hotel.create({
                                        title,
                                        price,
                                        location: {
                                            city,
                                            address
                                        },
                                        rules: JSON.parse(body.rules),
                                        facilities: JSON.parse(body.facilities),
                                        description,
                                        authorizedUser,
                                        images: imageUrls,
                                    })
                                    res.status(201).json({ hotel, imageFiles: Array.isArray(imageFiles) })
                                } else {
                                    return res.status(400).json({ message: "Please provide at least one image" });
                                }
                            } else {
                                throw new Error('Authorized user is required')
                            }
                        } else {
                            return res.status(400).json({ error: "Description should be at least 300 characters long" })
                        }
                    } else {
                        return res.status(400).json({ error: "Address is required" })
                    }
                } else {
                    throw new Error('City is required');
                }
            } else {
                return res.status(400).json({ error: "Price is required" });
            }
        } else {
            return res.status(400).json({ error: "Title is required" });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}
