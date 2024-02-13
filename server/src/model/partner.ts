import mongoose from 'mongoose';

export type partnerType ={
    _id:string;
    email:string;
    password:string;
    firstname:string;
    lastname:string;
    phone:string;
    address: {
        country: string;
        address: string;
        city: string;
    };
}

const partnerSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type: String,
        required:true
    },
    phone:{
        type:String,
    },
    address:{
        country: String,
        address: String,
        city: String,
    },
    password:{
        type:String,
        required:true
    }
})

const Partner =mongoose.model<partnerType>("partner",partnerSchema);
export default Partner