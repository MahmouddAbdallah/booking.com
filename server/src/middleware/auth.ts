import {Request,Response,NextFunction } from 'express';
import jwt,{JwtPayload} from 'jsonwebtoken'
import User from '../model/user';

declare global {
    namespace Express{
        interface Request{
            userId :string
        }
    }
}

const auth =async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies['auth_token'];
    if(token){
        try {
            const decode =jwt.verify(token,process.env.SECRET_KEY as string);
            const user = await User.findOne({_id:(decode as JwtPayload).userId})
            if(user){
                req.userId = (decode as JwtPayload).userId;
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