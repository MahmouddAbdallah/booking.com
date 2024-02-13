import { Request, Response } from "express";
import User,{userType} from "../model/user";

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

enum Gender {
    Male = 'male',
    Female = 'female',
}

export const updateUser = async (req: Request, res: Response) => {
    try {
    const { ...body }: userType = req.body;
    const { id } = req.params;

    if(body.email){
        if (!body.email?.includes('.com')) {
            return res.status(400).json({ error: 'Invalid email format' });
        }
    }

    if(body.gender){
        if (body.gender !== Gender.Male && body.gender !== Gender.Female) {
            return res.status(400).json({ error: 'Please enter a valid gender (male or female)' });
        }  
    }

        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json({ user: updatedUser });
        } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};
