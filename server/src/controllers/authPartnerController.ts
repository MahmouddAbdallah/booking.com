import {NextFunction, Request,Response} from 'express';
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Partner from '../model/partner';

export const verfiyPartnerEamilSingIn =async (req: Request, res: Response )=>{
    try {
        const {email}=req.body;
        const isPartner = await Partner.findOne({email});
        if (isPartner) {
            return res.status(200).json({message:'Continue sing in'})
        }
        else{
            return res.status(401).json({error:'this email does not exist'})
        }
    } catch (error) {
        res.status(400).json({error})
    }
}
export const verfiyPartnerEamilSignUp =async (req: Request, res: Response )=>{
    try {
        const {email}=req.body;
        const isPartner = await Partner.findOne({email});
        if (isPartner) {
            return res.status(401).json({error:'This email is already in use'})
        }
        else{
            return res.status(200).json({message:'Continue with partner'})
        }
    } catch (error) {
        res.status(400).json({error})
    }
}
export const registerPartner =async (req:Request,res:Response) => {
    try {
        const {firstname,lastname,email,password ,phone}=req.body;
        if(firstname){
            if(lastname){
                if(phone){
                    if(password){
                        const isPartner = await Partner.findOne({email});
                        if(isPartner){
                            res.status(400).json({error:"this Partner is already exists"})
                        }else{
                            const partner = await Partner.create({
                                firstname,
                                lastname,
                                email,
                                password :await bycrpt.hash(password,10)
                            });    
                            const token = jwt.sign({partnerId:partner._id},process.env.SECRET_KEY as string,{expiresIn:'1y'});
                            res.status(201).cookie('auth_partner_token',token,{
                                httpOnly:true,
                                secure: process.env.NODE_ENV =='production',
                                maxAge: 22089963090
                            }).json({message:"Successfuly Register."})  
                        }    
                    }else{
                        res.status(400).json({error:'The password is requried'})
                    }    
                }else{
                    res.status(400).json({error:'The phone is requried'})
                }  
            }else{
                res.status(400).json({error:'The last name is requried'})
            }    
        }else{
            res.status(400).json({error:'The first name is requried'})
        }    
    } catch (error) {
        res.status(400).json({error})
    }    
}    

export const loginPartner =async (req:Request,res:Response) => {
    try {
        const {email,password}=req.body;
                if(email){
                    if(password){
                        const partner = await Partner.findOne({email}).select("-__v");
                        if(partner){
                            const isMatch = await bycrpt.compare(password,partner.password);
                            if(isMatch){
                                const token = jwt.sign({partnerId:partner._id},process.env.SECRET_KEY as string,{expiresIn:'1y'})
                                res.status(201).cookie('auth_partner_token',token,{
                                    httpOnly:true,
                                    secure: process.env.NODE_ENV =='production',
                                    maxAge: 22089963090
                                }).json({partner, message:"Successfuly Login."}) 
                            }else{
                                res.status(400).json({error:'Incorrect password'})
                            }  
                        }else{
                        res.status(400).json({error:'Please Sign up'})
                        }    
                    }else{
                        res.status(400).json({error:'The password is requried'})
                    }    
                }else{
                    res.status(400).json({error:'The email is requried'})
                }    
            
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

export const logOutPartner =async(req:Request,res:Response)=>{
    try {
        res.clearCookie('auth_partner_token');
        res.status(200).json({message:"Logged out"});
    } catch (error) {
        res.status(400).json({error})
    }
}