import { Request, Response } from "express";
import User from "../model/user";

declare global {
    namespace Express{
        interface Request{
            userId :string
        }
    }
}
export const verfiyUser = async (req: Request, res: Response) => {
    try {
        const userId = req.userId
        if (userId) {
            let user = await User.findOne({ _id: userId }).select('-password -__v');
            return res.status(200).json({user ,isLogged:true})
        } else {
            res.status(400).json({ error: 'undefined id' })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
