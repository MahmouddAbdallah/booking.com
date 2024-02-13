import { Request,Response } from "express";
import Hotel, { HotelType } from "../model/Hotel";
export const createHotel =async (req:Request,res:Response) => {
    try {
        const {...body}:{body:HotelType} = req.body;
        const hotel = await Hotel.create(body);
        res.status(201).json({hotel})
    } catch (error:any) {
        console.error(error);
        res.status(400).json({error:error.message})
    }
}