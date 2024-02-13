import {Request,Response,NextFunction } from 'express';
import jwt,{JwtPayload} from 'jsonwebtoken'
import Partner from '../model/partner';

declare global {
    namespace Express{
        interface Request{
            partnerId :string
        }
    }
}

const auth =async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies['auth_partner_token'];
    if(token){
        try {
            const decode =jwt.verify(token,process.env.SECRET_KEY as string);
            const partner = await Partner.findOne({_id:(decode as JwtPayload).partnerId})
            if(partner){
                req.partnerId = (decode as JwtPayload).partnerId;
                next();
            }else{
                res.status(400).json({error:"Pleas sign Up"})
            }
        } catch (error) {
            res.status(400).json({error:error})
        }
    }else{
        res.status(400).json({error:'unauthorized'})
    }
}
export default auth;