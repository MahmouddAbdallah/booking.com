import mongoose from 'mongoose';

export type userType ={
    _id:string;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    gender:string;
    phone:string;
    address: {
        country: string;
        address: string;
        city: string;
        postalCode: string;
    };
}

const userSchema =new mongoose.Schema({
    googleId:{
        type:String
    },
    picture:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    phone:{
        type:String,
    },
    address:{
        country: String,
        address: String,
        city: String,
        postalCode: String,
    },
    password:{
        type:String,
        required:true
    }
})

const User =mongoose.model<userType>("User",userSchema);
export default User