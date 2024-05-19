import mongoose from "mongoose";

export type HotelType = {
    title: string,
    images: [string],
    location: {
        country: string
        city: string
        address: string
    },
    price: {
        type: number,
    },
    description: string
    facilities: {
        view: boolean,
        balcony: boolean,
        pool: boolean,
        bath: boolean,
        terrace: boolean,
        safe: boolean,
        tv: boolean,
        familyRooms: boolean,
        wifi: boolean,
        parking: boolean,
        kitchen: boolean,
        Bathroom: boolean,
        Washingmachine: boolean,
    },
    rules: {
        CheckIn: {
            time: {
                from: string,
                to: string
            },
            message: string
        },
        CheckOut: {
            time: {
                from: string,
                to: string
            },
            message: string
        },
        childrenAndBeds: string,
        smoking: string,
        pets: string,
        ageRestriction: string,
        Damagepolicy: string
    },
    authorizedUser: string
}

const hotelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    images: {
        type: [String]
    },
    location: {
        country: {
            type: String,
            required: [true, 'The country is required']
        },
        city: {
            type: String,
            required: [true, 'The city is required']
        },
        address: {
            type: String,
            required: [true, 'The address is required']
        },
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    description: {
        type: String,
        required: [true, 'The description is required'],
    },
    facilities: {
        view: Boolean,
        balcony: Boolean,
        pool: Boolean,
        bath: Boolean,
        terrace: Boolean,
        safe: Boolean,
        tv: Boolean,
        familyRooms: Boolean,
        wifi: Boolean,
        parking: Boolean,
        kitchen: Boolean,
        Bathroom: Boolean,
        Washingmachine: Boolean,
    },
    rules: {
        CheckIn: {
            time: {
                from: String,
                to: String
            }, //"9:00 AM" or "14:30 PM
            message: String
        },
        CheckOut: {
            time: {
                from: String,
                to: String
            }, //"9:00 AM" or "14:30 PM
            message: String
        },
        childrenAndBeds: String,
        smoking: String,
        pets: String,
        ageRestriction: String,
        Damagepolicy: String
    },
    authorizedUser: {
        type: mongoose.Types.ObjectId,
        ref: 'partner',
        required: [true, 'authorizedUser is required']
    },
})
const Hotel = mongoose.model<HotelType>('Hotel', hotelSchema);
export default Hotel;