export type HotelType ={
    title:string,
    images: [string],
    location:{
        country:string
        city:string
        address:string
    },
    price:{
        type:number,
        required: [true,'Price is required']
    },
    description:string
    facilities:{
        wifi:string[],
        parking:string[],
        kitchen:string[]
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