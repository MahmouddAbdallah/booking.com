import mongoose from "mongoose";

export type apartmentType ={
    _id:string,
    title:string,
    location:{
        address:string,
        city: string,
    },
    floor:{
        index: number, 
        total: number, 
    },
    price:number,
    ReviewScore:{
        type:number,
        min:1,
        max:5
    },
    description:string,
    images: [string]
    facilities:{
        view:boolean,
        balcony:boolean,
        pool:boolean,
        bath:boolean,
        terrace:boolean,
        safe:boolean,
        tv: boolean,
        familyRooms:boolean,
        wifi:boolean,
        parking:boolean,
        kitchen:boolean,
        Bathroom:boolean,
        Washingmachine:boolean,
    },
    rules:{
        CheckIn:{
            time: {
                from:string,
                to: string
            }, 
            message:string
        },
        CheckOut:{
            time: {
                from:string,
                to: string
            }, 
            message:string
        },
        childrenAndBeds:string,
        smoking:string,
        pets: string,
        ageRestriction:string,
        Damagepolicy:string
    },
    authorizedUser: string
}
const apartmentSchema =new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide the title of the Apartment"],
        trim: true
    },
    location:{
        address:{type : String ,required: [true,'Please enter an Address']},
        city:{type : String ,required: [true,'Please select City']} 
        } ,
    floor:{
        index: {type:Number}, 
        total: {type:Number}, 
    },
    price:{
        type:Number,
        required: [true,'Price is required']
    },
    ReviewScore:{
        type:Number,
        min:1,
        max:5
    },
    description:{
        type:String,
    },
    images: {
        type:[String]
    } ,
    facilities:{
        view:Boolean,
        balcony:Boolean,
        pool:Boolean,
        bath:Boolean,
        terrace:Boolean,
        safe:Boolean,
        tv: Boolean,
        familyRooms:Boolean,
        wifi:Boolean,
        parking:Boolean,
        kitchen:Boolean,
        Bathroom:Boolean,
        Washingmachine:Boolean,
    },
    rules:{
        CheckIn:{
            time: {
                from:String,
                to: String
            }, //"9:00 AM" or "14:30 PM
            message:String
        },
        CheckOut:{
            time: {
                from:String,
                to: String
            }, //"9:00 AM" or "14:30 PM
            message:String
        },
        childrenAndBeds:String,
        smoking:String,
        pets: String,
        ageRestriction:String,
        Damagepolicy:String
    },
    authorizedUser: {
        type:mongoose.Types.ObjectId,
        ref:'partner',
        required:[true,'authorizedUser is required']
    },
},
{
    timestamps:true
});

const Apartment= mongoose.model<apartmentType>('Apartment',apartmentSchema);
export default  Apartment;