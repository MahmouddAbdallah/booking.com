import {Request,Response} from 'express';
import User  from '../model/user';
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register =async (req:Request,res:Response) => {
    try {
        const {firstName,lastName,email,password}=req.body;
        if(firstName){
            if(lastName){
                if(email){
                    if(password){
                        const isUser = await User.findOne({email});
                        if(isUser){
                            res.status(400).json({error:"this user is already exists"})
                        }else{
                            const user = await User.create({
                                firstName,
                                lastName,
                                email,
                                password :await bycrpt.hash(password,10)
                            });    
                            const token = jwt.sign({userId:user._id},process.env.SECRET_KEY as string,{expiresIn:'1y'});
                            res.status(201).cookie('auth_token',token,{
                                httpOnly:true,
                                secure: process.env.NODE_ENV =='production',
                                maxAge: 22089963090
                            }).json({message:"Successfuly Register."})  
                        }    
                    }else{
                        res.status(400).json({error:'The password is requried'})
                    }    
                }else{
                    res.status(400).json({error:'The email is requried'})
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

export const login =async (req:Request,res:Response) => {
    try {
        const {email,password}=req.body;
                if(email){
                    if(password){
                        const user = await User.findOne({email});
                        if(user){
                            const isMatch = await bycrpt.compare(password,user.password);
                            if(isMatch){
                                const token = jwt.sign({userId:user._id},process.env.SECRET_KEY as string,{expiresIn:'1y'})
                                res.status(201).cookie('auth_token',token,{
                                    httpOnly:true,
                                    secure: process.env.NODE_ENV =='production',
                                    maxAge: 22089963090
                                }).json({message:"Successfuly Login."}) 
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
            
    } catch (error) {
        res.status(400).json({error})
    }
}

export const logOut =async(req:Request,res:Response)=>{
    try {
        res.clearCookie('auth_token');
        res.status(200).json({message:"Logged out"});
    } catch (error) {
        res.status(400).json({error})
    }
}