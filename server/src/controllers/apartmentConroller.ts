import { Request, Response } from 'express';
import Apartment from '../model/Apartment';
import { uploadImagesToCloudinary } from '../middleware/upload';
import FeaturesApi from '../utils/featuresApi';

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
                                    const apartment = await Apartment.create({
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
                                    res.status(201).json({ apartment, imageFiles: Array.isArray(imageFiles) })
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

export const fetchApartments = async (req: Request, res: Response) => {
    try {
        const apartmentsApi = new FeaturesApi(req, Apartment)
            .filter()
            .sort()
            .fields()
            .search();
        const apartments = await apartmentsApi.Model

        res.status(200).json({ apartments });
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}

export const fetchApartment = async (req: Request, res: Response) => {
    try {
        const { apartmentId } = req.params;
        if (apartmentId.length != 24) {
            throw new Error("Invalid apartment ID");
        } else {
            const apartment = await Apartment.findById(apartmentId);
            res.status(200).json({ apartment });
        }
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}