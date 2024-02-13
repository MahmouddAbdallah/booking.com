import {Request,Response} from 'express'
import Partner from '../model/partner';

declare global {
    namespace Express{
        interface Request{
            partnerId :string
        }
    }
}

export const verfiyPartner = async (req: Request, res: Response) => {
    try {
        const partnerId = req.partnerId
        if (partnerId) {
            const partner = await Partner.findOne({ _id: partnerId }).select('-password -__v');
            return res.status(200).json({partner })
        } else {
            res.status(400).json({ error: 'undefined id' })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}